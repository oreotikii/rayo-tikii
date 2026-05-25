"use client";

// Source: ../../app/services.html

import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {
  "stats-counter-3": {
    "value": 5,
    "suffix": "+"
  },
  "stats-counter-4": {
    "value": 70,
    "suffix": "+"
  }
} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
          <div className="mxd-container grid-container">
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                    <div className="mxd-block__name name-inner-headline loading__item">
                      <p className="mxd-point-subtitle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                          <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z" />
                        </svg>
                        <span>
                          {"Services"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="inner-headline__title headline-img-before headline-img-04 loading__item">
                          {"A holistic approach from beginning to end"}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section mxd-section-inner-stats overflow-hidden">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                  <div className="col-12 col-xl-10">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-stats">
                        <div className="mxd-stats-cards loading__fade">
                          <div className="container-fluid px-0">
                            <div className="row gx-0">
                              <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item">
                                <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                  <div className="mxd-counter">
                                    <p id="stats-counter-3" className="mxd-counter__number mxd-stats-number">
                                      {"0"}
                                    </p>
                                    <p className="mxd-counter__descr t-140 t-bright">
                                      {"Years of professional experience in designing digital products"}
                                    </p>
                                  </div>
                                  <div className="mxd-stats-cards__btngroup">
                                    <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                                      <span className="btn-caption">
                                        {"Start New Project"}
                                      </span>
                                      <i className="ph-bold ph-arrow-up-right" />
                                    </a>
                                  </div>
                                  <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                                    <img src="https://dummyimage.com/800x800/5d5d5d/838383" alt="Illustration" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item">
                                <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                                  <div className="mxd-counter">
                                    <p id="stats-counter-4" className="mxd-counter__number mxd-stats-number">
                                      {"0"}
                                    </p>
                                    <p className="mxd-counter__descr t-140 t-bright">
                                      {"Successfully"}
                                      <br />
                                      {"completed projects"}
                                    </p>
                                  </div>
                                  <div className="mxd-stats-cards__btngroup">
                                    <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/works">
                                      <span className="btn-caption">
                                        {"Works"}
                                      </span>
                                      <i className="ph-bold ph-arrow-up-right" />
                                    </a>
                                  </div>
                                  <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                                    <img src="https://dummyimage.com/800x800/5d5d5d/838383" alt="Illustration" />
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
            </div>
          </div>
        </div>
        <div className="mxd-section overflow-hidden padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-services-list grid-top hover-reveal">
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>
                              {"Brand Identities"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>
                              {"We build brands that go deeper than a logo slapped onto a deck. Strategy, visual language, messaging, and guidelines come together so your brand feels clear, distinct, and hard to ignore."}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Art direction"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Packaging"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Brand guidelines"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Logo systems"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Visual language"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Brand strategy"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Messaging"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>
                              {"Content"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>
                              {"We create scroll-stopping content with a job to do: explain the brand, earn attention, and move people closer to action. Likes are nice. Revenue is less decorative."}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Photography"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Graphic design"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Packaging design"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Email content"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"WhatsApp campaigns"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Social content"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Storytelling"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>
                              {"Marketing"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>
                              {"We turn data, audience insight, and creative thinking into campaigns with a spine. Guesswork can sit outside with the other expired marketing habits."}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Social media"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Performance"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Product marketing"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Marketing automation"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"SEO"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-services-list__item hover-reveal__item">
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-360x440">
                    <img className="hover-reveal__image" src="https://dummyimage.com/360x440/5d5d5d/838383" alt="" />
                  </div>
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>
                              {"Digital Experiences"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                          <div className="mxd-services-list__descr anim-uni-in-up">
                            <p>
                              {"We design and build websites, Shopify experiences, and digital journeys that look good, load clearly, and help customers get where they came to go."}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-services-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Website design"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"UX/UI"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Shopify"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Development"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Analytics"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p>
                                  {"Conversion"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <div className="mxd-divider__video">
                <video className="video parallax-video" preload="auto" autoPlay loop muted poster="https://dummyimage.com/1920x1080/5d5d5d/838383">
                  <source type="video/mp4" src="/video/1920x1080_video.mp4" />
                  <source type="video/webm" src="/video/1920x1080_video.webm" />
                  <source type="video/ogv" src="/video/1920x1080_video.ogv" />
                </video>
              </div>
              <div className="mxd-divider__trigger">
                <a href="https://vimeo.com/65036292" id="showreel-trigger" className="btn-rotating btn-rotating-blur-outline showreel-trigger">
                  <svg version="1.1" id="scrollDown" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" style={({ enableBackground: "new 0 0 160 160" }) as CSSProperties} xmlSpace="preserve" className="btn-rotating__text animate-rotation" data-value="360">
                    <defs>
                      <path id="textPath" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z" />
                    </defs>
                    <g>
                      <use xlinkHref="#textPath" fill="none" />
                      <text>
                        <textPath xlinkHref="#textPath">
                          {"Play showreel * Play showreel * Play showreel * "}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                  <img className="btn-rotating__image" src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Object" />
                </a>
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
                          {"Recent insights"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p className="anim-uni-in-up">
                          {"Inspiring ideas, creative insights, and the latest \r\n                        in design and tech. Fueling innovation for your digital journey."}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog">
                          <span className="btn-caption">
                            {"All Articles"}
                          </span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </a>
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
                      <a className="mxd-blog-preview__media" href="/blog/article">
                        <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small">
                        </div>
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                          </i>
                        </div>
                        <div className="mxd-blog-preview__tags">
                          <span className="tag tag-default tag-permanent">
                            {"Concept"}
                          </span>
                          <span className="tag tag-default tag-permanent">
                            {"Editorial"}
                          </span>
                        </div>
                      </a>
                      <div className="mxd-blog-preview__data">
                        <a className="anim-uni-in-up" href="/blog/article">
                          <span>
                            {"Frontend innovations"}
                          </span>
                          {" and user journeys"}
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                      <a className="mxd-blog-preview__media" href="/blog/article">
                        <div className="mxd-blog-preview__image blog-preview-image-2 parallax-img-small">
                        </div>
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                          </i>
                        </div>
                        <div className="mxd-blog-preview__tags">
                          <span className="tag tag-default tag-permanent">
                            {"UI/UX"}
                          </span>
                          <span className="tag tag-default tag-permanent">
                            {"Development"}
                          </span>
                        </div>
                      </a>
                      <div className="mxd-blog-preview__data">
                        <a className="anim-uni-in-up" href="/blog/article">
                          {"Branding in creating "}
                          <span>
                            {"digital experiences"}
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                      <a className="mxd-blog-preview__media" href="/blog/article">
                        <div className="mxd-blog-preview__image blog-preview-image-3 parallax-img-small">
                        </div>
                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon">
                            <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                          </i>
                        </div>
                        <div className="mxd-blog-preview__tags">
                          <span className="tag tag-default tag-permanent">
                            {"News"}
                          </span>
                          <span className="tag tag-default tag-permanent">
                            {"AI"}
                          </span>
                        </div>
                      </a>
                      <div className="mxd-blog-preview__data">
                        <a className="anim-uni-in-up" href="/blog/article">
                          {"Elevating "}
                          <span>
                            {"digital workshops"}
                          </span>
                          {" with engaging design"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section overflow-hidden">
          <div className="mxd-container">
            <div className="mxd-block">
              <div className="mxd-promo">
                <div className="mxd-promo__inner anim-zoom-out-container">
                  <div className="mxd-promo__bg" />
                  <div className="mxd-promo__content">
                    <p className="mxd-promo__title anim-uni-in-up">
                      <span className="mxd-promo__icon">
                        <img src="https://dummyimage.com/100x100/838383/5d5d5d" alt="Icon" />
                      </span>
                      <span className="mxd-promo__caption reveal-type">
                        {"Let's talk about your project!"}
                      </span>
                    </p>
                    <div className="mxd-promo__controls anim-uni-in-up">
                      <a className="btn btn-anim btn-default btn-large btn-additional slide-right-up" href="/contact">
                        <span className="btn-caption">
                          {"Say Hello"}
                        </span>
                        <i className="ph-bold ph-arrow-up-right" />
                      </a>
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
      </main>
      <footer id="mxd-footer" className="mxd-footer">
        <div className="mxd-footer__text-wrap">
          <div className="fullwidth-text__tl-trigger" />
          <div className="mxd-footer__fullwidth-text anim-top-to-bottom">
            <svg className="mxd-footer__svg-v2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400.26 72" style={({ enableBackground: "new 0 0 400.26 72" }) as CSSProperties} xmlSpace="preserve">
              <path d="M4.93,56V25.93H0V16h10.13v7.73h2.8c1.11-2.67,2.82-4.69,5.13-6.07c2.31-1.38,4.96-2.07,7.93-2.07h3.33v8.53h-3.8 c-3.65,0-6.36,1.04-8.13,3.13c-1.78,2.09-2.67,4.87-2.67,8.33V56H4.93z M46.53,56.73c-4.67,0-8.32-1.13-10.97-3.4 c-2.65-2.27-3.97-5.27-3.97-9c0-3.91,1.34-6.93,4.03-9.07c2.69-2.13,6.57-3.2,11.63-3.2h12.2v-1.6c0-4.89-2.84-7.33-8.53-7.33 c-4.84,0-7.76,1.73-8.73,5.2h-9.93c0.84-4.27,2.87-7.52,6.07-9.77c3.2-2.24,7.4-3.37,12.6-3.37c5.87,0,10.33,1.32,13.4,3.97 c3.07,2.64,4.6,6.5,4.6,11.57v15.33h4.73V56h-10.2v-6.4h-2.8c-1.38,2.27-3.23,4.02-5.57,5.27C52.77,56.11,49.91,56.73,46.53,56.73z M48,49.07c2.18,0,4.13-0.41,5.87-1.23c1.73-0.82,3.1-1.93,4.1-3.33s1.5-2.97,1.5-4.7v-0.93H47.8c-4.49,0-6.73,1.67-6.73,5 c0,1.65,0.61,2.92,1.83,3.83C44.12,48.61,45.82,49.07,48,49.07z M78.93,72v-7.93H88l3.4-8.27L73.93,16H84.4l12,28.33h0.33L108.33,16 h10.07l-17.13,40l-3.47,8.27c-1.07,2.44-2.23,4.34-3.5,5.7C93.03,71.32,91.02,72,88.27,72H78.93z M140.8,56.8 c-4.31,0-8.06-0.86-11.23-2.57c-3.18-1.71-5.64-4.12-7.4-7.23c-1.76-3.11-2.63-6.78-2.63-11c0-4.27,0.88-7.96,2.63-11.07 c1.76-3.11,4.23-5.51,7.43-7.2c3.2-1.69,6.93-2.53,11.2-2.53c4.36,0,8.1,0.84,11.23,2.53c3.13,1.69,5.57,4.09,7.3,7.2 c1.73,3.11,2.6,6.8,2.6,11.07c0,4.22-0.87,7.9-2.6,11.03c-1.73,3.13-4.18,5.54-7.33,7.23C148.84,55.96,145.11,56.8,140.8,56.8z M140.8,48.13c3.55,0,6.31-1.08,8.27-3.23c1.96-2.16,2.93-5.12,2.93-8.9c0-3.82-0.98-6.8-2.93-8.93c-1.96-2.13-4.71-3.2-8.27-3.2 c-3.6,0-6.39,1.07-8.37,3.2c-1.98,2.13-2.97,5.09-2.97,8.87c0,3.82,0.99,6.81,2.97,8.97C134.41,47.06,137.2,48.13,140.8,48.13z M185.6,56.8c-5.78,0-10.33-1.21-13.67-3.63c-3.33-2.42-5.13-5.81-5.4-10.17h9.67c0.31,2.09,1.27,3.63,2.87,4.63 c1.6,1,3.91,1.5,6.93,1.5c5.11,0,7.67-1.47,7.67-4.4c0-1.24-0.39-2.2-1.17-2.87c-0.78-0.67-2.08-1.18-3.9-1.53l-8.87-1.67 c-7.78-1.51-11.67-5.2-11.67-11.07c0-3.78,1.49-6.79,4.47-9.03c2.98-2.24,7.07-3.37,12.27-3.37c5.29,0,9.48,1.14,12.57,3.43 s4.81,5.52,5.17,9.7h-9.6c-0.49-2-1.41-3.46-2.77-4.37c-1.36-0.91-3.3-1.37-5.83-1.37c-2.27,0-4,0.36-5.2,1.07 c-1.2,0.71-1.8,1.76-1.8,3.13c0,1.02,0.38,1.84,1.13,2.47c0.75,0.62,1.96,1.09,3.6,1.4l9,1.73c4.09,0.8,7.09,2.13,9,4 c1.91,1.87,2.87,4.38,2.87,7.53c0,4.04-1.49,7.2-4.47,9.47C195.49,55.67,191.2,56.8,185.6,56.8z M221.06,56c-2.62,0-4.66-0.67-6.1-2 c-1.45-1.33-2.17-3.36-2.17-6.07v-24.2h-7.07V16h7.13V4h9.73v12h9.67v7.73h-9.53V48.2h10.47V56H221.06z M255.86,56.73 c-5.47,0-9.68-1.46-12.63-4.37c-2.96-2.91-4.43-6.85-4.43-11.83V16h9.93v22.53c0,3.11,0.8,5.46,2.4,7.03 c1.6,1.58,3.98,2.37,7.13,2.37c3.33,0,5.89-0.84,7.67-2.53c1.78-1.69,2.67-4.07,2.67-7.13V16h9.93v30.07h5V56h-10.2v-6.4h-2.8 c-1.56,2.31-3.5,4.08-5.83,5.3C262.36,56.12,259.42,56.73,255.86,56.73z M307,56.8c-4.09,0-7.56-0.86-10.4-2.57 c-2.84-1.71-5.01-4.13-6.5-7.27c-1.49-3.13-2.23-6.79-2.23-10.97c0-4.22,0.72-7.89,2.17-11c1.44-3.11,3.53-5.52,6.27-7.23 c2.73-1.71,6.01-2.57,9.83-2.57c3.02,0,5.62,0.57,7.8,1.7c2.18,1.13,3.84,2.77,5,4.9h0.27V0h9.93v46.07h4.93V56h-10.13v-6.4h-2.8 c-1.42,2.31-3.31,4.09-5.67,5.33C313.11,56.18,310.28,56.8,307,56.8z M308.73,48.2c3.2,0,5.74-0.9,7.63-2.7 c1.89-1.8,2.83-4.23,2.83-7.3v-4.4c0-3.07-0.94-5.5-2.83-7.3c-1.89-1.8-4.43-2.7-7.63-2.7c-3.56,0-6.27,1.08-8.13,3.23 c-1.87,2.16-2.8,5.14-2.8,8.97c0,3.82,0.93,6.81,2.8,8.97C302.46,47.12,305.17,48.2,308.73,48.2z M345.86,11.6 c-1.56,0-2.88-0.54-3.97-1.63c-1.09-1.09-1.63-2.41-1.63-3.97c0-1.56,0.54-2.88,1.63-3.97c1.09-1.09,2.41-1.63,3.97-1.63 c1.55,0,2.88,0.54,3.97,1.63c1.09,1.09,1.63,2.41,1.63,3.97c0,1.56-0.54,2.88-1.63,3.97C348.74,11.06,347.42,11.6,345.86,11.6z M340.93,56V16h9.93v40H340.93z M379.13,56.8c-4.31,0-8.06-0.86-11.23-2.57c-3.18-1.71-5.64-4.12-7.4-7.23 c-1.76-3.11-2.63-6.78-2.63-11c0-4.27,0.88-7.96,2.63-11.07c1.76-3.11,4.23-5.51,7.43-7.2c3.2-1.69,6.93-2.53,11.2-2.53 c4.36,0,8.1,0.84,11.23,2.53c3.13,1.69,5.57,4.09,7.3,7.2c1.73,3.11,2.6,6.8,2.6,11.07c0,4.22-0.87,7.9-2.6,11.03 c-1.73,3.13-4.18,5.54-7.33,7.23C387.17,55.96,383.44,56.8,379.13,56.8z M379.13,48.13c3.55,0,6.31-1.08,8.27-3.23 c1.96-2.16,2.93-5.12,2.93-8.9c0-3.82-0.98-6.8-2.93-8.93c-1.96-2.13-4.71-3.2-8.27-3.2c-3.6,0-6.39,1.07-8.37,3.2 c-1.98,2.13-2.97,5.09-2.97,8.87c0,3.82,0.99,6.81,2.97,8.97C372.74,47.06,375.53,48.13,379.13,48.13z" />
            </svg>
          </div>
        </div>
        <div className="mxd-footer__footer-blocks">
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__nav">
                <ul className="footer-nav">
                  <li className="footer-nav__item anim-uni-in-up">
                    <a href="/" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        {"Home"}
                      </span>
                    </a>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <a href="/about" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        {"About us"}
                      </span>
                    </a>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <a href="/works" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        {"Works"}
                      </span>
                    </a>
                    <p className="footer-nav__counter">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                        <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z" />
                      </svg>
                      <span>
                        {"10"}
                      </span>
                    </p>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <a href="/services" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        {"Services"}
                      </span>
                    </a>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <a href="/blog" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        {"Insights"}
                      </span>
                    </a>
                  </li>
                  <li className="footer-nav__item anim-uni-in-up">
                    <a href="/contact" className="footer-nav__link btn-anim">
                      <span className="btn-caption">
                        {"Contact"}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <a className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                  <span className="btn-caption">
                    {"Privacy Policy"}
                  </span>
                  <i className="ph ph-arrow-right" />
                </a>
                <a className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                  <span className="btn-caption">
                    {"Terms & conditions"}
                  </span>
                  <i className="ph ph-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                  <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z" />
                </svg>
                <a href="mailto:example@example.com?subject=Message%20from%20your%20site">
                  {"hello@rayostudio.com"}
                </a>
              </p>
            </div>
            <div className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                  <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z" />
                </svg>
                <a href="tel:+12127089400">
                  {"+1 212-708-9400"}
                </a>
              </p>
            </div>
            <div className="footer-blocks__card fill-card notify">
              <div className="footer-blocks__title anim-uni-in-up">
                <p className="footer-blocks__title-m">
                  {"Subscribe to our insights:"}
                </p>
              </div>
              <div className="form-container anim-uni-in-up">
                <div className="form__reply subscription-ok">
                  <span className="reply__text">
                    {"Done! Thanks for subscribing."}
                  </span>
                </div>
                <div className="form__reply subscription-error">
                  <span className="reply__text">
                    {"Ooops! Something went wrong. Please try again later."}
                  </span>
                </div>
                <DemoForm className="form notify-form form-light">
                  <input type="email" placeholder="Your Email" required />
                  <button className="btn btn-form btn-absolute-right btn-muted slide-right-up anim-no-delay" type="submit" aria-label="Submit">
                    <i className="ph ph-arrow-up-right" />
                  </button>
                </DemoForm>
              </div>
            </div>
          </div>
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__block">
                <div className="footer-blocks__title anim-uni-in-up">
                  <p className="footer-blocks__title-l">
                    {"Ecosystem"}
                  </p>
                </div>
                <div className="footer-blocks__socials">
                  <ul className="footer-socials">
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://dribbble.com/" className="footer-socials__link" target="_blank">
                        {"Dribbble"}
                      </a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://www.behance.net/" className="footer-socials__link" target="_blank">
                        {"Behance"}
                      </a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://www.instagram.com/" className="footer-socials__link" target="_blank">
                        {"Instagram"}
                      </a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://github.com/" className="footer-socials__link" target="_blank">
                        {"Github"}
                      </a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://codepen.io/" className="footer-socials__link" target="_blank">
                        {"Codepen"}
                      </a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://www.figma.com/community" className="footer-socials__link" target="_blank">
                        {"Figma Community"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <p className="t-xsmall t-muted">
                  <a className="no-effect" href="https://1.envato.market/EKA9WD" target="_blank">
                    {"Mix_Design"}
                  </a>
                  <i className="ph-bold ph-copyright" />
                  {"\r\n                2025\r\n              "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
