import { FunctionComponent } from "react";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <header className="header-center-home header-default header-sticky">
        <nav className="nav navbar navbar-expand-xl navbar-light iq-navbar header-hover-menu py-xl-0">
          <div className="container-fluid navbar-inner">
            <div className="d-flex align-items-center justify-content-between w-100 landing-header">
              <div className="d-flex gap-3 gap-xl-0 align-items-center">
                <div>
                  <button
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbar_main"
                    aria-controls="navbar_main"
                    className="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn"
                  >
                    <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="logo-default">
                  <a className="navbar-brand text-primary" href="/">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
                <div className="logo-hotstar">
                  <a className="navbar-brand text-primary" href="/">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo-hotstar.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
                <div className="logo-prime">
                  <a className="navbar-brand text-primary" href="/">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo-prime.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
                <div className="logo-hulu">
                  <a className="navbar-brand text-primary" href="/">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo-hulu.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
              </div>
              <nav
                id="navbar_main"
                className="offcanvas mobile-offcanvas nav navbar navbar-expand-xl hover-nav horizontal-nav py-xl-0"
              >
                <div className="container-fluid p-lg-0">
                  <div className="offcanvas-header px-0">
                    <div className="navbar-brand ms-3">
                      <div className="logo-default">
                        <a className="navbar-brand text-primary" href="/">
                          <img
                            className="img-fluid logo"
                            src="assets/images/logo.html"
                            loading="lazy"
                            alt="streamit"
                          />
                        </a>
                      </div>
                      <div className="logo-hotstar">
                        <a className="navbar-brand text-primary" href="/">
                          <img
                            className="img-fluid logo"
                            src="assets/images/logo-hotstar.html"
                            loading="lazy"
                            alt="streamit"
                          />
                        </a>
                      </div>
                      <div className="logo-prime">
                        <a className="navbar-brand text-primary" href="/">
                          <img
                            className="img-fluid logo"
                            src="assets/images/logo-prime.html"
                            loading="lazy"
                            alt="streamit"
                          />
                        </a>
                      </div>
                      <div className="logo-hulu">
                        <a className="navbar-brand text-primary" href="/">
                          <img
                            className="img-fluid logo"
                            src="assets/images/logo-hulu.html"
                            loading="lazy"
                            alt="streamit"
                          />
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-close float-end px-3"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <ul
                    className="navbar-nav iq-nav-menu list-unstyled"
                    id="header-menu"
                  >
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        {" "}
                        Home{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#features"
                        role="button"
                        aria-expanded="false"
                        aria-controls="homePages"
                      >
                        <span className="item-name">Movies & TV</span>
                        <span className="menu-icon">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                      <ul
                        className="sub-nav collapse list-unstyled"
                        id="features"
                      >
                        <li className="nav-item">
                          <a className="nav-link" href="/restricted">
                            Restricted Content
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/action">
                            Action
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/comedy">
                            Comedy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/drama">
                            {" "}
                            Drama{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/romance">
                            {" "}
                            Romance{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/horror">
                            {" "}
                            Horror{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/thriller">
                            {" "}
                            Thriller{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/crime">
                            {" "}
                            Crime{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/documentary">
                            {" "}
                            Documentary{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/scifi">
                            {" "}
                            Sci Fi{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#pages"
                        role="button"
                        aria-expanded="false"
                        aria-controls="homePages"
                      >
                        <span className="item-name">Pricing</span>
                        <span className="menu-icon">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                      <ul className="sub-nav collapse list-unstyled" id="pages">
                        <li className="nav-item">
                          <a className="nav-link" href="/pricing">
                            Pricing
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/faq">
                            FAQs
                          </a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="/privacy">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">
                        Our Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#shop"
                        role="button"
                        aria-expanded="false"
                        aria-controls="shop"
                      >
                        <span className="item-name">Shop</span>
                        <span className="menu-icon">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </a>
                      <ul className="sub-nav collapse list-unstyled" id="shop">
                        <li className="nav-item">
                          <a className="nav-link" href="/shop">
                            {" "}
                            Shop{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/accountpage">
                            My Account Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/cart">
                            Cart Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/wishlist">
                            Wishlist Page
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/checkout">
                            Checkout Page
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="right-panel">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-btn">
                    <span className="navbar-toggler-icon"></span>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0">
                    <li className="nav-item dropdown iq-responsive-menu">
                      <div className="search-box">
                        <a
                          href="#"
                          className="nav-link p-0"
                          id="search-drop"
                          data-bs-toggle="dropdown"
                        >
                          <div className="btn-icon btn-sm rounded-pill btn-action">
                            <span className="btn-inner">
                              <svg
                                className="icon-20"
                                width="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="11.7669"
                                  cy="11.7666"
                                  r="8.98856"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></circle>
                                <path
                                  d="M18.0186 18.4851L21.5426 22"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </a>
                        <ul
                          className="dropdown-menu p-0 dropdown-search m-0 iq-search-bar"
                          style={{ width: "20rem" }}
                        >
                          <li className="p-0">
                            <div className="form-group input-group mb-0">
                              <input
                                type="text"
                                className="form-control border-0"
                                placeholder="Search..."
                              />
                              <button type="submit" className="search-submit">
                                <svg
                                  className="icon-15"
                                  width="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="11.7669"
                                    cy="11.7666"
                                    r="8.98856"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></circle>
                                  <path
                                    d="M18.0186 18.4851L21.5426 22"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav-item dropdown" id="itemdropdown1">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="btn-icon rounded-pill user-icons">
                          <span className="btn-inner">
                            <svg
                              className="icon-18"
                              width="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M19.2036 8.66919V12.6792"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                d="M21.2497 10.6741H17.1597"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end dropdown-user border-0 p-0 m-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <li className="user-info d-flex align-items-center gap-3 mb-3">
                          <img
                            src="assets/images/user/user1.html"
                            className="img-fluid"
                            alt=""
                            loading="lazy"
                          />
                          <span className="font-size-14 fw-500 text-capitalize text-white">
                            Jenny
                          </span>
                        </li>
                        <li>
                          <a
                            href="playlist.html"
                            className="iq-sub-card d-flex align-items-center gap-3"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 22"
                              fill="none"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.84455 20.6621C4.15273 20.6621 1 20.0876 1 17.7868C1 15.486 4.13273 13.3621 7.84455 13.3621C11.5364 13.3621 14.6891 15.4654 14.6891 17.7662C14.6891 20.066 11.5564 20.6621 7.84455 20.6621Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.83725 10.1738C10.26 10.1738 12.2236 8.21015 12.2236 5.78742C12.2236 3.36469 10.26 1.40015 7.83725 1.40015C5.41452 1.40015 3.44998 3.36469 3.44998 5.78742C3.4418 8.20196 5.3918 10.1656 7.80634 10.1738C7.81725 10.1738 7.82725 10.1738 7.83725 10.1738Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              My Account
                            </h6>
                          </a>
                        </li>
                        <li>
                          <a
                            href="playlist.html"
                            className="iq-sub-card d-flex align-items-center gap-3"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m0 0h24v24h-24z"
                                fill="#fff"
                                opacity="0"
                                transform="matrix(-1 0 0 -1 24 24)"
                              />
                              <path
                                d="m19 11h-6v-6a1 1 0 0 0 -2 0v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"
                                fill="currentColor"
                              />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              Watchlist
                            </h6>
                          </a>
                        </li>
                        <li>
                          <a
                            href="pricing-plan.html"
                            className="iq-sub-card d-flex align-items-center gap-3"
                          >
                            <svg
                              width="16"
                              height="16"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              Subscription
                            </h6>
                          </a>
                        </li>
                        <li>
                          <a
                            href="login.html"
                            className="iq-sub-card iq-logout-2 mt-1 d-flex justify-content-center gap-2"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M1.82209 15.9999C1.46654 15.9999 1.16283 15.874 0.910981 15.6221C0.659129 15.3703 0.533203 15.0666 0.533203 14.711V1.73322C0.533203 1.37767 0.659129 1.07397 0.910981 0.822114C1.16283 0.570262 1.46654 0.444336 1.82209 0.444336H7.95543V1.44434H1.82209C1.74802 1.44434 1.68135 1.47397 1.62209 1.53322C1.56283 1.59248 1.5332 1.65915 1.5332 1.73322V14.711C1.5332 14.7851 1.56283 14.8517 1.62209 14.911C1.68135 14.9703 1.74802 14.9999 1.82209 14.9999H7.95543V15.9999H1.82209ZM12.0888 11.5999L11.3554 10.8888L13.5332 8.73322H5.68876V7.711H13.511L11.3332 5.55545L12.0665 4.82211L15.4665 8.24434L12.0888 11.5999Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <h6 className="mb-0 font-size-14 fw-normal">
                              Logout
                            </h6>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
