#!/usr/bin/env node

import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_SOURCE = 'https://tikii.in';
const PUBLIC_MEDIA_PREFIX = '/wp-media';
const WP_MEDIA_PATHS = ['/wp-content/uploads/', '/storage/'];

const scriptPath = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(scriptPath);
const projectRoot = path.resolve(scriptDir, '..');

export function toLocalMediaPath(mediaUrl) {
  const parsed = new URL(mediaUrl);
  const pathname = decodeURIComponent(parsed.pathname);
  const matchedPrefix = WP_MEDIA_PATHS.find((prefix) => pathname.includes(prefix));

  if (!matchedPrefix) {
    return null;
  }

  const relativePath = pathname.slice(pathname.indexOf(matchedPrefix) + matchedPrefix.length);
  const safePath = relativePath
    .split('/')
    .filter((part) => part && part !== '.' && part !== '..')
    .join('/');

  return `${PUBLIC_MEDIA_PREFIX}/${safePath}`;
}

export function extractMediaUrls(html = '') {
  const urls = new Set();
  const attrRegex = /\b(srcset|src|href|poster)=["']([^"']+)["']/gi;
  const cssUrlRegex = /url\((['"]?)(https?:\/\/[^'")]+)\1\)/gi;

  for (const match of html.matchAll(attrRegex)) {
    if (match[1].toLowerCase() === 'srcset') {
      for (const candidate of match[2].split(',')) {
        addWpMediaUrl(urls, candidate.trim().split(/\s+/)[0]);
      }
    } else {
      addWpMediaUrl(urls, match[2]);
    }
  }

  for (const match of html.matchAll(cssUrlRegex)) {
    addWpMediaUrl(urls, match[2]);
  }

  return [...urls];
}

export function rewriteWpMediaUrls(html = '') {
  let rewritten = html;

  for (const url of extractMediaUrls(html)) {
    const localPath = toLocalMediaPath(url);
    if (localPath) {
      rewritten = rewritten.replaceAll(url, localPath);
    }
  }

  return rewritten;
}

function addWpMediaUrl(urls, value) {
  if (!value || !value.startsWith('http')) {
    return;
  }

  try {
    if (toLocalMediaPath(value)) {
      urls.add(value);
    }
  } catch {
    // Ignore malformed URLs in third-party embed markup.
  }
}

function parseArgs(argv) {
  const args = {
    source: DEFAULT_SOURCE,
    allMedia: false,
    force: false,
    dryRun: false,
  };

  for (const arg of argv) {
    if (arg === '--all-media') {
      args.allMedia = true;
    } else if (arg === '--force') {
      args.force = true;
    } else if (arg === '--dry-run') {
      args.dryRun = true;
    } else if (arg.startsWith('--source=')) {
      args.source = arg.slice('--source='.length);
    }
  }

  args.source = args.source.replace(/\/$/, '');
  return args;
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return {
    data: await response.json(),
    totalPages: Number(response.headers.get('x-wp-totalpages') || 1),
    totalItems: Number(response.headers.get('x-wp-total') || 0),
  };
}

async function fetchCollection(source, route, params = {}) {
  const searchParams = new URLSearchParams({
    per_page: '100',
    ...params,
  });
  const firstUrl = `${source}/wp-json/wp/v2/${route}?${searchParams}`;
  const firstPage = await fetchJson(firstUrl);
  const items = [...firstPage.data];

  for (let page = 2; page <= firstPage.totalPages; page += 1) {
    searchParams.set('page', String(page));
    const nextPage = await fetchJson(`${source}/wp-json/wp/v2/${route}?${searchParams}`);
    items.push(...nextPage.data);
  }

  return {
    items,
    totalItems: firstPage.totalItems || items.length,
    totalPages: firstPage.totalPages,
  };
}

function collectFeaturedMediaUrls(item) {
  const embeddedMedia = item?._embedded?.['wp:featuredmedia'] || [];
  const urls = new Set();

  for (const media of embeddedMedia) {
    addWpMediaUrl(urls, media.source_url);

    for (const size of Object.values(media.media_details?.sizes || {})) {
      addWpMediaUrl(urls, size.source_url);
    }
  }

  return [...urls];
}

function normalizeContentItem(item, type) {
  const contentHtml = rewriteWpMediaUrls(item.content?.rendered || '');
  const excerptHtml = rewriteWpMediaUrls(item.excerpt?.rendered || '');
  const featuredMediaUrls = collectFeaturedMediaUrls(item);

  return {
    id: item.id,
    type,
    slug: item.slug,
    link: item.link,
    date: item.date,
    modified: item.modified,
    title: item.title?.rendered || '',
    excerptHtml,
    contentHtml,
    featuredMedia: featuredMediaUrls.map((url) => ({
      sourceUrl: url,
      localPath: toLocalMediaPath(url),
    })),
    seo: item.yoast_head_json || null,
  };
}

function collectMediaUrlsFromItems(items) {
  const urls = new Set();

  for (const item of items) {
    for (const url of extractMediaUrls(item.content?.rendered || '')) {
      urls.add(url);
    }

    for (const url of extractMediaUrls(item.excerpt?.rendered || '')) {
      urls.add(url);
    }

    for (const url of collectFeaturedMediaUrls(item)) {
      urls.add(url);
    }
  }

  return urls;
}

function collectMediaApiUrls(mediaItems) {
  const urls = new Set();

  for (const media of mediaItems) {
    addWpMediaUrl(urls, media.source_url);

    for (const size of Object.values(media.media_details?.sizes || {})) {
      addWpMediaUrl(urls, size.source_url);
    }
  }

  return urls;
}

async function writeJson(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

async function downloadMedia(sourceUrl, options) {
  const localPublicPath = toLocalMediaPath(sourceUrl);

  if (!localPublicPath) {
    return { sourceUrl, skipped: true, reason: 'unsupported-url' };
  }

  const filePath = path.join(projectRoot, 'public', localPublicPath);

  if (!options.force && existsSync(filePath)) {
    return { sourceUrl, localPath: localPublicPath, skipped: true, reason: 'exists' };
  }

  if (options.dryRun) {
    return { sourceUrl, localPath: localPublicPath, skipped: true, reason: 'dry-run' };
  }

  const response = await fetch(sourceUrl);

  if (!response.ok) {
    return {
      sourceUrl,
      localPath: localPublicPath,
      error: `${response.status} ${response.statusText}`,
    };
  }

  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, Buffer.from(await response.arrayBuffer()));

  return { sourceUrl, localPath: localPublicPath, downloaded: true };
}

async function runLimited(items, limit, task) {
  const results = [];
  const executing = new Set();

  for (const item of items) {
    const promise = Promise.resolve()
      .then(() => task(item))
      .then((result) => {
        results.push(result);
        executing.delete(promise);
      });

    executing.add(promise);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const contentDir = path.join(projectRoot, 'src/content/wordpress');

  console.log(`Importing WordPress content from ${args.source}`);

  const [pagesResult, postsResult] = await Promise.all([
    fetchCollection(args.source, 'pages', { _embed: '1' }),
    fetchCollection(args.source, 'posts', { _embed: '1' }),
  ]);

  const pages = pagesResult.items;
  const posts = postsResult.items;
  const sourceItems = [...pages, ...posts];
  const mediaUrls = collectMediaUrlsFromItems(sourceItems);

  let mediaResult = null;
  let mediaItems = [];

  if (args.allMedia) {
    mediaResult = await fetchCollection(args.source, 'media');
    mediaItems = mediaResult.items;

    for (const url of collectMediaApiUrls(mediaItems)) {
      mediaUrls.add(url);
    }
  }

  const normalizedPages = pages.map((item) => normalizeContentItem(item, 'page'));
  const normalizedPosts = posts.map((item) => normalizeContentItem(item, 'post'));
  const sortedMediaUrls = [...mediaUrls].sort();

  const downloads = await runLimited(sortedMediaUrls, 8, (url) => downloadMedia(url, args));
  const failedDownloads = downloads.filter((download) => download.error);

  await writeJson(path.join(contentDir, 'pages.json'), normalizedPages);
  await writeJson(path.join(contentDir, 'posts.json'), normalizedPosts);
  await writeJson(path.join(contentDir, 'media-manifest.json'), downloads);
  await writeJson(path.join(contentDir, 'import-summary.json'), {
    source: args.source,
    importedAt: new Date().toISOString(),
    pages: pagesResult.totalItems,
    posts: postsResult.totalItems,
    mediaMode: args.allMedia ? 'all' : 'referenced',
    mediaLibraryItems: mediaResult?.totalItems ?? null,
    mediaUrls: sortedMediaUrls.length,
    downloaded: downloads.filter((download) => download.downloaded).length,
    skipped: downloads.filter((download) => download.skipped).length,
    failed: failedDownloads.length,
  });

  console.log(`Pages: ${pages.length}`);
  console.log(`Posts: ${posts.length}`);
  console.log(`Media URLs: ${sortedMediaUrls.length}`);
  console.log(`Downloaded: ${downloads.filter((download) => download.downloaded).length}`);
  console.log(`Skipped: ${downloads.filter((download) => download.skipped).length}`);
  console.log(`Failed: ${failedDownloads.length}`);

  if (failedDownloads.length > 0) {
    console.log('Failed media downloads are listed in src/content/wordpress/media-manifest.json');
  }
}

if (process.argv[1] === scriptPath) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
