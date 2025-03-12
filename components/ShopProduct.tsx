import { FunctionComponent } from "react";

interface ShopProductProps {}

const ShopProduct: FunctionComponent<ShopProductProps> = () => {
  return (
    <>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="pe-3">
                <div className="shop-box">
                  <h5 className="mb-4 text-uppercase">Product categories</h5>
                  <ul className="list-unstyled p-0 m-0 shop-list-checkbox">
                    <li>Activeman (4)</li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between">
                        <span>Disney World (2)</span>
                        <a
                          className="checkbox"
                          data-bs-toggle="collapse"
                          href="#categoriesone"
                          role="button"
                          aria-expanded="false"
                          aria-controls="categoriesone"
                        ></a>
                      </div>
                      <div className="collapse" id="categoriesone">
                        <ul className="list-unstyled ps-2 mt-3">
                          <li>Fantasia (1)</li>
                        </ul>
                      </div>
                    </li>
                    <li>Galaxy Heaven (1)</li>
                    <li>Haunted Halloween (6)</li>
                    <li>Marvel Studios (3)</li>
                    <li>Monster-House (4)</li>
                    <li>Quid Game (1)</li>
                    <li>The Flashv (1)</li>
                    <li>The Madrid (3)</li>
                    <li>The-Champion(4)</li>
                    <li>Uptight Birds (1)</li>
                    <li>Warner Bros Films(2)</li>
                  </ul>
                </div>
                <div className="shop-box">
                  <h5>PRICE FILTER </h5>
                  <div className="form-group my-4 product-range">
                    <div
                      className="range-slider"
                      id="product-price-range"
                    ></div>
                  </div>
                  <div className=" d-flex align-items-center my-3">
                    <small>Price: &nbsp;</small>
                    <small id="lower-value">&nbsp; $11</small>
                    <small id="lower-value1">&nbsp; - &nbsp;</small>
                    <small id="upper-value">&nbsp;$50</small>
                  </div>
                </div>
                <div className="shop-box">
                  <h5 className="mb-4">PRODUCT SIZE</h5>
                  <ul className="shop_list_checkbox list-unstyled">
                    <li>
                      <label className="shop_checkbox_label">L</label>
                      <input type="hidden" value="L" />
                    </li>
                    <li>
                      <label className="shop_checkbox_label">M</label>
                      <input type="hidden" value="M" />
                    </li>
                    <li>
                      <label className="shop_checkbox_label">S</label>
                      <input type="hidden" value="S" />
                    </li>
                  </ul>
                </div>
                <div className="shop-box border-bottom-0">
                  <h5 className="mb-4">PRODUCTS</h5>
                  <ul className="list-unstyled m-0 p-0 shop-product">
                    <li className="d-flex align-items-center mb-4">
                      <div className="top-product-img pe-3">
                        <img
                          src="../assets/images/shop/product/01.html"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div>
                        <a href="product-detail.html">Bag Pack</a>
                        <p>$10.00</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-center mb-4">
                      <div className="top-product-img pe-3">
                        <img
                          src="../assets/images/shop/product/30.html"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="product-detail.html">
                        <a href="#">Green Specs</a>
                        <div>
                          <del>$22.00</del> $18.00
                        </div>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="top-product-img pe-3">
                        <img
                          src="../assets/images/shop/product/07.html"
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="product-detail.html">
                        <a href="#">Cartoon Character</a>
                        <p className="mb-0">$25.00</p>
                      </div>
                    </li>
                  </ul>
                </div>{" "}
              </div>
            </div>
            <div className="col-xl-9">
              <div className="d-flex align-items-center justify-content-between mb-5 shop-filter flex-wrap">
                <p>Showing 1–10 of 31 results </p>
                <div className="d-flex align-items-center ">
                  <div className="product-view-button">
                    <ul
                      className="nav_shop nav d-flex nav-pills mb-0 iq-product-filter d-flex bg-transparent align-items-center list-inline"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn-sm btn-icon rounded-pill p-0"
                          id="list-view-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-list-view"
                          type="button"
                          role="tab"
                          aria-controls="pills-list-view"
                          aria-selected="true"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="16"
                              viewBox="0 0 18 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1379_355)">
                                <path
                                  d="M3.42857 0H0V3.42857H3.42857V0Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 0.857422H6V2.57171H18V0.857422Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.42857 6H0V9.42857H3.42857V6Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 6.85742H6V8.57171H18V6.85742Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M3.42857 12H0V15.4286H3.42857V12Z"
                                  fill=""
                                ></path>
                                <path
                                  d="M18 12.8574H6V14.5717H18V12.8574Z"
                                  fill=""
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_1379_355">
                                  <rect
                                    width="18"
                                    height="15.4286"
                                    fill=""
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn-sm btn-icon rounded-pill p-0"
                          id="grid-view-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-grid-view"
                          type="button"
                          role="tab"
                          aria-controls="pills-grid-view"
                          aria-selected="false"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.57143 0H0V8.57143H8.57143V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 0H9.42847V8.57143H17.9999V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.57143 9.42871H0V18.0001H8.57143V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 9.42871H9.42847V18.0001H17.9999V9.42871Z"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn-sm btn-icon rounded-pill p-0 active"
                          id="grid-three-view-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-grid-three-view-tab"
                          type="button"
                          role="tab"
                          aria-controls="pills-grid-three-view-tab"
                          aria-selected="false"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.90909 0H0V4.90909H4.90909V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.4545 0H6.54541V4.90909H11.4545V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 0H13.0908V4.90909H17.9999V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M4.90909 6.5459H0V11.455H4.90909V6.5459Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.4545 6.5459H6.54541V11.455H11.4545V6.5459Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 6.5459H13.0908V11.455H17.9999V6.5459Z"
                                fill=""
                              ></path>
                              <path
                                d="M4.90909 13.0908H0V17.9999H4.90909V13.0908Z"
                                fill=""
                              ></path>
                              <path
                                d="M11.4545 13.0908H6.54541V17.9999H11.4545V13.0908Z"
                                fill=""
                              ></path>
                              <path
                                d="M17.9999 13.0908H13.0908V17.9999H17.9999V13.0908Z"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link btn-sm btn-icon rounded-pill p-0"
                          id="grid-three-four-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-grid-three-four-view-tab"
                          type="button"
                          role="tab"
                          aria-controls="pills-grid-three-four-view-tab"
                          aria-selected="false"
                        >
                          <span className="btn-inner">
                            <svg
                              className="hover_effect active_effect"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.85714 0H0V3.85714H3.85714V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 0H4.71436V3.85714H8.5715V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 0H9.42847V3.85714H13.2856V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 0H14.1428V3.85714H18V0Z"
                                fill=""
                              ></path>
                              <path
                                d="M3.85714 4.71387H0V8.57101H3.85714V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 4.71387H4.71436V8.57101H8.5715V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 4.71387H9.42847V8.57101H13.2856V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 4.71387H14.1428V8.57101H18V4.71387Z"
                                fill=""
                              ></path>
                              <path
                                d="M3.85714 9.42871H0V13.2859H3.85714V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 9.42871H4.71436V13.2859H8.5715V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 9.42871H9.42847V13.2859H13.2856V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 9.42871H14.1428V13.2859H18V9.42871Z"
                                fill=""
                              ></path>
                              <path
                                d="M3.85714 14.1426H0V17.9997H3.85714V14.1426Z"
                                fill=""
                              ></path>
                              <path
                                d="M8.5715 14.1426H4.71436V17.9997H8.5715V14.1426Z"
                                fill=""
                              ></path>
                              <path
                                d="M13.2856 14.1426H9.42847V17.9997H13.2856V14.1426Z"
                                fill=""
                              ></path>
                              <path
                                d="M18 14.1426H14.1428V17.9997H18V14.1426Z"
                                fill=""
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="iq-custom-select d-inline-block shop-select">
                    <select
                      name="cars"
                      className="form-control season-select select2-basic-single js-states"
                    >
                      <option value="season1">Default sorting</option>
                      <option>Sort by popularity</option>
                      <option>Sort by average rating</option>
                      <option>Sort by latest</option>
                      <option>Sort by price: low to high</option>
                      <option>Sort by price: high to low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade "
                  id="pills-list-view"
                  role="tabpanel"
                  aria-labelledby="list-view-tab"
                >
                  <div className="row row-cols-1">
                    <div className="col">
                      <div className="product-block product-list">
                        <div className="row">
                          <div className="col-md-4 ps-0">
                            <span className="onsale bg-primary">Sale!</span>
                            <div className="image-wrap">
                              <a href="product-detail.html">
                                <div className="product-image">
                                  <img
                                    src="../assets/images/shop/product/01.html"
                                    className="img-fluid w-100"
                                    alt="productImg-"
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                              <div className="buttons-holder">
                                <ul className="list-unstyled m-0 p-0">
                                  <li>
                                    <a
                                      className="cursor-pointer"
                                      data-bs-toggle="modal"
                                      data-bs-target="#woosq-popup"
                                    >
                                      <i className="fa-solid fa-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product-caption">
                              <h5 className="product__title">
                                <a
                                  href="shop/product-detail.html"
                                  className="title-link"
                                >
                                  Bag Pack
                                </a>
                              </h5>
                              <div className="price-detail">
                                <div className="price">
                                  <del>$48.00</del>$28.00
                                </div>
                              </div>
                              <div className="container-rating">
                                <div className="star-rating text-primary">
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star-half text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <ul className="iq-button-holder list-inline d-flex flex-wrap gap-3">
                                <li>
                                  <div className="iq-button">
                                    <a
                                      href="#"
                                      className="btn btn-sm cart-btn text-uppercase position-relative"
                                    >
                                      <span className="button-text">
                                        add to cart
                                      </span>
                                      <i className="fa-solid fa-play"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="add_to_wishlist wishlist-btn"
                                  >
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="blog-desc line-count-2">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block product-list">
                        <div className="row">
                          <div className="col-md-4 ps-0">
                            <div className="image-wrap">
                              <a href="product-detail.html">
                                <div className="product-image">
                                  <img
                                    src="../assets/images/shop/product/02.html"
                                    className="img-fluid w-100"
                                    alt="productImg-"
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                              <div className="buttons-holder">
                                <ul className="list-unstyled m-0 p-0">
                                  <li>
                                    <a
                                      className="cursor-pointer"
                                      data-bs-toggle="modal"
                                      data-bs-target="#woosq-popup"
                                    >
                                      <i className="fa-solid fa-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product-caption">
                              <h5 className="product__title">
                                <a
                                  href="shop/product-detail.html"
                                  className="title-link"
                                >
                                  Believe Mask
                                </a>
                              </h5>
                              <div className="price-detail">
                                <div className="price">
                                  <del></del>$13.00
                                </div>
                              </div>
                              <div className="container-rating">
                                <div className="star-rating text-primary">
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <ul className="iq-button-holder list-inline d-flex flex-wrap gap-3">
                                <li>
                                  <div className="iq-button">
                                    <a
                                      href="#"
                                      className="btn btn-sm cart-btn text-uppercase position-relative"
                                    >
                                      <span className="button-text">
                                        add to cart
                                      </span>
                                      <i className="fa-solid fa-play"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="add_to_wishlist wishlist-btn"
                                  >
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="blog-desc line-count-2">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block product-list">
                        <div className="row">
                          <div className="col-md-4 ps-0">
                            <span className="onsale bg-primary">Sale!</span>
                            <div className="image-wrap">
                              <a href="product-detail.html">
                                <div className="product-image">
                                  <img
                                    src="../assets/images/shop/product/03.html"
                                    className="img-fluid w-100"
                                    alt="productImg-"
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                              <div className="buttons-holder">
                                <ul className="list-unstyled m-0 p-0">
                                  <li>
                                    <a
                                      className="cursor-pointer"
                                      data-bs-toggle="modal"
                                      data-bs-target="#woosq-popup"
                                    >
                                      <i className="fa-solid fa-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product-caption">
                              <h5 className="product__title">
                                <a
                                  href="shop/product-detail.html"
                                  className="title-link"
                                >
                                  Black Bow
                                </a>
                              </h5>
                              <div className="price-detail">
                                <div className="price">
                                  <del></del>$18.00 - $45.00
                                </div>
                              </div>
                              <div className="container-rating">
                                <div className="star-rating text-primary">
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <ul className="iq-button-holder list-inline d-flex flex-wrap gap-3">
                                <li>
                                  <div className="iq-button">
                                    <a
                                      href="#"
                                      className="btn btn-sm cart-btn text-uppercase position-relative"
                                    >
                                      <span className="button-text">
                                        add to cart
                                      </span>
                                      <i className="fa-solid fa-play"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="add_to_wishlist wishlist-btn"
                                  >
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="blog-desc line-count-2">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block product-list">
                        <div className="row">
                          <div className="col-md-4 ps-0">
                            <span className="onsale bg-primary">New!</span>
                            <div className="image-wrap">
                              <a href="product-detail.html">
                                <div className="product-image">
                                  <img
                                    src="../assets/images/shop/product/04.html"
                                    className="img-fluid w-100"
                                    alt="productImg-"
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                              <div className="buttons-holder">
                                <ul className="list-unstyled m-0 p-0">
                                  <li>
                                    <a
                                      className="cursor-pointer"
                                      data-bs-toggle="modal"
                                      data-bs-target="#woosq-popup"
                                    >
                                      <i className="fa-solid fa-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product-caption">
                              <h5 className="product__title">
                                <a
                                  href="shop/product-detail.html"
                                  className="title-link"
                                >
                                  Black Cap
                                </a>
                              </h5>
                              <div className="price-detail">
                                <div className="price">
                                  <del>$20.00</del>$18.00
                                </div>
                              </div>
                              <div className="container-rating">
                                <div className="star-rating text-primary">
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <ul className="iq-button-holder list-inline d-flex flex-wrap gap-3">
                                <li>
                                  <div className="iq-button">
                                    <a
                                      href="#"
                                      className="btn btn-sm cart-btn text-uppercase position-relative"
                                    >
                                      <span className="button-text">
                                        add to cart
                                      </span>
                                      <i className="fa-solid fa-play"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="add_to_wishlist wishlist-btn"
                                  >
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="blog-desc line-count-2">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block product-list">
                        <div className="row">
                          <div className="col-md-4 ps-0">
                            <div className="image-wrap">
                              <a href="product-detail.html">
                                <div className="product-image">
                                  <img
                                    src="../assets/images/shop/product/05.html"
                                    className="img-fluid w-100"
                                    alt="productImg-"
                                    loading="lazy"
                                  />
                                </div>
                              </a>
                              <div className="buttons-holder">
                                <ul className="list-unstyled m-0 p-0">
                                  <li>
                                    <a
                                      className="cursor-pointer"
                                      data-bs-toggle="modal"
                                      data-bs-target="#woosq-popup"
                                    >
                                      <i className="fa-solid fa-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product-caption">
                              <h5 className="product__title">
                                <a
                                  href="shop/product-detail.html"
                                  className="title-link"
                                >
                                  Boxing Gloves
                                </a>
                              </h5>
                              <div className="price-detail">
                                <div className="price">
                                  <del>$20.00</del>$18.00
                                </div>
                              </div>
                              <div className="container-rating">
                                <div className="star-rating text-primary">
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                  <span>
                                    <i
                                      className="fa fa-star text-warning"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <ul className="iq-button-holder list-inline d-flex flex-wrap gap-3">
                                <li>
                                  <div className="iq-button">
                                    <a
                                      href="#"
                                      className="btn btn-sm cart-btn text-uppercase position-relative"
                                    >
                                      <span className="button-text">
                                        add to cart
                                      </span>
                                      <i className="fa-solid fa-play"></i>
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="add_to_wishlist wishlist-btn"
                                  >
                                    <i className="far fa-heart"></i>
                                  </a>
                                </li>
                              </ul>
                              <p className="blog-desc line-count-2">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don’t look even slightly
                                believable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-grid-view"
                  role="tabpanel"
                  aria-labelledby="grid-view-tab"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/01.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Bag Pack
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$48.00</del>$28.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-half text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/02.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Believe Mask
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$13.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/03.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Black Bow
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$18.00 - $45.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">New!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/04.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Black Cap
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/05.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Boxing Gloves
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/06.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Carry Bag
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="pills-grid-three-view-tab"
                  role="tabpanel"
                  aria-labelledby="grid-three-view-tab"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/01.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Bag Pack
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$48.00</del>$28.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-half text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/02.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Believe Mask
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$13.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/03.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Black Bow
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$18.00 - $45.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">New!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/04.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Black Cap
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/05.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Boxing Gloves
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/06.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Carry Bag
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/07.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Cartoon Character
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$25.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/08.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Coffee Cup
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/09.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Crown
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$10.00</del>$07.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-grid-three-four-view-tab"
                  role="tabpanel"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/01.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Bag Pack
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$48.00</del>$28.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-half text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/02.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Believe Mask
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$13.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/03.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Black Bow
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$18.00 - $45.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">New!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/04.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Black Cap
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/05.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Boxing Gloves
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/06.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Carry Bag
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/07.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Cartoon Character
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$25.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/08.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Coffee Cup
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/09.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Crown
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$10.00</del>$07.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/10.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Daily Diary
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del>$20.00</del>$18.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/11.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Floral Badges
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$20
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-half text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-half text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="product-block">
                        <span className="onsale bg-primary">Sale!</span>
                        <div className="image-wrap">
                          <a href="product-detail.html">
                            <div className="product-image">
                              <img
                                src="../assets/images/shop/product/12.html"
                                className="img-fluid w-100"
                                alt="productImg-"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="buttons-holder">
                            <ul className="list-unstyled m-0 p-0">
                              <li>
                                <a
                                  className="cursor-pointer"
                                  data-bs-toggle="modal"
                                  data-bs-target="#woosq-popup"
                                >
                                  <i className="fa-solid fa-eye"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="add_to_wishlist wishlist-btn"
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="added_to_cart cart-btn d-flex align-items-center"
                                >
                                  <i className="fa-solid fa-basket-shopping"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-caption">
                          <h5 className="product__title">
                            <a
                              href="product-detail.html"
                              className="title-link"
                            >
                              Ghost Cap
                            </a>
                          </h5>
                          <div className="price-detail">
                            <div className="price">
                              <del></del>$90.00
                            </div>
                          </div>
                          <div className="container-rating">
                            <div className="star-rating text-primary">
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                              <span>
                                <i
                                  className="fa fa-star-half text-warning"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ShopProduct;
