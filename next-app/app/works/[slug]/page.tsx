"use client";

// Source: ../../app/project-details.html

import { TikiiFooter } from "@/components/tikii-footer";
import type { CSSProperties } from "react";
import { DemoForm, usePageCounters, type CounterRecords } from "@/components/rayo-direct-helpers";

const counters = {} as const satisfies CounterRecords;

export default function Page() {
  usePageCounters(counters);

  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content inner-page-content">
        <div className="mxd-section mxd-section-inner-headline padding-default">
          <div className="mxd-container grid-container">
            <div className="mxd-block loading-wrap">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                    <div className="mxd-block__name name-project-link loading__fade">
                      <a className="btn btn-anim btn-line-small btn-muted slide-right-up" href="#0">
                        <span className="btn-caption">
                          {"Project Page"}
                        </span>
                        <i className="ph ph-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title">
                          {"Studio template"}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" />
                </div>
                <div className="row g-0">
                  <div className="col-12 col-xl-2" />
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="inner-headline__paragraph loading__item">
                      <p>
                        {"Inspiring ideas, creative insights, and the latest in design and tech. Fueling \r\n                      innovation for your digital journey."}
                      </p>
                    </div>
                    <div className="inner-headline__data">
                      <div className="mxd-data-list">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                              <div className="mxd-data-list__item">
                                <p className="mxd-data-list__name">
                                  {"Client"}
                                </p>
                                <p className="mxd-data-list__content">
                                  {"Mix Design"}
                                </p>
                              </div>
                              <div className="mxd-data-list__item">
                                <p className="mxd-data-list__name">
                                  {"Services"}
                                </p>
                                <p className="mxd-data-list__content">
                                  {"Web development"}
                                </p>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item">
                              <div className="mxd-data-list__item">
                                <p className="mxd-data-list__name">
                                  {"Industries"}
                                </p>
                                <p className="mxd-data-list__content">
                                  {"HTML template"}
                                </p>
                              </div>
                              <div className="mxd-data-list__item">
                                <p className="mxd-data-list__name">
                                  {"Date"}
                                </p>
                                <p className="mxd-data-list__content">
                                  {"January 2025"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="inner-headline__tags loading__fade">
                      <span className="tag tag-default tag-outline-medium">
                        {"Web design"}
                      </span>
                      <span className="tag tag-default tag-outline-medium">
                        {"UI/UX design"}
                      </span>
                      <span className="tag tag-default tag-outline-medium">
                        {"Development"}
                      </span>
                      <span className="tag tag-default tag-outline-medium">
                        {"Branding"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-section">
          <div className="mxd-container">
            <div className="mxd-divider loading__fade">
              <div className="mxd-divider__image prj-details-img-01 parallax-img" />
            </div>
          </div>
        </div>
        <div className="mxd-section mxd-project overflow-hidden">
          <div className="mxd-container grid-container">
            <div className="mxd-project__block pre-grid">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-project__subtitle">
                      <h2 className="reveal-type anim-uni-in-up">
                        {"Challenge"}
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-project__content">
                      <div className="mxd-project__paragraph">
                        <p className="t-large t-bright anim-uni-in-up">
                          {"Donec maximus lorem quam, a aliquam erat aliquam \r\n                        quis. Sed accumsan sagittis condimentum. Proin eu nulla."}
                        </p>
                        <p className="anim-uni-in-up">
                          {"Nunc vel ligula tincidunt, fermentum velit ac, sodales eros. Vivamus ac leo in arcu accumsan condimentum. Nullam ac est quis dolor scelerisque interdum in at risus. Pellentesque mattis est vel maximus posuere. Integer tristique ipsum velit, vitae gravida purus laoreet."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-project__block no-margin">
              <div className="mxd-project-cards">
                <div className="container-fluid px-0">
                  <div className="row gx-0">
                    <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                      <div className="mxd-project-cards__inner align-end bg-accent radius-m">
                        <img src="https://dummyimage.com/1200x1200/4d4d4d/838383" alt="Project Preview" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                      <div className="mxd-project-cards__inner align-end bg-base-tint radius-m">
                        <img src="https://dummyimage.com/1400x1000/2d2d2d/838383" alt="Project Preview" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-right">
                      <div className="mxd-project-cards__inner bg-base-tint radius-m">
                        <img src="https://dummyimage.com/1400x1000/2d2d2d/838383" alt="Project Preview" />
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 mxd-project-cards__item mxd-grid-item anim-uni-scale-in-left">
                      <div className="mxd-project-cards__inner bg-base-tint radius-m">
                        <img src="https://dummyimage.com/1200x1200/4d4d4d/838383" alt="Project Preview" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-project__block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-project__subtitle">
                      <h2 className="reveal-type anim-uni-in-up">
                        {"Solution"}
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-project__content">
                      <div className="mxd-project__paragraph medium-text">
                        <p className="anim-uni-in-up">
                          {"Orci varius natoque penatibus et magnis dis parturient montes, \r\n                        nascetur ridiculus mus. Quisque ut arcu pulvinar, rhoncus libero id, lobortis metus. Morbi \r\n                        tristique dolor sit amet turpis faucibus malesuada."}
                        </p>
                        <p className="anim-uni-in-up">
                          {"Morbi non ipsum vel risus scelerisque sagittis nec a ipsum. \r\n                        Nulla odio neque, feugiat a arcu et, tristique cursus diam. Duis consectetur massa nibh, \r\n                        ut rhoncus nibh vestibulum in. Sed imperdiet metus sed arcu efficitur posuere."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-project__block mxd-grid-item no-margin">
              <div className="mxd-divider">
                <div className="mxd-divider__image prj-details-img-02 parallax-img" />
              </div>
            </div>
            <div className="mxd-project__block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-project__subtitle">
                      <h2 className="reveal-type anim-uni-in-up">
                        {"Client's"}
                        <br />
                        {"feedback"}
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-project__content">
                      <div className="mxd-project__paragraph medium-text">
                        <p className="anim-uni-in-up">
                          {"Working with Rayo team was an absolute pleasure! They took the \r\n                        time to understand our business needs and translated them into a beautifully designed, \r\n                        user-friendly website. The team's attention to detail, creativity, and technical \r\n                        expertise exceeded our expectations. We've received so much positive feedback from \r\n                        our customers already."}
                        </p>
                        <div className="mxd-project__client">
                          <p className="mxd-project__client-name anim-uni-in-up">
                            {"Lea Tomato"}
                          </p>
                          <p className="t-small anim-uni-in-up">
                            {"Senior designer in \r\n                          "}
                            <a className="" href="#">
                              {"The Way"}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-project__block no-margin">
              <div className="mxd-project__nav">
                <div className="mxd-project__divider anim-uni-in-up" />
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
                      <a className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left" href="/works/project-details">
                        <i className="ph ph-arrow-left" />
                        <span className="btn-caption">
                          {"Prev"}
                        </span>
                      </a>
                      <a className="mxd-project__link anim-uni-in-up" href="/works/project-details">
                        <span>
                          {"Mobile app design"}
                        </span>
                      </a>
                    </div>
                    <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
                      <a className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right" href="/works/project-details">
                        <span className="btn-caption">
                          {"Next"}
                        </span>
                        <i className="ph ph-arrow-right" />
                      </a>
                      <a className="mxd-project__link  anim-uni-in-up" href="/works/project-details">
                        <span>
                          {"AI experiments"}
                        </span>
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
