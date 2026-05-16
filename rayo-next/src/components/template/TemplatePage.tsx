import fs from 'node:fs';
import path from 'node:path';
import TemplateInlineScripts from './TemplateInlineScripts';

type TemplatePageProps = {
  filename: string;
};

const htmlRouteMap: Record<string, string> = {
  '404.html': '/not-found',
  'about-me.html': '/about/me',
  'about-us.html': '/about',
  'blog-article.html': '/blog/article',
  'blog-creative.html': '/blog/creative',
  'blog-standard.html': '/blog',
  'contact.html': '/contact',
  'faq.html': '/faq',
  'index.html': '/landing',
  'index-creative-design-studio.html': '/home/creative-design-studio',
  'index-creative-developer.html': '/home/creative-developer',
  'index-designer.html': '/home/designer',
  'index-digital-agency.html': '/home/digital-agency',
  'index-freelancer-portfolio.html': '/home/freelancer-portfolio',
  'index-main.html': '/',
  'index-personal-portfolio.html': '/home/personal-portfolio',
  'index-software-development-company.html': '/home/software-development',
  'index-web-agency.html': '/home/web-agency',
  'pricing.html': '/pricing',
  'project-details.html': '/works/project-details',
  'services.html': '/services',
  'team.html': '/team',
  'works-masonry.html': '/works/masonry',
  'works-simple.html': '/works',
};

const contentDirectory = path.join(process.cwd(), 'src/content/pages');

function extractBody(html: string) {
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  const scripts: string[] = [];

  const withoutScripts = body.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (_match, attrs: string, script: string) => {
      if (/\bsrc=/i.test(attrs)) {
        return '';
      }

      const trimmed = script.trim();
      if (trimmed) {
        scripts.push(trimmed);
      }

      return '';
    }
  );

  return {
    html: rewriteTemplatePaths(withoutScripts),
    scripts,
  };
}

function rewriteTemplatePaths(html: string) {
  return html
    .replace(
      /\b(href|src|poster)=("|\')((?:img|video|css|js|fonts)\/[^"\']+)\2/g,
      (_match, attribute: string, quote: string, value: string) =>
        `${attribute}=${quote}/${value}${quote}`
    )
    .replace(
      /\b(href)=("|\')([^"\']+\.html)(#[^"\']*)?\2/g,
      (_match, attribute: string, quote: string, file: string, hash = '') => {
        const route = htmlRouteMap[file] ?? `/${file.replace(/\.html$/, '')}`;
        return `${attribute}=${quote}${route}${hash}${quote}`;
      }
    )
    .replace(/url\(("|')?(img|video|fonts)\//g, 'url($1/$2/');
}

export function TemplatePage({ filename }: TemplatePageProps) {
  const filePath = path.join(contentDirectory, filename);
  const source = fs.readFileSync(filePath, 'utf8');
  const { html, scripts } = extractBody(source);

  return (
    <>
      <div
        className="rayo-template-page"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <TemplateInlineScripts scripts={scripts} />
    </>
  );
}
