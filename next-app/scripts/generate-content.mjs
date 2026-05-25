import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "htmlparser2";

const root = path.resolve(process.cwd(), "..");
const sourceDir = path.join(root, "app");
const appDir = path.resolve(process.cwd(), "app");

const pages = [
  ["home", "index-main.html", ""],
  ["about", "about-us.html", "about"],
  ["services", "services.html", "services"],
  ["works", "works-simple.html", "works"],
  ["workDetail", "project-details.html", "works/[slug]"],
  ["team", "team.html", "team"],
  ["faq", "faq.html", "faq"],
  ["contact", "contact.html", "contact"],
  ["blog", "blog-standard.html", "blog"],
  ["blogCreative", "blog-creative.html", "blog/creative"],
  ["blogArticle", "blog-article.html", "blog/article"],
  ["blogDetail", "blog-article.html", "blog/[slug]"],
  ["privacyPolicy", "privacy-policy.html", "privacy-policy"],
  ["termsConditions", "terms-conditions.html", "terms-conditions"],
  ["shippingReturns", "shipping-returns.html", "shipping-returns"],
  ["notFound", "404.html", "404"]
];

const manualRoutes = new Set([""]);

const routeMap = new Map([
  ["index-main.html", "/"],
  ["index.html", "/"],
  ["index-software-development-company.html", "/"],
  ["index-freelancer-portfolio.html", "/"],
  ["index-digital-agency.html", "/"],
  ["index-creative-design-studio.html", "/"],
  ["index-personal-portfolio.html", "/"],
  ["index-web-agency.html", "/"],
  ["index-creative-developer.html", "/"],
  ["index-designer.html", "/"],
  ["works-simple.html", "/works"],
  ["works-masonry.html", "/works"],
  ["project-details.html", "/works/project-details"],
  ["about-me.html", "/about"],
  ["about-us.html", "/about"],
  ["services.html", "/services"],
  ["team.html", "/team"],
  ["pricing.html", "/services"],
  ["faq.html", "/faq"],
  ["contact.html", "/contact"],
  ["blog-standard.html", "/blog"],
  ["blog-creative.html", "/blog/creative"],
  ["blog-article.html", "/blog/article"],
  ["privacy-policy.html", "/privacy-policy"],
  ["terms-conditions.html", "/terms-conditions"],
  ["shipping-returns.html", "/shipping-returns"],
  ["404.html", "/404"]
]);

const attrNameMap = new Map([
  ["accept-charset", "acceptCharset"],
  ["accesskey", "accessKey"],
  ["allowfullscreen", "allowFullScreen"],
  ["autocomplete", "autoComplete"],
  ["autofocus", "autoFocus"],
  ["autoplay", "autoPlay"],
  ["cellpadding", "cellPadding"],
  ["cellspacing", "cellSpacing"],
  ["charset", "charSet"],
  ["class", "className"],
  ["colspan", "colSpan"],
  ["contenteditable", "contentEditable"],
  ["crossorigin", "crossOrigin"],
  ["datetime", "dateTime"],
  ["enctype", "encType"],
  ["fill-rule", "fillRule"],
  ["for", "htmlFor"],
  ["frameborder", "frameBorder"],
  ["maxlength", "maxLength"],
  ["method", "method"],
  ["minlength", "minLength"],
  ["novalidate", "noValidate"],
  ["playsinline", "playsInline"],
  ["readonly", "readOnly"],
  ["referrerpolicy", "referrerPolicy"],
  ["rowspan", "rowSpan"],
  ["spellcheck", "spellCheck"],
  ["stroke-linecap", "strokeLinecap"],
  ["stroke-linejoin", "strokeLinejoin"],
  ["stroke-miterlimit", "strokeMiterlimit"],
  ["stroke-width", "strokeWidth"],
  ["tabindex", "tabIndex"],
  ["viewbox", "viewBox"],
  ["xlink:href", "xlinkHref"],
  ["xmlns:xlink", "xmlnsXlink"],
  ["xml:space", "xmlSpace"]
]);

const booleanAttrs = new Set([
  "allowFullScreen",
  "async",
  "autoFocus",
  "autoPlay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "hidden",
  "loop",
  "multiple",
  "muted",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "selected"
]);

const numericAttrs = new Set([
  "cols",
  "maxLength",
  "minLength",
  "rows",
  "size",
  "span",
  "tabIndex"
]);

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

const tagNameMap = new Map([
  ["textpath", "textPath"]
]);

function extractBlock(html, tagName) {
  const start = html.search(new RegExp(`<${tagName}\\b`, "i"));
  if (start === -1) return "";
  const close = `</${tagName}>`;
  const end = html.toLowerCase().indexOf(close, start);
  if (end === -1) return "";
  return html.slice(start, end + close.length);
}

function extractFloatingImage(html, mainStart) {
  const marker = '<div class="mxd-floating-img';
  const start = html.indexOf(marker);
  if (start === -1 || start > mainStart) return "";
  const end = html.indexOf("<!-- Floating Image Background End -->", start);
  if (end === -1) return "";
  return html.slice(start, end);
}

