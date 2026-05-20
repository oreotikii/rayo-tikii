#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const importRoot = path.dirname(scriptPath);
const pagesRoot = path.join(importRoot, "live-site", "pages-html");
const excludedArchivePrefixes = ["category/", "tag/", "writer/"];

function toRelative(filePath) {
  return path.relative(importRoot, filePath).split(path.sep).join("/");
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(filePath, data) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function listFiles(dir) {
  const results = [];
  async function walk(current) {
    let entries = [];
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else {
        results.push(fullPath);
      }
    }
  }

  await walk(dir);
  return results;
}

async function pruneEmptyDirectories(startDir) {
  let entries = [];
  try {
    entries = await readdir(startDir, { withFileTypes: true });
  } catch {
    return true;
  }

  let isEmpty = true;
  for (const entry of entries) {
    const child = path.join(startDir, entry.name);
    if (entry.isDirectory()) {
      const childEmpty = await pruneEmptyDirectories(child);
      if (childEmpty) {
        await rm(child, { recursive: true, force: true });
      } else {
        isEmpty = false;
      }
    } else {
      isEmpty = false;
    }
  }

  return isEmpty;
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/&#(\d+);/g, (_, codepoint) => String.fromCodePoint(Number(codepoint)))
    .replace(/&#x([0-9a-f]+);/gi, (_, codepoint) => String.fromCodePoint(Number.parseInt(codepoint, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function routeFromUrl(url) {
  const parsed = new URL(url);
  return parsed.pathname || "/";
}

function htmlPathForRoute(route) {
  const clean = route.replace(/^\/+|\/+$/g, "");
  if (!clean) return "live-site/pages-html/index.html";
  return `live-site/pages-html/${clean}/index.html`;
}

function slugFromUrl(url) {
  const segments = new URL(url).pathname.split("/").filter(Boolean);
  return segments.at(-1) || "home";
}

function isExcludedArchiveUrl(url) {
  const route = routeFromUrl(url).replace(/^\/+/, "");
  return excludedArchivePrefixes.some((prefix) => route.startsWith(prefix));
}

function recordManifestFile(manifest, filePath, purpose, kind = "file") {
  const relativePath = toRelative(filePath);
  const existing = manifest.files.find((file) => file.path === relativePath);
  if (existing) {
    existing.kind = kind;
    existing.purpose = purpose;
  } else {
    manifest.files.push({ path: relativePath, kind, purpose });
  }
}

async function writeProjectDocument(manifest) {
  const fileRows = manifest.files
    .slice()
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((file) => `| \`${file.path}\` | ${file.kind} | ${String(file.purpose).replace(/\|/g, "\\|").replace(/\n/g, " ")} |`)
    .join("\n");

  const counts = Object.entries(manifest.counts || {})
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `- \`${key}\`: ${value}`)
    .join("\n");

  const project = `# Tikii Import

Generated: ${manifest.generatedAt}

Source site: ${manifest.sourceSite || "https://tikii.in"}

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
- \`live-site/pages-html/\` stores rendered HTML for migration-relevant pages and work items. Tag, category, and writer archive HTML pages were removed from this folder.
- \`live-site/pages-html/content-inventory.json\` classifies retained pages and marks portfolio posts as \`work-item\`.
- \`live-site/pages-html/excluded-archive-pages.json\` records removed tag/category/writer archive HTML pages.
- \`live-site/wordpress/\` stores public WordPress REST data by content type and taxonomy.
- \`live-site/media/\` keeps main/original media files only where WordPress generated resized variants were identifiable.
- \`live-site/media/media-cleanup-report.json\` records thumbnails and proxy duplicates removed from the initial import.
- \`live-site/menu/\` stores public menu/navigation data where available, plus homepage anchor extraction as a fallback menu/link snapshot.
- \`current-app/sitemap-routes.json\` and \`current-app/menu-structure.json\` preserve the current Next app route map and menu before Tikii migration edits.
- \`import-manifest.json\` is the generated inventory, including errors, retained files, and cleanup counts.

## Re-run

From the repo root:

\`\`\`bash
node TikiiImport/import-live-site.mjs
node TikiiImport/cleanup-media.mjs
node TikiiImport/cleanup-pages-html.mjs
\`\`\`

The import script uses public HTTP endpoints only. The cleanup scripts remove WordPress thumbnails, duplicate ZapWP proxy files, and rendered archive pages that are not needed in the Next rebuild.
`;

  await writeFile(path.join(importRoot, "PROJECT.md"), project, "utf8");
}

