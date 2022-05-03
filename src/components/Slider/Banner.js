import React from "react";
import { Link } from "react-router-dom";
import bannerbg from "../../assets/images/home-education-center-hero-bg.jpg";

const Banner = () => {
  const signupHandle = (e)  => {
e.preventDefault()
    }
  return (
    <>
      <div className="slider-section slider-section-04">
        <div
          className="slider-wrapper"
          style={{ backgroundImage: "url(" + bannerbg + ")" }}
        >
          <div className="container">
            <div className="row gy-10 align-items-center">
              <div className="col-lg-6">
                <div
                  className="slider-caption-04"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 className="slider-caption-04__sub-title">
                    FOR A BETTER FUTURE
                  </h4>
                  <h2 className="slider-caption-04__main-title">
                    Build An <span>Incredible</span> Learning Experience
                  </h2>
                  <Link
                    to="/"
                    className="slider-caption-04__btn btn btn-white btn-hover-primary"
                  >
                    Find Courses
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="slider-register__box text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 className="slider-register__title">
                    Register for A Free Account <br /> To Access To{" "}
                    <span>1200+</span> Online Courses
                  </h4>

                  <form onSubmit={signupHandle}>
                    <div className="slider-register__form">
                      <div className="slider-register__input">
                        <i className="far fa-user"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>

                      <div className="slider-register__input">
                        <i className="far fa-envelope"></i>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="slider-register__input">
                        <i className="far fa-key"></i>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>

                      <div className="slider-register__btn">
                        <button className="btn btn-primary btn-hover-secondary w-100">
                          Sign up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
