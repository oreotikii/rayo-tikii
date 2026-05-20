#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SOURCE_SITE = "https://tikii.in";
const USER_AGENT = "TikiiImportBot/1.0 (+https://tikii.in migration archive)";
const scriptPath = fileURLToPath(import.meta.url);
const importRoot = path.dirname(scriptPath);
const repoRoot = path.resolve(importRoot, "..");
const snapshotCurrentAppOnly = process.argv.includes("--snapshot-current-app-only");

const output = {
  liveSite: path.join(importRoot, "live-site"),
  currentApp: path.join(importRoot, "current-app")
};

const manifest = {
  sourceSite: SOURCE_SITE,
  generatedAt: new Date().toISOString(),
  notes: [
    "Public unauthenticated import only. Private drafts, protected media, form submissions, and plugin data hidden from the public REST API are not included.",
    "The importer stores raw source data first so later migration steps can remap content without scraping the live site again."
  ],
  counts: {},
  files: [],
  errors: []
};

function toRelative(filePath) {
  return path.relative(importRoot, filePath).split(path.sep).join("/");
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

function recordFile(filePath, purpose, kind = "file") {
  const relativePath = toRelative(filePath);
  if (!manifest.files.some((file) => file.path === relativePath)) {
    manifest.files.push({ path: relativePath, kind, purpose });
  }
}

async function writeText(filePath, content, purpose) {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, content, "utf8");
  recordFile(filePath, purpose);
}

async function writeJson(filePath, data, purpose) {
  await writeText(filePath, `${JSON.stringify(data, null, 2)}\n`, purpose);
}

function safeSegment(value) {
  return decodeURIComponent(value || "")
    .replace(/[\u0000-\u001f<>:"\\|?*]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\.+$/, "-") || "-";
}

function sitemapFileName(url) {
  const parsed = new URL(url);
  const rawName = parsed.pathname.split("/").filter(Boolean).pop() || "sitemap.xml";
  return safeSegment(rawName.endsWith(".xml") ? rawName : `${rawName}.xml`);
}

function htmlFilePathForUrl(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean).map(safeSegment);
  if (parts.length === 0) {
    return path.join(output.liveSite, "pages-html", "index.html");
  }
  const last = parts[parts.length - 1];
  if (/\.[a-z0-9]{2,8}$/i.test(last)) {
    return path.join(output.liveSite, "pages-html", ...parts);
  }
  return path.join(output.liveSite, "pages-html", ...parts, "index.html");
}

function urlToLocalAssetPath(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean).map(safeSegment);
  const hasFileName = parts.length > 0 && /\.[a-z0-9]{2,8}$/i.test(parts.at(-1));
  const finalParts = hasFileName ? parts : [...parts, "index"];
  return path.join(output.liveSite, "media", safeSegment(parsed.hostname), ...finalParts);
}

function routeKeyToFile(routeKey) {
  return safeSegment(routeKey.replace(/^\/+/, "").replaceAll("/", "__") || "root");
}

function withQuery(url, params) {
  const parsed = new URL(url, SOURCE_SITE);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      parsed.searchParams.set(key, String(value));
    }
  }
  return parsed.toString();
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeoutMs ?? 45000);
  try {
    return await fetch(url, {
      ...options,
      headers: {
        "user-agent": USER_AGENT,
        accept: options.accept ?? "*/*",
        ...(options.headers || {})
      },
      signal: controller.signal,
      redirect: "follow"
    });
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchText(url, purpose) {
  const response = await fetchWithTimeout(url, { accept: "text/html,application/xml,text/xml,*/*" });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${purpose} failed with HTTP ${response.status} for ${url}`);
  }
  return { text, response };
}

async function fetchJson(url, purpose) {
  const response = await fetchWithTimeout(url, { accept: "application/json,*/*" });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${purpose} failed with HTTP ${response.status} for ${url}: ${text.slice(0, 240)}`);
  }
  try {
    return { data: JSON.parse(text), response, raw: text };
  } catch (error) {
    throw new Error(`${purpose} did not return JSON for ${url}: ${error.message}`);
  }
}

