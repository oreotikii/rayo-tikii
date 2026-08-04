"use client";

// Source: ../../app/privacy-policy.html

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
                          {"Privacy"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__inner-headline loading__item">
                        <h1 className="inner-headline__title">
                          {"Privacy Policy"}
                        </h1>
                        <p className="inner-headline__text t-large t-bright loading__item">
                          {"We collect only the information needed to respond to enquiries, run campaigns, and keep this website useful. No mysterious data cauldron. No selling your details to the nearest spreadsheet enthusiast."}
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
                          {"What we collect"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"When you contact Tikii, we may receive your name, email, phone number, company details, and project notes. Website analytics may also record basic usage data such as pages visited, device type, browser, and approximate location."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"How we use it"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"We use this information to reply to your enquiry, prepare proposals, deliver agreed services, improve the website, and understand campaign performance. If we run ads, analytics, or email campaigns for a client, handling of customer data follows the agreed scope and applicable platform policies."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Sharing and retention"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"We do not sell personal information. Data may be shared with service providers used for email, analytics, hosting, CRM, payment, or campaign operations. We keep data only as long as needed for business, legal, accounting, or support purposes."}
                        </p>
                        <h2 className="t-bright anim-uni-in-up">
                          {"Your choices"}
                        </h2>
                        <p className="t-large anim-uni-in-up">
                          {"You can ask us to update, delete, or provide access to your information where legally applicable. For privacy requests, contact Tikii Marketing Services LLP at the contact details listed on this site."}
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
