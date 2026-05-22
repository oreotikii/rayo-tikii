"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import parse, { attributesToProps, domToReact, type DOMNode, type Element, type HTMLReactParserOptions } from "html-react-parser";
import { useEffect, useState, type ElementType } from "react";
import BorderGlow from "@/components/border-glow";

export type CounterRecord = { value: number; suffix: string };
export type PageRecord = { source: string; html: string; counters: Record<string, CounterRecord> };

const ThreeModelStage = dynamic(() => import("@/components/three-model-stage").then((mod) => mod.ThreeModelStage), {
  ssr: false
});

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

const landingCardGlowClasses = new Set([
  "mxd-stats-cards__inner",
  "mxd-services-stack__inner",
  "mxd-testimonials-card",
  "mxd-partners-cards__inner",
  "mxd-blog-preview__media",
  "footer-blocks__card"
]);

function getClassNames(className: unknown) {
  return typeof className === "string" ? className.split(/\s+/).filter(Boolean) : [];
}

function hasClass(classNames: string[], className: string) {
  return classNames.includes(className);
}

function shouldApplyBorderGlow(source: string, nodeName: string, classNames: string[]) {
  return source === "index-main.html" && (nodeName === "div" || nodeName === "a") && classNames.some((className) => landingCardGlowClasses.has(className));
}

function getBorderGlowProps(classNames: string[]) {
  const backgroundColor = hasClass(classNames, "bg-accent")
    ? "var(--accent)"
    : hasClass(classNames, "bg-base-opp")
      ? "var(--base-opp)"
      : hasClass(classNames, "bg-additional")
        ? "var(--additional)"
        : "var(--base-tint)";
  const borderRadius = hasClass(classNames, "radius-l") || hasClass(classNames, "mxd-services-stack__inner")
    ? "var(--_radius-l)"
    : "var(--_radius-m)";

  return {
    edgeSensitivity: 24,
    glowColor: hasClass(classNames, "bg-accent") ? "265 72 72" : "72 85 66",
    backgroundColor,
    borderRadius,
    glowRadius: 34,
    glowIntensity: 0.85,
    coneSpread: 24,
    fillOpacity: hasClass(classNames, "bg-base-opp") ? 0.18 : 0.26,
    colors: ["#ddf160", "#9f8be7", "#38bdf8"]
  };
}

function numberFromAttribute(value: string | undefined, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function booleanFromAttribute(value: string | undefined, fallback: boolean) {
  if (value === undefined) return fallback;
  return value !== "false";
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
      const classNames = getClassNames(props.className);

      if (node.name === "div" && node.attribs?.["data-three-model"] !== undefined) {
        return (
          <ThreeModelStage
            src={node.attribs["data-three-model"] || undefined}
            scale={numberFromAttribute(node.attribs["data-three-scale"], 1)}
            rotationSpeed={numberFromAttribute(node.attribs["data-three-rotation-speed"], 0.22)}
            autoRotate={booleanFromAttribute(node.attribs["data-three-auto-rotate"], true)}
            controls={booleanFromAttribute(node.attribs["data-three-controls"], true)}
            float={booleanFromAttribute(node.attribs["data-three-float"], true)}
            shadows={booleanFromAttribute(node.attribs["data-three-shadows"], true)}
            animateLights={booleanFromAttribute(node.attribs["data-three-animate-lights"], true)}
            materialFinish={node.attribs["data-three-material"] === "chrome" ? "chrome" : "original"}
            backgroundColor={node.attribs["data-three-transparent"] === "true" ? null : undefined}
            transparent={node.attribs["data-three-transparent"] === "true"}
            ambientLightIntensity={numberFromAttribute(node.attribs["data-three-ambient-light-intensity"], 0.72)}
            keyLightIntensity={numberFromAttribute(node.attribs["data-three-key-light-intensity"], 5.2)}
            fillLightIntensity={numberFromAttribute(node.attribs["data-three-fill-light-intensity"], 2.1)}
            className={typeof props.className === "string" ? props.className : undefined}
          />
        );
      }

      if (shouldApplyBorderGlow(record.source, node.name, classNames)) {
        const href = node.name === "a" ? cleanHref(typeof node.attribs?.href === "string" ? node.attribs.href : undefined) : undefined;
        const Component = (node.name === "a" && href?.startsWith("/") && !href.startsWith("//") ? Link : node.name) as ElementType;
        const glowElementProps: Record<string, unknown> = {
          ...props,
          ...getBorderGlowProps(classNames),
          as: Component
        };

        if (node.name === "a") {
          glowElementProps.href = href;
        }

        return <BorderGlow {...glowElementProps}>{children}</BorderGlow>;
      }

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
