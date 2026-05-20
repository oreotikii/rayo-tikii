#!/usr/bin/env node

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const importRoot = path.dirname(scriptPath);
const mediaRoot = path.join(importRoot, "live-site", "media");
const tikiiHost = "tikii.in";
const zapHost = "websiteswordpresst85f37.zapwp.com";
const dimensionSuffixPattern = /-\d+x\d+(?=\.[^.]+$)/;

function toRelative(filePath) {
  return path.relative(importRoot, filePath).split(path.sep).join("/");
}

function fromRelative(relativePath) {
  return path.join(importRoot, ...relativePath.split("/"));
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

function safeSegment(value) {
  return decodeURIComponent(value || "")
    .replace(/[\u0000-\u001f<>:"\\|?*]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^\.+$/, "-") || "-";
}

function urlToLocalAssetPath(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean).map(safeSegment);
  const hasFileName = parts.length > 0 && /\.[a-z0-9]{2,8}$/i.test(parts.at(-1));
  const finalParts = hasFileName ? parts : [...parts, "index"];
  return path.join(mediaRoot, safeSegment(parsed.hostname), ...finalParts);
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

function addRemoval(removals, filePath, reason, sourceUrl = null) {
  if (!existsSync(filePath)) return;
  if (path.basename(filePath) === "media-index.json") return;
  const relativePath = toRelative(filePath);
  if (!removals.has(relativePath)) {
    removals.set(relativePath, { path: relativePath, reason, sourceUrl });
  }
}

function matchingDirectTikiiFileForZap(proxyFile) {
  const normalized = proxyFile.split(path.sep).join("/");
  const match = normalized.match(/\/tikii\.in\/(.+)$/);
  if (!match) return null;

  const originPath = match[1];
  const directStorage = path.join(mediaRoot, tikiiHost, ...originPath.split("/"));
  if (existsSync(directStorage)) return directStorage;

  const directUploads = path.join(mediaRoot, tikiiHost, ...originPath.replace(/^storage\//, "wp-content/uploads/").split("/"));
  if (existsSync(directUploads)) return directUploads;

  return null;
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

async function fileInfo(filePath) {
  const info = await stat(filePath);
  const buffer = await readFile(filePath);
  return {
    bytes: info.size,
    sha256: createHash("sha256").update(buffer).digest("hex")
  };
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
- \`live-site/pages-html/\` stores raw rendered HTML for sitemap URLs, so later steps can recover content even if REST fields are incomplete.
- \`live-site/wordpress/\` stores public WordPress REST data by content type and taxonomy.
- \`live-site/media/\` now keeps main/original media files only where WordPress generated resized variants were identifiable.
- \`live-site/media/media-cleanup-report.json\` records thumbnails and proxy duplicates removed from the initial import.
- \`live-site/menu/\` stores public menu/navigation data where available, plus homepage anchor extraction as a fallback menu/link snapshot.
- \`current-app/sitemap-routes.json\` and \`current-app/menu-structure.json\` preserve the current Next app route map and menu before Tikii migration edits.
- \`import-manifest.json\` is the generated inventory, including errors, hashes for retained media files, and counts.

## Re-run

From the repo root:

\`\`\`bash
node TikiiImport/import-live-site.mjs
node TikiiImport/cleanup-media.mjs
\`\`\`

The import script uses public HTTP endpoints only. The cleanup script removes WordPress thumbnails and duplicate ZapWP proxy files from the saved archive.
`;

  await writeFile(path.join(importRoot, "PROJECT.md"), project, "utf8");
}

async function main() {
  const manifestPath = path.join(importRoot, "import-manifest.json");
  const mediaIndexPath = path.join(mediaRoot, "media-index.json");
  const mediaRecordsPath = path.join(importRoot, "live-site", "wordpress", "content-types", "media.json");

  const manifest = await readJson(manifestPath, { counts: {}, files: [], errors: [] });
  const originalMediaIndex = await readJson(mediaIndexPath, []);
  const mediaRecords = await readJson(mediaRecordsPath, []);
  const existingReportPath = path.join(mediaRoot, "media-cleanup-report.json");
  const existingReport = await readJson(existingReportPath, null);
  const removals = new Map();
  const sourceLocalPaths = new Set();

  for (const record of mediaRecords) {
    if (record.source_url) {
      sourceLocalPaths.add(toRelative(urlToLocalAssetPath(record.source_url)));
    }

    for (const size of Object.values(record.media_details?.sizes || {})) {
      if (!size.source_url || size.source_url === record.source_url) continue;
      addRemoval(removals, urlToLocalAssetPath(size.source_url), "wordpress-generated-size", size.source_url);
    }
  }

  for (const filePath of await listFiles(path.join(mediaRoot, tikiiHost))) {
    const relativePath = toRelative(filePath);
    if (dimensionSuffixPattern.test(path.basename(filePath)) && !sourceLocalPaths.has(relativePath)) {
      addRemoval(removals, filePath, "dimension-suffix-thumbnail");
    }
  }

  const zapRoot = path.join(mediaRoot, zapHost);
  for (const filePath of await listFiles(zapRoot)) {
    const directMatch = matchingDirectTikiiFileForZap(filePath);
    if (directMatch) {
      addRemoval(removals, filePath, "duplicate-zapwp-proxy", toRelative(directMatch));
    }
  }

  const removed = [];
  for (const removal of removals.values()) {
    const absolutePath = fromRelative(removal.path);
    const info = await fileInfo(absolutePath);
    await rm(absolutePath, { force: true });
    removed.push({ ...removal, ...info });
  }

  await pruneEmptyDirectories(mediaRoot);

  const removedPaths = new Set(removed.map((item) => item.path));
  const retainedMediaIndex = [];
  const removedIndexEntries = [];
  for (const entry of originalMediaIndex) {
    if (entry.file && removedPaths.has(entry.file)) {
      removedIndexEntries.push({ ...entry, removed: true });
    } else {
      retainedMediaIndex.push(entry);
    }
  }

  const remainingFiles = await listFiles(mediaRoot);
  const remainingMediaFiles = remainingFiles.filter((filePath) => !["media-index.json", "media-cleanup-report.json"].includes(path.basename(filePath)));

  await writeJson(mediaIndexPath, retainedMediaIndex);

  const generatedReport = {
    generatedAt: new Date().toISOString(),
    summary: {
      removedFiles: removed.length,
      removedWordPressGeneratedSizes: removed.filter((item) => item.reason === "wordpress-generated-size").length,
      removedDimensionSuffixThumbnails: removed.filter((item) => item.reason === "dimension-suffix-thumbnail").length,
      removedZapWpProxyDuplicates: removed.filter((item) => item.reason === "duplicate-zapwp-proxy").length,
      retainedMediaIndexEntries: retainedMediaIndex.filter((entry) => entry.file).length,
      retainedMediaFilesOnDisk: remainingMediaFiles.length
    },
    removed,
    removedIndexEntries
  };

  const reportPath = path.join(mediaRoot, "media-cleanup-report.json");
  const report = removed.length === 0 && existingReport?.removed?.length ? existingReport : generatedReport;
  const effectiveRemoved = report.removed || [];
  await writeJson(reportPath, report);

  manifest.counts.mediaThumbnailFilesRemoved = effectiveRemoved.filter((item) => item.reason !== "duplicate-zapwp-proxy").length;
  manifest.counts.mediaProxyDuplicatesRemoved = effectiveRemoved.filter((item) => item.reason === "duplicate-zapwp-proxy").length;
  manifest.counts.mediaFilesDownloaded = retainedMediaIndex.filter((entry) => entry.file).length;
  manifest.counts.mediaFilesOnDisk = remainingMediaFiles.length;
  const allRemovedPaths = new Set(effectiveRemoved.map((item) => item.path));
  manifest.files = (manifest.files || []).filter((file) => !allRemovedPaths.has(file.path));
  recordManifestFile(manifest, scriptPath, "Reproducible cleanup script that removes WordPress thumbnails and duplicate ZapWP proxy media");
  recordManifestFile(manifest, mediaIndexPath, "Index of retained downloaded media assets after thumbnail/proxy cleanup");
  recordManifestFile(manifest, reportPath, "Report of media files removed as WordPress thumbnails or duplicate ZapWP proxy copies");
  await writeJson(manifestPath, manifest);
  await writeProjectDocument(manifest);

  console.log(JSON.stringify(report.summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
