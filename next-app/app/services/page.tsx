"use client";

// Source: ../../app/services.html

import { TikiiFooter } from "@/components/tikii-footer";
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
        </main>
      <TikiiFooter />
    </>
  );
}
