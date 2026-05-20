# Agent Guide

This file is for LLM agents working in this repository. Read it before making changes.

## Project Intent

This repo started as a conversion of the downloaded Rayo HTML agency/portfolio
theme into a maintainable Next.js app. The first migration target was to keep
the original Rayo template looking and behaving the same in `next-app/`.

The current product goal is to turn that preserved Next.js version into the
website for `tikii.in`, which is currently a WordPress site. The expected
direction is to move most Tikii content and media into the Next app while
keeping the Rayo motion system, page shell, and agency/portfolio feel unless the
user explicitly asks for a redesign.

The important mental model:

- `app/` is the original downloaded Rayo static template source and reference.
- `next-app/` is the active Next.js application and future Tikii site.
- Generated route content in `next-app/lib/content.ts` comes from `app/*.html`.
- The React shell in `next-app/components/` replaces the static template's shared chrome and browser behaviors.
- WordPress content from `tikii.in` should be treated as the main content source for the Tikii rebuild.

Preserve the look and motion of the original template while replacing template
copy, imagery, project details, links, and contact information with Tikii
content. Prefer automation where it saves manual migration work, but the current
preference is a one-time import rather than a permanent WordPress sync.

## Tikii Migration Direction

- Preferred content source: WordPress export/API access for `tikii.in`.
- Preferred implementation direction: Tikii content inside the existing Rayo/Next shell and motion system.
- Preferred migration style: one-time import with enough scripting to avoid repetitive manual work.
- Keep Tikii pages, services, work/case studies, testimonials, contact details, and media as first-class content.
- Replace placeholder and demo template content with real Tikii content wherever available.
- Ask for required WordPress/export inputs early if they are missing:
  - WordPress XML export or REST/API access.
  - Media library export or permission to download media from the live site.
  - Brand assets such as logo files, color/type guidance, and approved imagery.
  - Priority page list and any content that should not be migrated.
  - Contact form destination and social/profile links.

## High-Value Files

- `README.md`: human-facing project overview.
- `app/*.html`: original page sources.
- `app/sass/`: original Sass modules and partials.
- `gulpfile.js`: original static template build pipeline.
- `next-app/scripts/generate-content.mjs`: source-to-Next content generator.
- `next-app/lib/content.ts`: generated page records. Avoid manual edits.
- `next-app/app/**/page.tsx`: generated route wrappers.
- `next-app/app/layout.tsx`: global metadata and stylesheet loading.
- `next-app/components/site-shell.tsx`: loader, header, menu overlay, theme switcher, back-to-top button.
- `next-app/components/page-content.tsx`: HTML-to-React parser, link rewriting, form fallback, counters.
- `next-app/components/client-behaviors.tsx`: client-side animations and interactive behavior.
- `next-app/public/css/next-overrides.css`: preferred place for Next-specific CSS fixes.

## Commands

Run the active app from `next-app/`:

```bash
npm run dev
npm run lint
npm run build
npm run start
```

Regenerate Next page content after editing `app/*.html`:

```bash
node scripts/generate-content.mjs
```

Original static template commands from the repo root:

```bash
npx gulp
npx gulp build
```

Do not use the root `npm test`; it is the default placeholder script and exits with an error.

## WordPress Content Migration

For Tikii content work, prefer the most reproducible source available:

1. Use WordPress export/API data if provided.
2. Use public `tikii.in` scraping only when export/API access is unavailable.
3. Use manual copy/assets only when the user provides them or automation would create more cleanup than value.

For a one-time import, it is acceptable to create migration scripts that extract
WordPress pages, posts/work entries, media URLs, SEO metadata, and contact/social
data, then map them into the current Next content model or source HTML. Keep
those scripts scoped and explain how to rerun them.

Do not assume permanent synchronization with WordPress unless the user asks for
it. If the implementation needs a CMS-like content structure, prefer local,
versioned content in the repo over a live WordPress dependency.

## Editing Rules

- Prefer editing the true source for the task.
- For page body content, edit `app/*.html`, then run `node scripts/generate-content.mjs` from `next-app/`.
- For route shell, navigation, theme, loader, or shared behavior, edit `next-app/components/`.
- For Next-only CSS adjustments, edit `next-app/public/css/next-overrides.css`.
- For broad template styling changes, edit `app/sass/`, compile with the Gulp workflow, and mirror the compiled CSS into `next-app/public/css/` if needed.
- Keep `next-app/lib/content.ts` reproducible. If it changes, it should normally be because the generator ran.
- If adding a new page, update the `pages` list and `routeMap` in `next-app/scripts/generate-content.mjs`, add or identify the matching source HTML in `app/`, then regenerate.
- If changing local asset paths in source HTML, verify that the files exist under `next-app/public/` with the path the browser will request.
- Do not remove template behaviors casually. Many classes are hooks for CSS, GSAP, Swiper, Masonry, Lenis, or parser rewrites.

## Generated Content Details

`next-app/scripts/generate-content.mjs`:

- reads each configured `app/*.html` file;
- extracts floating image markup before `<main>`, then `<main>` and `<footer>`;
- rewrites `img/` and `video/` URLs to root-relative Next public paths;
- rewrites `.html` links to Next routes;
- disables the old PHP mail action;
- extracts CountUp-style counter values;
- writes `next-app/lib/content.ts`;
- writes route wrappers in `next-app/app/`.

Because of this, manual edits in generated route wrappers or `next-app/lib/content.ts` are easy to lose.

## Validation Expectations

For most code changes in `next-app/`, run:

```bash
npm run lint
```

For changes that affect routing, generated content, imports, or runtime behavior, also run:

```bash
npm run build
```

For visual changes, start the dev server and inspect the affected route in a browser when possible. Check desktop and mobile widths if the change touches layout, menu behavior, media, or animation timing.

## Current Caveats

- Many images are still remote `dummyimage.com` placeholders.
- The demo contact/subscription forms are disabled in the Next app and show a local fallback message.
- Some original static-template behavior has been recreated in `client-behaviors.tsx`; not every original jQuery/plugin interaction may exist yet.
- `next-app/public/` is a mirrored asset surface, not automatically synchronized by the generator.
- The root static template and the Next app each have their own `package-lock.json`.
- The current Tikii migration source of truth may be external WordPress content until it is imported into this repo.

## Collaboration Notes

- Check `git status --short` before editing. There may be unrelated user changes.
- Do not revert unrelated changes.
- Keep edits scoped to the user's request.
- Prefer small, explainable changes over large rewrites.
- When modifying generated files, explain whether they were regenerated or intentionally edited.
