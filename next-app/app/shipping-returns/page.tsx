"use client";

// Source: ../../app/shipping-returns.html

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
                        <span>
                          {"Policy"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title">
                          {"Shipping & Returns"}
                        </h1>
                        <p className="inner-headline__text t-large t-bright loading__item">
                          {"Tikii sells digital marketing and creative services. There is no box to ship, no tracking number to refresh, and no delivery executive trapped in traffic with your brand strategy."}
                        </p>
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
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-2 mxd-grid-item no-margin" />
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-text-block">
                        <h2 className="t-bright anim-uni-in-up">
                          {"Shipping"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"We do not provide physical shipping because our work is delivered digitally through meetings, documents, design files, campaign accounts, websites, reports, and approved project handovers."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Returns and refunds"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"Services are planned, staffed, and delivered against agreed scopes. Refunds or cancellations, if any, follow the relevant proposal, invoice, or contract. Once work has begun, time and completed deliverables are normally non-refundable."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Questions"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"For billing, delivery, or scope questions, contact Tikii before starting the project. Clear expectations beat dramatic email threads every time."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