function extractXmlLocations(xml) {
  const locations = [];
  const regex = /<loc>\s*([^<]+?)\s*<\/loc>/gi;
  let match;
  while ((match = regex.exec(xml))) {
    locations.push(decodeHtml(match[1].trim()));
  }
  return [...new Set(locations)];
}

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, codepoint) => {
      const parsed = Number(codepoint);
      return Number.isFinite(parsed) ? String.fromCodePoint(parsed) : _;
    })
    .replace(/&#x([0-9a-f]+);/gi, (_, codepoint) => {
      const parsed = Number.parseInt(codepoint, 16);
      return Number.isFinite(parsed) ? String.fromCodePoint(parsed) : _;
    })
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x2F;/g, "/");
}

function stripTags(value) {
  return decodeHtml(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function getAttr(attrs, name) {
  const regex = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const match = regex.exec(attrs);
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? "";
}

function normalizeUrl(value, baseUrl = SOURCE_SITE) {
  if (!value) return null;
  const trimmed = decodeHtml(value).trim();
  if (!trimmed || trimmed.startsWith("data:") || trimmed.startsWith("mailto:") || trimmed.startsWith("tel:") || trimmed.startsWith("#")) {
    return null;
  }
  try {
    return new URL(trimmed, baseUrl).toString();
  } catch {
    return null;
  }
}

function extractAnchors(html, baseUrl) {
  const anchors = [];
  const regex = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = regex.exec(html))) {
    const href = normalizeUrl(getAttr(match[1], "href"), baseUrl);
    const label = stripTags(match[2]);
    if (href || label) {
      anchors.push({ label, href, rawHref: getAttr(match[1], "href") });
    }
  }
  return anchors;
}

function extractAssetUrlsFromHtml(html, baseUrl) {
  const urls = new Set();

  const attrRegex = /\b(?:src|href|poster)\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi;
  let attrMatch;
  while ((attrMatch = attrRegex.exec(html))) {
    const url = normalizeUrl(attrMatch[1] ?? attrMatch[2] ?? attrMatch[3], baseUrl);
    if (url && isLikelyMediaUrl(url)) urls.add(url);
  }

  const srcSetRegex = /\bsrcset\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;
  let srcSetMatch;
  while ((srcSetMatch = srcSetRegex.exec(html))) {
    for (const item of (srcSetMatch[1] ?? srcSetMatch[2] ?? "").split(",")) {
      const candidate = item.trim().split(/\s+/)[0];
      const url = normalizeUrl(candidate, baseUrl);
      if (url && isLikelyMediaUrl(url)) urls.add(url);
    }
  }

  const cssUrlRegex = /url\((?:"([^"]+)"|'([^']+)'|([^)]+))\)/gi;
  let cssMatch;
  while ((cssMatch = cssUrlRegex.exec(html))) {
    const url = normalizeUrl(cssMatch[1] ?? cssMatch[2] ?? cssMatch[3], baseUrl);
    if (url && isLikelyMediaUrl(url)) urls.add(url);
  }

  return [...urls];
}

function isLikelyMediaUrl(url) {
  const parsed = new URL(url);
  return /\.(avif|bmp|gif|ico|jpe?g|mp4|mpeg|png|svg|webm|webp)$/i.test(parsed.pathname);
}

function extractApiMediaUrls(items) {
  const urls = new Set();
  for (const item of items) {
    if (item?.source_url) urls.add(item.source_url);
    const sizes = item?.media_details?.sizes || {};
    for (const size of Object.values(sizes)) {
      if (size?.source_url) urls.add(size.source_url);
    }
  }
  return [...urls].filter(Boolean);
}

function extractContentMediaUrls(records) {
  const urls = new Set();
  for (const record of records) {
    for (const field of ["content", "excerpt", "description"]) {
      const rendered = record?.[field]?.rendered;
      if (rendered) {
        for (const url of extractAssetUrlsFromHtml(rendered, record.link || SOURCE_SITE)) {
          urls.add(url);
        }
      }
    }
    const embeddedMedia = record?._embedded?.["wp:featuredmedia"] || [];
    for (const media of embeddedMedia) {
      if (media?.source_url) urls.add(media.source_url);
      for (const size of Object.values(media?.media_details?.sizes || {})) {
        if (size?.source_url) urls.add(size.source_url);
      }
    }
  }
  return [...urls];
}

