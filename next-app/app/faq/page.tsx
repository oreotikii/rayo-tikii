"use client";

// Source: ../../app/faq.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-block">
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
                          {"FAQ"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline">
                        <h1 className="inner-headline__title headline-img-before headline-img-02 loading__item">
                          {"Everything you \r\n                        need to know"}
                        </h1>
                        <p className="inner-headline__text t-large t-bright loading__item">
                          {"Have questions? We've got the answers! \r\n                        Here, you'll find clear and concise information about our services, process, \r\n                        and what to expect when working with us. If you need more details, feel free to \r\n                        reach out!"}
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
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-accordion loading__fade">
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"What services do you offer?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"We provide a comprehensive range of digital solutions, \r\n                            including website design and development, branding, digital marketing, e-commerce \r\n                            solutions, SEO, content creation, and ongoing support. Whether you need a new website, \r\n                            a brand refresh, or a digital marketing strategy, our team is equipped to help your \r\n                            business grow online."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"How long does a project take?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"Timelines vary based on project complexity. \r\n                            A simple website may take a few weeks, while a full-scale brand identity or \r\n                            custom development project could take a few months. We provide clear deadlines and \r\n                            keep you updated at every stage."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"Do you work with businesses of all sizes?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"Yes! We collaborate with startups, small businesses, and \r\n                            large enterprises across various industries. No matter your company's size or stage, \r\n                            we tailor our services to meet your specific needs and goals."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"Can you redesign my existing website?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"Absolutely. We specialize in website redesigns to improve \r\n                            user experience, modernize your brand, and optimize performance. We'll work with \r\n                            you to understand your vision and business objectives, then transform your current \r\n                            site into a powerful digital asset."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"Can you help improve my website's search engine ranking?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"Our SEO experts use proven strategies \r\n                            including keyword research, on-page optimization, link building, and content creation \r\n                            to boost your website's visibility and ranking on search engines like Google."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"Do you provide ongoing support and maintenance?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"Yes! We offer ongoing website maintenance, performance \r\n                            monitoring, and digital marketing support to ensure your online presence remains \r\n                            effective and up-to-date. Our support packages can be tailored to your needs."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                        <div className="mxd-accordion__item">
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                          <div className="mxd-accordion__title anim-uni-in-up">
                            <p>
                              {"How do we get started?"}
                            </p>
                            <div className="mxd-accordion__arrow">
                              <i className="ph ph-plus" />
                            </div>
                          </div>
                          <div className="mxd-accordion__content">
                            <p className="mxd-accordion__text">
                              {"Getting started is easy! Simply contact us through our \r\n                            website or give us a call. We'll schedule a discovery call to discuss your goals, \r\n                            challenges, and project requirements. From there, we'll provide a proposal outlining \r\n                            our recommended approach, timeline, and next steps."}
                            </p>
                          </div>
                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-container__circle">
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
                <img className="btn-rotating__image" src="https://dummyimage.com/100x100/4d4d4d/838383" alt="Object" />
              </a>
            </div>
            <div className="mxd-divider">
              <div className="mxd-divider__image divider-image-1 parallax-img" />
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
