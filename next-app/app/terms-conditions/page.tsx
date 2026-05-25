"use client";

// Source: ../../app/terms-conditions.html

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
                        <span>
                          {"Terms"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title">
                          {"Terms & Conditions"}
                        </h1>
                        <p className="inner-headline__text t-large t-bright loading__item">
                          {"Use the website lawfully, brief us honestly, pay invoices on time, and do not copy our work without permission. Radical concepts, apparently."}
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
                          {"Services"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"Tikii Marketing Services LLP provides branding, strategy, content, performance marketing, website design and development, automation, analytics, and related digital services. Specific scope, timelines, approvals, and deliverables are defined in each proposal, estimate, invoice, or contract."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Client responsibilities"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"Clients must provide accurate information, required assets, timely feedback, and approvals. Campaign outcomes depend on market conditions, budgets, platform policies, product quality, tracking accuracy, and other factors that no agency can bend with a dramatic keynote slide."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Payments and intellectual property"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"Payment terms are set in the relevant agreement or invoice. Unless stated otherwise, rights to final approved deliverables transfer after full payment. Concepts, drafts, tools, templates, processes, and unused directions remain Tikii property."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Website use"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"You may browse this website for legitimate purposes. You may not misuse, scrape, copy, resell, attack, or interfere with the site or its content. We may update these terms when the work, law, or common sense requires it."}
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
      <TikiiFooter />
    </>
  );
}
