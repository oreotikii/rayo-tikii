"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ClientBehaviors() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("no-touch");

    let raf = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | undefined;
    let typed: { destroy: () => void } | undefined;
    const cleanups: Array<() => void> = [];

    const run = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>(".animate-rotation").forEach((element) => {
            const rotate = Number(element.dataset.value || 360);
            gsap.fromTo(
              element,
              { rotate: 0 },
              {
                rotate,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  scrub: true
                }
              }
            );
          });

          gsap.utils.toArray<HTMLElement>(".anim-uni-in-up").forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 50 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "sine.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 92%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          });

          [
            [".anim-uni-scale-in", { y: 50, scale: 1.2 }],
            [".anim-uni-scale-in-right", { y: 50, x: -70, scale: 1.2 }],
            [".anim-uni-scale-in-left", { y: 50, x: 70, scale: 1.2 }]
          ].forEach(([selector, fromVars]) => {
            gsap.utils.toArray<HTMLElement>(selector as string).forEach((element) => {
              gsap.fromTo(
                element,
                { autoAlpha: 1, ...(fromVars as gsap.TweenVars) },
                {
                  autoAlpha: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "sine.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 92%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            });
          });

          [".animate-card-2", ".animate-card-3", ".animate-card-4", ".animate-card-5"].forEach((selector) => {
            if (!document.querySelector(selector)) return;
            gsap.set(selector, { y: 50, autoAlpha: 0 });
            ScrollTrigger.batch(selector, {
              interval: 0.1,
              batchMax: Number(selector.slice(-1)),
              onEnter: (batch) =>
                gsap.to(batch, {
                  autoAlpha: 1,
                  y: 0,
                  ease: "sine.out",
                  stagger: 0.15,
                  overwrite: true
                }),
              onLeaveBack: (batch) => gsap.set(batch, { autoAlpha: 0, y: 50, overwrite: true })
            });
          });

          gsap.utils.toArray<HTMLElement>(".parallax-img, .parallax-img-small").forEach((element) => {
            gsap.fromTo(
              element,
              { backgroundPosition: "50% 20%" },
              {
                backgroundPosition: "50% 80%",
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  scrub: true
                }
              }
            );
          });

          gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((element) => {
            const speed = Number(element.dataset.speed || 1);
            gsap.to(element, {
              y: () => (1 - speed) * ScrollTrigger.maxScroll(window),
              ease: "none",
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                invalidateOnRefresh: true
              }
            });
          });

          gsap.utils.toArray<HTMLElement>(".reveal-type").forEach((element) => {
            gsap.fromTo(
              element,
              { autoAlpha: 0.25 },
              {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: element,
                  start: "top 85%",
                  end: "top 35%",
                  scrub: true
                }
              }
            );
          });
        });

        cleanups.push(() => {
          ctx.revert();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        });
      } catch {
        // Static content remains visible if animation libraries cannot initialize.
      }

      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ smoothWheel: true });
        const tick = (time: number) => {
          lenis?.raf(time);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      } catch {
        lenis = undefined;
      }

      document.querySelectorAll<HTMLElement>(".mxd-accordion__title").forEach((title) => {
        const onClick = (event: Event) => {
          event.preventDefault();
          const item = title.closest(".mxd-accordion__item");
          const content = title.nextElementSibling as HTMLElement | null;
          const active = title.classList.contains("accordion-active");
          item?.parentElement?.querySelectorAll(".mxd-accordion__title").forEach((other) => other.classList.remove("accordion-active"));
          item?.parentElement?.querySelectorAll<HTMLElement>(".mxd-accordion__content").forEach((other) => {
            other.style.display = "none";
          });
          item?.parentElement?.querySelectorAll(".mxd-accordion__arrow").forEach((other) => other.classList.remove("accordion-rotate"));
          if (!active) {
            title.classList.add("accordion-active");
            title.querySelector(".mxd-accordion__arrow")?.classList.add("accordion-rotate");
            if (content) content.style.display = "block";
          }
        };
        title.addEventListener("click", onClick);
        cleanups.push(() => title.removeEventListener("click", onClick));
      });

      document.querySelectorAll<HTMLElement>(".mxd-hover-reveal__item").forEach((item) => {
        const media = item.querySelector<HTMLElement>(".mxd-hover-reveal__image");
        if (!media) return;
        const move = (event: MouseEvent) => {
          media.style.transform = `translate(${event.offsetX}px, ${event.offsetY}px)`;
        };
        item.addEventListener("mousemove", move);
        cleanups.push(() => item.removeEventListener("mousemove", move));
      });

      document.querySelectorAll<HTMLAnchorElement>(".showreel-trigger").forEach((trigger) => {
        const onClick = (event: Event) => {
          event.preventDefault();
          window.open(trigger.href, "_blank", "noopener,noreferrer");
        };
        trigger.addEventListener("click", onClick);
        cleanups.push(() => trigger.removeEventListener("click", onClick));
      });

      document.querySelectorAll<HTMLAnchorElement>(".swiper-button-prev a, .swiper-button-next a").forEach((controlLink) => {
        const onClick = (event: Event) => event.preventDefault();
        controlLink.addEventListener("click", onClick);
        cleanups.push(() => controlLink.removeEventListener("click", onClick));
      });

      try {
        const Typed = (await import("typed.js")).default;
        if (document.querySelector("#typed") && document.querySelector("#typed-strings")) {
          typed = new Typed("#typed", {
            stringsElement: "#typed-strings",
            showCursor: true,
            cursorChar: "_",
            loop: true,
            typeSpeed: 70,
            backSpeed: 30,
            backDelay: 2500
          });
        }
      } catch {
        typed = undefined;
      }

      try {
        const { Swiper } = await import("swiper");
        const { Navigation, Pagination, Autoplay, Parallax, EffectFade } = await import("swiper/modules");
        document.querySelectorAll<HTMLElement>(".swiper-testimonials, .swiper-testimonials-2, .mxd-demo-swiper").forEach((element) => {
          const isPhotoTestimonials = element.classList.contains("swiper-testimonials-2");
          const isDemo = element.classList.contains("mxd-demo-swiper");
          const initialSlide = Number.parseInt(element.dataset.initialSlide ?? "0", 10);
          const instance = new Swiper(element, {
            modules: [Navigation, Pagination, Autoplay, Parallax, EffectFade],
            slidesPerView: isDemo ? 1 : isPhotoTestimonials ? 1 : "auto",
            spaceBetween: 30,
            loop: true,
            initialSlide: Number.isNaN(initialSlide) ? 0 : initialSlide,
            speed: isDemo ? 600 : 1000,
            effect: isPhotoTestimonials ? "fade" : "slide",
            grabCursor: true,
            parallax: true,
            centeredSlides: isDemo,
            breakpoints: isDemo
              ? {
                  640: { slidesPerView: 1, spaceBetween: 30 },
                  768: { slidesPerView: 3, spaceBetween: 30 },
                  1600: { slidesPerView: 3, spaceBetween: 30 }
                }
              : undefined,
            autoplay: { delay: 3000, disableOnInteraction: false },
            pagination: {
              el: element.querySelector<HTMLElement>(".swiper-pagination") ?? undefined,
              type: "fraction"
            },
            navigation: {
              addIcons: false,
              nextEl: element.querySelector<HTMLElement>(".swiper-button-next") ?? undefined,
              prevEl: element.querySelector<HTMLElement>(".swiper-button-prev") ?? undefined
            }
          });
          cleanups.push(() => instance.destroy(true, true));
        });
      } catch {
        // Static markup remains usable if Swiper is not available.
      }

      try {
        const Masonry = (await import("masonry-layout")).default;
        const imagesLoaded = (await import("imagesloaded")).default;
        document.querySelectorAll<HTMLElement>(".mxd-projects-masonry__gallery").forEach((gallery) => {
          const instance = new Masonry(gallery, {
            itemSelector: ".mxd-projects-masonry__item, .mxd-projects-masonry__title",
            percentPosition: true
          });
          imagesLoaded(gallery, () => instance.layout());
          cleanups.push(() => instance.destroy());
        });
      } catch {
        // The grid still renders without masonry enhancement.
      }
    };

    void run();

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      typed?.destroy();
      lenis?.destroy();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
