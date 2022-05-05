import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import "swiper/css/pagination";
//import "swiper/css/navigation";
//import { Pagination, Navigation } from "swiper";
import testimonialdetail from "./TestimonialData";

const Testimonial = () => {
  const [testimonialData] = useState(testimonialdetail);
  return (
    <>
      <div className="testimonial-section bg-color-01 section-padding-01 scene">
        <div className="container">
          <div
            className="section-title text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="section-title__title-03">
              People Say About <mark>Events</mark>
            </h2>
          </div>
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            // navigation={true}
            // modules={[Pagination, Navigation]}
            //className="mySwiper"
          >
            {testimonialData.map((curElem) => {
              const { icon, title, auth_img, description, name, designation } =
                curElem;
              return (
                <>
                  <SwiperSlide>
                    <div
                      className="testimonial-active-02"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="swiper">
                        <div className="swiper-wrapper card">
                          <div className="swiper-slide card-body">
                            <div className="testimonial-item bg-white">
                              <div className="testimonial-quote-icon">
                                <img src={icon} alt="icon" />
                              </div>
                              <div className="testimonial-main-content">
                                <div className="testimonial-caption">
                                  <h3 className="testimonial-caption__title">
                                    {title}
                                  </h3>
                                  <p>{description}</p>
                                </div>
                                <div className="testimonial-info">
                                  <div className="testimonial-info__image">
                                    <img src={auth_img} alt="Avatar" />
                                  </div>
                                  <div className="testimonial-info__caption">
                                    <h5 className="testimonial-info__name">
                                      {name}
                                    </h5>
                                    <p className="testimonial-info__designation">
                                      {designation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
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

        <div className="testimonial-section__shape-01" data-depth="-0.5"></div>
        <div className="testimonial-section__shape-02" data-depth="0.7"></div>
        <div className="testimonial-section__shape-03" data-depth="-0.5"></div>
        <img
          className="testimonial-section__shape-04"
          data-depth="0.7"
          src="assets/images/shape/edumall-shape-01.png"
          alt="Shape"
        />
      </div>
    </>
  );
};

export default Testimonial;
