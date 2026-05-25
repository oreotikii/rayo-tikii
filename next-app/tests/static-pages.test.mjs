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
  const source = read("app/page.tsx");
  const wordmarkMatch = source.match(/<svg className="mxd-footer__svg-v2"[\s\S]*?<\/svg>/);

  assert.notEqual(wordmarkMatch, null, "expected home page footer wordmark SVG");

  const wordmark = wordmarkMatch[0];
  assert.equal(wordmark.includes('viewBox="0 0 400.26 72"'), true, "wordmark should keep the full-width footer viewBox");
  assert.equal(wordmark.includes('fontSize="86"'), true, "tikii wordmark should use larger type");
  assert.equal(wordmark.includes('letterSpacing="56"'), true, "tikii wordmark should use tracking instead of glyph stretching");
  assert.equal(wordmark.includes("textLength="), false, "tikii wordmark should not horizontally stretch glyphs");
  assert.equal(wordmark.includes("lengthAdjust="), false, "tikii wordmark should not use SVG glyph stretching");
  assert.equal(wordmark.includes(">tikii<"), true, "wordmark should read tikii in lowercase");
  assert.equal(wordmark.includes("rayostudio"), false, "wordmark should not use the old Rayo text");
});

test("blog and portfolio sections have child route scaffolding", () => {
  assert.equal(exists("lib/blogs.ts"), true, "expected lib/blogs.ts to exist");
  assert.equal(exists("lib/portfolio.ts"), true, "expected lib/portfolio.ts to exist");
  assert.equal(exists("app/blog/[slug]/page.tsx"), true, "expected dynamic blog child page");
  assert.equal(exists("app/works/[slug]/page.tsx"), true, "expected dynamic work child page");
});