async function fetchSitemaps() {
  const sitemapRoot = path.join(output.liveSite, "sitemaps");
  await ensureDir(sitemapRoot);

  const queue = [`${SOURCE_SITE}/sitemap.xml`, `${SOURCE_SITE}/sitemap_index.xml`];
  const seen = new Set();
  const sitemapFiles = [];
  const contentUrls = new Set();

  while (queue.length > 0) {
    const url = queue.shift();
    if (!url || seen.has(url)) continue;
    seen.add(url);

    try {
      const { text, response } = await fetchText(url, "sitemap fetch");
      const finalUrl = response.url || url;
      const fileName = sitemapFileName(finalUrl);
      const filePath = path.join(sitemapRoot, fileName);
      await writeText(filePath, text, `Raw sitemap XML fetched from ${finalUrl}`);
      sitemapFiles.push({ url, finalUrl, file: toRelative(filePath) });

      for (const loc of extractXmlLocations(text)) {
        if (/\.xml(?:\?|$)/i.test(new URL(loc, SOURCE_SITE).pathname)) {
          if (!seen.has(loc)) queue.push(loc);
        } else {
          contentUrls.add(new URL(loc, SOURCE_SITE).toString());
        }
      }
    } catch (error) {
      manifest.errors.push({ phase: "sitemap", url, error: error.message });
    }
  }

  const urls = [...contentUrls].sort();
  await writeJson(path.join(output.liveSite, "sitemap", "live-sitemap-urls.json"), urls, "Normalized list of public URLs found in live WordPress sitemaps");
  await writeJson(path.join(output.liveSite, "sitemap", "sitemap-files.json"), sitemapFiles, "Index of raw sitemap XML files saved by this import");
  manifest.counts.sitemapUrls = urls.length;
  manifest.counts.sitemapFiles = sitemapFiles.length;
  return urls;
}

async function fetchWordPressData() {
  const wpRoot = path.join(output.liveSite, "wordpress");
  const combinedByRestBase = {};
  let apiIndex = null;

  try {
    const api = await fetchJson(`${SOURCE_SITE}/wp-json/`, "WordPress REST index");
    apiIndex = api.data;
    await writeJson(path.join(wpRoot, "api-index.json"), apiIndex, "Raw WordPress REST API index showing available routes");
  } catch (error) {
    manifest.errors.push({ phase: "wordpress-api-index", error: error.message });
    return { apiIndex: null, content: combinedByRestBase, mediaItems: [] };
  }

  for (const [fileName, endpoint, purpose] of [
    ["types.json", `${SOURCE_SITE}/wp-json/wp/v2/types`, "WordPress content type registry"],
    ["taxonomies.json", `${SOURCE_SITE}/wp-json/wp/v2/taxonomies`, "WordPress taxonomy registry"],
    ["settings-public.json", `${SOURCE_SITE}/wp-json/`, "Public WordPress site metadata"]
  ]) {
    try {
      const { data } = await fetchJson(endpoint, purpose);
      await writeJson(path.join(wpRoot, fileName), data, purpose);
    } catch (error) {
      manifest.errors.push({ phase: "wordpress-metadata", endpoint, error: error.message });
    }
  }

  const types = await readJsonIfExists(path.join(wpRoot, "types.json"), {});
  for (const [typeKey, typeInfo] of Object.entries(types)) {
    const itemLink = typeInfo?._links?.["wp:items"]?.[0]?.href;
    if (!itemLink) continue;
    const restBase = safeSegment(typeInfo.rest_base || typeKey);
    const records = await fetchPaginatedJson(itemLink, restBase, path.join(wpRoot, "raw", "content-types", restBase), {
      _embed: 1
    });
    combinedByRestBase[restBase] = records;
    await writeJson(path.join(wpRoot, "content-types", `${restBase}.json`), records, `Combined public WordPress records for content type ${typeKey}`);
  }

  const taxonomies = await readJsonIfExists(path.join(wpRoot, "taxonomies.json"), {});
  for (const [taxonomyKey, taxonomyInfo] of Object.entries(taxonomies)) {
    const itemLink = taxonomyInfo?._links?.["wp:items"]?.[0]?.href;
    if (!itemLink) continue;
    const restBase = safeSegment(taxonomyInfo.rest_base || taxonomyKey);
    const terms = await fetchPaginatedJson(itemLink, restBase, path.join(wpRoot, "raw", "taxonomies", restBase));
    await writeJson(path.join(wpRoot, "taxonomies", `${restBase}.json`), terms, `Combined public WordPress terms for taxonomy ${taxonomyKey}`);
  }

  await fetchMenuAndNavigationRoutes(apiIndex);

  manifest.counts.wordpressContentTypes = Object.keys(combinedByRestBase).length;
  for (const [restBase, records] of Object.entries(combinedByRestBase)) {
    manifest.counts[`wordpress.${restBase}`] = records.length;
  }

  return {
    apiIndex,
    content: combinedByRestBase,
    mediaItems: combinedByRestBase.media || []
  };
}

