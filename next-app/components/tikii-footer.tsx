"use client";

import Link from "next/link";
import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import BorderGlow from "@/components/border-glow";

type FooterLinkProps = ComponentPropsWithoutRef<"a">;

function FooterLink({ href, children, ...props }: FooterLinkProps) {
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

type FooterBorderGlowProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>;

function FooterBorderGlow({ as = "div", className = "", children, ...props }: FooterBorderGlowProps) {
  return (
    <BorderGlow
      {...props}
      as={as}
      className={className}
      edgeSensitivity={24}
      glowColor="72 85 66"
      backgroundColor="var(--base-tint)"
      borderRadius="var(--_radius-m)"
      glowRadius={34}
      glowIntensity={0.85}
      coneSpread={24}
      fillOpacity={0.26}
      colors={["#ddf160", "#9f8be7", "#38bdf8"]}
    >
      {children}
    </BorderGlow>
  );
}

function SparkIcon({ size = 20 }: { size?: number }) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={`${size}px`} height={`${size}px`} viewBox="0 0 20 20" fill="currentColor">
      <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z" />
    </svg>
  );
}

export function TikiiFooter() {
  return (
    <>
      <div className="mxd-section overflow-hidden">
        <div className="mxd-container">
          <div className="mxd-block">
            <div className="mxd-promo">
              <div className="mxd-promo__inner anim-zoom-out-container">
                <div className="mxd-promo__bg"></div>
                <div className="mxd-promo__content">
                  <p className="mxd-promo__title anim-uni-in-up">
                    <span className="mxd-promo__icon">
                      <img src="https://dummyimage.com/100x100/838383/5d5d5d" alt="Icon" />
                    </span>
                    <span className="mxd-promo__caption reveal-type">
                      Got a brand, campaign, or website that needs adult supervision?
                    </span>
                  </p>
                  <div className="mxd-promo__controls anim-uni-in-up">
                    <FooterLink className="btn btn-anim btn-default btn-large btn-additional slide-right-up" href="/contact">
                      <span className="btn-caption">
                        Let&apos;s build it
                      </span>
                      <i className="ph-bold ph-arrow-up-right"></i>
                    </FooterLink>
                  </div>
                </div>
                <div className="mxd-promo__images">
                  <img className="promo-image promo-image-1" src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Image" />
                  <img className="promo-image promo-image-2" src="https://dummyimage.com/300x300/5d5d5d/838383" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="mxd-footer" className="mxd-footer">
        <div className="mxd-footer__text-wrap">
          <div className="fullwidth-text__tl-trigger"></div>
          <div className="mxd-footer__fullwidth-text anim-top-to-bottom">
            <svg className="mxd-footer__svg-v2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400.26 72" xmlSpace="preserve">
              <text x="0" y="61" fontFamily="var(--_font-accent)" fontSize="70" fontWeight="700" textAnchor="start">tikii•digital</text>
            </svg>
          </div>
        </div>
        <div className="mxd-footer__footer-blocks">
          <div className="footer-blocks__column animate-card-3">
            <FooterBorderGlow className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__nav">
                <ul className="footer-nav">
                  <li className="footer-nav__item anim-uni-in-up">
                    <FooterLink href="/" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        Home
                      </span>
                    </FooterLink>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <FooterLink href="/about" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        About
                      </span>
                    </FooterLink>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <FooterLink href="/works" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        Works
                      </span>
                    </FooterLink>
                    <p className="footer-nav__counter">
                      <SparkIcon />
                      <span>
                        5
                      </span>
                    </p>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <FooterLink href="/services" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        Services
                      </span>
                    </FooterLink>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <FooterLink href="/blog" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        Insights
                      </span>
                    </FooterLink>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <FooterLink href="/contact" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        Contact
                      </span>
                    </FooterLink>
                  </li>
                </ul>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <FooterLink className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="/privacy-policy">
                  <span className="btn-caption">
                    Privacy Policy
                  </span>
                  <i className="ph ph-arrow-right"></i>
                </FooterLink>
                <FooterLink className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="/terms-conditions">
                  <span className="btn-caption">
                    Terms & conditions
                  </span>
                  <i className="ph ph-arrow-right"></i>
                </FooterLink>
              </div>
            </FooterBorderGlow>
          </div>
          <div className="footer-blocks__column animate-card-3">
            <FooterBorderGlow className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <SparkIcon />
                <FooterLink href="mailto:contact@tikii.in?subject=Just%20came%20across%20your%20website">
                  contact@tikii.in
                </FooterLink>
              </p>
            </FooterBorderGlow>
            <FooterBorderGlow className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <SparkIcon />
                <FooterLink href="tel:+919007376927">
                  +91-900-737-6927
                </FooterLink>
              </p>
            </FooterBorderGlow>
            <FooterBorderGlow className="footer-blocks__card fill-card footer-image-card" aria-hidden="true">
              <span className="footer-image-card__fill" />
            </FooterBorderGlow>
          </div>
          <div className="footer-blocks__column animate-card-3">
            <FooterBorderGlow className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__block">
                <div className="footer-blocks__title anim-uni-in-up">
                  <p className="footer-blocks__title-l">
                    Find us
                  </p>
                </div>
                <div className="footer-blocks__address anim-uni-in-up">
                  <p className="t-small t-muted">
                    Tikii Marketing Services LLP
                    <br />
                    Terminus Building, BG-12, New Town, Kolkata, West Bengal - 700156, India
                  </p>
                </div>
                <div className="footer-blocks__socials">
                  <ul className="footer-socials">
                    <li className="footer-socials__item anim-uni-in-up">
                      <FooterLink href="https://www.instagram.com/tikii.in" className="footer-socials__link" target="_blank">
                        Instagram
                      </FooterLink>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <FooterLink href="https://www.behance.net/tikii_in" className="footer-socials__link" target="_blank">
                        Behance
                      </FooterLink>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <FooterLink href="https://www.linkedin.com/company/tikii" className="footer-socials__link" target="_blank">
                        Linkedin
                      </FooterLink>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <FooterLink href="https://www.facebook.com/Tikii.in/" className="footer-socials__link" target="_blank">
                        Facebook
                      </FooterLink>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <FooterLink href="/contact" className="footer-socials__link">
                        Contact
                      </FooterLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <p className="t-xsmall t-muted">
                  Tikii Marketing Services LLP
                  <i className="ph-bold ph-copyright"></i>
                  {"                 2026               "}
                </p>
              </div>
            </FooterBorderGlow>
          </div>
        </div>
      </footer>
    </>
  );
}
