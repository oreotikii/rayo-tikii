"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ClientBehaviors } from "@/components/client-behaviors";

type NavItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    children: [
      { label: "Main home", href: "/" },
      { label: "Software development company", href: "/software-development-company" },
      { label: "Freelancer portfolio", href: "/freelancer-portfolio" },
      { label: "Digital agency", href: "/digital-agency" },
      { label: "Creative design studio", href: "/creative-design-studio" },
      { label: "Personal portfolio", href: "/personal-portfolio" },
      { label: "Web agency", href: "/web-agency" },
      { label: "Creative developer", href: "/creative-developer" },
      { label: "Designer", href: "/designer" }
    ]
  },
  {
    label: "Works",
    children: [
      { label: "Portfolio", href: "/works" },
      { label: "Works masonry", href: "/works/masonry" },
      { label: "Project details", href: "/project-details" }
    ]
  },
  {
    label: "Pages",
    children: [
      { label: "About me", href: "/about-me" },
      { label: "About us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Our team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ page", href: "/faq" },
      { label: "404 error page", href: "/not-found" },
      { label: "Landing page", href: "/landing" }
    ]
  },
  {
    label: "Insights",
    children: [
      { label: "Blog standard", href: "/blog" },
      { label: "Blog creative", href: "/blog/creative" },
      { label: "Single post", href: "/blog/article" }
    ]
  },
  { label: "Contact", href: "/contact" }
];

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
    </svg>
  );
}

function Loader() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let current = 0;
    const timer = window.setInterval(() => {
      current += 5;
      setCount(Math.min(current, 100));
      if (current >= 100) {
        window.clearInterval(timer);
        window.setTimeout(() => setLoaded(true), 250);
      }
    }, 15);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div id="loader" className={`loader${loaded ? " loaded" : ""}`} aria-hidden={loaded}>
      <div className="loader__wrapper">
        <div className="loader__content">
          <div className="loader__count">
            <span className="count__text">{count}</span>
            <span className="count__percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/" className="mxd-logo" aria-label="Rayo home">
      <svg className="mxd-logo__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" aria-hidden="true">
        <path className="mxd-logo__bg" d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z" />
        <path
          className="mxd-logo__cat"
          d="M33.6,34.5h0.9c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3z M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1z M42,26.1v-1.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v6.5c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9V26.1z"
        />
      </svg>
      <span className="mxd-logo__text">
        rayo
        <br />
        template
      </span>
    </Link>
  );
}