async function main() {
  const manifestPath = path.join(importRoot, "import-manifest.json");
  const pageIndexPath = path.join(pagesRoot, "page-index.json");
  const postsPath = path.join(importRoot, "live-site", "wordpress", "content-types", "posts.json");
  const pagesPath = path.join(importRoot, "live-site", "wordpress", "content-types", "pages.json");
  const categoriesPath = path.join(importRoot, "live-site", "wordpress", "taxonomies", "categories.json");
  const tagsPath = path.join(importRoot, "live-site", "wordpress", "taxonomies", "tags.json");

  const manifest = await readJson(manifestPath, { counts: {}, files: [], errors: [] });
  const originalPageIndex = await readJson(pageIndexPath, []);
  const posts = await readJson(postsPath, []);
  const pages = await readJson(pagesPath, []);
  const categories = await readJson(categoriesPath, []);
  const tags = await readJson(tagsPath, []);

  const excludedEntries = [];
  const retainedEntries = [];
  for (const entry of originalPageIndex) {
    const url = entry.finalUrl || entry.url;
    if (url && isExcludedArchiveUrl(url)) {
      excludedEntries.push({ ...entry, excludedReason: "archive-page-not-needed-for-next-rebuild" });
    } else {
      retainedEntries.push(entry);
    }
  }

  const deletedFiles = [];
  for (const prefix of excludedArchivePrefixes) {
    const absoluteDir = path.join(pagesRoot, ...prefix.replace(/\/$/, "").split("/"));
    if (!existsSync(absoluteDir)) continue;

    for (const filePath of await listFiles(absoluteDir)) {
      const info = await stat(filePath);
      deletedFiles.push({
        path: toRelative(filePath),
        bytes: info.size,
        reason: "archive-page-not-needed-for-next-rebuild"
      });
    }
    await rm(absoluteDir, { recursive: true, force: true });
  }
  await pruneEmptyDirectories(pagesRoot);

  const categoryById = new Map(categories.map((category) => [category.id, { id: category.id, slug: category.slug, name: decodeHtml(category.name), count: category.count }]));
  const tagById = new Map(tags.map((tag) => [tag.id, { id: tag.id, slug: tag.slug, name: decodeHtml(tag.name), count: tag.count }]));

  const corePages = pages.map((page) => ({
    type: "page",
    migrationType: page.slug === "work" ? "work-index" : "site-page",
    id: page.id,
    slug: page.slug,
    title: decodeHtml(page.title?.rendered || ""),
    url: page.link,
    route: routeFromUrl(page.link),
    htmlPath: htmlPathForRoute(routeFromUrl(page.link))
  }));

  const workItems = posts.map((post) => ({
    type: "post",
    migrationType: "work-item",
    id: post.id,
    slug: post.slug,
    title: decodeHtml(post.title?.rendered || ""),
    url: post.link,
    route: routeFromUrl(post.link),
    htmlPath: htmlPathForRoute(routeFromUrl(post.link)),
    categories: (post.categories || []).map((id) => categoryById.get(id)).filter(Boolean),
    tags: (post.tags || []).map((id) => tagById.get(id)).filter(Boolean)
  }));

  const excludedArchives = excludedEntries.map((entry) => ({
    type: "archive",
    migrationType: "excluded-archive",
    slug: slugFromUrl(entry.finalUrl || entry.url),
    url: entry.finalUrl || entry.url,
    route: routeFromUrl(entry.finalUrl || entry.url),
    previousHtmlPath: entry.file,
    reason: entry.excludedReason
  }));

  const contentInventory = {
    generatedAt: new Date().toISOString(),
    notes: [
      "WordPress posts in the Portfolio category are treated as work/case-study items for the Next rebuild.",
      "Rendered tag, category, and writer archive HTML pages were removed from pages-html. Raw sitemap XML and WordPress taxonomy JSON remain available."
    ],
    corePages,
    workItems,
    excludedArchives
  };

  await writeJson(pageIndexPath, retainedEntries);
  await writeJson(path.join(pagesRoot, "content-inventory.json"), contentInventory);
  await writeJson(path.join(pagesRoot, "excluded-archive-pages.json"), {
    generatedAt: new Date().toISOString(),
    excludedEntries,
    deletedFiles
  });

  const deletedPaths = new Set(deletedFiles.map((item) => item.path));
  manifest.files = (manifest.files || []).filter((file) => !deletedPaths.has(file.path));
  manifest.counts.htmlPages = retainedEntries.filter((entry) => entry.file).length;
  manifest.counts.htmlArchivePagesRemoved = excludedEntries.length;
  manifest.counts.htmlWorkItems = workItems.length;
  manifest.counts.htmlCorePages = corePages.length;

  recordManifestFile(manifest, scriptPath, "Reproducible cleanup script that removes unneeded rendered archive pages and classifies portfolio posts");
  recordManifestFile(manifest, pageIndexPath, "Index of retained migration-relevant rendered HTML pages");
  recordManifestFile(manifest, path.join(pagesRoot, "content-inventory.json"), "Content classification for retained pages and portfolio/work items");
  recordManifestFile(manifest, path.join(pagesRoot, "excluded-archive-pages.json"), "Record of tag/category/writer archive HTML pages removed from pages-html");

  await writeJson(manifestPath, manifest);
  await writeProjectDocument(manifest);

  console.log(JSON.stringify({
    retainedHtmlPages: manifest.counts.htmlPages,
    removedArchivePages: excludedEntries.length,
    workItems: workItems.length,
    corePages: corePages.length
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
