"use client";

// Source: ../../app/works-simple.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-headline-pre-stack">
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
                          {"Works"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title headline-img-after headline-img-03">
                          {"Making your boldest ideas a reality"}
                        </h1>
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
              <div className="content__block loading__fade">
                <div className="stack-wrapper">
                  <div className="stack-offset" />
                  <div className="projects-stack">
                    <div className="stack-item">
                      <a className="mxd-projects-stack__inner justify-between" href="/works/project-details">
                        <div className="mxd-projects-stack__image">
                          <img className="mobile" src="https://dummyimage.com/1080x1920/2d2d2d/838383" alt="Project Preview" />
                          <img className="desktop" src="https://dummyimage.com/1920x1080/2d2d2d/838383" alt="Project Preview" />
                        </div>
                        <div className="mxd-projects-stack__tags">
                          <span className="tag tag-default tag-outline-permanent">
                            {"Brand"}
                          </span>
                          <span className="tag tag-default tag-outline-permanent">
                            {"Illustrations"}
                          </span>
                          <span className="tag tag-default tag-outline-permanent">
                            {"Web"}
                          </span>
                        </div>
                        <div className="mxd-projects-stack__title no-margin">
                          <h2 className="permanent-light">
                            {"Studio template"}
                          </h2>
                        </div>
                      </a>
                    </div>
                    <div className="stack-item">
                      <a className="mxd-projects-stack__inner justify-between" href="/works/project-details">
                        <div className="mxd-projects-stack__image">
                          <img className="mobile" src="https://dummyimage.com/1080x1920/2d2d2d/838383" alt="Project Preview" />
                          <img className="desktop" src="https://dummyimage.com/1920x1080/2d2d2d/838383" alt="Project Preview" />
                        </div>
                        <div className="mxd-projects-stack__tags">
                          <span className="tag tag-default tag-outline-permanent">
                            {"Sora"}
                          </span>
                          <span className="tag tag-default tag-outline-permanent">
                            {"AI"}
                          </span>
                          <span className="tag tag-default tag-outline-permanent">
                            {"Editorial"}
                          </span>
                        </div>
                        <div className="mxd-projects-stack__title no-margin">
                          <h2 className="permanent-light">
                            {"AI Experiments"}
                          </h2>
                        </div>
                      </a>
                    </div>
                    <div className="stack-item">
                      <a className="mxd-projects-stack__inner justify-between" href="/works/project-details">
                        <div className="mxd-projects-stack__image">
                          <img className="mobile" src="https://dummyimage.com/1080x1920/2d2d2d/838383" alt="Project Preview" />
                          <img className="desktop" src="https://dummyimage.com/1920x1080/2d2d2d/838383" alt="Project Preview" />
                        </div>
                        <div className="mxd-projects-stack__tags">
                          <span className="tag tag-default tag-outline-permanent">
                            {"Design"}
                          </span>
                          <span className="tag tag-default tag-outline-permanent">
                            {"UI/UX"}
                          </span>
                          <span className="tag tag-default tag-outline-permanent">
                            {"Android"}
                          </span>
                        </div>
                        <div className="mxd-projects-stack__title no-margin">
                          <h2 className="permanent-light">
                            {"Mobile app design"}
                          </h2>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section overflow-hidden padding-grid-pre-mtext">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type anim-uni-in-up">
                          {"Portfolio archive"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                    <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-down" href="#testimonials">
                          <span className="btn-caption">
                            {"Clients Approve"}
                          </span>
                          <i className="ph-bold ph-arrow-down-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-block">
              <div className="mxd-projects-list hover-reveal">
                <a className="mxd-projects-list__item hover-reveal__item" href="/works/project-details">
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-280x340">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x730/4d4d4d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-projects-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__title anim-uni-in-up">
                            <div className="mxd-projects-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Babylon"}
                            </p>
                          </div>
                          <div className="mxd-projects-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/1200x800/4d4d4d/838383" alt="Project Preview" />
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Branding"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Hospitality identity"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2025"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-projects-list__item hover-reveal__item" href="/works/project-details">
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-280x340">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x730/4d4d4d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-projects-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__title anim-uni-in-up">
                            <div className="mxd-projects-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Vedamorph"}
                            </p>
                          </div>
                          <div className="mxd-projects-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/1200x800/4d4d4d/838383" alt="Project Preview" />
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Brand guideline"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Product marketing"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2025"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-projects-list__item hover-reveal__item" href="/works/project-details">
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-280x340">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x730/4d4d4d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-projects-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__title anim-uni-in-up">
                            <div className="mxd-projects-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Young Learners' Montessori House"}
                            </p>
                          </div>
                          <div className="mxd-projects-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/1200x800/4d4d4d/838383" alt="Project Preview" />
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Art direction"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Website design"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-projects-list__item hover-reveal__item" href="/works/project-details">
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-280x340">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x730/4d4d4d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-projects-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__title anim-uni-in-up">
                            <div className="mxd-projects-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"New Pearls"}
                            </p>
                          </div>
                          <div className="mxd-projects-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/1200x800/4d4d4d/838383" alt="Project Preview" />
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Performance marketing"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Social media"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-projects-list__item hover-reveal__item" href="/works/project-details">
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-280x340">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x730/4d4d4d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-projects-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__title anim-uni-in-up">
                            <div className="mxd-projects-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Pearls and You"}
                            </p>
                          </div>
                          <div className="mxd-projects-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/1200x800/4d4d4d/838383" alt="Project Preview" />
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Shopify"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"UX/UI design"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-projects-list__item hover-reveal__item" href="/works/project-details">
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content hover-reveal-280x340">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x730/4d4d4d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-projects-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__title anim-uni-in-up">
                            <div className="mxd-projects-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"More Tikii work"}
                            </p>
                          </div>
                          <div className="mxd-projects-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/1200x800/4d4d4d/838383" alt="Project Preview" />
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Brand strategy"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Campaign systems"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__border anim-uni-in-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-mtext">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-block">
              <div className="marquee marquee-right--gsap muted-extra">
                <div className="marquee__toright">
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Clients Approve"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Clients Approve"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Clients Approve"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonials" className="mxd-section overflow-hidden padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="testimonials-slider no-padding">
                <div className="swiper-testimonials no-padding">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide mxd-fullwidth-slide">
                      <div className="mxd-testimonials-photo">
                        <div className="container-fluid p-0 fullheight-l">
                          <div className="row g-0 d-flex align-items-stretch fullheight-l">
                            <div className="col-12 col-lg-6 mxd-testimonials-photo__content mxd-grid-item no-margin">
                              <div className="mxd-testimonials-photo__author" data-swiper-parallax-x="-250" data-swiper-parallax-opacity="0">
                                <div className="mxd-testimonials-photo__avatar">
                                  <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                                </div>
                                <div className="mxd-testimonials-photo__info">
                                  <p className="mxd-testimonials-photo__name">
                                    {"Alex Tomato"}
                                  </p>
                                  <p className="mxd-testimonials-photo__position t-small">
                                    {"Brand Manager in \r\n                                  "}
                                    <a className="link-small-underline" href="#">
                                      {"Instant Design"}
                                    </a>
                                  </p>
                                  <div className="mxd-testimonials-photo__rating">
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="mxd-testimonials-photo__text" data-swiper-parallax-x="-300" data-swiper-parallax-opacity="0">
                                <p className="t-large">
                                  {"Working with Rayo team was an absolute pleasure! They took the time to understand our business \r\n                                needs and translated them into a beautifully designed, user-friendly website."}
                                </p>
                                <a className="btn btn-anim btn-default btn-small btn-opposite slide-right-up" href="#0">
                                  <span className="btn-caption">
                                    {"Project Page"}
                                  </span>
                                  <i className="ph ph-arrow-up-right" />
                                </a>
                              </div>
                            </div>
                            <div className="col-12 col-lg-6 mxd-testimonials-photo__image mxd-grid-item no-margin fullheight-l" data-swiper-parallax-x="-450" data-swiper-parallax-opacity="0">
                              <div className="mxd-testimonials-photo__image-inner radius-l fullheight-l">
                                <img src="https://dummyimage.com/1400x1200/4d4d4d/838383" alt="Testimonials Image" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide mxd-fullwidth-slide">
                      <div className="mxd-testimonials-photo">
                        <div className="container-fluid p-0 fullheight-l">
                          <div className="row g-0 d-flex align-items-stretch fullheight-l">
                            <div className="col-12 col-lg-6 mxd-testimonials-photo__content mxd-grid-item no-margin">
                              <div className="mxd-testimonials-photo__author" data-swiper-parallax-x="-250" data-swiper-parallax-opacity="0">
                                <div className="mxd-testimonials-photo__avatar">
                                  <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                                </div>
                                <div className="mxd-testimonials-photo__info">
                                  <p className="mxd-testimonials-photo__name">
                                    {"Alex Tomato"}
                                  </p>
                                  <p className="mxd-testimonials-photo__position t-small">
                                    {"SEO in \r\n                                  "}
                                    <a className="link-small-underline" href="#">
                                      {"Eye Candy"}
                                    </a>
                                  </p>
                                  <div className="mxd-testimonials-photo__rating">
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                    <i className="ph-fill ph-star" />
                                  </div>
                                </div>
                              </div>
                              <div className="mxd-testimonials-photo__text" data-swiper-parallax-x="-300" data-swiper-parallax-opacity="0">
                                <p className="t-large">
                                  {"The team's attention to detail, creativity, and technical expertise exceeded our \r\n                                expectations. We've received so much positive feedback from our customers already."}
                                </p>
                                <a className="btn btn-anim btn-default btn-small btn-opposite slide-right-up" href="#0">
                                  <span className="btn-caption">
                                    {"Project Page"}
                                  </span>
                                  <i className="ph ph-arrow-up-right" />
                                </a>
                              </div>
                            </div>
                            <div className="col-12 col-lg-6 mxd-testimonials-photo__image mxd-grid-item no-margin fullheight-l" data-swiper-parallax-x="-450" data-swiper-parallax-opacity="0">
                              <div className="mxd-testimonials-photo__image-inner radius-l fullheight-l">
                                <img src="https://dummyimage.com/1400x1200/4d4d4d/838383" alt="Testimonials Image" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-testimonials__controls">
                    <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev">
                      <a className="btn btn-round btn-round-small btn-outline slide-left anim-no-delay" href="#0" aria-label="Previous Slide">
                        <i className="ph ph-arrow-left" />
                      </a>
                    </div>
                    <div className="swiper-pagination mxd-swiper-pagination-fraction" />
                    <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next">
                      <a className="btn btn-round btn-round-small btn-outline slide-right anim-no-delay" href="#0" aria-label="Next Slide">
                        <i className="ph ph-arrow-right" />
                      </a>
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
