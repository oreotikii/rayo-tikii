import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");

const sourcePageRoutes = [
  ["index-main.html", "app/page.tsx"],
  ["works-simple.html", "app/works/page.tsx"],
  ["project-details.html", "app/works/[slug]/page.tsx"],
  ["about-us.html", "app/about/page.tsx"],
  ["services.html", "app/services/page.tsx"],
  ["team.html", "app/team/page.tsx"],
  ["faq.html", "app/faq/page.tsx"],
  ["contact.html", "app/contact/page.tsx"],
  ["blog-standard.html", "app/blog/page.tsx"],
  ["blog-creative.html", "app/blog/creative/page.tsx"],
  ["blog-article.html", "app/blog/article/page.tsx"],
  ["blog-article.html", "app/blog/[slug]/page.tsx"],
  ["privacy-policy.html", "app/privacy-policy/page.tsx"],
  ["terms-conditions.html", "app/terms-conditions/page.tsx"],
  ["shipping-returns.html", "app/shipping-returns/page.tsx"],
  ["404.html", "app/404/page.tsx"]
];

const clientLogoFiles = [
  ["/img/tikii/clients/tikii-client-samilton-logo.png", "Samilton client logo"],
  ["/img/tikii/clients/tikii-client-premiere-realty-logo.png", "Premiere Realty client logo"],
  ["/img/tikii/clients/tikii-client-nmc-tools-logo.png", "NMC Tools client logo"],
  ["/img/tikii/clients/tikii-client-fanatic-logo.png", "Fanatic client logo"],
  ["/img/tikii/clients/tikii-client-chandrani-pearls-logo.png", "Chandrani Pearls client logo"],
  ["/img/tikii/clients/tikii-client-anvil-logo.png", "Anvil client logo"],
  ["/img/tikii/clients/tikii-client-anuschka-logo.png", "Anuschka client logo"],
  ["/img/tikii/clients/tikii-client-absorbia-logo.png", "Absorbia client logo"]
];

const homeCoverImageFiles = [
  "/img/tikii/home/tikii-studio-group.jpg",
  "/img/tikii/home/tikii-studio-planning.jpg",
  "/img/tikii/home/tikii-studio-workshop.jpg",
  "/img/tikii/home/tikii-branding-babylon-menu.jpg",
  "/img/tikii/home/tikii-branding-young-learners-bag.jpg",
  "/img/tikii/home/tikii-branding-vedamorph-banner.jpg",
  "/img/tikii/home/tikii-campaign-chandrani-hoarding.jpg",
  "/img/tikii/home/tikii-commerce-vedamorph-products.jpg",
  "/img/tikii/home/tikii-content-vedamorph-collection.jpg",
  "/img/tikii/home/tikii-digital-tech-device.jpg",
  "/img/tikii/home/tikii-portrait-nisheeth.jpg",
  "/img/tikii/home/tikii-portrait-amit.jpg",
  "/img/tikii/home/tikii-portrait-abhijit.jpg",
  "/img/tikii/home/tikii-portrait-yashwant.jpg"
];

const sharedFooterRoutes = sourcePageRoutes
  .map(([, routeFile]) => routeFile)
  .filter((routeFile) => routeFile !== "app/404/page.tsx");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function walk(dir, matches = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, matches);
    } else if (entry.name === "page.tsx" || entry.name === "not-found.tsx") {
      matches.push(path.relative(root, fullPath));
    }
  }
  return matches;
}

function numberConst(source, name) {
  const match = source.match(new RegExp(`const ${name} = ([0-9.]+);`));
  assert.notEqual(match, null, `expected ${name} numeric constant`);
  return Number(match[1]);
}