function extractCounters(html) {
  const counters = {};
  const pattern = /new\s+countUp\.CountUp\("([^"]+)",\s*([0-9.]+),\s*(options(?:Plus|Percent)?)/g;
  for (const match of html.matchAll(pattern)) {
    counters[match[1]] = {
      value: Number(match[2]),
      suffix: match[3] === "optionsPercent" ? "%" : "+"
    };
  }
  return counters;
}

function rewriteUrl(value) {
  if (!value) return value;
  if (value.startsWith("img/")) return `/${value}`;
  if (value.startsWith("video/")) return `/${value}`;

  const match = value.match(/^([^?#]+\.html)(#[^?]*)?(\?.*)?$/);
  if (!match) return value;

  const [, file, hash = "", query = ""] = match;
  return `${routeMap.get(file) ?? file}${hash}${query}`;
}

function normalizeAttrName(name) {
  const lower = name.toLowerCase();
  if (lower.startsWith("data-") || lower.startsWith("aria-")) return lower;
  if (attrNameMap.has(lower)) return attrNameMap.get(lower);
  if (lower.includes("-")) {
    return lower.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
  }
  return name;
}

function normalizeAttrValue(rawName, jsxName, value) {
  if (jsxName === "d") {
    return value.replace(/[\r\n]\s*/g, " ").trim();
  }
  if (["href", "src", "poster", "action"].includes(rawName.toLowerCase())) {
    return rewriteUrl(value).replace(/mail\.php$/i, "#");
  }
  if (jsxName === "target" && value === "_blank") return value;
  return value;
}

function cssPropertyToJs(property) {
  const trimmed = property.trim();
  if (trimmed.startsWith("--")) return JSON.stringify(trimmed);
  return trimmed.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

function styleToJsx(value) {
  const entries = value
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const colon = entry.indexOf(":");
      if (colon === -1) return "";
      const property = cssPropertyToJs(entry.slice(0, colon));
      const styleValue = entry.slice(colon + 1).trim();
      return `${property}: ${JSON.stringify(styleValue)}`;
    })
    .filter(Boolean);

  if (!entries.length) return undefined;
  return `{({ ${entries.join(", ")} }) as CSSProperties}`;
}

function renderAttributes(attribs = {}) {
  return Object.entries(attribs)
    .filter(([name]) => !["href", "src"].includes(name.toLowerCase()) || !/^(css|js)\//.test(attribs[name]))
    .map(([name, rawValue]) => {
      const jsxName = normalizeAttrName(name);
      const value = normalizeAttrValue(name, jsxName, rawValue ?? "");

      if (jsxName === "style") {
        const style = styleToJsx(value);
        return style ? ` style=${style}` : "";
      }

      if (booleanAttrs.has(jsxName)) {
        return ` ${jsxName}`;
      }

      if (numericAttrs.has(jsxName) && /^-?\d+(\.\d+)?$/.test(value)) {
        return ` ${jsxName}={${Number(value)}}`;
      }

      return ` ${jsxName}=${JSON.stringify(value)}`;
    })
    .join("");
}

function renderText(value, depth) {
  if (!value || !value.trim()) return "";
  return `${"  ".repeat(depth)}{${JSON.stringify(value)}}\n`;
}

function renderNode(node, depth) {
  if (node.type === "text") return renderText(node.data, depth);
  if (node.type === "comment" || node.type === "directive") return "";
  if (node.type !== "tag" && node.type !== "script" && node.type !== "style") return "";

  const tagName = node.name === "form" ? "DemoForm" : (tagNameMap.get(node.name) ?? node.name);
  const attrs = renderAttributes(node.attribs);
  const children = node.children ?? [];
  const indent = "  ".repeat(depth);

  if (!children.length || voidElements.has(node.name)) {
    return `${indent}<${tagName}${attrs} />\n`;
  }

  const renderedChildren = children.map((child) => renderNode(child, depth + 1)).join("");
  return `${indent}<${tagName}${attrs}>\n${renderedChildren}${indent}</${tagName}>\n`;
}

function renderNodes(nodes, depth) {
  return nodes.map((node) => renderNode(node, depth)).join("");
}

function readPageFragment(file) {
  const html = fs.readFileSync(path.join(sourceDir, file), "utf8");
  const mainStart = html.search(/<main\b/i);
  const prefix = extractFloatingImage(html, mainStart);
  const main = extractBlock(html, "main");
  const footer = extractBlock(html, "footer");
  return {
    html,
    fragment: `${prefix}${main}${footer}`,
    counters: extractCounters(html)
  };
}

function pageComponent(file) {
  const { fragment, counters } = readPageFragment(file);
  const document = parseDocument(fragment, { decodeEntities: true });
  const jsx = renderNodes(document.children, 3);

  return `"use client";

// Source: ../../app/${file}

import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = ${JSON.stringify(counters, null, 2)} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
${jsx}    </>
  );
}
`;
}

for (const [_key, file, route] of pages) {
  if (manualRoutes.has(route)) continue;

  const dir = route ? path.join(appDir, route) : appDir;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), pageComponent(file));
}

const notFoundPage = `import NotFoundPage from "@/app/404/page";

export default function NotFound() {
  return <NotFoundPage />;
}
`;
fs.writeFileSync(path.join(appDir, "not-found.tsx"), notFoundPage);
