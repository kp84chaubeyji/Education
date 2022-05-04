import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="footer-widget-area section-padding-01">
          <div className="container">
            <div className="row gy-6">
              <div className="col-lg-4">
                <div className="footer-widget">
                  <Link to="/" className="footer-widget__logo">
                    <img
                      src="assets/images/dark-logo.png"
                      alt="Logo"
                      width="150"
                      height="32"
                    />
                  </Link>

                  <div className="footer-widget__info">
                    <span className="title">Call us</span>
                    <span className="number">800 388 80 90</span>
                  </div>
                  <div className="footer-widget__info">
                    <p>58 Howard Street /2 San Francisco</p>
                    <p>contact@edumall.com</p>
                  </div>

                  <div className="footer-widget__social-02">
                    <Link
                      className="twitter"
                      to="https://twitter.com/"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link
                      className="facebook"
                      to="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="skype" to="/" target="_blank">
                      <i className="fab fa-skype"></i>
                    </Link>
                    <Link
                      className="youtube"
                      to="https://www.youtube.com/"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                    <Link
                      className="linkedin"
                      to="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row gy-6">
                  <div className="col-sm-4">
                    <div className="footer-widget">
                      <h4 className="footer-widget__title">About</h4>

                      <ul className="footer-widget__link">
                        <li>
                          <Link to="/">About Us</Link>
                        </li>
                        <li>
                          <Link to="/">
                            Courses
                          </Link>
                        </li>
                        <li>
                          <Link to="/">Instructor</Link>
                        </li>
                        <li>
                          <Link to="/">Events</Link>
                        </li>
                        <li>
                          <Link to="/">
                            Become A Teacher
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="footer-widget">
                      <h4 className="footer-widget__title">Links</h4>

                      <ul className="footer-widget__link">
                        <li>
                          <Link to="/">
                            News & Blogs
                          </Link>
                        </li>
                        <li>
                          <Link to="/">Library</Link>
                        </li>
                        <li>
                          <Link to="/">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/">Partners</Link>
                        </li>
                        <li>
                          <Link to="/">Career</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="footer-widget">
                      <h4 className="footer-widget__title">Support</h4>

                      <ul className="footer-widget__link">
                        <li>
                          <Link to="/">Documentation</Link>
                        </li>
                        <li>
                          <Link to="/">FAQs</Link>
                        </li>
                        <li>
                          <Link to="/">Forum</Link>
                        </li>
                        <li>
                          <Link to="/">Sitemap</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="copyright-wrapper text-center">
              <ul className="footer-widget__link flex-row gap-8 justify-content-center">
                <li>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
              <p className="footer-widget__copyright mt-0">
                &copy; 2022 <span> EduMall </span> Made with{" "}
                <i className="fa fa-heart"></i> by{" "}
                <Link to="/">
                  BootXperts
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button id="backBtn" className="back-to-top backBtn">
        <i className="arrow-top fal fa-long-arrow-up"></i>
        <i className="arrow-bottom fal fa-long-arrow-up"></i>
      </button>
      
      
    </>
  );
};

export default Footer;
