import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import logo from "../../assets/images/dark-logo.png";
import { useEffect } from "react";

const Navigation = () => {
  // modal popup code here

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  return (
    <>
      <div className="header-section header-sticky">
        <div className="header-top-03 d-none d-sm-block">
          <div className="container">
            <div className="header-top-bar-wrap d-sm-flex justify-content-between">
              <div className="header-top-bar-wrap__info">
                <ul className="header-top-bar-wrap__info-list header-top-bar-wrap__info-list-02">
                  <li>
                    <Link to="tel:+8819906886">
                      <i className="fas fa-phone"></i>{" "}
                      <span className="info-text">(+88) 1990 6886</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:agency@example.com">
                      <i className="far fa-envelope"></i>{" "}
                      <span className="info-text">agency@example.com</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="header-top-bar-wrap__info d-sm-flex">
                <div className="header-top-bar-wrap__language">
                  <Link className="language-toggle" to="/">
                    <span>English</span>
                  </Link>

                  <ul className="language-dropdown">
                    <li>
                      <Link to="/">Français</Link>
                    </li>
                    <li>
                      <Link to="/">Deutsch</Link>
                    </li>
                  </ul>
                </div>

                <ul className="header-top-bar-wrap__info-list header-top-bar-wrap__info-list-03 d-none d-lg-flex">
                  <li>
                    <button data-bs-toggle="modal" data-bs-target="#loginModal">
                      Log in
                    </button>
                  </li>
                  <li>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="/registerModal"
                    >
                      Register
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-main-02">
          <div className="container">
            <div className="header-main-wrapper">
              <div className="header-logo">
                <Link className="header-logo__logo" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <div className="header-inner justify-content-between">
                <div className="header-navigation d-none d-xl-block">
                  <nav className="menu-primary">
                    <ul className="menu-primary__container">
                      <li>
                        <Link className="active" to="/">
                          <span>Home</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span>Courses</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span>Pages</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span>Features</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-serach header-serach-02 order-md-3">
                  <form action="/">
                    <input
                      type="text"
                      className="header-serach__input header-serach-02__input"
                      placeholder="Search..."
                    />
                    <button className="header-serach__btn header-serach-02__btn">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="header-action header-action-02 order-md-2">
                  <Link to="/" className="header-action__btn">
                    <i className="far fa-shopping-cart"></i>
                    <span className="header-action__number">3</span>
                  </Link>

                  <div className="header-mini-cart">
                    <ul className="header-mini-cart__product-list ">
                      <li className="header-mini-cart__item">
                        <Link to="/" className="header-mini-cart__close"></Link>
                        <div className="header-mini-cart__thumbnail">
                          <Link to="/">
                            <img
                              src="assets/images/product/product-1.png"
                              alt="Product"
                              width="80"
                              height="93"
                            />
                          </Link>
                        </div>
                        <div className="header-mini-cart__caption">
                          <h3 className="header-mini-cart__name">
                            <Link to="/">Awesome for Websites</Link>
                          </h3>
                          <span className="header-mini-cart__quantity">
                            1 × <strong className="amount">$49</strong>
                            <span className="separator">.00</span>
                          </span>
                        </div>
                      </li>
                      <li className="header-mini-cart__item">
                        <Link to="/" className="header-mini-cart__close"></Link>
                        <div className="header-mini-cart__thumbnail">
                          <Link to="/">
                            <img
                              src="assets/images/product/product-2.png"
                              alt="Product"
                              width="80"
                              height="93"
                            />
                          </Link>
                        </div>
                        <div className="header-mini-cart__caption">
                          <h3 className="header-mini-cart__name">
                            {" "}
                            <Link to="/">Awesome for Websites</Link>
                          </h3>
                          <span className="header-mini-cart__quantity">
                            1 × <strong className="amount">$49</strong>
                            <span className="separator">.00</span>
                          </span>
                        </div>
                      </li>
                      <li className="header-mini-cart__item">
                        <Link to="/" className="header-mini-cart__close"></Link>
                        <div className="header-mini-cart__thumbnail">
                          <Link to="/">
                            <img
                              src="assets/images/product/product-3.png"
                              alt="Product"
                              width="80"
                              height="93"
                            />
                          </Link>
                        </div>
                        <div className="header-mini-cart__caption">
                          <h3 className="header-mini-cart__name">
                            {" "}
                            <Link to="/">Awesome for Websites</Link>
                          </h3>
                          <span className="header-mini-cart__quantity">
                            1 × <strong className="amount">$49</strong>
                            <span className="separator">.00</span>
                          </span>
                        </div>
                      </li>
                    </ul>

                    <div className="header-mini-cart__footer">
                      <div className="header-mini-cart__total">
                        <p className="header-mini-cart__label">Total:</p>
                        <p className="header-mini-cart__value">
                          $445<span className="separator">.99</span>
                        </p>
                      </div>
                      <div className="header-mini-cart__btn">
                        <Link
                          to="/"
                          className="btn btn-primary btn-hover-secondary"
                        >
                          View cart
                        </Link>
                        <Link
                          to="/"
                          className="btn btn-primary btn-hover-secondary"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-toggle header-toggle-02 order-md-4">
                  <button
                    className="header-toggle__btn d-xl-none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="/offcanvasMobileMenu"
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                  <button className="header-toggle__btn search-open d-flex d-md-none">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/"></Route>
      </Switch>
      {/* modal code */}

      <div className="modal fade" id="loginModal">
        <div className="modal-dialog modal-dialog-centered modal-login">
          <div className="modal-wrapper">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="fal fa-times"></i>
            </button>

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <p className="modal-description">
                  Don't have an account yet?{" "}
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Sign up for free
                  </button>
                </p>
              </div>
              <div className="modal-body">
                <form action="#">
                  <div className="modal-form">
                    <label className="form-label">Username or email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your username or email"
                    />
                  </div>
                  <div className="modal-form">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="modal-form d-flex justify-content-between flex-wrap gap-2">
                    <div className="form-check">
                      <input type="checkbox" id="rememberme" />
                      <label for="rememberme">Remember me</label>
                    </div>
                    <div className="text-end">
                      <a className="modal-form__link" href="#">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div className="modal-form">
                    <button className="btn btn-primary btn-hover-secondary w-100">
                      Log In
                    </button>
                  </div>
                </form>

                <div className="modal-social-option">
                  <p>or Log-in with</p>

                  <ul className="modal-social-btn">
                    <li>
                      <Link to="/" className="btn facebook">
                        <i className="fab fa-facebook-square"></i> Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="btn google">
                        <i className="fab fa-google"></i> Google
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