async function fetchPaginatedJson(endpoint, label, rawDir, extraParams = {}) {
  const records = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const url = withQuery(endpoint, { per_page: 100, page, ...extraParams });
    try {
      const { data, response } = await fetchJson(url, `${label} page ${page}`);
      const pageFile = path.join(rawDir, `page-${page}.json`);
      await writeJson(pageFile, data, `Raw page ${page} response for ${label}`);
      if (Array.isArray(data)) {
        records.push(...data);
      } else {
        records.push(data);
      }
      const totalPagesHeader = Number(response.headers.get("x-wp-totalpages"));
      totalPages = Number.isFinite(totalPagesHeader) && totalPagesHeader > 0 ? totalPagesHeader : 1;
      page += 1;
    } catch (error) {
      manifest.errors.push({ phase: "wordpress-pagination", endpoint, label, page, error: error.message });
      break;
    }
  }

  return records;
}

async function fetchMenuAndNavigationRoutes(apiIndex) {
  if (!apiIndex?.routes) return;
  const menuRoot = path.join(output.liveSite, "menu", "wordpress-routes");
  const routeEntries = Object.entries(apiIndex.routes)
    .filter(([route, info]) => {
      const lower = route.toLowerCase();
      const methods = new Set((info?.endpoints || []).flatMap((endpoint) => endpoint.methods || []));
      return methods.has("GET") && !route.includes("(?P<") && (lower.includes("menu") || lower.includes("navigation"));
    });

  const routeIndex = [];
  for (const [route] of routeEntries) {
    const url = `${SOURCE_SITE}/wp-json${route}`;
    try {
      const { data } = await fetchJson(url, `menu/navigation route ${route}`);
      const filePath = path.join(menuRoot, `${routeKeyToFile(route)}.json`);
      await writeJson(filePath, data, `Public WordPress menu/navigation route ${route}`);
      routeIndex.push({ route, url, file: toRelative(filePath), ok: true });
    } catch (error) {
      routeIndex.push({ route, url, ok: false, error: error.message });
      manifest.errors.push({ phase: "wordpress-menu-route", route, error: error.message });
    }
  }

  await writeJson(path.join(output.liveSite, "menu", "wordpress-menu-routes-index.json"), routeIndex, "Index of public WordPress menu/navigation REST routes attempted");
}

