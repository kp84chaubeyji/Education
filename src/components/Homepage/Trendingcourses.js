import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import coursedata from "./TrendingcoursesData";

const Trendingcourses = () => {
  
  const [courseData] = useState(coursedata);
  return (
    <>
      <div className="courses-section section-padding-01">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div
                className="section-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2 className="section-title__title-03">
                  <mark>Trending</mark> Courses
                </h2>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="section-btn-02 text-sm-end"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Link className="btn btn-light btn-hover-primary" to="/">
                  View All Courses <i className="far fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="course-active swiper-button-style swiper-dots-style"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              // autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              //   }}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                340: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={
               true
              }
              modules={[Pagination, Navigation]}
              //className="mySwiper"
              
            
            >
              {courseData.map((curCurs, index) => {
                const {
                  thumbnail,
                  price,
                  price1,
                  badge_all,
                  category,
                  title,
                  description,
                  rating_average,
                  rating_total,
                } = curCurs;
                return (
                  <>
                    <SwiperSlide>
                      <div className="course-item-02" key={index}>
                        <div className="course-header-02">
                          <div className="course-header-02__thumbnail ">
                            <Link to="/">
                              <img
                                src={thumbnail}
                                alt="courses"
                                width="330"
                                height="221"
                              />
                            </Link>
                          </div>
                          <div className="course-header-02__badge">
                            <span className="price">
                              ${price} .
                              <small className="separator">{price1}</small>
                            </span>
                          </div>
                        </div>

                        <div className="course-info-02">
                          <span className="course-info-02__badge-text badge-all">
                            {badge_all}
                          </span>
                          <div className="course-info-02__category">
                            <Link to="/">{category}</Link>
                          </div>
                          <h3 className="course-info-02__title">
                            <Link to="/">{title}</Link>
                          </h3>
                          <div className="course-info-02__description">
                            <p>{description}</p>
                          </div>
                          <div className="course-info-02__footer">
                            <div className="course-info-02__rating">
                              <div className="rating-count">
                                <span className="rating-count__average">
                                  {rating_average}
                                </span>
                                <span className="rating-count__total">
                                  {rating_total}
                                </span>
                              </div>
                              <div className="rating-star">
                                <div className="rating-label"></div>
                              </div>
                            </div>
                            <div className="course-info-02__meta">
                              <span>
                                <i className="far fa-user-alt"></i>
                              </span>
                              <span>1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trendingcourses;