function MenuOverlay({
  open,
  close,
  toggle
}: {
  open: boolean;
  close: () => void;
  toggle: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string>("Home");
  const [menuReady, setMenuReady] = useState(false);
  const previousPathname = useRef(pathname);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const hamburgerBaseRef = useRef<HTMLDivElement>(null);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const menuBaseRef = useRef<HTMLButtonElement>(null);
  const menuContainRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<{ play: () => void; reverse: () => void } | null>(null);

  useLayoutEffect(() => {
    let disposed = false;

    const setupMenuTimeline = async () => {
      const [{ gsap }, { Flip }] = await Promise.all([import("gsap"), import("gsap/Flip")]);
      if (disposed) return;
      gsap.registerPlugin(Flip);

      const hamburger = hamburgerRef.current;
      const hamburgerBase = hamburgerBaseRef.current;
      const menuWrapper = menuWrapperRef.current;
      const menuBase = menuBaseRef.current;
      const menuContain = menuContainRef.current;
      if (!hamburger || !hamburgerBase || !menuWrapper || !menuBase || !menuContain) return;

      const navLines = Array.from(hamburger.querySelectorAll<HTMLElement>(".hamburger__line"));
      const menuItems = Array.from(menuWrapper.querySelectorAll<HTMLElement>(".main-menu__item"));
      const video = menuWrapper.querySelector<HTMLElement>(".menu-promo__video");
      const fadeItems = Array.from(menuWrapper.querySelectorAll<HTMLElement>(".menu-fade-in"));

      const moveBase = (forwards: boolean) => {
        const state = Flip.getState(hamburgerBase);
        if (forwards) {
          menuContain.prepend(hamburgerBase);
        } else {
          hamburger.prepend(hamburgerBase);
        }
        return Flip.from(state, { ease: "power4.inOut", duration: 0.8 });
      };

      const timeline = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          const tween = moveBase(false);
          tween.eventCallback("onComplete", () => gsap.set(menuWrapper, { display: "none" }));
        }
      });

      timeline.set(menuWrapper, { display: "flex" });
      timeline.from(menuBase, {
        opacity: 0,
        duration: 0.6,
        ease: "none",
        onStart: () => moveBase(true)
      });
      timeline.to(navLines[0], { y: 5, duration: 0.16 }, "<");
      timeline.to(navLines[1], { y: -5, duration: 0.16 }, "<");
      timeline.to(navLines[0], { rotate: 45, duration: 0.16 }, 0.2);
      timeline.to(navLines[1], { rotate: -45, duration: 0.16 }, 0.2);
      timeline.add("fade-in-up");
      timeline.from(
        menuItems,
        {
          opacity: 0,
          yPercent: 50,
          duration: 0.2,
          stagger: { amount: 0.2 }
        },
        "fade-in-up"
      );
      if (video) {
        timeline.from(
          video,
          {
            opacity: 0,
            yPercent: 20,
            duration: 0.2
          },
          "fade-in-up"
        );
      }
      timeline.from(fadeItems, { opacity: 0, duration: 0.3 });

      timelineRef.current = timeline;
      setMenuReady(true);
    };

    void setupMenuTimeline();

    return () => {
      disposed = true;
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      close();
    }
  }, [close, pathname]);

  useEffect(() => {
    if (!menuReady || !timelineRef.current) return;
    if (open) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [menuReady, open]);

  useLayoutEffect(() => {
    if (!open || !menuReady) return;
    const hamburgerBase = hamburgerBaseRef.current;
    const menuContain = menuContainRef.current;
    if (hamburgerBase && menuContain && hamburgerBase.parentElement !== menuContain) {
      menuContain.prepend(hamburgerBase);
    }
  }, [expanded, menuReady, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, open]);

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="">
      <div className="mxd-nav__contain loading__fade">
        <button
          ref={hamburgerRef}
          type="button"
          className={`mxd-nav__hamburger${open ? " nav-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <div ref={hamburgerBaseRef} className="hamburger__base" />
          <div className="hamburger__line" />
          <div className="hamburger__line" />
        </button>
      </div>

      <div ref={menuWrapperRef} className="mxd-menu__wrapper" aria-hidden={!open}>
        <button ref={menuBaseRef} type="button" className="mxd-menu__base" aria-label="Close menu" onClick={close} />
        <div ref={menuContainRef} className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            <div className="mxd-menu__left">
              <p className="mxd-menu__caption menu-fade-in">
                Innovative design
                <br />
                and cutting-edge development
              </p>
              <div className="main-menu">
                <nav className="main-menu__content" aria-label="Main navigation">
                  <ul id="main-menu" className="main-menu__accordion">
                    {navItems.map((item) => {
                      const isOpen = expanded === item.label;
                      if (item.children) {
                        return (
                          <li className={`main-menu__item${isOpen ? " open" : ""}`} key={item.label}>
                            <button
                              type="button"
                              className="main-menu__toggle"
                              onClick={() => setExpanded(isOpen ? "" : item.label)}
                              aria-expanded={isOpen}
                            >
                              <span className="main-menu__link btn btn-anim">
                                <span className="btn-caption">{item.label}</span>
                              </span>
                              <StarIcon />
                            </button>
                            <ul className="submenu">
                              {item.children.map((child) => (
                                <li className={`submenu__item${pathname === child.href ? " active" : ""}`} key={child.href}>
                                  <Link href={child.href}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                      return (
                        <li className="main-menu__item" key={item.label}>
                          <Link className="main-menu__link btn btn-anim" href={item.href ?? "/"}>
                            <span className="btn-caption">{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mxd-menu__right">
              <div className="menu-promo">
                <div className="menu-promo__content">
                  <p className="menu-promo__caption menu-fade-in">
                    Nice to see you!
                    <br />
                    I&apos;m Alex Walker, digital designer and illustrator based in Odesa, Ukraine
                  </p>
                  <div className="menu-promo__video">
                    <video className="menu-video" preload="auto" autoPlay loop muted playsInline poster="https://dummyimage.com/540x310/5d5d5d/737373">
                      <source type="video/mp4" src="/video/540x310_video.mp4" />
                      <source type="video/webm" src="/video/540x310_video.webm" />
                      <source type="video/ogv" src="/video/540x310_video.ogv" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                Made with <i className="ph-fill ph-heart t-additional" /> by{" "}
                <a className="no-effect" href="https://1.envato.market/EKA9WD" target="_blank" rel="noreferrer">
                  Mix_Design
                </a>
              </p>
              <p className="t-xsmall">
                <i className="ph ph-copyright" /> 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), []);

  useEffect(() => {
    const stored = window.localStorage.getItem("template.theme") as "light" | "dark" | null;
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("color-scheme", initial);
  }, []);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("template.theme", nextTheme);
    document.documentElement.setAttribute("color-scheme", nextTheme);
  };

  return (
    <>
      <Loader />
      <MenuOverlay open={menuOpen} close={closeMenu} toggle={toggleMenu} />
      <header id="header" className={`mxd-header${hidden ? " is-hidden" : ""}${menuOpen ? " menu-is-visible" : ""}`}>
        <div className="mxd-header__logo loading__fade">
          <Logo />
        </div>
        <div className="mxd-header__controls loading__fade">
          <button
            id="color-switcher"
            className="mxd-color-switcher"
            type="button"
            role="switch"
            aria-label="light/dark mode"
            aria-checked={theme === "dark"}
            onClick={toggleTheme}
          >
            <i className={theme === "dark" ? "ph-bold ph-sun-horizon" : "ph-bold ph-moon-stars"} />
          </button>
          <Link className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up" href="/contact" aria-label="Say Hello">
            <span className="btn-caption">Say Hello</span>
            <i className="ph-bold ph-arrow-up-right" />
          </Link>
        </div>
      </header>
      <ClientBehaviors />
      {children}
      <button className="btn btn-to-top slide-up" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <i className="ph-bold ph-arrow-up" />
      </button>
    </>
  );
}
