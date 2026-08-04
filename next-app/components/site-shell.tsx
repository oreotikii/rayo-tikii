"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";
import { ClientBehaviors } from "@/components/client-behaviors";
import Noise from "@/components/noise";

type NavItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

type MenuTimeline = {
  play: () => void;
  reverse: () => void;
  isActive: () => boolean;
  progress: () => number;
  kill: () => void;
};

type MenuNavigationHandler = (href: string) => Promise<void>;

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const routeTransitionRootSelector =
  "#mxd-page-content, #mxd-footer, .mxd-floating-img";
const routeLoaderEnterTime = 180;
const minimumRouteLoaderTime = 420;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getRouteTransitionRoots() {
  return Array.from(
    document.querySelectorAll<HTMLElement>(routeTransitionRootSelector),
  );
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

async function runPageOutro() {
  if (prefersReducedMotion()) return;

  try {
    const { gsap } = await import("gsap");
    const targets = getRouteTransitionRoots();
    if (!targets.length) return;

    await new Promise<void>((resolve) => {
      gsap.to(targets, {
        opacity: 0,
        y: -80,
        duration: 0.55,
        ease: "power3.inOut",
        stagger: 0.03,
        overwrite: true,
        onComplete: resolve,
      });
    });
  } catch {
    // Navigation should continue even if the animation library is unavailable.
  }
}

async function runPageIntro(onReady?: () => void | Promise<void>) {
  if (prefersReducedMotion()) {
    await onReady?.();
    return;
  }

  try {
    const { gsap } = await import("gsap");
    const loadingWrap = document.querySelector<HTMLElement>(".loading-wrap");
    const loadingItems = loadingWrap
      ? Array.from(loadingWrap.querySelectorAll<HTMLElement>(".loading__item"))
      : [];
    const fadeInItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#mxd-page-content .loading__fade, .mxd-floating-img .loading__fade",
      ),
    );
    const transitionItems = [...loadingItems, ...fadeInItems];

    if (!transitionItems.length) {
      const roots = getRouteTransitionRoots();
      if (!roots.length) {
        await onReady?.();
        return;
      }
      gsap.set(roots, { opacity: 0, y: 80 });
      await onReady?.();
      await new Promise<void>((resolve) => {
        gsap.to(roots, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power4.out",
          stagger: 0.03,
          onComplete: resolve,
        });
      });
      gsap.set(roots, { clearProps: "opacity,transform,visibility" });
      return;
    }

    gsap.set(loadingItems, { opacity: 0, y: 120 });
    gsap.set(fadeInItems, { opacity: 0 });
    await onReady?.();

    await new Promise<void>((resolve) => {
      gsap
        .timeline({ onComplete: resolve })
        .to(
          loadingItems,
          { duration: 1.1, ease: "power4", y: 0, opacity: 1, stagger: 0.08 },
          0,
        )
        .to(fadeInItems, { duration: 0.8, ease: "none", opacity: 1 }, 0.45);
    });

    gsap.set(transitionItems, { clearProps: "opacity,transform,visibility" });
  } catch {
    await onReady?.();
    document
      .querySelectorAll<HTMLElement>(".loading__item, .loading__fade")
      .forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "";
      });
  }
}

