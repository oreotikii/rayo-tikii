import { ThreeModelStage } from "@/components/three-model-stage";

export default function ModelPreviewPage() {
  return (
    <main id="mxd-page-content" className="mxd-page-content">
      <section className="mxd-section padding-hero">
        <div className="mxd-container grid-container">
          <div className="container-fluid px-0">
            <div className="row gx-0 justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="mxd-block">
                  <div className="mxd-block__title">
                    <h1 className="reveal-type">3D model preview</h1>
                  </div>
                  <div className="mxd-block__content">
                    <ThreeModelStage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
