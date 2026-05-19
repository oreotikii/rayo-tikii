# Rayo Tikii

This repository is a Next.js rebuild of the Rayo digital agency and personal portfolio HTML template.

The goal is to preserve the visual design, page inventory, animations, media, and content from the original static template while making the site easier to run, route, maintain, and extend inside a modern React/Next.js app.

## What Is In This Repo

- `app/` contains the original static HTML/Sass template source.
- `next-app/` contains the active Next.js App Router implementation.
- `next-app/scripts/generate-content.mjs` extracts page bodies from `app/*.html` and regenerates the Next page records/routes.
- `next-app/lib/content.ts` is generated content. Treat it as an output file, not the primary editing surface.
- `next-app/components/site-shell.tsx` is the React replacement for the shared loader, header, menu, theme switcher, and top-level client behaviors.
- `next-app/components/page-content.tsx` parses generated HTML into React, rewrites links, disables demo forms, and wires counters.
- `next-app/components/client-behaviors.tsx` recreates the template's browser behaviors with GSAP, Lenis, Typed.js, Swiper, Masonry, and small DOM handlers.
- `next-app/public/` mirrors the template assets needed by Next.js, including CSS, images, fonts, and video.

## Current Architecture

The project has two layers:

1. Original template layer
   - Source pages live in `app/*.html`.
   - Source styles live in `app/sass/`.
   - Built static assets live in `app/css/`, `app/js/`, `app/img/`, `app/video/`, and `app/fonts/`.

2. Next.js layer
   - Routes live in `next-app/app/**/page.tsx`.
   - Most route files are tiny wrappers around `<RayoPage pageKey="..." />`.
   - Generated records in `next-app/lib/content.ts` hold each page's extracted `<main>` and `<footer>` markup plus counter metadata.
   - Shared UI and client-side enhancements are implemented in React components under `next-app/components/`.

This means many visual/content changes should start in the original HTML or assets, then be regenerated or mirrored into the Next app.

## Main Routes

- `/`
- `/landing`
- `/software-development-company`
- `/freelancer-portfolio`
- `/digital-agency`
- `/creative-design-studio`
- `/personal-portfolio`
- `/web-agency`
- `/creative-developer`
- `/designer`
- `/works`
- `/works/masonry`
- `/project-details`
- `/about-me`
- `/about-us`
- `/services`
- `/team`
- `/pricing`
- `/faq`
- `/contact`
- `/blog`
- `/blog/creative`
- `/blog/article`
- `/not-found`

## Running The Next.js App

```bash
cd next-app
npm install
npm run dev
```

Then open the local URL printed by Next.js, usually `http://localhost:3000`.

## Building And Checking

From `next-app/`:

```bash
npm run lint
npm run build
npm run start
```

Notes:

- `npm run lint` currently runs `tsc --noEmit`.
- The root `package.json` belongs to the original Gulp/static template and its `test` script intentionally fails.

## Regenerating Page Content

When changing source HTML in `app/*.html`, regenerate the Next records/routes:

```bash
cd next-app
node scripts/generate-content.mjs
```

This rewrites:

- `next-app/lib/content.ts`
- `next-app/app/**/page.tsx`
- `next-app/app/not-found.tsx`

Do not hand-edit `next-app/lib/content.ts` unless the task is explicitly about the generated output.

## Working With Styles And Assets

- Template styles are loaded in `next-app/app/layout.tsx` from `/css/loaders/loader.css`, `/css/plugins.css`, `/css/main.css`, and `/css/next-overrides.css`.
- Use `next-app/public/css/next-overrides.css` for Next-specific fixes.
- If changing original Sass/CSS or media in `app/`, make sure the needed compiled files/assets are also present under `next-app/public/`.
- The current template still contains placeholder `dummyimage.com` assets in many pages. Replacing those with real local assets is expected future work.

## Original Static Template Workflow

The root-level Gulp workflow can still serve and build the original static template:

```bash
npm install
npx gulp
npx gulp build
```

Use this mainly when modifying the original `app/` template layer. The Next.js app in `next-app/` is the primary application surface.

## Intent For Future Work

The practical direction is:

- Keep the Rayo visual identity and page set intact.
- Move fragile static-template behavior into typed, maintainable React where it makes sense.
- Replace demo placeholders with project-specific copy, imagery, links, and contact behavior.
- Keep generated content reproducible from the source template.
- Avoid broad rewrites unless they clearly reduce duplication or make the Next app easier to maintain.
