"use client";

// Source: ../../app/contact.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-form overflow-hidden">
          <div className="mxd-container grid-container">
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                    <div className="mxd-block__name name-inner-headline">
                      <p className="mxd-point-subtitle">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                          <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z" />
                        </svg>
                        <span>
                          {"Contact"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title">
                          {"\r\n                        Let's build"}
                          <br />
                          {"something great\n                        "}
                        </h1>
                        <a className="btn btn-line-headline slide-right-up anim-no-delay" href="mailto:oreo@tikii.in?subject=Message%20from%20Tikii%20site">
                          <span className="btn-caption">
                            {"oreo@tikii.in"}
                          </span>
                          <i className="ph-bold ph-arrow-up-right" />
                        </a>
                        <p className="inner-headline__text t-large t-bright loading__item">
                          {"Tell us what you are building, selling, fixing, launching, or secretly panicking about. We will help turn the brief into a plan instead of another heroic spreadsheet."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section mxd-section-inner-form padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                  <div className="col-12 col-xl-8">
                    <div className="mxd-block__content contact">
                      <div className="mxd-block__inner-form loading__fade">
                        <div className="form-container">
                          <div className="form__reply centered text-center">
                            <i className="ph-fill ph-smiley-wink reply__icon" />
                            <p className="reply__title">
                              {"Done!"}
                            </p>
                            <span className="reply__text">
                              {"Thanks for your message. We'll get back as soon as possible."}
                            </span>
                          </div>
                          <DemoForm className="form contact-form" id="contact-form">
                            <input type="hidden" name="project_name" value="Tikii Website" />
                            <input type="hidden" name="admin_email" value="oreo@tikii.in" />
                            <input type="hidden" name="form_subject" value="Contact Form Message" />
                            <div className="container-fluid p-0">
                              <div className="row gx-0">
                                <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                  <input type="text" name="Name" placeholder="Your name*" required />
                                </div>
                                <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                  <input type="text" name="Company" placeholder="Company name" />
                                </div>
                                <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                  <input type="email" name="E-mail" placeholder="Email*" required />
                                </div>
                                <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                  <input type="tel" name="Phone" placeholder="Phone" />
                                </div>
                                <div className="col-12 mxd-grid-item anim-uni-in-up">
                                  <textarea name="Message" placeholder="A few words about your project*" required />
                                </div>
                                <div className="col-12 mxd-grid-item anim-uni-in-up">
                                  <button className="btn btn-anim btn-default btn-large btn-opposite slide-right-up" type="submit">
                                    <span className="btn-caption">
                                      {"Submit"}
                                    </span>
                                    <i className="ph-bold ph-arrow-up-right" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </DemoForm>
                        </div>
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
            <div className="mxd-divider">
              <div className="mxd-divider__image divider-image-3 parallax-img" />
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
                      {"Connect"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Connect"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Connect"}
                    </p>
                    <div className="marquee__image">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                        <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8 c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4 c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0 C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4 c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6 s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4 c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="marquee__item one-line item-regular text">
                    <p className="marquee__text">
                      {"Connect"}
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
            <div className="mxd-block">
              <div className="mxd-links-lines">
                <div className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                  <a className="mxd-links-lines__link anim-uni-in-up" href="https://dribbble.com/" target="_blank">
                    <p className="mxd-links-lines__title">
                      {"Dribbble"}
                    </p>
                    <div className="mxd-links-lines__icon">
                      <i className="ph ph-arrow-up-right" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                </div>
                <div className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                  <a className="mxd-links-lines__link anim-uni-in-up" href="https://www.behance.net/" target="_blank">
                    <p className="mxd-links-lines__title">
                      {"Behance"}
                    </p>
                    <div className="mxd-links-lines__icon">
                      <i className="ph ph-arrow-up-right" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                </div>
                <div className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                  <a className="mxd-links-lines__link anim-uni-in-up" href="https://www.instagram.com/" target="_blank">
                    <p className="mxd-links-lines__title">
                      {"Instagram"}
                    </p>
                    <div className="mxd-links-lines__icon">
                      <i className="ph ph-arrow-up-right" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                </div>
                <div className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                  <a className="mxd-links-lines__link anim-uni-in-up" href="https://github.com/" target="_blank">
                    <p className="mxd-links-lines__title">
                      {"Github"}
                    </p>
                    <div className="mxd-links-lines__icon">
                      <i className="ph ph-arrow-up-right" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                </div>
                <div className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                  <a className="mxd-links-lines__link anim-uni-in-up" href="https://codepen.io/" target="_blank">
                    <p className="mxd-links-lines__title">
                      {"Codepen"}
                    </p>
                    <div className="mxd-links-lines__icon">
                      <i className="ph ph-arrow-up-right" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                </div>
                <div className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                  <a className="mxd-links-lines__link anim-uni-in-up" href="https://www.figma.com/community" target="_blank">
                    <p className="mxd-links-lines__title">
                      {"Figma community"}
                    </p>
                    <div className="mxd-links-lines__icon">
                      <i className="ph ph-arrow-up-right" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-block__name">
                      <h2 className="reveal-type anim-uni-in-up">
                        {"Find us in Kolkata"}
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__paragraph">
                        <p className="t-large t-bright anim-uni-in-up">
                          {"Tikii Marketing Services LLP works from New Town, Kolkata, with clients who need sharper branding, stronger campaigns, and websites that do more than occupy a domain name."}
                        </p>
                        <div className="mxd-paragraph__lists">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                                <div className="mxd-paragraph__lists-title">
                                  <p className="t-large t-bright t-caption anim-uni-in-up">
                                    {"Studio"}
                                  </p>
                                </div>
                                <ul>
                                  <li className="anim-uni-in-up">
                                    <a className="anim-uni-in-up" href="https://maps.app.goo.gl/jyrqcjTiD8h98YBK7" target="_blank">
                                      {"\n                                    Terminus Building,"}
                                      <br />
                                      {"BG-12, New Town,"}
                                      <br />
                                      {"Kolkata, India\n                                  "}
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="anim-uni-in-up">
                                    <a href="tel:+919007376927">
                                      {"+91-900-737-6927"}
                                    </a>
                                  </li>
                                  <li className="anim-uni-in-up">
                                    <a href="mailto:oreo@tikii.in?subject=Message%20from%20Tikii%20site">
                                      {"oreo@tikii.in"}
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                                <div className="mxd-paragraph__lists-title">
                                  <p className="t-large t-bright t-caption anim-uni-in-up">
                                    {"Careers"}
                                  </p>
                                </div>
                                <ul>
                                  <li className="anim-uni-in-up">
                                    <a href="mailto:oreo@tikii.in?subject=Careers%20at%20Tikii">
                                      {"\n                                    Creative humans,"}
                                      <br />
                                      {"strategic thinkers,"}
                                      <br />
                                      {"send your work\n                                  "}
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="anim-uni-in-up">
                                    <a href="tel:+919007376927">
                                      {"+91-900-737-6927"}
                                    </a>
                                  </li>
                                  <li className="anim-uni-in-up">
                                    <a href="mailto:oreo@tikii.in?subject=Careers%20at%20Tikii">
                                      {"oreo@tikii.in"}
                                    </a>
                                  </li>
                                </ul>
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
        </main>
      <TikiiFooter />
    </>
  );
}
