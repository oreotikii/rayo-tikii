import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "..");
const sourceDir = path.join(root, "app");
const appDir = path.resolve(process.cwd(), "app");
const libDir = path.resolve(process.cwd(), "lib");

const pages = [
  ["home", "index-main.html", ""],
  ["landing", "index.html", "landing"],
  ["softwareDevelopmentCompany", "index-software-development-company.html", "software-development-company"],
  ["freelancerPortfolio", "index-freelancer-portfolio.html", "freelancer-portfolio"],
  ["digitalAgency", "index-digital-agency.html", "digital-agency"],
  ["creativeDesignStudio", "index-creative-design-studio.html", "creative-design-studio"],
  ["personalPortfolio", "index-personal-portfolio.html", "personal-portfolio"],
  ["webAgency", "index-web-agency.html", "web-agency"],
  ["creativeDeveloper", "index-creative-developer.html", "creative-developer"],
  ["designer", "index-designer.html", "designer"],
  ["works", "works-simple.html", "works"],
  ["worksMasonry", "works-masonry.html", "works/masonry"],
  ["projectDetails", "project-details.html", "project-details"],
  ["aboutMe", "about-me.html", "about-me"],
  ["aboutUs", "about-us.html", "about-us"],
  ["services", "services.html", "services"],
  ["team", "team.html", "team"],
  ["pricing", "pricing.html", "pricing"],
  ["faq", "faq.html", "faq"],
  ["contact", "contact.html", "contact"],
  ["blog", "blog-standard.html", "blog"],
  ["blogCreative", "blog-creative.html", "blog/creative"],
  ["blogArticle", "blog-article.html", "blog/article"],
  ["notFound", "404.html", "not-found"]
];

const routeMap = new Map([
  ["index-main.html", "/"],
  ["index.html", "/landing"],
  ["index-software-development-company.html", "/software-development-company"],
  ["index-freelancer-portfolio.html", "/freelancer-portfolio"],
  ["index-digital-agency.html", "/digital-agency"],
  ["index-creative-design-studio.html", "/creative-design-studio"],
  ["index-personal-portfolio.html", "/personal-portfolio"],
  ["index-web-agency.html", "/web-agency"],
  ["index-creative-developer.html", "/creative-developer"],
  ["index-designer.html", "/designer"],
  ["works-simple.html", "/works"],
  ["works-masonry.html", "/works/masonry"],
  ["project-details.html", "/project-details"],
  ["about-me.html", "/about-me"],
  ["about-us.html", "/about-us"],
  ["services.html", "/services"],
  ["team.html", "/team"],
  ["pricing.html", "/pricing"],
  ["faq.html", "/faq"],
  ["contact.html", "/contact"],
  ["blog-standard.html", "/blog"],
  ["blog-creative.html", "/blog/creative"],
  ["blog-article.html", "/blog/article"],
  ["404.html", "/not-found"]
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

function rewriteLocalUrls(html) {
  let output = html;
  output = output.replace(/\s(?:href|src)=["'](?:css|js)\/[^"']+["']/g, "");
  output = output.replace(/(href|src|poster)=["']img\//g, '$1="/img/');
  output = output.replace(/(href|src|poster)=["']video\//g, '$1="/video/');
  output = output.replace(/\baction=["'][^"']*mail\.php["']/g, 'action="#"');
  output = output.replace(/\b(href|src)=["']([^"']+\.html)(#[^"']*)?["']/g, (_match, attr, file, hash = "") => {
    return `${attr}="${routeMap.get(file) ?? file}${hash}"`;
  });
  output = output.replace(/<!--[\s\S]*?-->/g, "");
  output = output.replace(/\s+/g, " ");
  return output.trim();
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

fs.mkdirSync(libDir, { recursive: true });

const records = {};
for (const [key, file] of pages) {
  const html = fs.readFileSync(path.join(sourceDir, file), "utf8");
  const mainStart = html.search(/<main\b/i);
  const prefix = extractFloatingImage(html, mainStart);
  const main = extractBlock(html, "main");
  const footer = extractBlock(html, "footer");
  records[key] = {
    source: file,
    html: rewriteLocalUrls(`${prefix}${main}${footer}`),
    counters: extractCounters(html)
  };
}

const content = `export type CounterRecord = { value: number; suffix: string };
export type PageRecord = { source: string; html: string; counters: Record<string, CounterRecord> };

export const pages = ${JSON.stringify(records, null, 2)} as const satisfies Record<string, PageRecord>;

export type PageKey = keyof typeof pages;
`;

fs.writeFileSync(path.join(libDir, "content.ts"), content);

for (const [key, _file, route] of pages) {
  const dir = route ? path.join(appDir, route) : appDir;
  fs.mkdirSync(dir, { recursive: true });
  const page = `import { RayoPage } from "@/components/rayo-page";

export default function Page() {
  return <RayoPage pageKey="${key}" />;
}
`;
  fs.writeFileSync(path.join(dir, "page.tsx"), page);
}

const notFoundPage = `import { RayoPage } from "@/components/rayo-page";

export default function NotFound() {
  return <RayoPage pageKey="notFound" />;
}
`;
fs.writeFileSync(path.join(appDir, "not-found.tsx"), notFoundPage);
