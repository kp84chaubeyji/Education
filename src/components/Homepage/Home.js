import React from "react";
import Banner from "../Slider/Banner";
import Subjectarea from "./Subjectarea";
import Trendingcourses from "./Trendingcourses";
import counter_img1 from "../../assets/images/icon/c1.png";
import counter_img2 from "../../assets/images/icon/c2.png";
import counter_img3 from "../../assets/images/icon/c3.png";
import Educationevent from "./Educationevent";
import Testimonial from "./Testimonial";
import Partners from "./Partners";

const Home = () => {
  return (
    <>
      <title>EduMall - LMS & e-Learning Platform Template</title>
      <Banner />
      <Subjectarea />
      <Trendingcourses />
      <div className="counter-section-02 bg-color-04 scene">
        <div className="container">
          <div className="counter-wrapper counter">
            <div className="row">
              <div
                className="col-lg-4 col-sm-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="counter-item-02">
                  <div className="counter-item-02__icon">
                    <img src={counter_img1} alt="" className="counter_icon" />
                  </div>
                  <div className="counter-item-02__content">
                    <span
                      className="counter-item-02__count count"
                      data-count="253085"
                    >
                      0
                    </span>
                    <p className="counter-item-02__text">Students Enrolled</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="counter-item-02">
                  <div className="counter-item-02__icon">
                    <img src={counter_img2} alt="" className="counter_icon" />
                  </div>
                  <div className="counter-item-02__content">
                    <span
                      className="counter-item-02__count count"
                      data-count="1205"
                    >
                      0
                    </span>
                    <p className="counter-item-02__text">Courses</p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="counter-item-02">
                  <div className="counter-item-02__icon">
                    <img src={counter_img3} alt="" className="counter_icon" />
                  </div>
                  <div className="counter-item-02__content">
                    <span
                      className="counter-item-02__count count"
                      data-count="127"
                    >
                      0
                    </span>
                    <p className="counter-item-02__text">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="counter-section-02__shape-01" data-depth="0.7"></div>
        <div className="counter-section-02__shape-02" data-depth="0.9"></div>
        <div className="counter-section-02__shape-03" data-depth="-0.6"></div>
        <div className="counter-section-02__shape-04" data-depth="0.6"></div>
        <img
          className="counter-section-02__shape-05"
          src="assets/images/shape/edumall-shape-01.png"
          alt="Shape"
        />
      </div>
      <Educationevent />
      <Testimonial />
      <Partners />
      <div className="section-padding-02">
        <div className="container">
          <div className="newsletter-section scene">
            <div className="newsletter-wrapper d-flex">
              <div className="newsletter__content">
                <h3 className="newsletter__title">
                  {" "}
                  Subscribe <br /> <span>Our Newsletter</span>{" "}
                </h3>
              </div>
              <div className="newsletter__form">
                <form action="#">
                  <input type="text" placeholder="Your e-mail" />
                  <button className="btn btn-secondary btn-hover-primary">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div
              className="newsletter-section__shape-01"
              data-depth="-0.4"
            ></div>
            <div
              className="newsletter-section__shape-02"
              data-depth="0.4"
            ></div>
            <div
              className="newsletter-section__shape-03"
              data-depth="-0.5"
            ></div>
            <div
              className="newsletter-section__shape-04"
              data-depth="0.5"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
