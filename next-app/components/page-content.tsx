"use client";

import Link from "next/link";
import parse, { attributesToProps, domToReact, type DOMNode, type Element, type HTMLReactParserOptions } from "html-react-parser";
import { useEffect, useState } from "react";
import type { PageRecord } from "@/lib/content";

const htmlRouteMap: Record<string, string> = {
  "index-main.html": "/",
  "index.html": "/landing",
  "index-software-development-company.html": "/software-development-company",
  "index-freelancer-portfolio.html": "/freelancer-portfolio",
  "index-digital-agency.html": "/digital-agency",
  "index-creative-design-studio.html": "/creative-design-studio",
  "index-personal-portfolio.html": "/personal-portfolio",
  "index-web-agency.html": "/web-agency",
  "index-creative-developer.html": "/creative-developer",
  "index-designer.html": "/designer",
  "works-simple.html": "/works",
  "works-masonry.html": "/works/masonry",
  "project-details.html": "/project-details",
  "about-me.html": "/about-me",
  "about-us.html": "/about-us",
  "services.html": "/services",
  "team.html": "/team",
  "pricing.html": "/pricing",
  "faq.html": "/faq",
  "contact.html": "/contact",
  "blog-standard.html": "/blog",
  "blog-creative.html": "/blog/creative",
  "blog-article.html": "/blog/article",
  "404.html": "/not-found"
};

function cleanHref(href: string | undefined) {
  if (!href) return href;
  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#") || href.startsWith("http")) {
    return href;
  }
  const [path, hash = ""] = href.split("#");
  const mapped = htmlRouteMap[path] ?? path;
  return hash ? `${mapped}#${hash}` : mapped;
}

function FormWithMessage({
  children,
  props
}: {
  children: React.ReactNode;
  props: Record<string, unknown>;
}) {
  const [message, setMessage] = useState("");

  return (
    <form
      {...props}
      action={undefined}
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("This demo form is disabled in the Next.js rebuild.");
      }}
    >
      {children}
      {message ? <p className="form-status" role="status">{message}</p> : null}
    </form>
  );
}

export function PageContent({ record }: { record: PageRecord }) {
  useEffect(() => {
    const frames: number[] = [];
    Object.entries(record.counters).forEach(([id, counter]) => {
      const element = document.getElementById(id);
      if (!element) return;
      const duration = 900;
      const startedAt = performance.now();
      const tick = (time: number) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(counter.value * eased)}${counter.suffix}`;
        if (progress < 1) {
          frames.push(requestAnimationFrame(tick));
        }
      };
      frames.push(requestAnimationFrame(tick));
    });
    return () => frames.forEach((frame) => cancelAnimationFrame(frame));
  }, [record]);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const node = domNode as Element;
      if (node.type !== "tag") return undefined;
      const props = attributesToProps(node.attribs ?? {}) as Record<string, unknown>;
      const children = domToReact(node.children as DOMNode[], options);

      if (node.name === "a") {
        const originalHref = typeof node.attribs?.href === "string" ? node.attribs.href : undefined;
        const href = cleanHref(originalHref);
        if (!href) {
          return <span {...props}>{children}</span>;
        }
        if (href.startsWith("/") && !href.startsWith("//")) {
          return (
            <Link {...props} href={href}>
              {children}
            </Link>
          );
        }
        return (
          <a {...props} href={href}>
            {children}
          </a>
        );
      }

      if (node.name === "form") {
        return <FormWithMessage props={props}>{children}</FormWithMessage>;
      }

      if (node.name === "img") {
        const src = typeof node.attribs?.src === "string" ? node.attribs.src : undefined;
        return <img {...props} src={src?.replace(/^img\//, "/img/")} alt={typeof props.alt === "string" ? props.alt : ""} />;
      }

      if (node.name === "source") {
        const src = typeof node.attribs?.src === "string" ? node.attribs.src : undefined;
        return <source {...props} src={src?.replace(/^video\//, "/video/").replace(/^img\//, "/img/")} />;
      }

      return undefined;
    }
  };

  return <>{parse(record.html, options)}</>;
}
