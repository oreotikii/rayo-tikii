"use client";

// Source: ../../app/about-us.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {
  "stats-counter-1": {
    "value": 50,
    "suffix": "+"
  },
  "stats-counter-2": {
    "value": 80,
    "suffix": "%"
  },
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
        <div className="mxd-section mxd-section-inner-headline padding-headline-pre-block">
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
                          {"About"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="inner-headline__title headline-img-before headline-img-06 loading__item">
                          {"Telling your brand story through design"}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-grid-pre-mtext">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-values loading__fade">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex">
                    <div className="col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin animate-card-2">
                      <div className="mxd-values__lists fullheight-xl">
                        <div className="container-fluid p-0 fullheight-xl">
                          <div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between">
                            <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                              <ul>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Honesty"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Clarity"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Creativity"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Scalability"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Transparency"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"People first"}
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                              <ul>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Brand identity"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Content"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Strategy"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Websites"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Branding"}
                                  </p>
                                </li>
                                <li>
                                  <p className="t-small anim-uni-in-up">
                                    {"Performance"}
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-values__item order-1 order-xl-2 mxd-grid-item no-margin animate-card-2">
                      <div className="mxd-values__image image-large-desktop image-values-1 parallax-img-small" />
                    </div>
                    <div className="col-12 col-xl-6 mxd-values__item order-3 order-xl-3 mobile-reverse mxd-grid-item no-margin animate-card-2">
                      <div className="mxd-values__image image-small-desktop image-values-2 parallax-img-small" />
                      <div className="mxd-values__descr has-top-list anim-uni-in-up">
                        <p className="t-bright t-large reveal-type">
                          {"We are Tikii, a Kolkata-based branding and marketing agency building identities, websites, campaigns, and digital experiences that people can actually remember. We like beauty, but we like useful beauty more. Pretty things that do nothing are just expensive wallpaper."}
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
                      {"Design"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Development"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Branding"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"eCommerce"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Mobile Apps"}
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
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <div className="mxd-divider__image divider-image-8 parallax-img" />
            </div>
          </div>
        </div>
        <div className="mxd-section overflow-hidden padding-pre-grid mobile-grid-s">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type">
                          {"Awards &"}
                          <br />
                          {"publications"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin" />
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog">
                          <span className="btn-caption">
                            {"View More"}
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
              <div className="mxd-awards-list hover-reveal">
                <a className="mxd-awards-list__item hover-reveal__item" href="https://medium.com/" target="_blank">
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Some article on Medium"}
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"UI/UX design"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Development"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2025"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-awards-list__item hover-reveal__item" href="https://www.awwwards.com/" target="_blank">
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Awwwards nomination"}
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"UI/UX"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Frontend"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-awards-list__item hover-reveal__item" href="https://www.behance.net/" target="_blank">
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Behance curated work"}
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Illustrations"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Graphic design"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                </a>
                <a className="mxd-awards-list__item hover-reveal__item" href="https://medium.com/" target="_blank">
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                  <div className="hover-reveal__content overflow-visible hover-reveal-260x260">
                    <img className="hover-reveal__image" src="https://dummyimage.com/600x600/5d5d5d/838383" alt="Project Preview" />
                  </div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon">
                              <i className="ph ph-arrow-right" />
                            </div>
                            <p>
                              {"Article on Medium"}
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"UI/UX"}
                                </p>
                              </li>
                              <li className="anim-uni-in-up">
                                <p className="t-small">
                                  {"Frontend"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="t-small">
                              {"2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-awards-list__border anim-uni-in-up" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-default mobile-title">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-block">
              <div className="marquee marquee--gsap">
                <div className="marquee__top">
                  <div className="marquee__item image">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                  <div className="marquee__item has-caption padding-4">
                    <p>
                      {"Inspiring"}
                      <br />
                      {"ideas"}
                    </p>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                  <div className="marquee__item has-caption padding-4">
                    <p>
                      {"Creative"}
                      <br />
                      {"minds"}
                    </p>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="marquee__bottom">
                  <div className="marquee__item has-caption padding-4">
                    <p>
                      {"Inspiring"}
                      <br />
                      {"ideas"}
                    </p>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                  <div className="marquee__item has-caption padding-4">
                    <p>
                      {"Creative"}
                      <br />
                      {"minds"}
                    </p>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                  <div className="marquee__item">
                    <a className="marquee__link" href="/works/project-details">
                      <img src="https://dummyimage.com/1200x1000/4d4d4d/838383" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-pre-grid">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-team-cards">
                <div className="container-fluid p-0">
                  <div className="row g-0 flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-8">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item no-margin-desktop animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <img src="https://dummyimage.com/800x920/4d4d4d/838383" alt="" />
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
                                {"Helen Pineapple"}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {"Founder, SEO"}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 mxd-team-cards__item mxd-grid-item no-margin-desktop animate-card-3">
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <img src="https://dummyimage.com/800x920/4d4d4d/838383" alt="" />
                              </div>
                              <div className="mxd-team-cards__socials">
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.linkedin.com/" target="_blank">
                                  <span className="btn-caption">
                                    {"Linkedin"}
                                  </span>
                                </a>
                                <a className="btn btn-anim tag tag-default tag-permanent" href="https://www.figma.com/community" target="_blank">
                                  <span className="btn-caption">
                                    {"Figma Community"}
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">
                                {"Alex Tomato"}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {"SEO, Brand manager"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin animate-card-3">
                      <div className="mxd-team-cards__h2-block right-block">
                        <div className="mxd-section-title pre-grid">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-12">
                                <div className="mxd-section-title__title">
                                  <h2 className="reveal-type">
                                    {"Creative leaders"}
                                  </h2>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mxd-section-title__descr">
                                  <p className="anim-uni-in-up">
                                    {"Technical experts dedicated to delivering flawless, \r\n                                  high-performing digital experiences."}
                                  </p>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mxd-section-title__controls anim-uni-in-up">
                                  <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/team">
                                    <span className="btn-caption">
                                      {"Meet our team"}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section overflow-hidden padding-pre-title">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-stats-cards">
                <div className="container-fluid px-0">
                  <div className="row gx-0">
                    <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                      <div className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                        <div className="mxd-counter align-end">
                          <p id="stats-counter-1" className="mxd-counter__number mxd-stats-number opposite">
                            {"0"}
                          </p>
                          <p className="mxd-counter__descr t-140 t-bright opposite">
                            {"Happy clients who"}
                            <br />
                            {"trust our work"}
                          </p>
                        </div>
                        <div className="mxd-stats-cards__btngroup">
                          <a className="btn btn-anim btn-default btn-outline opposite slide-right-up" href="/works">
                            <span className="btn-caption">
                              {"Works"}
                            </span>
                            <i className="ph-bold ph-arrow-up-right" />
                          </a>
                        </div>
                        <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                          <img src="https://dummyimage.com/800x800/5d5d5d/838383" alt="Illustration" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                      <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                        <div className="mxd-stats-cards__btngroup">
                          <div className="mxd-avatars">
                            <div className="mxd-avatars__item">
                              <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Avatar" />
                            </div>
                            <div className="mxd-avatars__item bg-base-opp">
                              <svg className="mxd-avatars__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60" style={({ enableBackground: "new 0 0 60 60" }) as CSSProperties} xmlSpace="preserve">
                                <style type="text/css">
                                  {"\r\n                                .icon-star {\r\n                                  fill:var(--additional);\r\n                                }\r\n                              "}
                                </style>
                                <path className="icon-star" d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7c-1.4-1-2.7-2.3-3.6-3.7 c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1 c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5 c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7 c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1 c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3c1.4-1,3.1-1.5,4.8-1.7 c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z" />
                              </svg>
                            </div>
                            <div className="mxd-avatars__item">
                              <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Avatar" />
                            </div>
                          </div>
                        </div>
                        <div className="mxd-counter align-end">
                          <p id="stats-counter-2" className="mxd-counter__number mxd-stats-number">
                            {"0"}
                          </p>
                          <p className="mxd-counter__descr t-140 t-bright">
                            {"Clients come back for"}
                            <br />
                            {"a new projects"}
                          </p>
                        </div>
                        <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                          <img src="https://dummyimage.com/800x800/5d5d5d/838383" alt="Illustration" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
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
                    <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
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
                          <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/services">
                            <span className="btn-caption">
                              {"Pricing"}
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
        <div className="mxd-section padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type">
                          {"Approach and philosophy"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p className="anim-uni-in-up">
                          {"Design"}
                        </p>
                        <p className="anim-uni-in-up">
                          {"Development"}
                        </p>
                        <p className="anim-uni-in-up">
                          {"Mastership"}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                          <span className="btn-caption">
                            {"Let's Chat"}
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
              <div className="mxd-approach-list">
                <div className="mxd-approach-list__item">
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                  <div className="mxd-approach-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__title anim-uni-in-up">
                            <p>
                              {"Perfection"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__descr anim-uni-in-up">
                            <p>
                              {"From pixel-perfect designs to flawless code, every aspect of our projects \r\n                            is crafted with care to ensure the highest standards of quality."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-approach-list__item">
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                  <div className="mxd-approach-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__title anim-uni-in-up">
                            <p>
                              {"Innovative"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__descr anim-uni-in-up">
                            <p>
                              {"We stay ahead of design trends, offering modern and visually impactful \r\n                            solutions that set your brand apart."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-approach-list__item">
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                  <div className="mxd-approach-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__title anim-uni-in-up">
                            <p>
                              {"Expertise"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__descr anim-uni-in-up">
                            <p>
                              {"We are passionate about integrating the latest technologies and trends, \r\n                            including interactive animations and mobile-first strategies."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-approach-list__item">
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                  <div className="mxd-approach-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__title anim-uni-in-up">
                            <p>
                              {"Full-Cycle services"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__descr anim-uni-in-up">
                            <p>
                              {"From web design to development, branding, SEO, and UX/UI, we provide a \r\n                            full range of services that cover all your digital needs."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                </div>
                <div className="mxd-approach-list__item">
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                  <div className="mxd-approach-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__image anim-uni-in-up">
                            <img src="https://dummyimage.com/100x100/5d5d5d/838383" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__title anim-uni-in-up">
                            <p>
                              {"Client Success"}
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                          <div className="mxd-approach-list__descr anim-uni-in-up">
                            <p>
                              {"Our clients consistently see improved engagement, conversion rates, and business growth."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-approach-list__border anim-uni-in-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <div className="mxd-divider__image divider-image-9 parallax-img" />
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