async function readJsonIfExists(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function fetchPageHtml(urls) {
  const pages = [];
  const htmlAssetUrls = new Set();
  let homeHtml = "";

  const htmlUrls = urls.filter((url) => {
    const parsed = new URL(url);
    return parsed.hostname === new URL(SOURCE_SITE).hostname && !isLikelyMediaUrl(url);
  });

  if (!htmlUrls.includes(`${SOURCE_SITE}/`)) {
    htmlUrls.unshift(`${SOURCE_SITE}/`);
  }

  for (const url of htmlUrls) {
    try {
      const { text, response } = await fetchText(url, "page HTML fetch");
      const filePath = htmlFilePathForUrl(response.url || url);
      await writeText(filePath, text, `Raw public HTML for ${response.url || url}`);
      pages.push({
        url,
        finalUrl: response.url || url,
        file: toRelative(filePath),
        status: response.status,
        contentType: response.headers.get("content-type") || ""
      });
      if (new URL(response.url || url).pathname === "/") {
        homeHtml = text;
      }
      for (const assetUrl of extractAssetUrlsFromHtml(text, response.url || url)) {
        htmlAssetUrls.add(assetUrl);
      }
    } catch (error) {
      pages.push({ url, ok: false, error: error.message });
      manifest.errors.push({ phase: "page-html", url, error: error.message });
    }
  }

  await writeJson(path.join(output.liveSite, "pages-html", "page-index.json"), pages, "Index of raw HTML pages saved from the live sitemap");
  manifest.counts.htmlPages = pages.filter((page) => page.file).length;

  if (homeHtml) {
    await writeJson(path.join(output.liveSite, "menu", "live-homepage-links.json"), extractAnchors(homeHtml, SOURCE_SITE), "Anchor/link snapshot from the live homepage, useful when WordPress menu endpoints are incomplete");
  }

  return [...htmlAssetUrls];
}

async function writeLiveMenuStructure(navigationRecords, homepageLinks) {
  const sources = [];

  for (const record of navigationRecords || []) {
    const items = extractAnchors(record?.content?.rendered || "", record?.link || SOURCE_SITE)
      .filter((item) => item.href || item.label)
      .map((item) => ({ label: item.label, href: item.href }));

    if (items.length > 0) {
      sources.push({
        source: "wordpress.wp_navigation",
        id: record.id,
        title: stripTags(record?.title?.rendered || ""),
        items
      });
    }
  }

  const homepageItems = (homepageLinks || [])
    .filter((item) => item.href || item.label)
    .map((item) => ({ label: item.label, href: item.href, rawHref: item.rawHref }));
  if (homepageItems.length > 0) {
    sources.push({
      source: "homepage.anchor-snapshot",
      title: "Homepage anchors",
      items: homepageItems
    });
  }

  const menuStructure = {
    sourceSite: SOURCE_SITE,
    generatedAt: new Date().toISOString(),
    primarySource: sources[0]?.source || null,
    sources
  };

  manifest.counts.liveMenuSources = sources.length;
  manifest.counts.livePrimaryMenuItems = sources[0]?.items?.length || 0;
  await writeJson(path.join(output.liveSite, "menu", "live-menu-structure.json"), menuStructure, "Derived live-site menu structure from WordPress navigation and homepage links");
}

async function downloadMedia(urls) {
  const downloaded = [];
  const uniqueUrls = [...new Set(urls)]
    .filter(Boolean)
    .filter((url) => {
      try {
        const parsed = new URL(url);
        return parsed.protocol === "https:" || parsed.protocol === "http:";
      } catch {
        return false;
      }
    })
    .sort();

  let index = 0;
  for (const url of uniqueUrls) {
    index += 1;
    try {
      const response = await fetchWithTimeout(url, { accept: "*/*", timeoutMs: 60000 });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const filePath = urlToLocalAssetPath(response.url || url);
      await ensureDir(path.dirname(filePath));
      const buffer = Buffer.from(await response.arrayBuffer());
      await writeFile(filePath, buffer);
      const hash = createHash("sha256").update(buffer).digest("hex");
      recordFile(filePath, `Downloaded media asset from ${response.url || url}`, "media");
      downloaded.push({
        url,
        finalUrl: response.url || url,
        file: toRelative(filePath),
        bytes: buffer.length,
        sha256: hash,
        contentType: response.headers.get("content-type") || ""
      });
      if (index % 25 === 0) {
        console.log(`Downloaded ${index}/${uniqueUrls.length} media assets`);
      }
    } catch (error) {
      downloaded.push({ url, ok: false, error: error.message });
      manifest.errors.push({ phase: "media-download", url, error: error.message });
    }
  }

  await writeJson(path.join(output.liveSite, "media", "media-index.json"), downloaded, "Index of downloaded media assets and any failed media fetches");
  manifest.counts.mediaUrlsDiscovered = uniqueUrls.length;
  manifest.counts.mediaFilesDownloaded = downloaded.filter((item) => item.file).length;
  return downloaded;
}

async function snapshotCurrentApp() {
  const appDir = path.join(repoRoot, "next-app", "app");
  const siteShellPath = path.join(repoRoot, "next-app", "components", "site-shell.tsx");

  const pageFiles = await listFiles(appDir, (filePath) => path.basename(filePath) === "page.tsx");
  const routes = pageFiles
    .map((filePath) => {
      const relative = path.relative(appDir, path.dirname(filePath)).split(path.sep).join("/");
      return {
        route: relative === "" ? "/" : `/${relative}`,
        file: path.relative(repoRoot, filePath).split(path.sep).join("/")
      };
    })
    .sort((a, b) => a.route.localeCompare(b.route));

  await writeJson(path.join(output.currentApp, "sitemap-routes.json"), routes, "Route sitemap snapshot for the current Next app");
  manifest.counts.currentAppRoutes = routes.length;

  try {
    const siteShell = await readFile(siteShellPath, "utf8");
    const navItems = parseNavItems(siteShell);
    await writeJson(path.join(output.currentApp, "menu-structure.json"), navItems, "Menu structure snapshot parsed from next-app/components/site-shell.tsx");
    manifest.counts.currentAppTopLevelMenuItems = Array.isArray(navItems) ? navItems.length : 0;
  } catch (error) {
    manifest.errors.push({ phase: "current-app-menu", error: error.message });
  }
}

async function listFiles(dir, predicate) {
  const results = [];
  async function walk(current) {
    let entries = [];
    try {
      entries = await readdir(current);
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(current, entry);
      const info = await stat(fullPath);
      if (info.isDirectory()) {
        await walk(fullPath);
      } else if (!predicate || predicate(fullPath)) {
        results.push(fullPath);
      }
    }
  }
  await walk(dir);
  return results;
}

function parseNavItems(source) {
  const start = source.indexOf("const navItems");
  if (start === -1) return [];
  const assignment = source.indexOf("=", start);
  if (assignment === -1) return [];
  const arrayStart = source.indexOf("[", assignment);
  if (arrayStart === -1) return [];

  let depth = 0;
  let end = -1;
  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        end = index + 1;
        break;
      }
    }
  }

  if (end === -1) return [];
  const arrayLiteral = source.slice(arrayStart, end);
  const jsonish = arrayLiteral
    .replace(/\b(label|href|children)\s*:/g, '"$1":')
    .replace(/,\s*([}\]])/g, "$1");
  try {
    return JSON.parse(jsonish);
  } catch {
    return { raw: arrayLiteral };
  }
}