function RouteTransitionLoader({ visible }: { visible: boolean }) {
  return (
    <>
      <div
        className={`route-transition-loader${visible ? " is-visible" : ""}`}
        aria-hidden={!visible}
      >
        <div className="route-transition-loader__mark">
          <StarIcon />
        </div>
      </div>
      <style>{`
        .route-transition-loader {
          position: fixed;
          inset: 0;
          z-index: 2147483200;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          background: var(--base);
          opacity: 0;
          visibility: hidden;
          transition: opacity 180ms ease, visibility 0s linear 180ms;
        }

        .route-transition-loader.is-visible {
          opacity: 1;
          visibility: visible;
          transition: opacity 180ms ease, visibility 0s;
        }

        .route-transition-loader__mark {
          width: 6.8rem;
          height: 6.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.4rem;
          color: var(--base);
          background: var(--accent);
          border-radius: 50%;
          box-shadow:
            0 0 0 0.8rem rgba(var(--accent-rgb), 0.18),
            0 0 4rem rgba(var(--accent-rgb), 0.65);
          animation: route-transition-spin 1s linear infinite;
        }

        .route-transition-loader__mark svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        @keyframes route-transition-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .route-transition-loader,
          .route-transition-loader.is-visible {
            transition: none;
          }

          .route-transition-loader__mark {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
    </svg>
  );
}

function AnimatedCaption({ children }: { children: string }) {
  const letters = Array.from(children);
  const renderLetters = (block: string) =>
    letters.map((letter, index) => (
      <span className="btn-anim__letter" key={`${block}-${index}`}>
        {letter.trim() === "" ? "\u00a0" : letter}
      </span>
    ));

  return (
    <span className="btn-caption">
      <span className="btn-anim__block">{renderLetters("top")}</span>
      <span className="btn-anim__block">{renderLetters("bottom")}</span>
    </span>
  );
}

function Loader() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let disposed = false;
    let currentCount = 0;
    let introStarted = false;
    const timers: number[] = [];
    const cleanups: Array<() => void> = [];
    const loaderLockClass = "mxd-loader-lock";

    document.documentElement.classList.add(loaderLockClass);
    document.body.classList.add(loaderLockClass);

    const unlockPageScroll = () => {
      document.documentElement.classList.remove(loaderLockClass);
      document.body.classList.remove(loaderLockClass);
    };

    const schedule = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay);
      timers.push(timer);
      return timer;
    };

    const completeCounter = () => {
      currentCount = 100;
      setCount(100);
    };

    const showContentImmediately = () => {
      completeCounter();
      document
        .querySelectorAll<HTMLElement>(".loading__item, .loading__fade")
        .forEach((element) => {
          element.style.opacity = "1";
          element.style.transform = "";
        });
      setLoaded(true);
      unlockPageScroll();
    };

    const tickCounter = () => {
      if (disposed || currentCount >= 100) return;
      currentCount = Math.min(
        currentCount + Math.floor(Math.random() * 10) + 1,
        100,
      );
      setCount(currentCount);
      if (currentCount < 100) {
        schedule(tickCounter, Math.floor(Math.random() * 120) + 25);
      }
    };

    const run = async () => {
      tickCounter();

      try {
        const [{ gsap }, imagesLoadedModule] = await Promise.all([
          import("gsap"),
          import("imagesloaded"),
        ]);
        if (disposed) return;

        const wrapper = wrapperRef.current;
        const counter = countRef.current;
        const loadingWrap =
          document.querySelector<HTMLElement>(".loading-wrap");
        const loadingItems = loadingWrap
          ? Array.from(
              loadingWrap.querySelectorAll<HTMLElement>(".loading__item"),
            )
          : [];
        const fadeInItems = Array.from(
          document.querySelectorAll<HTMLElement>(".loading__fade"),
        );
        if (!wrapper || !counter) {
          showContentImmediately();
          return;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          showContentImmediately();
          return;
        }

        const ctx = gsap.context(() => {
          gsap.set(loadingItems, { opacity: 0, y: 120 });
          gsap.set(fadeInItems, { opacity: 0 });
        }, document.body);
        cleanups.push(() => ctx.revert());

        const playIntro = () => {
          if (disposed || introStarted) return;
          introStarted = true;
          completeCounter();

          const timeline = gsap.timeline();
          cleanups.push(() => timeline.kill());
          timeline
            .to(counter, { duration: 0.8, ease: "power2.in", y: "100%" }, 1.8)
            .to(wrapper, { duration: 0.8, ease: "power4.in", y: "-100%" }, 2.2)
            .to(
              loadingItems,
              {
                duration: 1.1,
                ease: "power4",
                y: 0,
                opacity: 1,
                stagger: 0.08,
              },
              0.8,
            )
            .to(fadeInItems, { duration: 0.8, ease: "none", opacity: 1 }, 3.2)
            .add(() => {
              if (!disposed) {
                setLoaded(true);
                unlockPageScroll();
              }
            }, 3.2);
        };

        const imagesLoaded = imagesLoadedModule.default as (
          element: Element,
          callback: () => void,
        ) => void;
        imagesLoaded(document.body, playIntro);
        schedule(playIntro, 2400);
      } catch {
        if (!disposed) showContentImmediately();
      }
    };

    void run();

    return () => {
      disposed = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      cleanups.forEach((cleanup) => cleanup());
      unlockPageScroll();
    };
  }, []);

  return (
    <div
      id="loader"
      className={`loader${loaded ? " loaded" : ""}`}
      aria-hidden={loaded}
    >
      <div ref={wrapperRef} className="loader__wrapper">
        <div className="loader__content">
          <div ref={countRef} className="loader__count">
            <span className="count__text">{count}</span>
            <span className="count__percent">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo({ onNavigate }: { onNavigate: MenuNavigationHandler }) {
  const pathname = usePathname();

  const requestHomeNavigation = async (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      pathname === "/"
    )
      return;

    event.preventDefault();
    await onNavigate("/");
  };

  return (
    <Link
      href="/"
      className="mxd-logo"
      aria-label="Tikii Digital home"
      onClick={requestHomeNavigation}
    >
      <img
        className="mxd-logo__image"
        src="/img/tikii/tikii-favicon.svg"
        alt=""
        aria-hidden="true"
      />
      <span className="mxd-logo__text">
        tikii
        <br />
        digital
      </span>
    </Link>
  );
}

function MenuOverlay({
  open,
  close,
  toggle,
  onNavigate,
}: {
  open: boolean;
  close: () => void;
  toggle: () => void;
  onNavigate: MenuNavigationHandler;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string>("");
  const [menuReady, setMenuReady] = useState(false);
  const previousPathname = useRef(pathname);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const hamburgerBaseRef = useRef<HTMLDivElement>(null);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const menuBaseRef = useRef<HTMLButtonElement>(null);
  const menuContainRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<MenuTimeline | null>(null);
  const menuCloseResolversRef = useRef<Array<() => void>>([]);

  const requestToggle = () => toggle();
  const requestClose = () => close();

  const closeMenuWithAnimation = useCallback(() => {
    close();

    const timeline = timelineRef.current;
    if (!open || !menuReady || !timeline || timeline.progress() === 0) {
      setExpanded("");
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      menuCloseResolversRef.current.push(() => {
        setExpanded("");
        resolve();
      });
      timeline.reverse();
    });
  }, [close, menuReady, open]);

  const requestMenuLinkNavigation = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;

    event.preventDefault();
    await closeMenuWithAnimation();

    if (href !== pathname) {
      await onNavigate(href);
    }
  };

  useLayoutEffect(() => {
    let disposed = false;

    const setupMenuTimeline = async () => {
      const [{ gsap }, { Flip }] = await Promise.all([
        import("gsap"),
        import("gsap/Flip"),
      ]);
      if (disposed) return;
      gsap.registerPlugin(Flip);

      const hamburger = hamburgerRef.current;
      const hamburgerBase = hamburgerBaseRef.current;
      const menuWrapper = menuWrapperRef.current;
      const menuBase = menuBaseRef.current;
      const menuContain = menuContainRef.current;
      if (
        !hamburger ||
        !hamburgerBase ||
        !menuWrapper ||
        !menuBase ||
        !menuContain
      )
        return;

      const navLines = Array.from(
        hamburger.querySelectorAll<HTMLElement>(".hamburger__line"),
      );
      const menuItems = Array.from(
        menuWrapper.querySelectorAll<HTMLElement>(".main-menu__item"),
      );
      const video =
        menuWrapper.querySelector<HTMLElement>(".menu-promo__video");
      const fadeItems = Array.from(
        menuWrapper.querySelectorAll<HTMLElement>(".menu-fade-in"),
      );

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
          gsap.set(menuWrapper, { display: "none" });
          menuCloseResolversRef.current
            .splice(0)
            .forEach((resolve) => resolve());
        },
      });

      timeline.set(menuWrapper, { display: "flex" });
      timeline.from(menuBase, {
        opacity: 0,
        duration: 0.6,
        ease: "none",
        onStart: () => moveBase(true),
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
          stagger: { amount: 0.2 },
          onReverseComplete: () => moveBase(false),
        },
        "fade-in-up",
      );
      if (video) {
        timeline.from(
          video,
          {
            opacity: 0,
            yPercent: 20,
            duration: 0.2,
          },
          "fade-in-up",
        );
      }
      timeline.from(fadeItems, { opacity: 0, duration: 0.3 });

      timelineRef.current = timeline;
      setMenuReady(true);
    };

    void setupMenuTimeline();

    return () => {
      disposed = true;
      menuCloseResolversRef.current.splice(0).forEach((resolve) => resolve());
      timelineRef.current?.kill();
      timelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      close();
    }
  }, [close, pathname]);

  useLayoutEffect(() => {
    if (!menuReady || !timelineRef.current) return;
    if (open) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [menuReady, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="mxd-nav__wrap" data-lenis-prevent="">
      <div className="mxd-nav__contain loading__fade">
        <button
          ref={hamburgerRef}
          type="button"
          className={`mxd-nav__hamburger${open ? " nav-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={requestToggle}
        >
          <div ref={hamburgerBaseRef} className="hamburger__base" />
          <div className="hamburger__line" />
          <div className="hamburger__line" />
        </button>
      </div>

      <div
        ref={menuWrapperRef}
        className="mxd-menu__wrapper"
        aria-hidden={!open}
      >
        <button
          ref={menuBaseRef}
          type="button"
          className="mxd-menu__base"
          aria-label="Close menu"
          onClick={requestClose}
        />
        <div ref={menuContainRef} className="mxd-menu__contain">
          <div className="mxd-menu__inner">
            <div className="mxd-menu__left">
              <p className="mxd-menu__caption menu-fade-in">
                Branding, content,
                <br />
                performance. Less fog, more work.
              </p>
              <div className="main-menu">
                <nav
                  className="main-menu__content"
                  aria-label="Main navigation"
                >
                  <ul id="main-menu" className="main-menu__accordion">
                    {navItems.map((item) => {
                      const isOpen = expanded === item.label;
                      if (item.children) {
                        return (
                          <li
                            className={`main-menu__item${isOpen ? " open" : ""}`}
                            key={item.label}
                          >
                            <button
                              type="button"
                              className="main-menu__toggle"
                              onClick={() =>
                                setExpanded(isOpen ? "" : item.label)
                              }
                              aria-expanded={isOpen}
                            >
                              <span className="main-menu__link btn btn-anim">
                                <AnimatedCaption>{item.label}</AnimatedCaption>
                              </span>
                              <StarIcon />
                            </button>
                            <ul className="submenu" aria-hidden={!isOpen}>
                              {item.children.map((child) => (
                                <li
                                  className={`submenu__item${pathname === child.href ? " active" : ""}`}
                                  key={`${child.href}:${child.label}`}
                                >
                                  <Link
                                    href={child.href}
                                    onClick={(event) =>
                                      requestMenuLinkNavigation(
                                        event,
                                        child.href,
                                      )
                                    }
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        );
                      }
                      return (
                        <li className="main-menu__item" key={item.label}>
                          <Link
                            className="main-menu__link btn btn-anim"
                            href={item.href ?? "/"}
                            onClick={(event) =>
                              requestMenuLinkNavigation(event, item.href ?? "/")
                            }
                          >
                            <AnimatedCaption>{item.label}</AnimatedCaption>
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
                    Tikii Marketing Services LLP
                    <br />
                    Kolkata-built brand systems, campaigns, websites, and enough
                    strategy to keep guesswork unemployed.
                  </p>
                  <div className="menu-promo__video">
                    <video
                      className="menu-video"
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="https://dummyimage.com/540x310/5d5d5d/737373"
                    >
                      <source type="video/mp4" src="/video/540x310_video.mp4" />
                      <source
                        type="video/webm"
                        src="/video/540x310_video.webm"
                      />
                      <source type="video/ogv" src="/video/540x310_video.ogv" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                <a className="no-effect" href="tel:+919007376927">
                  +91-900-737-6927
                </a>{" "}
                /{" "}
                <a
                  className="no-effect"
                  href="https://www.instagram.com/tikii.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </p>
              <p className="t-xsmall">
                <i className="ph ph-copyright" /> 2026 Tikii
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLayerVisible, setMenuLayerVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [toTopVisible, setToTopVisible] = useState(false);
  const [routeTransitionLoading, setRouteTransitionLoading] = useState(false);
  const routeIntroPendingRef = useRef(false);
  const routeNavigationPendingRef = useRef(false);
  const routeLoaderShownAtRef = useRef(0);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((value) => !value), []);

  const navigateWithPageTransition = useCallback(
    async (href: string) => {
      if (routeNavigationPendingRef.current || href === pathname) return;

      routeNavigationPendingRef.current = true;
      await runPageOutro();
      flushSync(() => {
        routeLoaderShownAtRef.current = performance.now();
        setRouteTransitionLoading(true);
      });
      await waitForPaint();
      await wait(routeLoaderEnterTime);
      routeIntroPendingRef.current = true;
      router.push(href);
    },
    [pathname, router],
  );

  useEffect(() => {
    if (!routeIntroPendingRef.current) return;

    routeIntroPendingRef.current = false;
    void runPageIntro(async () => {
      const elapsed = performance.now() - routeLoaderShownAtRef.current;
      await wait(Math.max(0, minimumRouteLoaderTime - elapsed));
      setRouteTransitionLoading(false);
      await waitForPaint();
      await wait(180);
    }).finally(() => {
      routeNavigationPendingRef.current = false;
    });
  }, [pathname]);

  useEffect(() => {
    const stored = window.localStorage.getItem("template.theme") as
      | "light"
      | "dark"
      | null;
    const initial = stored ?? "light";
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
    const onScroll = () =>
      setToTopVisible(window.scrollY > window.innerHeight * 0.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      setMenuLayerVisible(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setMenuLayerVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("template.theme", nextTheme);
    document.documentElement.setAttribute("color-scheme", nextTheme);
  };

  const scrollToTop = async () => {
    try {
      const [{ gsap }, { ScrollToPlugin }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollToPlugin"),
      ]);
      gsap.registerPlugin(ScrollToPlugin);
      gsap.to(window, { scrollTo: 0, ease: "power4.inOut", duration: 1.3 });
    } catch {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Loader />
      <div className="tikii-noise-layer" aria-hidden="true">
        <Noise
          patternSize={500}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
      <RouteTransitionLoader visible={routeTransitionLoading} />
      <MenuOverlay
        open={menuOpen}
        close={closeMenu}
        toggle={toggleMenu}
        onNavigate={navigateWithPageTransition}
      />
      <header
        id="header"
        className={`mxd-header${hidden ? " is-hidden" : ""}${menuLayerVisible ? " menu-is-visible" : ""}`}
      >
        <div className="mxd-header__logo loading__fade">
          <Logo onNavigate={navigateWithPageTransition} />
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
            <i
              className={
                theme === "dark"
                  ? "ph-bold ph-sun-horizon"
                  : "ph-bold ph-moon-stars"
              }
            />
          </button>
          <Link
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
            href="/contact"
            aria-label="Say Hello"
          >
            <span className="btn-caption">Say Hello</span>
            <i className="ph-bold ph-arrow-up-right" />
          </Link>
        </div>
      </header>
      <ClientBehaviors />
      {children}
      <button
        id="to-top"
        className={`btn btn-to-top slide-up anim-no-delay${toTopVisible ? " is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <i className="ph ph-arrow-up" />
      </button>
    </>
  );
}
