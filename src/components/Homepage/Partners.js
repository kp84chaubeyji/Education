import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <>
      <div className="partners-seaction section-padding-02">
        <div className="container">
          <div className="row gy-8 align-items-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="section-title pe-xxl-2"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="section-title__title-02">
                  We Collaborate With <span>190+</span> Leading Universities And
                  Companies
                </h2>
              </div>

              <div
                className="section-btn"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Link to="/" className="btn btn-light btn-hover-primary">
                  View all Partners
                </Link>
              </div>
            </div>

            <div className="col-lg-8">
              <div
                className="partner-logo-wrapper-02"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-01.jpg"
                      alt="Logo"
                      width="68"
                      height="92"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-04.jpg"
                      alt="Logo"
                      width="78"
                      height="91"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-05.jpg"
                      alt="Logo"
                      width="76"
                      height="91"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-06.jpg"
                      alt="Logo"
                      width="99"
                      height="71"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-07.jpg"
                      alt="Logo"
                      width="93"
                      height="72"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-10.jpg"
                      alt="Logo"
                      width="87"
                      height="75"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-11.jpg"
                      alt="Logo"
                      width="87"
                      height="78"
                    />
                  </div>
                </div>

                <div className="partner-logo">
                  <div className="partner-logo__logo">
                    <img
                      src="assets/images/partners-logo/client-logo-12.jpg"
                      alt="Logo"
                      width="107"
                      height="69"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
