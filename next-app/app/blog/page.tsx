"use client";

// Source: ../../app/blog-standard.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-blog-default-pre-grid">
          <div className="mxd-container grid-container">
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12" />
                  <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title headline-img-before headline-img-06">
                          {"Our digital digest"}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" />
                </div>
                <div className="row g-0">
                  <div className="col-12" />
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="inner-headline__blogtags loading__item">
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Midjourney"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"AI"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Editorial"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Interactive design"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Web experience"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Web design"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Branding"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"UI"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"HTML"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Frontend"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"UX"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Motion design"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"3d modeling"}
                        </a>
                      </span>
                      <span className="tag tag-default tag-outline tag-link-outline">
                        <a href="#0">
                          {"Video editing"}
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="inner-headline__breadcrumbs loading__fade">
                      <div className="breadcrumbs__nav">
                        <span>
                          <a href="/">
                            {"Home"}
                          </a>
                        </span>
                        <span className="current-item">
                          {"Insights\r\n                        "}
                        </span>
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
            <div className="mxd-posts-area loading__fade">
              <div className="mxd-posts-container mxd-grid-item">
                <article className="mxd-post post-featured radius-m">
                  <a className="post-featured__thumb" href="/blog/article">
                    <img src="https://dummyimage.com/1400x900/1d1d1d/131313" alt="Featured Post Thumb" />
                  </a>
                  <div className="post-featured__categories">
                    <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                      <a href="#0">
                        {"Midjourney"}
                      </a>
                    </span>
                    <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                      <a href="#0">
                        {"AI"}
                      </a>
                    </span>
                    <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                      <a href="#0">
                        {"Editorial"}
                      </a>
                    </span>
                  </div>
                  <div className="post-featured__content">
                    <div className="post-featured__meta">
                      <span className="meta-tag">
                        <a href="#0">
                          {"Midjourney"}
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                        </svg>
                      </span>
                      <span className="meta-tag">
                        <a href="#0">
                          {"AI"}
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                        </svg>
                      </span>
                      <span className="meta-tag">
                        <a href="#0">
                          {"Editorial"}
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                        </svg>
                      </span>
                      <span className="meta-date">
                        {"January 22, 2025"}
                      </span>
                    </div>
                    <h2 className="post-featured__title">
                      <a href="/blog/article">
                        {"My journey into the future of art"}
                      </a>
                    </h2>
                    <div className="post-featured__excerpt">
                      <p>
                        {"Discover how artificial intelligence is transforming artistic processes, pushing \r\n                      boundaries, and inspiring new possibilities in digital design."}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="mxd-post post-simple">
                  <a className="post-simple__thumb radius-m" href="/blog/article">
                    <img src="https://dummyimage.com/800x680/4d4d4d/838383" alt="Post Simple Thumb" />
                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon icon-small">
                        <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                      </i>
                    </div>
                  </a>
                  <div className="post-simple__content">
                    <div className="post-simple__descr">
                      <div className="post-simple__meta">
                        <span className="meta-tag">
                          <a href="#0">
                            {"Interactive design"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Web experience"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-date">
                          {"January 22, 2025"}
                        </span>
                      </div>
                      <div className="post-simple__title">
                        <h3>
                          <a href="/blog/article">
                            {"Designing for the future of interactive digital spaces"}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="post-simple__btn">
                      <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog/article">
                        <span className="btn-caption">
                          {"Read More"}
                        </span>
                        <i className="ph ph-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="mxd-post post-simple">
                  <a className="post-simple__thumb radius-m" href="/blog/article">
                    <img src="https://dummyimage.com/800x680/4d4d4d/838383" alt="Post Simple Thumb" />
                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon icon-small">
                        <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                      </i>
                    </div>
                  </a>
                  <div className="post-simple__content">
                    <div className="post-simple__descr">
                      <div className="post-simple__meta">
                        <span className="meta-tag">
                          <a href="#0">
                            {"Web design"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Branding"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"UI"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-date">
                          {"January 09, 2025"}
                        </span>
                      </div>
                      <div className="post-simple__title">
                        <h3>
                          <a href="/blog/article">
                            {"Mastering the art of minimalist web design with impact"}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="post-simple__btn">
                      <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog/article">
                        <span className="btn-caption">
                          {"Read More"}
                        </span>
                        <i className="ph ph-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="mxd-post post-simple">
                  <a className="post-simple__thumb radius-m" href="/blog/article">
                    <img src="https://dummyimage.com/800x680/4d4d4d/838383" alt="Post Simple Thumb" />
                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon icon-small">
                        <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                      </i>
                    </div>
                  </a>
                  <div className="post-simple__content">
                    <div className="post-simple__descr">
                      <div className="post-simple__meta">
                        <span className="meta-tag">
                          <a href="#0">
                            {"3D"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Design"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Digital workshop"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-date">
                          {"January 04, 2025"}
                        </span>
                      </div>
                      <div className="post-simple__title">
                        <h3>
                          <a href="/blog/article">
                            {"Crafting immersive 3d worlds with modern tools"}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="post-simple__btn">
                      <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog/article">
                        <span className="btn-caption">
                          {"Read More"}
                        </span>
                        <i className="ph ph-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="mxd-post post-simple">
                  <a className="post-simple__thumb radius-m" href="/blog/article">
                    <img src="https://dummyimage.com/800x680/4d4d4d/838383" alt="Post Simple Thumb" />
                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon icon-small">
                        <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                      </i>
                    </div>
                  </a>
                  <div className="post-simple__content">
                    <div className="post-simple__descr">
                      <div className="post-simple__meta">
                        <span className="meta-tag">
                          <a href="#0">
                            {"Motion design"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Branding"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Workshop"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-date">
                          {"December 22, 2024"}
                        </span>
                      </div>
                      <div className="post-simple__title">
                        <h3>
                          <a href="/blog/article">
                            {"Bringing ideas to life with motion design and creativity"}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="post-simple__btn">
                      <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog/article">
                        <span className="btn-caption">
                          {"Read More"}
                        </span>
                        <i className="ph ph-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="mxd-post post-simple">
                  <a className="post-simple__thumb radius-m" href="/blog/article">
                    <img src="https://dummyimage.com/800x680/4d4d4d/838383" alt="Post Simple Thumb" />
                    <div className="mxd-preview-hover">
                      <i className="mxd-preview-hover__icon icon-small">
                        <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                      </i>
                    </div>
                  </a>
                  <div className="post-simple__content">
                    <div className="post-simple__descr">
                      <div className="post-simple__meta">
                        <span className="meta-tag">
                          <a href="#0">
                            {"UI/UX"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Frontend"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-tag">
                          <a href="#0">
                            {"Branding"}
                          </a>
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                            <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                          </svg>
                        </span>
                        <span className="meta-date">
                          {"December 10, 2024"}
                        </span>
                      </div>
                      <div className="post-simple__title">
                        <h3>
                          <a href="/blog/article">
                            {"The role of branding in creating memorable digital experiences"}
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="post-simple__btn">
                      <a className="btn btn-anim btn-default btn-outline slide-right-up" href="/blog/article">
                        <span className="btn-caption">
                          {"Read More"}
                        </span>
                        <i className="ph ph-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </article>
                <div className="mxd-blog-pagination">
                  <div className="mxd-blog-pagination__inner">
                    <nav className="mxd-blog-pagination__items">
                      <a href="#0" className="mxd-blog-pagination__item blog-pagination-control prev btn btn-anim btn-line-small btn-bright anim-no-delay slide-left" aria-label="Previous Page">
                        <i className="ph ph-arrow-left" />
                        <span className="btn-caption">
                          {"Prev"}
                        </span>
                      </a>
                      <a href="#0" className="mxd-blog-pagination__item blog-pagination-number btn btn-anim">
                        <span className="btn-caption">
                          {"1"}
                        </span>
                      </a>
                      <a href="#0" className="mxd-blog-pagination__item blog-pagination-number btn btn-anim active">
                        <span className="btn-caption">
                          {"2"}
                        </span>
                      </a>
                      <a href="#0" className="mxd-blog-pagination__item blog-pagination-number btn btn-anim">
                        <span className="btn-caption">
                          {"3"}
                        </span>
                      </a>
                      <a href="#0" className="mxd-blog-pagination__item blog-pagination-control next btn btn-anim btn-line-small btn-bright anim-no-delay slide-right" aria-label="Next Page">
                        <span className="btn-caption">
                          {"Next"}
                        </span>
                        <i className="ph ph-arrow-right" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="mxd-sidebar mxd-grid-item">
                <div className="mxd-sidebar__widget bg-base-tint radius-m widget-search">
                  <div className="widget-search__form">
                    <DemoForm className="form search-form" action="#" method="get">
                      <input id="search" type="search" name="search" placeholder="Search" />
                      <button className="btn btn-form no-scale btn-absolute-right btn-muted" type="submit" aria-label="Search">
                        <i className="ph ph-magnifying-glass" />
                      </button>
                    </DemoForm>
                  </div>
                </div>
                <div className="mxd-sidebar__widget bg-base-tint radius-m">
                  <div className="widget__title">
                    <p>
                      {"Categories"}
                    </p>
                  </div>
                  <ul className="widget__categories">
                    <li className="categories__item">
                      <a href="#0" className="categories__link">
                        {"Design"}
                      </a>
                    </li>
                    <li className="categories__item">
                      <a href="#0" className="categories__link">
                        {"Development"}
                      </a>
                    </li>
                    <li className="categories__item">
                      <a href="#0" className="categories__link">
                        {"Digital Marketing"}
                      </a>
                    </li>
                    <li className="categories__item">
                      <a href="#0" className="categories__link">
                        {"Technology"}
                      </a>
                    </li>
                    <li className="categories__item">
                      <a href="#0" className="categories__link">
                        {"Case Studies"}
                      </a>
                    </li>
                    <li className="categories__item">
                      <a href="#0" className="categories__link">
                        {"Trends"}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mxd-sidebar__widget bg-base-tint radius-m">
                  <div className="widget__title">
                    <p>
                      {"Latest posts"}
                    </p>
                  </div>
                  <ul className="widget__recent-posts">
                    <li className="recent-post__item">
                      <div className="recent-post__thumb">
                        <a href="/blog/article">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Recent Post Preview" />
                        </a>
                      </div>
                      <div className="recent-post__content">
                        <div className="recent-post__meta">
                          <span className="meta-tag">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                              <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                            </svg>
                            <a href="#0">
                              {"Design"}
                            </a>
                          </span>
                        </div>
                        <div className="recent-post__title">
                          <a href="/blog/article">
                            {"Mastering the art of minimalist web design with impact"}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="recent-post__item">
                      <div className="recent-post__thumb">
                        <a href="/blog/article">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Recent Post Preview" />
                        </a>
                      </div>
                      <div className="recent-post__content">
                        <div className="recent-post__meta">
                          <span className="meta-tag">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                              <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                            </svg>
                            <a href="#0">
                              {"Technology"}
                            </a>
                          </span>
                        </div>
                        <div className="recent-post__title">
                          <a href="/blog/article">
                            {"Designing for the future of interactive digital spaces"}
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="recent-post__item">
                      <div className="recent-post__thumb">
                        <a href="/blog/article">
                          <img src="https://dummyimage.com/300x300/4d4d4d/838383" alt="Recent Post Preview" />
                        </a>
                      </div>
                      <div className="recent-post__content">
                        <div className="recent-post__meta">
                          <span className="meta-tag">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
                              <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                            </svg>
                            <a href="#0">
                              {"Technology"}
                            </a>
                          </span>
                        </div>
                        <div className="recent-post__title">
                          <a href="/blog/article">
                            {"Crafting immersive 3d worlds with modern tools"}
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mxd-sidebar__widget radius-m widget-ad">
                  <a className="widget__image" href="#0" target="_blank">
                    <img src="https://dummyimage.com/1200x1400/4d4d4d/838383" alt="Ad Image" />
                  </a>
                  <div className="widget__tags">
                    <span className="tag tag-default tag-permanent">
                      {"Sponsored"}
                    </span>
                  </div>
                </div>
                <div className="mxd-sidebar__widget bg-base-tint radius-m widget-about">
                  <div className="widget__title">
                    <p>
                      {"About"}
                    </p>
                  </div>
                  <div className="widget__descr">
                    <p className="t-small">
                      {"Dive into the latest trends, uncover valuable industry insights, and explore \r\n                    practical advice."}
                    </p>
                  </div>
                </div>
                <div className="mxd-sidebar__widget bg-base-tint radius-m widget-socials">
                  <div className="widget__title">
                    <p>
                      {"Ecosystem"}
                    </p>
                  </div>
                  <div className="widget__descr">
                    <p className="t-small">
                      {"Follow us and get to know all the news and other interesting stuff first!"}
                    </p>
                  </div>
                  <div className="widget__social-links-small">
                    <div className="social-links-small__item">
                      <div className="social-links-small__divider" />
                      <a className="social-links-small__link" href="https://dribbble.com/" target="_blank">
                        <p className="social-links-small__title">
                          {"Dribbble"}
                        </p>
                        <div className="social-links-small__icon">
                          <i className="ph-bold ph-arrow-up-right" />
                        </div>
                      </a>
                      <div className="social-links-small__divider" />
                    </div>
                    <div className="social-links-small__item">
                      <div className="social-links-small__divider" />
                      <a className="social-links-small__link" href="https://www.behance.net/" target="_blank">
                        <p className="social-links-small__title">
                          {"Behance"}
                        </p>
                        <div className="social-links-small__icon">
                          <i className="ph-bold ph-arrow-up-right" />
                        </div>
                      </a>
                      <div className="social-links-small__divider" />
                    </div>
                    <div className="social-links-small__item">
                      <div className="social-links-small__divider" />
                      <a className="social-links-small__link" href="https://www.instagram.com/" target="_blank">
                        <p className="social-links-small__title">
                          {"Instagram"}
                        </p>
                        <div className="social-links-small__icon">
                          <i className="ph-bold ph-arrow-up-right" />
                        </div>
                      </a>
                      <div className="social-links-small__divider" />
                    </div>
                    <div className="social-links-small__item">
                      <div className="social-links-small__divider" />
                      <a className="social-links-small__link" href="https://github.com/" target="_blank">
                        <p className="social-links-small__title">
                          {"Github"}
                        </p>
                        <div className="social-links-small__icon">
                          <i className="ph-bold ph-arrow-up-right" />
                        </div>
                      </a>
                      <div className="social-links-small__divider" />
                    </div>
                    <div className="social-links-small__item">
                      <div className="social-links-small__divider" />
                      <a className="social-links-small__link" href="https://codepen.io/" target="_blank">
                        <p className="social-links-small__title">
                          {"Codepen"}
                        </p>
                        <div className="social-links-small__icon">
                          <i className="ph-bold ph-arrow-up-right" />
                        </div>
                      </a>
                      <div className="social-links-small__divider" />
                    </div>
                    <div className="social-links-small__item">
                      <div className="social-links-small__divider" />
                      <a className="social-links-small__link" href="https://www.figma.com/community" target="_blank">
                        <p className="social-links-small__title">
                          {"Figma Community"}
                        </p>
                        <div className="social-links-small__icon">
                          <i className="ph-bold ph-arrow-up-right" />
                        </div>
                      </a>
                      <div className="social-links-small__divider" />
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
