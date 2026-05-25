"use client";

// Source: ../../app/blog-creative.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-blog-descr-pre-grid">
          <div className="mxd-container grid-container">
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12" />
                  <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title headline-img-before headline-img-06">
                          {"Our digital digest"}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="inner-headline__descr loading__item">
                        <p>
                          {"Dive into the latest trends, uncover valuable industry insights, and explore practical \r\n                        advice designed to help you successfully navigate and thrive in the ever-evolving \r\n                        digital landscape."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container grid-container">
            <div className="mxd-posts-area column loading__fade">
              <div className="mxd-posts-container fullwidth-posts-container mxd-grid-item">
                <article className="mxd-post post-featured post-featured-v2 radius-l">
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
              </div>
              <div className="mxd-posts-container fullwidth-posts-container">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item">
                      <article className="mxd-post post-secondary">
                        <a className="post-secondary__thumb radius-l" href="/blog/article">
                          <img src="https://dummyimage.com/1000x1250/4d4d4d/838383" alt="Post Simple Thumb" />
                          <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon">
                              <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                            </i>
                          </div>
                        </a>
                        <div className="post-secondary__categories">
                          <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                            <a href="#0">
                              {"Interactive design"}
                            </a>
                          </span>
                          <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                            <a href="#0">
                              {"Web experience"}
                            </a>
                          </span>
                        </div>
                        <div className="post-secondary__descr">
                          <div className="post-secondary__meta">
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
                              {"January 15, 2025"}
                            </span>
                          </div>
                          <div className="post-secondary__title">
                            <h3>
                              <a href="/blog/article">
                                <span>
                                  {"Designing for the future of interactive digital spaces"}
                                </span>
                              </a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-12 col-xl-6 mxd-grid-item">
                      <article className="mxd-post post-secondary">
                        <a className="post-secondary__thumb radius-l" href="/blog/article">
                          <img src="https://dummyimage.com/1000x1250/4d4d4d/838383" alt="Post Simple Thumb" />
                          <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon">
                              <img src="/img/icons/icon-eye.svg" alt="Eye Icon" />
                            </i>
                          </div>
                        </a>
                        <div className="post-secondary__categories">
                          <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                            <a href="#0">
                              {"Web design"}
                            </a>
                          </span>
                          <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                            <a href="#0">
                              {"Branding"}
                            </a>
                          </span>
                          <span className="tag tag-default tag-outline-permanent tag-link-outline-premanent">
                            <a href="#0">
                              {"UI"}
                            </a>
                          </span>
                        </div>
                        <div className="post-secondary__descr">
                          <div className="post-secondary__meta">
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
                          <div className="post-secondary__title">
                            <h3>
                              <a href="/blog/article">
                                {"Mastering the art of minimalist web design with impact"}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </article>
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
              <div className="mxd-section-title no-controls">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2>
                          {"All"}
                          <br />
                          {"resources"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p>
                          {"Browse through all our articles, tutorials, roundups, and experiments."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-block">
              <div className="mxd-projects-archive">
                <a className="mxd-projects-archive__item" href="/blog/article">
                  <div className="mxd-projects-archive__border" />
                  <div className="mxd-projects-archive__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__title">
                            <div className="mxd-projects-archive__image">
                              <img src="https://dummyimage.com/600x400/4d4d4d/838383" alt="Project Preview" />
                            </div>
                            <p>
                              <span>
                                {"Crafting immersive 3d worlds with modern tools"}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__tagslist">
                            <ul>
                              <li>
                                <p className="t-small">
                                  {"3d"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Design"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Digital workshop"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date">
                            <p className="t-small">
                              {"January 04, 2025"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-archive__border" />
                </a>
                <a className="mxd-projects-archive__item" href="/blog/article">
                  <div className="mxd-projects-archive__border" />
                  <div className="mxd-projects-archive__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__title">
                            <div className="mxd-projects-archive__image">
                              <img src="https://dummyimage.com/600x400/4d4d4d/838383" alt="Project Preview" />
                            </div>
                            <p>
                              <span>
                                {"Bringing ideas to life with motion design and creativity"}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__tagslist">
                            <ul>
                              <li>
                                <p className="t-small">
                                  {"Motion design"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Branding"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Workshop"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date">
                            <p className="t-small">
                              {"December 22, 2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-archive__border" />
                </a>
                <a className="mxd-projects-archive__item" href="/blog/article">
                  <div className="mxd-projects-archive__border" />
                  <div className="mxd-projects-archive__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__title">
                            <div className="mxd-projects-archive__image">
                              <img src="https://dummyimage.com/600x400/4d4d4d/838383" alt="Project Preview" />
                            </div>
                            <p>
                              <span>
                                {"The role of branding in creating memorable digital experiences"}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__tagslist">
                            <ul>
                              <li>
                                <p className="t-small">
                                  {"UI/UX"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Frontend"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Branding"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date">
                            <p className="t-small">
                              {"December 10, 2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-archive__border" />
                </a>
                <a className="mxd-projects-archive__item" href="/blog/article">
                  <div className="mxd-projects-archive__border" />
                  <div className="mxd-projects-archive__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__title">
                            <div className="mxd-projects-archive__image">
                              <img src="https://dummyimage.com/600x400/4d4d4d/838383" alt="Project Preview" />
                            </div>
                            <p>
                              <span>
                                {"How frontend innovations shape interactive user journeys"}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__tagslist">
                            <ul>
                              <li>
                                <p className="t-small">
                                  {"Frontend"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"UX"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date">
                            <p className="t-small">
                              {"November 22, 2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-archive__border" />
                </a>
                <a className="mxd-projects-archive__item" href="/blog/article">
                  <div className="mxd-projects-archive__border" />
                  <div className="mxd-projects-archive__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__title">
                            <div className="mxd-projects-archive__image">
                              <img src="https://dummyimage.com/600x400/4d4d4d/838383" alt="Project Preview" />
                            </div>
                            <p>
                              <span>
                                {"Digital workshops with engaging and responsive design"}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__tagslist">
                            <ul>
                              <li>
                                <p className="t-small">
                                  {"Digital workshop"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"Interactive design"}
                                </p>
                              </li>
                              <li>
                                <p className="t-small">
                                  {"UI"}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date">
                            <p className="t-small">
                              {"November 20, 2024"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-archive__border" />
                </a>
              </div>
            </div>
          </div>
        </div>
        </main>
      <TikiiFooter />
    </>
  );
}