function cssRule(source, selector) {
  const match = source.match(new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*{[\\s\\S]*?}`));
  assert.notEqual(match, null, `expected ${selector} CSS rule`);
  return match[0];
}

function cssNumber(rule, property) {
  const match = rule.match(new RegExp(`${property}:\\s*([0-9.]+)`));
  assert.notEqual(match, null, `expected ${property} declaration`);
  return Number(match[1]);
}

function cssMs(rule, property) {
  const match = rule.match(new RegExp(`${property}:\\s*[^;]*?([0-9.]+)ms`));
  assert.notEqual(match, null, `expected ${property} duration in milliseconds`);
  return Number(match[1]);
}

test("route pages are no longer backed by generated content.ts records", () => {
  const routedFiles = [...walk(path.join(root, "app")), "app/not-found.tsx"].filter((file, index, files) => (
    files.indexOf(file) === index && exists(file)
  ));

  assert.ok(routedFiles.length > 0, "expected Next route files to exist");

  for (const file of routedFiles) {
    const source = read(file);
    assert.equal(source.includes("@/components/rayo-page"), false, `${file} still imports RayoPage`);
    assert.equal(source.includes("@/lib/content"), false, `${file} still imports generated content`);
  }
});

test("every Rayo source page has a concrete Next route using the source template design", () => {
  for (const [sourceFile, routeFile] of sourcePageRoutes) {
    assert.equal(exists(routeFile), true, `expected ${routeFile} for ${sourceFile}`);

    const source = read(routeFile);
    assert.equal(source.includes('<main id="mxd-page-content"'), true, `${routeFile} should contain direct Rayo page JSX`);
    assert.equal(source.includes("@/components/page-content"), false, `${routeFile} should not render HTML through PageContent`);
    assert.equal(source.includes("PageRecord"), false, `${routeFile} should not embed parser records`);
    assert.equal(source.includes("@/components/tikii-layout"), false, `${routeFile} should not use the compact Tikii layout`);

    if (routeFile === "app/page.tsx") {
      assert.equal(source.includes("hero-metal-bloom.png"), true, "home page should keep the manually selected hero image");
      assert.equal(source.includes("hero-creative-systems.png"), true, "home page should keep the manually selected creative image");
      assert.equal(source.includes("hero-scroll-token.png"), true, "home page should keep the manually selected scroll image");
      assert.equal(source.includes("Source: ../../app/index-main.html"), false, "home page should remain manually owned");
    } else {
      assert.equal(source.includes(`Source: ../../app/${sourceFile}`), true, `${routeFile} should identify ${sourceFile}`);
    }
  }
});

test("generated SVG path data does not include escaped linebreaks", () => {
  const routedFiles = walk(path.join(root, "app")).filter((file) => exists(file));

  for (const file of routedFiles) {
    const source = read(file);
    const pathDataAttributes = source.matchAll(/\sd="([^"]*)"/g);

    for (const match of pathDataAttributes) {
      assert.equal(
        /\\[rn]/.test(match[1]),
        false,
        `${file} has escaped CR/LF characters in SVG path data`
      );
    }
  }
});

test("home page footer wordmark is the full-width tikii SVG", () => {
  const source = read("components/tikii-footer.tsx");
  const wordmarkMatch = source.match(/<svg className="mxd-footer__svg-v2"[\s\S]*?<\/svg>/);

  assert.notEqual(wordmarkMatch, null, "expected shared footer wordmark SVG");

  const wordmark = wordmarkMatch[0];
  assert.equal(wordmark.includes('viewBox="0 0 400.26 72"'), true, "wordmark should keep the full-width footer viewBox");
  assert.equal(wordmark.includes('fontSize="70"'), true, "tikii wordmark should naturally fill the full-width footer SVG");
  assert.equal(wordmark.includes('x="0"'), true, "tikii wordmark should be left aligned");
  assert.equal(wordmark.includes('textAnchor="start"'), true, "tikii wordmark should explicitly anchor from the left");
  assert.equal(wordmark.includes("letterSpacing="), false, "tikii wordmark should not add extra kerning");
  assert.equal(wordmark.includes("textLength="), false, "tikii wordmark should not horizontally stretch glyphs");
  assert.equal(wordmark.includes("lengthAdjust="), false, "tikii wordmark should not use SVG glyph stretching");
  assert.equal(wordmark.includes(">tikii•digital<"), true, "wordmark should use a centered bullet separator");
  assert.equal(wordmark.includes(">tikii.digital<"), false, "wordmark should not use a baseline period separator");
  assert.equal(wordmark.includes("rayostudio"), false, "wordmark should not use the old Rayo text");
});

test("all non-error pages use the shared Tikii footer component", () => {
  assert.equal(exists("components/tikii-footer.tsx"), true, "expected shared Tikii footer component");

  const footer = read("components/tikii-footer.tsx");
  assert.equal(footer.includes("export function TikiiFooter"), true, "shared footer should export TikiiFooter");
  assert.equal(footer.includes("Got a brand, campaign, or website that needs adult supervision?"), true, "shared footer should include the contact CTA");
  assert.equal(footer.includes('<footer id="mxd-footer"'), true, "shared footer should own the footer markup");
  assert.equal(footer.includes("rayostudio"), false, "shared footer should not include the old Rayostudio wordmark");
  assert.equal(footer.includes("hello@rayostudio.com"), false, "shared footer should not include old Rayostudio contact details");

  for (const routeFile of sharedFooterRoutes) {
    const source = read(routeFile);
    assert.equal(
      source.includes('import { TikiiFooter } from "@/components/tikii-footer";'),
      true,
      `${routeFile} should import the shared footer`
    );
    assert.equal(source.includes("<TikiiFooter />"), true, `${routeFile} should render the shared footer`);
    assert.equal(source.includes('<footer id="mxd-footer"'), false, `${routeFile} should not embed footer markup`);
    assert.equal(source.includes("hello@rayostudio.com"), false, `${routeFile} should not keep the old footer email`);
    assert.equal(source.includes("Mix_Design"), false, `${routeFile} should not keep the old footer credit`);
  }
});

test("top logo says Tikii Digital and returns home through page transition", () => {
  const shell = read("components/site-shell.tsx");
  const logoMatch = shell.match(/function Logo[\s\S]*?\n}\n\nfunction MenuOverlay/);

  assert.notEqual(logoMatch, null, "expected top logo component");

  const logo = logoMatch[0];
  assert.equal(logo.includes('aria-label="Tikii Digital home"'), true, "top logo should identify Tikii Digital");
  assert.equal(logo.includes("digital"), true, "top logo should show digital as the second line");
  assert.equal(logo.includes("marketing"), false, "top logo should not show the old marketing label");
  assert.equal(logo.includes("onNavigate"), true, "top logo should accept the page transition handler");
  assert.equal(logo.includes("onClick={requestHomeNavigation}"), true, "top logo should intercept home clicks");
  assert.equal(
    shell.includes("<Logo onNavigate={navigateWithPageTransition} />"),
    true,
    "header logo should receive the shared page transition handler"
  );
});

test("route transition waits for the loader cover before pushing the next route", () => {
  const shell = read("components/site-shell.tsx");
  const navigationMatch = shell.match(/const navigateWithPageTransition = useCallback\([\s\S]*?\n\s*\);\n\n  useEffect/);

  assert.notEqual(navigationMatch, null, "expected route transition navigation handler");
  assert.equal(shell.includes("const routeLoaderEnterTime = 180;"), true, "route loader enter timing should be named");

  const navigation = navigationMatch[0];
  const showLoader = navigation.indexOf("setRouteTransitionLoading(true);");
  const waitForLoaderPaint = navigation.indexOf("await waitForPaint();");
  const waitForLoaderCover = navigation.indexOf("await wait(routeLoaderEnterTime);");
  const markIntroPending = navigation.indexOf("routeIntroPendingRef.current = true;");
  const pushRoute = navigation.indexOf("router.push(href);");

  assert.notEqual(showLoader, -1, "navigation should show the route loader");
  assert.notEqual(waitForLoaderPaint, -1, "navigation should wait for the loader paint");
  assert.notEqual(waitForLoaderCover, -1, "navigation should wait for the loader to cover the viewport");
  assert.notEqual(markIntroPending, -1, "navigation should mark the next route intro as pending");
  assert.notEqual(pushRoute, -1, "navigation should push the target route");
  assert.equal(showLoader < waitForLoaderPaint, true, "loader should be shown before waiting for paint");
  assert.equal(waitForLoaderPaint < waitForLoaderCover, true, "loader paint should happen before the cover wait");
  assert.equal(waitForLoaderCover < markIntroPending, true, "next route should not be marked pending until the loader is covering");
  assert.equal(markIntroPending < pushRoute, true, "next route should be marked pending before router.push");
});

test("home page copy and contact details are grounded in Tikii import content", () => {
  const source = [
    read("app/page.tsx"),
    read("components/tikii-footer.tsx")
  ].join("\n");

  for (const expected of [
    "Design,",
    "and some magic",
    "Tikii Marketing Services LLP",
    "contact@tikii.in",
    "tel:+919007376927",
    "+91-900-737-6927",
    "Terminus Building, BG-12, New Town, Kolkata",
    "https://www.instagram.com/tikii.in",
    "https://www.behance.net/tikii_in",
    "https://www.linkedin.com/company/tikii",
    "https://www.facebook.com/Tikii.in/",
    "Babylon",
    "Vedamorph",
    "Young Learners' Montessori House",
    "New Pearls",
    "Pearls and You",
    "Brand Strategy Without the Fog"
  ]) {
    assert.equal(source.includes(expected), true, `expected homepage to include ${expected}`);
  }

  for (const stale of [
    "hello@rayostudio.com",
    "https://dribbble.com/",
    "https://github.com/",
    "https://codepen.io/",
    "https://www.figma.com/community",
    "https://1.envato.market/EKA9WD",
    "The Rayo team"
  ]) {
    assert.equal(source.includes(stale), false, `homepage still contains stale placeholder ${stale}`);
  }
});

test("home footer puts the address under Find Us before socials", () => {
  const source = read("components/tikii-footer.tsx");
  const footerStart = source.indexOf('<footer id="mxd-footer"');
  const footer = source.slice(footerStart);
  const findUsStart = footer.indexOf("Find us");
  const findUsEnd = footer.indexOf('<div className="footer-blocks__links anim-uni-in-up">', findUsStart);
  const findUsCard = footer.slice(findUsStart, findUsEnd);
  const addressStart = findUsCard.indexOf("Terminus Building, BG-12, New Town, Kolkata");
  const socialsStart = findUsCard.indexOf('className="footer-blocks__socials"');

  assert.notEqual(footerStart, -1, "expected homepage footer");
  assert.notEqual(findUsStart, -1, "expected Find Us footer card");
  assert.notEqual(findUsEnd, -1, "expected Find Us card boundary");
  assert.equal(footer.includes("Careers"), false, "footer should not include Careers");
  assert.equal(footer.includes("careers@tikii.in"), false, "footer should not include the careers email link");
  assert.equal(findUsCard.includes("Terminus Building, BG-12, New Town, Kolkata"), true, "Find Us card should include the address");
  assert.equal(findUsCard.includes("Tikii Marketing Services LLP"), true, "Find Us card should include the company name");
  assert.notEqual(addressStart, -1, "Find Us card should include the address");
  assert.notEqual(socialsStart, -1, "Find Us card should include social links");
  assert.equal(addressStart < socialsStart, true, "address should appear before social links");
  assert.equal(footer.includes('className="footer-blocks__card fill-card footer-image-card"'), true, "footer should keep the decorative fill card");
  assert.equal(footer.includes("footer-image-card__image"), false, "footer decorative card should not contain an image element");

  const css = read("public/css/next-overrides.css");
  const imageCardRule = cssRule(css, ".footer-blocks__card.footer-image-card");
  assert.equal(imageCardRule.includes('background-image: url("/img/tikii/getty-purple-background.jpg")'), true, "footer decorative card should use a CSS background");
  assert.equal(imageCardRule.includes("background-size: cover"), true, "footer decorative card background should cover the card");
  assert.equal(imageCardRule.includes("overflow: hidden"), true, "footer decorative card should clip the background");
});

test("selected client cards use imported SEO-named logo assets", () => {
  const source = read("app/page.tsx");
  const cardsStart = source.indexOf('<div className="mxd-partners-cards">');
  const cardsEnd = source.indexOf('<div className="mxd-section padding-blog">', cardsStart);
  const cardsMarkup = source.slice(cardsStart, cardsEnd);

  assert.notEqual(cardsStart, -1, "expected selected client cards section");
  assert.notEqual(cardsEnd, -1, "expected selected client cards section boundary");
  assert.equal(cardsMarkup.includes("<img src={client.src}"), true, "selected client cards should render logo images");
  assert.equal(cardsMarkup.includes('<p className="t-small">'), false, "selected client cards should not render client names as text");
  assert.equal(
    cardsMarkup.includes('<HomeBorderGlow as={RayoLink} className="mxd-partners-cards__glow"'),
    true,
    "selected client cards should keep the shared BorderGlow treatment"
  );
  assert.equal(
    cardsMarkup.includes('className="mxd-partners-cards__inner"'),
    false,
    "selected client cards should not use the legacy class that owns the old ::before layer"
  );

  const css = read("public/css/next-overrides.css");
  const glowRule = cssRule(css, ".mxd-partners-cards__glow");
  assert.equal(glowRule.includes("display: flex"), true, "selected client glow cards should keep centered layout");
  assert.equal(glowRule.includes("width: 100%"), true, "selected client glow cards should fill the grid cell");
  assert.equal(glowRule.includes("height: 100%"), true, "selected client glow cards should fill the grid cell");

  for (const [src, alt] of clientLogoFiles) {
    assert.equal(source.includes(src), true, `homepage should reference ${src}`);
    assert.equal(source.includes(alt), true, `homepage should include SEO alt text for ${alt}`);
    assert.equal(exists(`public${src}`), true, `expected copied logo asset public${src}`);
  }
});

test("home page cover-fit media uses local TikiiImport assets instead of dummy placeholders", () => {
  const source = read("app/page.tsx");

  assert.equal(source.includes("dummyimage.com"), false, "home page should not reference dummy cover media");

  for (const src of homeCoverImageFiles) {
    assert.equal(source.includes(src), true, `homepage should reference ${src}`);
    assert.equal(exists(`public${src}`), true, `expected copied home cover asset public${src}`);
  }

  for (const preservedPng of [
    "/img/tikii/hero-metal-bloom.png",
    "/img/tikii/hero-creative-systems.png",
    "/img/tikii/hero-scroll-token.png"
  ]) {
    assert.equal(source.includes(preservedPng), true, `homepage should keep existing PNG art ${preservedPng}`);
  }
});

test("site-wide TV grain uses the React Bits Noise component behind content", () => {
  const shell = read("components/site-shell.tsx");
  const home = read("app/page.tsx");
  const layout = read("app/layout.tsx");
  const hasNoiseComponent = exists("components/noise.tsx");
  const noise = hasNoiseComponent ? read("components/noise.tsx") : "";
  const hasNoiseCss = exists("components/noise.module.css");
  const noiseCss = hasNoiseCss ? read("components/noise.module.css") : "";
  const css = read("public/css/next-overrides.css");
  const noiseLayerRule = cssRule(css, ".tikii-noise-layer");
  const pageBackgroundRule = cssRule(css, ".mxd-page-content::before");
  const darkNoiseRule = cssRule(css, 'html[color-scheme="dark"] .tikii-noise-layer');
  const lightNoiseRule = cssRule(css, 'html[color-scheme="light"] .tikii-noise-layer');

  assert.equal(hasNoiseComponent, true, "expected React Bits Noise component to exist");
  assert.equal(hasNoiseCss, true, "expected Noise CSS module to exist");
  assert.equal(exists("components/animated-grain.tsx"), false, "old custom grain component should be removed");
  assert.equal(shell.includes('import Noise from "@/components/noise";'), true, "SiteShell should import Noise");
  assert.equal(shell.includes("<Noise"), true, "SiteShell should mount Noise globally");
  assert.equal(shell.includes("patternSize={500}"), true, "Noise pattern size should render grain about 50% smaller");
  assert.equal(shell.includes("patternScaleX={1}"), true, "Noise X scale should be editable in SiteShell");
  assert.equal(shell.includes("patternScaleY={1}"), true, "Noise Y scale should be editable in SiteShell");
  assert.equal(shell.includes("patternRefreshInterval={2}"), true, "Noise refresh interval should be editable in SiteShell");
  assert.equal(shell.includes("patternAlpha={15}"), true, "Noise alpha should be editable in SiteShell");
  assert.equal(home.includes('import Noise from "@/components/noise";'), true, "hero should reuse the React Bits Noise component");
  assert.equal(home.includes("tikii-hero-artwork-noise tikii-hero-artwork-noise--metal"), true, "metal hero art should have masked noise");
  assert.equal(home.includes("tikii-hero-artwork-noise tikii-hero-artwork-noise--creative"), true, "creative hero art should have masked noise");
  assert.equal(home.includes("patternAlpha={10}"), true, "hero art noise should be lower-alpha than global noise");

  assert.equal(noise.includes("patternSize = 250"), true, "Noise should keep the React Bits patternSize prop");
  assert.equal(/patternScaleX\s*=/.test(noise), true, "Noise should keep the React Bits patternScaleX prop");
  assert.equal(/patternScaleY\s*=/.test(noise), true, "Noise should keep the React Bits patternScaleY prop");
  assert.equal(noise.includes("patternRefreshInterval = 2"), true, "Noise should keep the React Bits refresh prop");
  assert.equal(noise.includes("patternAlpha = 15"), true, "Noise should keep the React Bits alpha prop");
  assert.equal(noise.includes("<canvas"), true, "Noise should render a canvas");
  assert.equal(noise.includes("requestAnimationFrame"), true, "Noise should animate with frame updates");
  assert.equal(noise.includes("createImageData"), true, "Noise should generate pixels in code");
  assert.equal(noise.includes("putImageData"), true, "Noise should draw generated pixels");
  assert.equal(noise.includes("imageRendering: \"pixelated\""), true, "Noise should preserve React Bits pixelated rendering");
  assert.equal(noiseCss.includes("position: absolute"), true, "Noise CSS should preserve the React Bits overlay positioning");
  assert.equal(noiseCss.includes("pointer-events: none"), true, "Noise CSS should not block interactions");

  assert.equal(/url\(/.test(noiseLayerRule), false, "noise layer should not use image URLs");
  assert.equal(cssNumber(noiseLayerRule, "z-index") <= 0, true, "noise should sit behind page items");
  assert.equal(css.includes('html[color-scheme="light"] .tikii-noise-layer'), true, "light mode should tune noise");
  assert.equal(css.includes('html[color-scheme="dark"] .tikii-noise-layer'), true, "dark mode should tune noise");
  assert.equal(cssNumber(darkNoiseRule, "opacity") <= 1, true, "dark noise opacity should remain controlled by CSS");
  assert.equal(cssNumber(lightNoiseRule, "opacity") <= 1, true, "light noise opacity should remain controlled by CSS");
  assert.equal(layout.includes('media="(prefers-color-scheme: dark)" content="#000000"'), true, "dark browser theme color should be pure black");
  assert.equal(css.includes('html[color-scheme="dark"] body'), true, "dark mode should explicitly target the page background");
  assert.equal(css.includes("background-color: #000000"), true, "dark mode page background should be pure black behind noise");
  assert.equal(pageBackgroundRule.includes("left: 0"), true, "page background image should start at the left edge");
  assert.equal(pageBackgroundRule.includes("width: 100%"), true, "page background image should span the full viewport to avoid a vertical seam");
  assert.equal(css.includes(".tikii-hero-artwork-noise"), true, "hero art should have a targeted noise layer");
  assert.equal(css.includes("mask-image: url(\"/img/tikii/hero-metal-bloom.png\")"), true, "metal art noise should be masked to the PNG");
  assert.equal(css.includes("mask-image: url(\"/img/tikii/hero-creative-systems.png\")"), true, "creative art noise should be masked to the PNG");
  assert.equal(css.includes("mix-blend-mode: screen"), true, "hero art noise should lift dark image grain instead of darkening it");
  assert.equal(/body::before\s*{/.test(css), false, "old body pseudo image grain should be removed");
  assert.equal(css.includes("data:image"), false, "noise should not use embedded picture data");
});

test("blog and portfolio sections have child route scaffolding", () => {
  assert.equal(exists("lib/blogs.ts"), true, "expected lib/blogs.ts to exist");
  assert.equal(exists("lib/portfolio.ts"), true, "expected lib/portfolio.ts to exist");
  assert.equal(exists("app/blog/[slug]/page.tsx"), true, "expected dynamic blog child page");
  assert.equal(exists("app/works/[slug]/page.tsx"), true, "expected dynamic work child page");
});
