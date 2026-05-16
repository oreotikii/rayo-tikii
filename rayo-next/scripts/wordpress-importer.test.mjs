import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  extractMediaUrls,
  rewriteWpMediaUrls,
  toLocalMediaPath,
} from './wordpress-importer.mjs';

test('maps WordPress upload URLs to stable local public paths', () => {
  assert.equal(
    toLocalMediaPath('https://tikii.in/wp-content/uploads/2024/10/Banner-2-scaled.jpg'),
    '/wp-media/2024/10/Banner-2-scaled.jpg',
  );

  assert.equal(
    toLocalMediaPath('https://tikii.in/storage/2025/01/Group-Picture-1-1-scaled.jpg'),
    '/wp-media/2025/01/Group-Picture-1-1-scaled.jpg',
  );
});

test('extracts image and video URLs from rendered WordPress HTML', () => {
  const html = `
    <img src="https://tikii.in/wp-content/uploads/2024/10/A.jpg" />
    <img srcset="https://tikii.in/wp-content/uploads/2024/10/A-300x200.jpg 300w, https://tikii.in/storage/2024/10/A-800x600.jpg 800w" />
    <video poster="https://tikii.in/wp-content/uploads/2024/10/poster.jpg">
      <source src="https://tikii.in/wp-content/uploads/2024/10/reel.mp4" />
    </video>
  `;

  assert.deepEqual(extractMediaUrls(html), [
    'https://tikii.in/wp-content/uploads/2024/10/A.jpg',
    'https://tikii.in/wp-content/uploads/2024/10/A-300x200.jpg',
    'https://tikii.in/storage/2024/10/A-800x600.jpg',
    'https://tikii.in/wp-content/uploads/2024/10/poster.jpg',
    'https://tikii.in/wp-content/uploads/2024/10/reel.mp4',
  ]);
});

test('rewrites WordPress media URLs inside HTML to local public URLs', () => {
  const html = '<img src="https://tikii.in/wp-content/uploads/2024/10/Banner-2-scaled.jpg" />';

  assert.equal(
    rewriteWpMediaUrls(html),
    '<img src="/wp-media/2024/10/Banner-2-scaled.jpg" />',
  );
});
