"use client";

// Source: ../../app/team.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-text-pre-block">
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
                          {"Our team"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="inner-headline__title headline-img-before headline-img-05 loading__item">
                          {"Talented minds \r\n                        shaping our vision"}
                        </h1>
                        <p className="inner-headline__text t-large t-bright loading__item">
                          {"Our team is a blend of creative \r\n                        thinkers, problem-solvers, and tech enthusiasts dedicated to bringing your ideas \r\n                        to life. Together, we craft innovative solutions that inspire and deliver results."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-grid-pre-mtext">
          <div className="mxd-container">
            <div className="mxd-container__circle loading__fade">
              <a className="btn-rotating btn-rotating-blur-outline ver-02" href="/contact">
                <svg version="1.1" id="scrollDown" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 160 160" style={({ enableBackground: "new 0 0 160 160" }) as CSSProperties} xmlSpace="preserve" className="btn-rotating__text animate-rotation" data-value="360">
                  <defs>
                    <path id="textPath" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z" />
                  </defs>
                  <g>
                    <use xlinkHref="#textPath" fill="none" />
                    <text>
                      <textPath xlinkHref="#textPath">
                        {"Let's start new project * Let's start new project * "}
                      </textPath>
                    </text>
                  </g>
                </svg>
                <img className="btn-rotating__image" src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Object" />
              </a>
            </div>
            <div className="mxd-divider loading__fade">
              <div className="mxd-divider__image divider-image-7 parallax-img" />
            </div>
          </div>
        </div>
        <div className="mxd-section padding-mtext mobile-title">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-block">
              <div className="marquee marquee-right--gsap muted-extra">
                <div className="marquee__toright">
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Talents"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Dreamers"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Thinkers"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Creatives"}
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
        <div className="mxd-section padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-team-cards">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin no-padding-bottom animate-card-3">
                      <div className="mxd-team-cards__h2-block left-block">
                        <div className="mxd-section-title pre-grid">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-12">
                                <div className="mxd-section-title__title">
                                  <h2 className="reveal-type">
                                    {"Dreamers and doers"}
                                  </h2>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mxd-section-title__descr">
                                  <p className="anim-uni-in-up">
                                    {"Creatives and strategists united by a passion \r\n                                  for crafting impactful digital solutions."}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mxd-section-title__controls anim-uni-in-up">
                                  <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/works">
                                    <span className="btn-caption">
                                      {"View Works"}
                                    </span>
                                    <i className="ph-bold ph-arrow-up-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item no-margin-desktop padding-bottom-desktop animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <img src="https://dummyimage.com/800x920/5d5d5d/838383" alt="" />
                              </div>
                              <div className="mxd-team-cards__socials">
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.linkedin.com/" target="_blank">
                                  <span className="btn-caption">
                                    {"Linkedin"}
                                  </span>
                                </a>
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.behance.net/" target="_blank">
                                  <span className="btn-caption">
                                    {"Behance"}
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">
                                {"Alex Berry"}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {"Frontend Developer"}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item no-margin-desktop padding-bottom-mobile padding-bottom-desktop animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <img src="https://dummyimage.com/800x920/5d5d5d/838383" alt="" />
                              </div>
                              <div className="mxd-team-cards__socials">
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.linkedin.com/" target="_blank">
                                  <span className="btn-caption">
                                    {"Linkedin"}
                                  </span>
                                </a>
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.behance.net/" target="_blank">
                                  <span className="btn-caption">
                                    {"Figma Community"}
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">
                                {"Helen Lemon"}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {"Creative Designer"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <img src="https://dummyimage.com/800x920/5d5d5d/838383" alt="" />
                              </div>
                              <div className="mxd-team-cards__socials">
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.linkedin.com/" target="_blank">
                                  <span className="btn-caption">
                                    {"Linkedin"}
                                  </span>
                                </a>
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.behance.net/" target="_blank">
                                  <span className="btn-caption">
                                    {"Behance"}
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">
                                {"Sarah Olive"}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {"Digital Marketing Strategist"}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item padding-bottom-mobile animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <img src="https://dummyimage.com/800x920/5d5d5d/838383" alt="" />
                              </div>
                              <div className="mxd-team-cards__socials">
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.linkedin.com/" target="_blank">
                                  <span className="btn-caption">
                                    {"Linkedin"}
                                  </span>
                                </a>
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://dribbble.com/" target="_blank">
                                  <span className="btn-caption">
                                    {"Dribbble"}
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">
                                {"Johanna Cherry"}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {"Brand Identity Expert"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item animate-card-3">
                      <div className="mxd-team-cards__media no-margin overflow-visible anim-uni-in-up">
                        <a className="mxd-team-cards__career" href="/contact">
                          <div className="career__image">
                            <img src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Image" />
                          </div>
                          <div className="career__caption">
                            <p className="mxd-team-cards__name t-large t-bright t-caption">
                              {"Maybe you?"}
                            </p>
                            <p className="mxd-team-cards__position t-small t-medium t-140">
                              {"Become a part of our team"}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-wrapper mxd-wrapper-opposite padding-top-pre-title margin-bottom-pre-title anim-zoom-in-container">
          <div className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container grid-container">
              <div className="mxd-block">
                <div className="mxd-section-title">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-section-title__hrtitle">
                          <h2 className="opposite reveal-type anim-uni-in-up">
                            {"Our culture and"}
                            <br />
                            {"values"}
                          </h2>
                        </div>
                      </div>
                      <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                        <div className="mxd-section-title__hrdescr">
                          <p className="t-opposite-medium anim-uni-in-up">
                            {"Imagination"}
                          </p>
                          <p className="t-opposite-medium anim-uni-in-up">
                            {"Strategy"}
                          </p>
                          <p className="t-opposite-medium anim-uni-in-up">
                            {"Action"}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                        <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                          <a className="btn btn-anim btn-default btn-outline opposite slide-right-down" href="#testimonials">
                            <span className="btn-caption">
                              {"Testimonials"}
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
                <div className="mxd-values">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-values__item mxd-grid-item no-margin animate-card-2">
                        <div className="mxd-values__image image-large-desktop image-values-1 parallax-img-small" />
                      </div>
                      <div className="col-12 col-xl-6 mxd-values__item mobile-reverse mxd-grid-item no-margin animate-card-2">
                        <div className="mxd-values__image image-small-desktop image-values-2 parallax-img-small" />
                        <div className="mxd-values__descr anim-uni-in-up">
                          <p className="t-bright opposite t-large reveal-type">
                            {"We thrive on collaboration, creativity, and innovation. Our team \r\n                          values open communication, continuous learning, and delivering results that make a \r\n                          real impact."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="testimonials-slider-2 no-padding">
                  <div className="swiper-testimonials-2 no-padding">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide mxd-fullwidth-slide no-blur">
                        <div className="mxd-testimonials-image">
                          <div className="container-fluid p-0 fullheight-l">
                            <div className="row g-0 d-flex align-items-stretch fullheight-l">
                              <div className="col-12 col-xl-7 mxd-testimonials-image__content mxd-grid-item no-margin">
                                <div className="mxd-testimonials-image__author" data-swiper-parallax-x="-50" data-swiper-parallax-opacity="0">
                                  <div className="mxd-testimonials-image__avatar">
                                    <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                                  </div>
                                  <div className="mxd-testimonials-image__info">
                                    <p className="mxd-testimonials-image__name opposite">
                                      {"John Lemon"}
                                    </p>
                                    <p className="mxd-testimonials-image__position t-small t-opposite-medium">
                                      {"Brand Manager in \r\n                                    "}
                                      <a className="link-small-underline" href="#">
                                        {"Instant Design"}
                                      </a>
                                    </p>
                                    <div className="mxd-testimonials-image__rating opposite">
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                    </div>
                                  </div>
                                </div>
                                <div className="mxd-testimonials-image__text" data-swiper-parallax-x="-100" data-swiper-parallax-opacity="0">
                                  <p className="t-large t-opposite">
                                    {"Working with Rayo team was an absolute pleasure! They took the time to understand our business \r\n                                  needs and translated them into a beautifully designed, user-friendly website."}
                                  </p>
                                  <a className="btn btn-anim btn-default btn-small btn-base slide-right-up" href="#0">
                                    <span className="btn-caption">
                                      {"Project Page"}
                                    </span>
                                    <i className="ph ph-arrow-up-right" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-xl-5 mxd-testimonials-image__img mxd-grid-item no-margin" data-swiper-parallax-x="-50" data-swiper-parallax-opacity="0">
                                <img src="https://dummyimage.com/1400x1400/4d4d4d/838383" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide mxd-fullwidth-slide no-blur">
                        <div className="mxd-testimonials-image">
                          <div className="container-fluid p-0 fullheight-l">
                            <div className="row g-0 d-flex align-items-stretch fullheight-l">
                              <div className="col-12 col-xl-7 mxd-testimonials-image__content mxd-grid-item no-margin">
                                <div className="mxd-testimonials-image__author" data-swiper-parallax-x="-50" data-swiper-parallax-opacity="0">
                                  <div className="mxd-testimonials-image__avatar">
                                    <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Review Author" />
                                  </div>
                                  <div className="mxd-testimonials-image__info">
                                    <p className="mxd-testimonials-image__name opposite">
                                      {"Alex Tomato"}
                                    </p>
                                    <p className="mxd-testimonials-image__position t-small t-opposite-medium">
                                      {"Brand Manager in \r\n                                    "}
                                      <a className="link-small-underline opposite" href="#">
                                        {"Instant Design"}
                                      </a>
                                    </p>
                                    <div className="mxd-testimonials-image__rating opposite">
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                      <i className="ph-fill ph-star" />
                                    </div>
                                  </div>
                                </div>
                                <div className="mxd-testimonials-image__text" data-swiper-parallax-x="-100" data-swiper-parallax-opacity="0">
                                  <p className="t-large t-opposite">
                                    {"The team's attention to detail, creativity, and technical expertise exceeded our \r\n                                  expectations. We've received so much positive feedback from our customers already."}
                                  </p>
                                  <a className="btn btn-anim btn-default btn-small btn-base slide-right-up" href="#0">
                                    <span className="btn-caption">
                                      {"Project Page"}
                                    </span>
                                    <i className="ph ph-arrow-up-right" />
                                  </a>
                                </div>
                              </div>
                              <div className="col-12 col-xl-5 mxd-testimonials-image__img mxd-grid-item no-margin" data-swiper-parallax-x="-50" data-swiper-parallax-opacity="0">
                                <img src="https://dummyimage.com/1400x1400/4d4d4d/838383" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-testimonials__controls">
                      <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev">
                        <a className="btn btn-round btn-round-small btn-outline opposite slide-left anim-no-delay" href="#0" aria-label="Previous Slide">
                          <i className="ph ph-arrow-left" />
                        </a>
                      </div>
                      <div className="swiper-pagination mxd-swiper-pagination-fraction opposite" />
                      <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next">
                        <a className="btn btn-round btn-round-small btn-outline opposite slide-right anim-no-delay" href="#0" aria-label="Next Slide">
                          <i className="ph ph-arrow-right" />
                        </a>
                      </div>
                    </div>
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
