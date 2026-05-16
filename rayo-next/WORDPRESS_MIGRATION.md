# WordPress Migration Workflow

Source site: `https://tikii.in`

The fastest migration path is to use WordPress only as the content/media source and keep the
Rayo Next app as the presentation layer.

## Import Content

```bash
npm run import:wordpress
```

This imports:

- WordPress pages into `src/content/wordpress/pages.json`
- WordPress posts into `src/content/wordpress/posts.json`
- referenced media into `public/wp-media/`
- a download manifest into `src/content/wordpress/media-manifest.json`
- a summary into `src/content/wordpress/import-summary.json`

By default, the importer downloads only media referenced by pages, posts, excerpts, featured
images, and responsive image `srcset` values.

To mirror the full WordPress media library:

```bash
npm run import:wordpress -- --all-media
```

To overwrite already downloaded files:

```bash
npm run import:wordpress -- --force
```

## Recommended Porting Order

1. Replace Rayo placeholder copy in `src/app/page.tsx`, `about`, `services`, `work`, `blog`, and
   `contact` with the imported Tikii content.
2. Use `posts.json` as the source for portfolio/project pages. Tikii currently exposes 5 public
   posts: Babylon, Vedamorph, Young Learners' Montessori House, New Pearls, and Pearls and You.
3. Use images from `public/wp-media/` in Rayo components rather than rendering raw Elementor HTML.
4. Keep the imported `contentHtml` as reference material while manually mapping sections into
   reusable Rayo components.

Avoid rendering Elementor HTML directly as the final site. It includes Elementor-specific classes,
inline styles, and widget markup that will not match the Rayo theme cleanly.
