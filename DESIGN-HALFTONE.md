---
name: Halftone Noir
colors:
  paper: '#ffffff'
  ink: '#000000'
  paper-soft: '#f7f7f3'
  paper-warm: '#f0eee7'
typography:
  display-xl:
    fontFamily: Anybody
    fontSize: 96px
    fontWeight: '900'
    lineHeight: 92%
    letterSpacing: 0
  headline-lg:
    fontFamily: Anybody
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 98%
    letterSpacing: 0
  headline-lg-mobile:
    fontFamily: Anybody
    fontSize: 40px
    fontWeight: '900'
    lineHeight: 100%
    letterSpacing: 0
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 115%
    letterSpacing: 0
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 150%
    letterSpacing: 0
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 150%
    letterSpacing: 0
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: 0
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 3.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 64px
  container-padding-mobile: 24px
  gutter: 32px
  border-width-thin: 2px
  border-width-thick: 3px
---

## Brand & Style
This variation is a black-and-white Halftone Noir skin for the existing Rayo/Tikii homepage. The original homepage route, section order, grid behavior, content, and motion hooks stay intact. The comparison route at `/halftone` changes the design language only through route-scoped styling.

The result should feel like a premium creative studio page printed with old newspaper production methods: stark ink, paper grain, strong linework, and selective halftone screens. It should not become a new landing page, a warm 70s comic palette, or a page-wide dot grid wallpaper.

**Key Visual Pillars:**
- **Original Layout, New Finish:** Preserve the homepage composition exactly; style existing `.mxd-*` surfaces only under `body.halftone-shell`.
- **Monochrome UI:** Interface, cards, dividers, buttons, and navigation stay black, white, and paper tones.
- **Color Images:** Imagery remains in color. Halftone texture can sit over images, but images must not be grayscale-flattened.
- **Selective Halftone:** Old-newsprint halftone appears on media/image surfaces only. Avoid full-page dot-grid patterns.
- **Ink Weight:** Use confident borders, crisp shadows, and typographic contrast without changing the page structure.

## Colors
The interface palette is deliberately restrained.

- **Ink (#000000):** Text, borders, shadows, icons, dividers, and outlines.
- **Paper (#ffffff):** Page base and primary panels.
- **Paper Soft (#f7f7f3):** Secondary fills where a panel needs separation.
- **Paper Warm (#f0eee7):** Subtle paper grain and disabled/background surfaces.

No red, blue, yellow, or other comic spot colors should be introduced into UI chrome. Color belongs to the imagery.

## Typography
Use **Anybody** for display headlines and major editorial moments. Use **Hanken Grotesk** for body copy, controls, labels, cards, and navigation.

- Keep letter spacing at `0`.
- Do not use viewport-based font scaling in the variation CSS.
- Preserve the original text sizes and wrapping unless the route has a visual bug that needs local correction.
- Avoid novelty comic fonts in this variation.

## Layout & Spacing
The layout must remain the original homepage layout.

- Keep `/` unchanged.
- Keep `/halftone` rendering the existing homepage component.
- Preserve `.mxd-*` geometry, stack behavior, and animation hooks.
- Use route-scoped CSS only; do not introduce a separate custom homepage component for this comparison.
- On mobile, reduce shadow offsets if needed, but do not restructure sections.

## Elevation & Depth
Depth should feel printed and physical, not glossy.

- Use hard ink shadows with no blur, usually `3px` to `7px`.
- Use borders instead of glows.
- Remove or neutralize the original colored glow system on `/halftone`.
- Avoid glass effects, neon gradients, and colored shadows.

## Shapes
The original Rayo shape language remains. The halftone skin adds a printed edge.

- Cards/media: `2px` to `3px` black border.
- Buttons: original pill and round shapes with black border and hard ink shadow.
- Tags: monochrome capsules or outline pills.
- Icons: keep existing icon shapes, recolor to ink where needed.

## Components
- **Buttons:** White or black fills, black borders, hard shadow, existing sizing.
- **Cards:** Existing card layout with monochrome panel treatment.
- **Images:** Replace visible placeholder imagery on `/halftone` with local Tikii art where feasible, keep images in color, and add a restrained old-newspaper halftone overlay to media surfaces.
- **Inputs:** Paper fill, black border, clear focus outline.
- **Menu/Header:** Same shell, route-scoped monochrome styling only on `/halftone`.
- **Texture:** Use subtle paper grain globally. Halftone dots belong on media, not across the whole page.
