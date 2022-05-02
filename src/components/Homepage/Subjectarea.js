import React, { useState } from "react";
import subjectdata from "./Subjectdata";
import { Link } from "react-router-dom";

const Subjectarea = () => {
  const [subjectData] = useState(subjectdata);

  return (
    <>
      <div className="categories-section bg-color-03 section-padding-01">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="section-title__title-03">
              <mark>Subject</mark> Areas{" "}
            </h2>
          </div>

          <div className="row g-6">
            {subjectData.map((curElem) => {
              const { icon, name, description } = curElem;
              return (
                <>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 d-flex"
                    key={curElem.id}
                  >
                    <div
                      className="categories-item-02 flex-fill"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <Link className="categories-item-02__link" to="/">
                        <div className="categories-item-02__icon">
                          <img
                            src={icon}
                            alt="Subject"
                            className="subnect_icon"
                          />
                        </div>
                        <div className="categories-item-02__info">
                          <h4 className="categories-item-02__name">{name}</h4>
                          <p className="categories-item-02__description">
                            {description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subjectarea;
