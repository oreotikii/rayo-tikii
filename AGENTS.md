# Agent Guide

This file is for LLM agents working in this repository. Read it before making changes.

## Project Intent

This repo is converting the Rayo HTML agency/portfolio template into a maintainable Next.js app.

The important mental model:

- `app/` is the original static template source and reference.
- `next-app/` is the active Next.js application.
- Generated route content in `next-app/lib/content.ts` comes from `app/*.html`.
- The React shell in `next-app/components/` replaces the static template's shared chrome and browser behaviors.

Preserve the look and motion of the original template unless the user explicitly asks for a redesign.

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

## Collaboration Notes

- Check `git status --short` before editing. There may be unrelated user changes.
- Do not revert unrelated changes.
- Keep edits scoped to the user's request.
- Prefer small, explainable changes over large rewrites.
- When modifying generated files, explain whether they were regenerated or intentionally edited.