async function writeProjectDocument() {
  const fileRows = manifest.files
    .slice()
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((file) => `| \`${file.path}\` | ${file.kind} | ${escapeMarkdown(file.purpose)} |`)
    .join("\n");

  const counts = Object.entries(manifest.counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `- \`${key}\`: ${value}`)
    .join("\n");

  const project = `# Tikii Import

Generated: ${manifest.generatedAt}

Source site: ${SOURCE_SITE}

This folder is a public, unauthenticated snapshot of the current live Tikii WordPress site plus the current Next app sitemap/menu. It is intended as the raw source archive for the Tikii migration into the Rayo Next.js shell.

## What Is Stored Here

| Path | Kind | Purpose |
| --- | --- | --- |
${fileRows}

## Counts

${counts || "- No counts recorded."}

## Important Notes

- \`live-site/sitemaps/\` stores the raw XML sitemap files from the live site.
- \`live-site/sitemap/live-sitemap-urls.json\` is the normalized URL list discovered from those sitemaps.
- \`live-site/pages-html/\` stores raw rendered HTML for sitemap URLs, so later steps can recover content even if REST fields are incomplete.
- \`live-site/wordpress/\` stores public WordPress REST data by content type and taxonomy.
- \`live-site/media/\` stores downloaded image/video assets discovered from WordPress media records and HTML.
- \`live-site/menu/\` stores public menu/navigation data where available, plus homepage anchor extraction as a fallback menu/link snapshot.
- \`current-app/sitemap-routes.json\` and \`current-app/menu-structure.json\` preserve the current Next app route map and menu before Tikii migration edits.
- \`import-manifest.json\` is the exact generated inventory, including errors, hashes for media files, and counts.

## Re-run

From the repo root:

\`\`\`bash
node TikiiImport/import-live-site.mjs
\`\`\`

The script uses public HTTP endpoints only. If the live site changes, rerunning will refresh the snapshot files in this folder.
`;

  await writeText(path.join(importRoot, "PROJECT.md"), project, "Human-readable map of the Tikii import folder and purpose of each generated file");
}

