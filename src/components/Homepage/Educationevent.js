import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
//import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import educationData from "./EducationeventData";

const Educationevent = () => {
  const [educData] = useState(educationData);
  return (
    <>
      <div className="event-section section-padding-01">
        <div className="container">
          <div
            className="section-title text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="section-title__title-03">
              Upcoming Education <mark>Events</mark>
            </h2>
            <p className="mt-0">
              Where people find all events that they may want to involve
            </p>
          </div>
          <div
            className="event-active-02 swiper-button-style"
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
              navigation={true}
              modules={[Navigation]}
              //className="mySwiper"
            >
              {educData.map((eduData) => {
                const { imgthumb, data, title, location } = eduData;
                return (
                  <>
                    <SwiperSlide>
                      <div className="event-item-02" key={eduData}>
                        <div className="event-item-02__image">
                          <Link to="/">
                            <img src={imgthumb} alt="event" />
                          </Link>
                          <span className="event-item-02__date">{data}</span>
                        </div>
                        <div className="event-item-02__content">
                          <h3 className="event-item-02__title">
                            <a href="/">{title}</a>
                          </h3>
                          <p className="event-item-02__location">
                            <i className="far fa-map-marker-alt"></i> {location}
                          </p>
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

export default Educationevent;
