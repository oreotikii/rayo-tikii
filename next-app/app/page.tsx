"use client";

import { TikiiFooter } from "@/components/tikii-footer";
import Link from "next/link";
import { useEffect, useState, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import BorderGlow from "@/components/border-glow";
import Noise from "@/components/noise";

const homeCounters = {
  "stats-counter-1": {
    value: 131,
    suffix: "+"
  },
  "stats-counter-2": {
    value: 82,
    suffix: "%"
  },
  "stats-counter-3": {
    value: 9,
    suffix: "+"
  },
  "stats-counter-4": {
    value: 5,
    suffix: ""
  }
} as const;

const landingCardGlowClasses = new Set([
  "mxd-stats-cards__inner",
  "mxd-services-stack__inner",
  "mxd-testimonials-card",
  "mxd-partners-cards__glow",
  "mxd-blog-preview__media",
  "footer-blocks__card"
]);

const selectedClientLogos = [
  {
    name: "Samilton",
    src: "/img/tikii/clients/tikii-client-samilton-logo.png",
    alt: "Samilton client logo"
  },
  {
    name: "Premiere Realty",
    src: "/img/tikii/clients/tikii-client-premiere-realty-logo.png",
    alt: "Premiere Realty client logo"
  },
  {
    name: "NMC Tools",
    src: "/img/tikii/clients/tikii-client-nmc-tools-logo.png",
    alt: "NMC Tools client logo"
  },
  {
    name: "Fanatic",
    src: "/img/tikii/clients/tikii-client-fanatic-logo.png",
    alt: "Fanatic client logo"
  },
  {
    name: "Chandrani Pearls",
    src: "/img/tikii/clients/tikii-client-chandrani-pearls-logo.png",
    alt: "Chandrani Pearls client logo"
  },
  {
    name: "Anvil",
    src: "/img/tikii/clients/tikii-client-anvil-logo.png",
    alt: "Anvil client logo"
  },
  {
    name: "Anuschka",
    src: "/img/tikii/clients/tikii-client-anuschka-logo.png",
    alt: "Anuschka client logo"
  },
  {
    name: "Absorbia",
    src: "/img/tikii/clients/tikii-client-absorbia-logo.png",
    alt: "Absorbia client logo"
  }
] as const;

type RayoLinkProps = ComponentPropsWithoutRef<"a">;

function RayoLink({ href, children, ...props }: RayoLinkProps) {
  const hrefValue = typeof href === "string" ? href : "";

  if (hrefValue.startsWith("/") && !hrefValue.startsWith("//")) {
    return (
      <Link {...props} href={hrefValue}>
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

type DemoFormProps = ComponentPropsWithoutRef<"form">;

function DemoForm({ children, ...props }: DemoFormProps) {
  const [message, setMessage] = useState("");

  return (
    <form
      {...props}
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

function getClassNames(className: unknown) {
  return typeof className === "string" ? className.split(/\s+/).filter(Boolean) : [];
}

function hasClass(classNames: string[], className: string) {
  return classNames.includes(className);
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

type HomeBorderGlowProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>;

function HomeBorderGlow({ as = "div", className = "", children, ...props }: HomeBorderGlowProps) {
  const classNames = getClassNames(className);
  const shouldApplyGlow = classNames.some((className) => landingCardGlowClasses.has(className));

  if (!shouldApplyGlow) {
    const Component = as as ElementType<{ className?: string; children?: ReactNode } & Record<string, unknown>>;
    return <Component className={className} {...props}>{children}</Component>;
  }

  return (
    <BorderGlow {...props} {...getBorderGlowProps(classNames)} as={as} className={className}>
      {children}
    </BorderGlow>
  );
}

function useHomeCounters() {
  useEffect(() => {
    const frames: number[] = [];

    Object.entries(homeCounters).forEach(([id, counter]) => {
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
  }, []);
}

export default function Page() {
  useHomeCounters();

  return (
    <>
    <main id="mxd-page-content" className="mxd-page-content">
      <div className="mxd-section mxd-hero-section mxd-hero-fullheight">
        <div className="mxd-hero-01">
          <div className="mxd-hero-01__wrap loading-wrap px-0">
            <div className="mxd-hero-01__top justify-content-start">
              <div className="mxd-hero-01__title-wrap w-100">
                <div className="mxd-hero-01__images mxd-floating-img">
                  <div className="hero-01-image image-01 mxd-floating-img__item loading__fade">
                    <img className="mxd-pulse" src="/img/tikii/hero-metal-bloom.png" alt="Tikii metallic bloom illustration" />
                    <div className="tikii-hero-artwork-noise tikii-hero-artwork-noise--metal" aria-hidden="true">
                      <Noise
                        patternSize={500}
                        patternScaleX={1}
                        patternScaleY={1}
                        patternRefreshInterval={2}
                        patternAlpha={10}
                      />
                    </div>
                  </div>
                  <div className="hero-01-image image-02 hero-creative-image mxd-floating-img__item loading__fade">
                    <img className="mxd-move" src="/img/tikii/hero-creative-systems.png" alt="Tikii creative systems illustration" />
                    <div className="tikii-hero-artwork-noise tikii-hero-artwork-noise--creative" aria-hidden="true">
                      <Noise
                        patternSize={500}
                        patternScaleX={1}
                        patternScaleY={1}
                        patternRefreshInterval={2}
                        patternAlpha={10}
                      />
                    </div>
                  </div>
                </div>
                <div className="mxd-hero-01__marquee loading__item">
                  <div className="marquee marquee-right--gsap">
                    <div className="marquee__toright marquee-flex">
                      <div className="marquee__item item-regular text">
                        <p>
                          tech
                        </p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                          <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                             c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                             C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                             c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                             s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                             c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                             "></path>
                        </svg>
                      </div>
                      <div className="marquee__item item-regular text">
                        <p>
                          tech
                        </p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                          <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                             c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                             C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                             c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                             s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                             c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                             "></path>
                        </svg>
                      </div>
                      <div className="marquee__item item-regular text">
                        <p>
                          tech
                        </p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                          <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                             c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                             C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                             c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                             s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                             c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                             "></path>
                        </svg>
                      </div>
                      <div className="marquee__item item-regular text">
                        <p>
                          tech
                        </p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                          <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                             c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                             C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                             c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                             s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                             c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                             "></path>
                        </svg>
                      </div>
                      <div className="marquee__item item-regular text">
                        <p>
                          tech
                        </p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                          <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                             c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                             C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                             c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                             s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                             c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                             "></path>
                        </svg>
                      </div>
                      <div className="marquee__item item-regular text">
                        <p>
                          tech
                        </p>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                          <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                             c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                             c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                             C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                             c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                             s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                             c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                             "></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="hero-01-title">
                  <span className="hero-01-title__row loading__item text-start justify-content-start align-items-start">
                    <em className="hero-01-title__item">
                      Design,
                    </em>
                    <em className="hero-01-title__item title-item-transparent">
                      tech
                    </em>
                  </span>
                  <span className="hero-01-title__row loading__item text-start justify-content-start align-items-start">
                    <em className="hero-01-title__item title-item-image">
                      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                        <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z"></path>
                      </svg>
                    </em>
                    <em className="hero-01-title__item">
                      and some magic
                    </em>
                  </span>
                </h1>
              </div>
            </div>
            <div className="mxd-hero-01__bottom">
              <div className="mxd-hero-01__data-wrap">
                <div className="mxd-hero-01__dash-line dash-line loading__fade"></div>
                <div className="mxd-hero-01__data-btn loading__fade">
                  <RayoLink href="#projects" className="btn-rotating btn-rotating-120-160">
                    <svg version="1.1" id="scrollDown" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" xmlSpace="preserve" className="btn-rotating__text animate-rotation" data-value="360">
                      <defs>
                        <path id="textPath" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"></path>
                      </defs>
                      <g>
                        <use xlinkHref="#textPath" fill="none"></use>
                        <text>
                          <textPath xlinkHref="#textPath">
                            {"Scroll for More * Scroll for More * Scroll for More * "}
                          </textPath>
                        </text>
                      </g>
                    </svg>
                    <img className="btn-rotating__image" src="/img/tikii/hero-scroll-token.png" alt="Tikii scroll token" />
                  </RayoLink>
                </div>
                <div className="mxd-hero-01__data-descr loading__fade">
                  <p className="t-bright">
                    {"We are a creative digital agency specializing in innovative                      design and cutting-edge development."}
                  </p>
                </div>
                <div className="mxd-hero-01__data-socials loading__fade">
                  <ul>
                    <li>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                           c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                           c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                           C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                           c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                           s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                           c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                           "></path>
                      </svg>
                      <RayoLink href="https://www.instagram.com/tikii.in" target="_blank">
                        Instagram
                      </RayoLink>
                    </li>
                    <li>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                           c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                           c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                           C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                           c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                           s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                           c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                           "></path>
                      </svg>
                      <RayoLink href="https://www.behance.net/tikii_in" target="_blank">
                        Behance
                      </RayoLink>
                    </li>
                    <li>
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                           c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                           c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                           C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                           c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                           s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                           c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                           "></path>
                      </svg>
                      <RayoLink href="https://www.linkedin.com/company/tikii" target="_blank">
                        Linkedin
                      </RayoLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mxd-hero-01__video-wrap loading__item">
                <video className="mxd-hero-01__video" preload="auto" autoPlay loop muted poster="/img/tikii/home/tikii-studio-planning.jpg">
                  <source type="video/mp4" src="/video/540x310_video.mp4" />
                  <source type="video/webm" src="/video/540x310_video.webm" />
                  <source type="video/ogv" src="/video/540x310_video.ogv" />
                </video>
                <div className="mxd-hero-01__video-btn">
                  <RayoLink id="showreel-trigger" className="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger" href="https://www.youtube.com/watch?v=RXidlUSBhMY" aria-label="Play">
                    <i className="ph-fill ph-play"></i>
                  </RayoLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-hero-01 padding-pre-manifest mobile-point-subtitle">
        <div className="mxd-container">
          <div className="mxd-divider">
            <div className="mxd-divider__image divider-image-1 parallax-img"></div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-pre-grid">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-manifest">
                    <p className="mxd-point-subtitle anim-uni-in-up">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                        <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2                           c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4                           c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2                           c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6                           c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4                           c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6                           c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
                      </svg>
                      <span>
                        Who we are
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__manifest">
                      <p className="mxd-manifest reveal-type anim-uni-in-up">
                        {"Tikii is a branding and marketing agency that treats design like a business tool, not a decorative garnish. We build identities, content, campaigns, websites, and commerce experiences that look sharp and work harder."}
                      </p>
                      <div className="mxd-manifest__controls anim-uni-in-up">
                        <RayoLink className="btn btn-anim btn-default btn-outline slide-right-up anim-uni-in-up" href="/contact">
                          <span className="btn-caption">
                            Tell us the brief
                          </span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-stats-cards">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <HomeBorderGlow className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                      <div className="mxd-counter align-end">
                        <p id="stats-counter-1" className="mxd-counter__number mxd-stats-number opposite">
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright opposite">
                          Satisfied clients who
                          <br />
                          trust the work
                        </p>
                      </div>
                      <div className="mxd-stats-cards__btngroup">
                        <RayoLink className="btn btn-anim btn-default btn-outline opposite slide-right-up" href="/about">
                          <span className="btn-caption">
                            Studio
                          </span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                        <img src="/img/tikii/home/tikii-studio-group.jpg" alt="Tikii studio team" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                  <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <HomeBorderGlow className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                      <div className="mxd-stats-cards__btngroup">
                        <div className="mxd-avatars">
                          <div className="mxd-avatars__item">
                            <img src="/img/tikii/home/tikii-portrait-nisheeth.jpg" alt="Client portrait" />
                          </div>
                          <div className="mxd-avatars__item bg-base-opp">
                            <svg className="mxd-avatars__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" xmlSpace="preserve">
                              <style>{`
                                .icon-star {
                                  fill:var(--additional);
                                }
                              `}</style>
                              <path className="icon-star" d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7                                 c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1                                 c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5                                 c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7                                 c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1                                 c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7                                 c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"></path>
                            </svg>
                          </div>
                          <div className="mxd-avatars__item">
                            <img src="/img/tikii/home/tikii-portrait-amit.jpg" alt="Client portrait" />
                          </div>
                        </div>
                      </div>
                      <div className="mxd-counter align-end">
                        <p id="stats-counter-2" className="mxd-counter__number mxd-stats-number">
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright">
                          Client referrals,
                          <br />
                          because good work travels
                        </p>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                        <img src="/img/tikii/home/tikii-studio-workshop.jpg" alt="Tikii client workshop" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                  <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                    <HomeBorderGlow className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                      <div className="mxd-counter">
                        <p id="stats-counter-3" className="mxd-counter__number mxd-stats-number">
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright">
                          Years of operations across brand, web, content, and performance
                        </p>
                      </div>
                      <div className="mxd-stats-cards__btngroup">
                        <RayoLink className="btn btn-anim btn-default btn-outline slide-right-down" href="/contact">
                          <span className="btn-caption">
                            Start a project
                          </span>
                          <i className="ph-bold ph-arrow-down-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                        <img src="/img/tikii/home/tikii-digital-tech-device.jpg" alt="Digital marketing workspace" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                  <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                    <HomeBorderGlow className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                      <div className="mxd-counter">
                        <p id="stats-counter-4" className="mxd-counter__number mxd-stats-number">
                          0
                        </p>
                        <p className="mxd-counter__descr t-140 t-bright">
                          Selected case studies,
                          <br />
                          from strategy to Shopify
                        </p>
                      </div>
                      <div className="mxd-stats-cards__btngroup">
                        <RayoLink className="btn btn-anim btn-default btn-outline slide-right-up" href="/works">
                          <span className="btn-caption">
                            Works
                          </span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                        <img src="/img/tikii/home/tikii-commerce-vedamorph-products.jpg" alt="Vedamorph commerce product shoot" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-mtext-pre-pinned">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee-right--gsap muted-extra">
              <div className="marquee__toright">
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Branding
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Content
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Marketing
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    E-commerce
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Websites
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="mxd-section padding-pre-stack">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-pinned-projects">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                    <div className="mxd-pinned-projects__static-inner no-margin">
                      <div className="mxd-section-title no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title anim-uni-in-up">
                                <h2 className="reveal-type">
                                  Selected
                                  <br />
                                  work
                                </h2>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__descr anim-uni-in-up">
                                <p>
                                  Real brands, real constraints,
                                  <br />
                                  and fewer strategy fog machines
                                </p>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__controls anim-uni-in-up">
                                <RayoLink className="btn btn-anim btn-default btn-outline slide-right-up" href="/works">
                                  <span className="btn-caption">
                                    See the work
                                  </span>
                                  <i className="ph-bold ph-arrow-up-right"></i>
                                </RayoLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                    <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                      <div className="mxd-project-item">
                        <RayoLink className="mxd-project-item__media anim-uni-in-up" href="/works/babylon">
                          <div className="mxd-project-item__preview preview-image-1 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Branding
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Brand guideline
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Product marketing
                            </span>
                          </div>
                        </RayoLink>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <RayoLink className="anim-uni-in-up" href="/works/babylon">
                              <span>
                                Babylon
                              </span>
                              {" - a gastronomic journey through time"}
                            </RayoLink>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-project-item">
                        <RayoLink className="mxd-project-item__media anim-uni-in-up" href="/works/vedamorph">
                          <div className="mxd-project-item__preview preview-image-2 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Art direction
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Branding
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Website design
                            </span>
                          </div>
                        </RayoLink>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <RayoLink className="anim-uni-in-up" href="/works/vedamorph">
                              <span>
                                Vedamorph
                              </span>
                              {" - natural luxury without the faux-spa fog"}
                            </RayoLink>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-project-item">
                        <RayoLink className="mxd-project-item__media" href="/works/young-learners-montessori-house">
                          <div className="mxd-project-item__preview preview-image-3 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Strategy
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Art direction
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Website design
                            </span>
                          </div>
                        </RayoLink>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <RayoLink href="/works/young-learners-montessori-house">
                              <span>
                                Young Learners' Montessori House
                              </span>
                              {" - revitalizing a legacy"}
                            </RayoLink>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-project-item">
                        <RayoLink className="mxd-project-item__media anim-uni-in-up" href="/works/chandrani-pearls-marketing">
                          <div className="mxd-project-item__preview preview-image-4 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Social media
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Performance marketing
                            </span>
                          </div>
                        </RayoLink>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <RayoLink className="anim-uni-in-up" href="/works/chandrani-pearls-marketing">
                              <span>
                                New Pearls
                              </span>
                              {" - a heritage brand learns the algorithm"}
                            </RayoLink>
                          </div>
                        </div>
                      </div>
                      <div className="mxd-project-item">
                        <RayoLink className="mxd-project-item__media anim-uni-in-up" href="/works/chandrani-pearls-shopify-switch">
                          <div className="mxd-project-item__preview preview-image-5 parallax-img-small"></div>
                          <div className="mxd-project-item__tags">
                            <span className="tag tag-default tag-permanent">
                              Shopify
                            </span>
                            <span className="tag tag-default tag-permanent">
                              UX/UI design
                            </span>
                            <span className="tag tag-default tag-permanent">
                              Website
                            </span>
                          </div>
                        </RayoLink>
                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <RayoLink className="anim-uni-in-up" href="/works/chandrani-pearls-shopify-switch">
                              <span>
                                Pearls and You
                              </span>
                              {" - from glitchy to global with a Shopify glow-up"}
                            </RayoLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-stacked-section">
        <div className="mxd-container grid-container">
          <div className="mxd-block mxd-grid-item no-margin">
            <div className="content__block">
              <div className="stack-wrapper in-content-stack">
                <div className="stack-offset"></div>
                <div className="services-stack">
                  <div className="stack-item">
                    <HomeBorderGlow className="mxd-services-stack__inner justify-between bg-base-opp">
                      <div className="mxd-services-stack__controls">
                        <RayoLink className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay" href="/services" aria-label="Services Page Link">
                          <i className="ph ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          Brand identities
                          <br />
                          people remember
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            Art direction
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Packaging
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Brand guidelines
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Logo systems
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Brand story
                          </span>
                        </div>
                        <p className="t-small-mobile t-opposite">
                          {"We turn positioning, visual language, and messaging into brand systems people can actually use after the launch deck is closed."}
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img className="service-img service-img-s" src="/img/tikii/home/tikii-branding-babylon-menu.jpg" alt="Babylon brand identity menu design" />
                        <img className="service-img service-img-m" src="/img/tikii/home/tikii-branding-babylon-menu.jpg" alt="Babylon brand identity menu design" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                  <div className="stack-item">
                    <HomeBorderGlow className="mxd-services-stack__inner justify-between bg-accent">
                      <div className="mxd-services-stack__controls">
                        <RayoLink className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay" href="/services" aria-label="Services Page Link">
                          <i className="ph ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          Content
                          <br />
                          that converts
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            Photography
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Graphic design
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Email marketing
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            WhatsApp marketing
                          </span>
                        </div>
                        <p className="t-small-mobile t-opposite">
                          {"Commercial photography, design, packaging, email, and WhatsApp work built to stop the scroll and move the buyer along."}
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img className="service-img service-img-s" src="/img/tikii/home/tikii-content-vedamorph-collection.jpg" alt="Vedamorph content photography" />
                        <img className="service-img service-img-m" src="/img/tikii/home/tikii-content-vedamorph-collection.jpg" alt="Vedamorph content photography" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                  <div className="stack-item">
                    <HomeBorderGlow className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                      <div className="mxd-services-stack__controls">
                        <RayoLink className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay" href="/services" aria-label="Services Page Link">
                          <i className="ph ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3>
                          Strategic
                          <br />
                          marketing
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline">
                            Social media
                          </span>
                          <span className="tag tag-default tag-outline">
                            Performance
                          </span>
                          <span className="tag tag-default tag-outline">
                            Product marketing
                          </span>
                          <span className="tag tag-default tag-outline">
                            Analytics
                          </span>
                        </div>
                        <p className="t-small-mobile">
                          {"No spaghetti-on-the-wall marketing. We use data, audience insight, and creative testing to find what deserves more budget."}
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img className="service-img service-img-s" src="/img/tikii/home/tikii-campaign-chandrani-hoarding.jpg" alt="Chandrani Pearls campaign hoarding" />
                        <img className="service-img service-img-m" src="/img/tikii/home/tikii-campaign-chandrani-hoarding.jpg" alt="Chandrani Pearls campaign hoarding" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                  <div className="stack-item">
                    <HomeBorderGlow className="mxd-services-stack__inner justify-between bg-base-opp">
                      <div className="mxd-services-stack__controls">
                        <RayoLink className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay" href="/services" aria-label="Services Page Link">
                          <i className="ph ph-arrow-up-right"></i>
                        </RayoLink>
                      </div>
                      <div className="mxd-services-stack__title width-60">
                        <h3 className="opposite">
                          Digital experiences
                          <br />
                          that sell
                        </h3>
                      </div>
                      <div className="mxd-services-stack__info width-60">
                        <div className="mxd-services-cards__tags">
                          <span className="tag tag-default tag-outline-opposite">
                            Websites
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            E-commerce
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Apps
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            SEO
                          </span>
                          <span className="tag tag-default tag-outline-opposite">
                            Conversion
                          </span>
                        </div>
                        <p className="t-small-mobile t-opposite">
                          {"Websites, shops, apps, and search systems designed so visitors understand the offer before the form has to beg."}
                        </p>
                      </div>
                      <div className="services-stack__image">
                        <img className="service-img service-img-s" src="/img/tikii/home/tikii-digital-tech-device.jpg" alt="Digital product and technology work" />
                        <img className="service-img service-img-m" src="/img/tikii/home/tikii-digital-tech-device.jpg" alt="Digital product and technology work" />
                      </div>
                    </HomeBorderGlow>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-pre-grid mobile-grid-s">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle anim-uni-in-up">
                      <h2 className="reveal-type">
                        How we think
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">
                        Honest
                      </p>
                      <p className="anim-uni-in-up">
                        Useful
                      </p>
                      <p className="anim-uni-in-up">
                        Measurable
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                      <RayoLink className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                        <span className="btn-caption">
                          Let's talk
                        </span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </RayoLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <div className="mxd-approach-list">
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img src="/img/tikii/home/tikii-studio-planning.jpg" alt="Strategy planning detail" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>
                            Honesty first
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            {"Pretty work is useful only when it tells the truth. We keep the story sharp, the claims defendable, and the strategy free of incense smoke."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img src="/img/tikii/home/tikii-studio-workshop.jpg" alt="Collaborative workshop detail" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>
                            Collaboration
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            {"You will know what is happening, why it is happening, and what decision is next. Mystery is for cinema, not client service."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img src="/img/tikii/home/tikii-digital-tech-device.jpg" alt="Scalable digital system detail" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>
                            Future-proof
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            {"We build systems that can scale past the first launch, because rebuilding everything every quarter is not a growth strategy."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img src="/img/tikii/home/tikii-branding-young-learners-bag.jpg" alt="Full-cycle brand asset detail" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>
                            Full-cycle work
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            {"Brand, content, marketing, websites, commerce, SEO, and UX live in one loop, so the handoffs do not eat the outcome."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
              <div className="mxd-approach-list__item">
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <img src="/img/tikii/home/tikii-campaign-chandrani-hoarding.jpg" alt="Growth campaign detail" />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <p>
                            Useful growth
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>
                            We care about attention only when it turns into trust, leads, sales, or a sharper business decision.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-pre-title">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee--gsap">
              <div className="marquee__top">
                <div className="marquee__item image">
                  <RayoLink className="marquee__link" href="/works/babylon">
                    <img src="/img/tikii/home/tikii-branding-babylon-menu.jpg" alt="Babylon restaurant brand system" />
                  </RayoLink>
                </div>
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Brand
                    <br />
                    systems
                  </p>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/vedamorph">
                    <img src="/img/tikii/home/tikii-commerce-vedamorph-products.jpg" alt="Vedamorph product campaign" />
                  </RayoLink>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/young-learners-montessori-house">
                    <img src="/img/tikii/home/tikii-branding-young-learners-bag.jpg" alt="Young Learners brand collateral" />
                  </RayoLink>
                </div>
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Campaigns
                    <br />
                    that behave
                  </p>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/chandrani-pearls-marketing">
                    <img src="/img/tikii/home/tikii-campaign-chandrani-hoarding.jpg" alt="Chandrani Pearls campaign creative" />
                  </RayoLink>
                </div>
              </div>
              <div className="marquee__bottom">
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Commerce
                    <br />
                    with fewer leaks
                  </p>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/chandrani-pearls-shopify-switch">
                    <img src="/img/tikii/home/tikii-campaign-chandrani-hoarding.jpg" alt="Chandrani Pearls commerce campaign" />
                  </RayoLink>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/babylon">
                    <img src="/img/tikii/home/tikii-branding-babylon-menu.jpg" alt="Babylon menu identity system" />
                  </RayoLink>
                </div>
                <div className="marquee__item has-caption padding-4">
                  <p>
                    Content
                    <br />
                    that earns clicks
                  </p>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/vedamorph">
                    <img src="/img/tikii/home/tikii-branding-vedamorph-banner.jpg" alt="Vedamorph marketing banner" />
                  </RayoLink>
                </div>
                <div className="marquee__item">
                  <RayoLink className="marquee__link" href="/works/chandrani-pearls-shopify-switch">
                    <img src="/img/tikii/home/tikii-commerce-vedamorph-products.jpg" alt="Vedamorph commerce creative" />
                  </RayoLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section overflow-hidden padding-default mobile-title">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle anim-uni-in-up">
                      <h2 className="reveal-type">
                        Proof &
                        <br />
                        useful signals
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin"></div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                      <RayoLink className="btn btn-anim btn-default btn-outline slide-right-up" href="/about">
                        <span className="btn-caption">
                          View More
                        </span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </RayoLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <div className="mxd-awards-list hover-reveal">
              <RayoLink className="mxd-awards-list__item hover-reveal__item" href="/about">
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
                <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                  <img className="hover-reveal__image" src="/img/tikii/home/tikii-studio-group.jpg" alt="Tikii client work preview" />
                </div>
                <div className="mxd-awards-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__title anim-uni-in-up">
                          <div className="mxd-awards-list__icon">
                            <i className="ph ph-arrow-right"></i>
                          </div>
                          <p>
                            131+ satisfied clients
                          </p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__tagslist">
                          <ul>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Client work
                              </p>
                            </li>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Brand systems
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__date anim-uni-in-up">
                          <p className="t-small">
                            2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
              </RayoLink>
              <RayoLink className="mxd-awards-list__item hover-reveal__item" href="/about">
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
                <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                  <img className="hover-reveal__image" src="/img/tikii/home/tikii-studio-workshop.jpg" alt="Client referral work preview" />
                </div>
                <div className="mxd-awards-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__title anim-uni-in-up">
                          <div className="mxd-awards-list__icon">
                            <i className="ph ph-arrow-right"></i>
                          </div>
                          <p>
                            82% client referrals
                          </p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__tagslist">
                          <ul>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Retention
                              </p>
                            </li>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Trust
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__date anim-uni-in-up">
                          <p className="t-small">
                            2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
              </RayoLink>
              <RayoLink className="mxd-awards-list__item hover-reveal__item" href="/services">
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
                <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                  <img className="hover-reveal__image" src="/img/tikii/home/tikii-digital-tech-device.jpg" alt="Design and marketing work preview" />
                </div>
                <div className="mxd-awards-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__title anim-uni-in-up">
                          <div className="mxd-awards-list__icon">
                            <i className="ph ph-arrow-right"></i>
                          </div>
                          <p>
                            8+ years of operations
                          </p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__tagslist">
                          <ul>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Design
                              </p>
                            </li>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Marketing
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__date anim-uni-in-up">
                          <p className="t-small">
                            2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
              </RayoLink>
              <RayoLink className="mxd-awards-list__item hover-reveal__item" href="/works">
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
                <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                  <img className="hover-reveal__image" src="/img/tikii/home/tikii-branding-babylon-menu.jpg" alt="Selected case study preview" />
                </div>
                <div className="mxd-awards-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__title anim-uni-in-up">
                          <div className="mxd-awards-list__icon">
                            <i className="ph ph-arrow-right"></i>
                          </div>
                          <p>
                            5 selected case studies
                          </p>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__tagslist">
                          <ul>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Portfolio
                              </p>
                            </li>
                            <li className="anim-uni-in-up">
                              <p className="t-small">
                                Outcomes
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__date anim-uni-in-up">
                          <p className="t-small">
                            2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-awards-list__border anim-uni-in-up"></div>
              </RayoLink>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container no-padding-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5">
                  <div className="mxd-container grid-container">
                    <div className="mxd-block">
                      <div className="mxd-section-title no-margin-desktop">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__title anim-uni-in-up">
                                <h2 className="reveal-type">
                                  What our clients say
                                </h2>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__descr">
                                <p className="anim-uni-in-up">
                                  {"Clients tend to say the useful part out loud: clearer brands, better websites, stronger campaigns, and fewer meetings that should have been emails."}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 mxd-grid-item no-margin">
                              <div className="mxd-section-title__controls anim-uni-in-up">
                                <RayoLink className="mxd-section-title__image-link" href="/contact" aria-label="Contact Tikii">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="97" version="1.1" viewBox="0 0 200 97">
                                    <style>{`
                                      .cls-1 { fill: var(--t-bright); }
                                      .cls-2 { fill: #e52421; }
                                    `}</style>
                                    <g>
                                      <path className="cls-1" d="M52.1,0h9.2v56.7h-9.2V0ZM93.1,56.7h9.2V18.3h-9.2v20.3h.2c0,8.5-7.3,9.3-9.3,9.3-5.3,0-6.5-5.2-6.5-8.3v-21.3h-9.2v21.6c0,5.3,1.8,9.6,4.5,12.8,2.5,2.5,6.5,4,11,4s7.3-.8,9.3-3.2v3.2h0ZM111.1,56.7h9.2v-29.3h6.7v-9.2h-6.7V4.7h-9.2v13.6h-6.8v9.2h6.8v29.3ZM148.4,56.6c5.2,0,10-1.8,13.7-5.2l1.3-1.3-6.3-6.3-1.3,1.7c-2,1.8-4.5,2.8-7.3,2.8-6.3,0-11-4.5-11-11.1s4.5-11,11-11,5.3.8,7.3,2.8l1.3,1.2,6-6-1.3-1.3c-3.8-3.2-8.3-5.2-13.4-5.2-11.3-.2-19.7,8-19.7,19.5,0,10.8,8.5,19.5,19.7,19.5ZM176.9,35.3c0-8.5,6.3-9.3,8.3-9.3,5.3,0,5.3,5.2,5.3,8.3v22.5h9.2v-22.6c.2-5-1-9.5-4-12.5-2.5-2.5-5.8-4-10-4s-6.5.8-9,3.2V0h-9.2v56.7h9.2v-21.5h.2ZM26.2,56.6c7.3,0,14.4-2.8,19-8l1.3-1.3-6-6.3-1.2,1.7c-3.3,3.3-8.3,5.3-13.2,5.3-10.3,0-17.7-8-17.7-18.8S15.9,10.3,26,10.3s9.3,2,13.2,5.3l1.3,1.3,6-6-1.3-1.3c-5-5.3-11.8-8-19-8C11.2,1.8,0,13.5,0,29.1s11.2,27.5,26.2,27.5ZM14.9,85.7h-3.3v3h-4.2l6.7-9.3h-3.7l-7.3,9.8v2.3h8.3v3.3h3.5v-3.3h2.5v-2.8h-2.5v-3ZM20.9,90.7c-.7,0-1.2.2-1.5.7-.3.3-.7.8-.7,1.5s.2,1.2.7,1.5c.3.3,1,.7,1.5.7s1.2-.2,1.5-.7c.3-.3.7-1,.7-1.5s-.2-1.2-.7-1.5c-.3-.5-.8-.7-1.5-.7ZM35.2,81c-1.2-1.3-3-2-5.2-2s-2,.2-3,.7c-.8.5-1.7,1-2.2,1.8s-.8,1.7-.8,2.7.2,1.8.7,2.5,1.2,1.3,2,1.7c.8.3,1.7.7,2.7.7,1.7,0,3-.5,3.8-1.3,0,1.5-.5,2.5-1.2,3.3-.8.8-1.8,1.2-3.2,1.2s-2.2-.3-2.8-.8l-1.3,2.7c.5.3,1.2.7,2,.8.8.2,1.5.3,2.3.3,1.5,0,3-.3,4.2-1,1.2-.7,2.2-1.7,2.8-2.8.7-1.3,1-2.8,1-4.5,0-2.7-.7-4.5-1.8-5.8ZM32.4,85.7c-.5.5-1.2.7-1.8.7s-1.5-.2-1.8-.7c-.5-.5-.7-1-.7-1.7s.2-1.3.7-1.7c.5-.3,1.2-.7,1.8-.7s1.5.2,2,.7.7,1,.7,1.7c-.2.7-.3,1.2-.8,1.7ZM44.1,76.2l-7.3,20.8h3.2l7.2-20.8h-3ZM52.4,85.2h-1.3l.2-3h6.5v-2.8h-9.5l-.8,8.7h4c1.3,0,2.3.2,2.8.5.5.3.8.8.8,1.5s-.3,1.2-.8,1.5c-.5.3-1.2.5-2.2.5s-1.7-.2-2.3-.3c-.8-.2-1.5-.7-2-1l-1.3,2.7c.7.5,1.7,1,2.7,1.2,1,.3,2.2.5,3.2.5s2.7-.2,3.5-.7c1-.5,1.7-1,2.2-1.8.5-.8.7-1.7.7-2.5,0-1.5-.5-2.7-1.5-3.5-1-1-2.5-1.3-4.7-1.3ZM62.2,90.7c-.7,0-1.2.2-1.5.7-.3.3-.7.8-.7,1.5s.2,1.2.7,1.5c.3.3,1,.7,1.5.7s1.2-.2,1.5-.7c.3-.3.7-1,.7-1.5s-.2-1.2-.7-1.5c-.3-.5-.8-.7-1.5-.7ZM75.8,80c-1-.7-2.2-1-3.5-1s-2.5.3-3.5,1-1.8,1.5-2.3,2.8c-.5,1.2-.8,2.7-.8,4.3s.3,3.2.8,4.3,1.3,2.2,2.3,2.8,2.2,1,3.5,1,2.5-.3,3.5-1,1.8-1.5,2.3-2.8c.5-1.2.8-2.7.8-4.3s-.3-3.2-.8-4.3c-.5-1.3-1.3-2.2-2.3-2.8ZM74.6,90.8c-.5.8-1.3,1.2-2.2,1.2s-1.7-.3-2.2-1.2c-.5-.8-.8-2-.8-3.8s.3-3,.8-3.8,1.3-1.2,2.2-1.2,1.7.3,2.2,1.2.8,2,.8,3.8c0,1.8-.3,3-.8,3.8Z"></path>
                                      <path className="cls-2" d="M141.3,37.1c0,3.7,3,6.5,6.5,6.5s6.5-3,6.5-6.5-3-6.5-6.5-6.5-6.5,2.8-6.5,6.5ZM108.6,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.7-.3.5-1-.2-1ZM131.2,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.5-.3.3-1-.2-1ZM154.2,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.5-.3.3-1-.2-1ZM177.1,82.5h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.7-4.2c.5-.3.3-1-.2-1ZM199.8,83.5c.5-.3.2-1-.3-1h-7c-.2,0-.5-.2-.5-.3l-2.2-6.7c-.2-.5-1-.5-1.2,0l-2.2,6.7c0,.2-.3.3-.5.3h-7c-.5,0-.8.7-.3,1l5.7,4.2c.2.2.3.3.2.7l-2.2,6.7c-.2.5.5,1,.8.7l5.7-4.2c.2-.2.5-.2.7,0l5.7,4.2c.5.3,1-.2.8-.7l-2.2-6.7c0-.2,0-.5.2-.7l5.8-4.2Z"></path>
                                    </g>
                                  </svg>
                                </RayoLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <div className="testimonials-slider overflow-hidden anim-uni-in-up">
                    <div className="swiper-testimonials" data-initial-slide="2">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <HomeBorderGlow className="mxd-testimonials-card bg-base-tint radius-m">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__media anim-uni-in-up">
                                <div className="mxd-testimonials-card__photo">
                                  <img src="/img/tikii/home/tikii-portrait-nisheeth.jpg" alt="Nisheeth Nayar portrait" />
                                </div>
                                <div className="mxd-testimonials-card__company">
                                  <p className="t-small">Chandrani Pearls</p>
                                </div>
                              </div>
                              <div className="mxd-testimonials-card__text">
                                <p className="anim-uni-in-up">
                                  {"Working with Tikii to revamp our website was a game-changer. They built a visually strong, user-friendly site and backed it with SEO that moved traffic and sales."}
                                </p>
                                <RayoLink className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up" href="/works/chandrani-pearls-shopify-switch">
                                  <span className="btn-caption">
                                    Case Study
                                  </span>
                                  <i className="ph ph-arrow-up-right"></i>
                                </RayoLink>
                              </div>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <p className="mxd-testimonials-card__name anim-uni-in-up">
                                Nisheeth Nayar
                              </p>
                              <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                                {"Director at                                  "}
                                <RayoLink className="" href="#">
                                  Chandrani Pearls
                                </RayoLink>
                              </p>
                            </div>
                          </HomeBorderGlow>
                        </div>
                        <div className="swiper-slide">
                          <HomeBorderGlow className="mxd-testimonials-card bg-base-tint radius-m">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__media anim-uni-in-up">
                                <div className="mxd-testimonials-card__photo">
                                  <img src="/img/tikii/home/tikii-portrait-amit.jpg" alt="Amit Singhi portrait" />
                                </div>
                                <div className="mxd-testimonials-card__company">
                                  <p className="t-small">Vedamorph</p>
                                </div>
                              </div>
                              <div className="mxd-testimonials-card__text">
                                <p className="anim-uni-in-up">
                                  {"Tikii helped us define a stronger brand voice and build social content that actually resonates. Awareness and engagement both moved in the right direction."}
                                </p>
                                <RayoLink className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up" href="/works/vedamorph">
                                  <span className="btn-caption">
                                    Case Study
                                  </span>
                                  <i className="ph ph-arrow-up-right"></i>
                                </RayoLink>
                              </div>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <p className="mxd-testimonials-card__name anim-uni-in-up">
                                Amit Singhi
                              </p>
                              <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                                {"Owner of                                  "}
                                <RayoLink className="" href="#">
                                  Vedamorph
                                </RayoLink>
                              </p>
                            </div>
                          </HomeBorderGlow>
                        </div>
                        <div className="swiper-slide">
                          <HomeBorderGlow className="mxd-testimonials-card bg-base-tint radius-m">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__media anim-uni-in-up">
                                <div className="mxd-testimonials-card__photo">
                                  <img src="/img/tikii/home/tikii-portrait-abhijit.jpg" alt="Abhijit Nag portrait" />
                                </div>
                                <div className="mxd-testimonials-card__company">
                                  <p className="t-small">NMC Tools</p>
                                </div>
                              </div>
                              <div className="mxd-testimonials-card__text">
                                <p className="anim-uni-in-up">
                                  {"Their attention to detail and creative flair set them apart. They took our vision and turned it into something beyond our expectations."}
                                </p>
                                <RayoLink className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up" href="/works">
                                  <span className="btn-caption">
                                    More Work
                                  </span>
                                  <i className="ph ph-arrow-up-right"></i>
                                </RayoLink>
                              </div>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <p className="mxd-testimonials-card__name anim-uni-in-up">
                                Abhijit Nag
                              </p>
                              <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                                {"Director at                                  "}
                                <RayoLink className="" href="#">
                                  NMC Tools
                                </RayoLink>
                              </p>
                            </div>
                          </HomeBorderGlow>
                        </div>
                        <div className="swiper-slide">
                          <HomeBorderGlow className="mxd-testimonials-card bg-base-tint radius-m">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__media anim-uni-in-up">
                                <div className="mxd-testimonials-card__photo">
                                  <img src="/img/tikii/home/tikii-portrait-yashwant.jpg" alt="Yashwant Goenka portrait" />
                                </div>
                                <div className="mxd-testimonials-card__company">
                                  <p className="t-small">Premiere Realty</p>
                                </div>
                              </div>
                              <div className="mxd-testimonials-card__text">
                                <p className="anim-uni-in-up">
                                  {"Since partnering with Tikii, we have seen a serious boost in engagement, leads, and sales. The team is responsive and understands the business."}
                                </p>
                                <RayoLink className="btn btn-anim btn-default btn-small btn-outline slide-right-up anim-uni-in-up" href="/contact">
                                  <span className="btn-caption">
                                    Talk to Us
                                  </span>
                                  <i className="ph ph-arrow-up-right"></i>
                                </RayoLink>
                              </div>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <p className="mxd-testimonials-card__name anim-uni-in-up">
                                Yashwant Goenka
                              </p>
                              <p className="mxd-testimonials-card__position t-small anim-uni-in-up">
                                {"Owner of                                  "}
                                <RayoLink className="" href="#">
                                  Premiere Realty
                                </RayoLink>
                              </p>
                            </div>
                          </HomeBorderGlow>
                        </div>
                      </div>
                      <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev animate-card-2">
                        <RayoLink className="btn btn-round btn-round-small btn-outline slide-left anim-no-delay" href="#0" aria-label="Previous Slide">
                          <i className="ph ph-arrow-left"></i>
                        </RayoLink>
                      </div>
                      <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next animate-card-2">
                        <RayoLink className="btn btn-round btn-round-small btn-outline slide-right anim-no-delay" href="#0" aria-label="Next Slide">
                          <i className="ph ph-arrow-right"></i>
                        </RayoLink>
                      </div>
                    </div>
                    <div className="testimonials-slider__shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-mtext-pre-grid">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <div className="marquee marquee-right--gsap muted-extra">
              <div className="marquee__toright">
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Selected Clients
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Selected Clients
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Selected Clients
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
                <div className="marquee__item one-line item-regular text">
                  <p className="marquee__text">
                    Selected Clients
                  </p>
                  <div className="marquee__image">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                      <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8                         c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4                         c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0                         C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4                         c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6                         s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4                         c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z                         "></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-pre-title">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-partners-cards">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {selectedClientLogos.map((client) => (
                    <div key={client.name} className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                      <HomeBorderGlow as={RayoLink} className="mxd-partners-cards__glow" href="#0" aria-label={`${client.name} client`}>
                        <div className="mxd-partners-cards__logo">
                          <img src={client.src} alt={client.alt} width={400} height={150} loading="lazy" decoding="async" />
                        </div>
                      </HomeBorderGlow>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mxd-section padding-blog">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">
                        Practical notes
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">
                        {"Brand, performance, and website thinking without the decorative smoke machine. Useful reading for teams that need decisions, not slogans."}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                      <RayoLink className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog">
                        <span className="btn-caption">
                          All Articles
                        </span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </RayoLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <div className="mxd-blog-preview">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                    <HomeBorderGlow as={RayoLink} className="mxd-blog-preview__media" href="/blog/brand-strategy-without-the-fog">
                      <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small"></div>
                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                        </i>
                      </div>
                      <div className="mxd-blog-preview__tags">
                        <span className="tag tag-default tag-permanent">
                          Branding
                        </span>
                        <span className="tag tag-default tag-permanent">
                          Strategy
                        </span>
                      </div>
                    </HomeBorderGlow>
                    <div className="mxd-blog-preview__data">
                      <RayoLink className="anim-uni-in-up" href="/blog/brand-strategy-without-the-fog">
                        <span>
                          Brand Strategy Without the Fog
                        </span>
                      </RayoLink>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                    <HomeBorderGlow as={RayoLink} className="mxd-blog-preview__media" href="/blog/performance-marketing-without-vanity-metrics">
                      <div className="mxd-blog-preview__image blog-preview-image-2 parallax-img-small"></div>
                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                        </i>
                      </div>
                      <div className="mxd-blog-preview__tags">
                        <span className="tag tag-default tag-permanent">
                          Performance
                        </span>
                        <span className="tag tag-default tag-permanent">
                          Analytics
                        </span>
                      </div>
                    </HomeBorderGlow>
                    <div className="mxd-blog-preview__data">
                      <RayoLink className="anim-uni-in-up" href="/blog/performance-marketing-without-vanity-metrics">
                        <span>
                          Performance Marketing Without Vanity Metrics
                        </span>
                      </RayoLink>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                    <HomeBorderGlow as={RayoLink} className="mxd-blog-preview__media" href="/blog/websites-that-sell-before-the-form">
                      <div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small"></div>
                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                        </i>
                      </div>
                      <div className="mxd-blog-preview__tags">
                        <span className="tag tag-default tag-permanent">
                          Website
                        </span>
                        <span className="tag tag-default tag-permanent">
                          Conversion
                        </span>
                      </div>
                    </HomeBorderGlow>
                    <div className="mxd-blog-preview__data">
                      <RayoLink className="anim-uni-in-up" href="/blog/websites-that-sell-before-the-form">
                        <span>
                          Websites That Sell Before the Form
                        </span>
                      </RayoLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      <TikiiFooter />
    </>
  );
}