function escapeMarkdown(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

async function main() {
  console.log(`Starting live import from ${SOURCE_SITE}`);
  await ensureDir(output.liveSite);
  await ensureDir(output.currentApp);
  recordFile(scriptPath, "Reproducible importer script used to fetch the live site and refresh local snapshots");

  if (snapshotCurrentAppOnly) {
    const existingManifest = await readJsonIfExists(path.join(importRoot, "import-manifest.json"), null);
    if (existingManifest) {
      manifest.generatedAt = existingManifest.generatedAt || manifest.generatedAt;
      manifest.notes = existingManifest.notes || manifest.notes;
      manifest.counts = existingManifest.counts || manifest.counts;
      manifest.files = existingManifest.files || manifest.files;
      manifest.errors = existingManifest.errors || manifest.errors;
      recordFile(scriptPath, "Reproducible importer script used to fetch the live site and refresh local snapshots");
    }
    const navigationRecords = await readJsonIfExists(path.join(output.liveSite, "wordpress", "content-types", "navigation.json"), []);
    const homepageLinks = await readJsonIfExists(path.join(output.liveSite, "menu", "live-homepage-links.json"), []);
    await writeLiveMenuStructure(navigationRecords, homepageLinks);
    await snapshotCurrentApp();
    await writeJson(path.join(importRoot, "import-manifest.json"), manifest, "Machine-readable import inventory, counts, errors, and generated file list");
    await writeProjectDocument();
    await writeJson(path.join(importRoot, "import-manifest.json"), manifest, "Machine-readable import inventory, counts, errors, and generated file list");
    console.log(`Current app snapshot refreshed. See ${path.relative(repoRoot, path.join(importRoot, "PROJECT.md"))}`);
    return;
  }

  const sitemapUrls = await fetchSitemaps();
  console.log(`Fetched ${manifest.counts.sitemapFiles || 0} sitemap files with ${sitemapUrls.length} public URLs`);

  const wordpress = await fetchWordPressData();
  console.log(`Fetched ${Object.keys(wordpress.content).length} WordPress content type collections`);

  const htmlMediaUrls = await fetchPageHtml(sitemapUrls);
  console.log(`Fetched ${manifest.counts.htmlPages || 0} rendered HTML pages`);
  const homepageLinks = await readJsonIfExists(path.join(output.liveSite, "menu", "live-homepage-links.json"), []);
  await writeLiveMenuStructure(wordpress.content.navigation || [], homepageLinks);

  const mediaUrls = new Set(htmlMediaUrls);
  for (const url of extractApiMediaUrls(wordpress.mediaItems)) mediaUrls.add(url);
  for (const records of Object.values(wordpress.content)) {
    for (const url of extractContentMediaUrls(records)) mediaUrls.add(url);
  }

  await downloadMedia([...mediaUrls]);
  await snapshotCurrentApp();

  await writeJson(path.join(importRoot, "import-manifest.json"), manifest, "Machine-readable import inventory, counts, errors, and generated file list");
  await writeProjectDocument();
  await writeJson(path.join(importRoot, "import-manifest.json"), manifest, "Machine-readable import inventory, counts, errors, and generated file list");

  console.log(`Import complete. See ${path.relative(repoRoot, path.join(importRoot, "PROJECT.md"))}`);
  if (manifest.errors.length > 0) {
    console.log(`Completed with ${manifest.errors.length} non-fatal fetch errors. See import-manifest.json.`);
  }
}

main().catch(async (error) => {
  manifest.errors.push({ phase: "fatal", error: error.stack || error.message });
  await ensureDir(importRoot);
  await writeJson(path.join(importRoot, "import-manifest.json"), manifest, "Machine-readable import inventory, counts, errors, and generated file list after fatal failure");
  console.error(error);
  process.exitCode = 1;
});
