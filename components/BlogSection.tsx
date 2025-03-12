import { FunctionComponent } from "react";

interface BlogCrumbProps {}

const BlogCrumb: FunctionComponent<BlogCrumbProps> = () => {
  return (
    <>
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog1.html"
                        alt="blogImg-01"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>February 2, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        The Most Anticipated Movies
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">Dramas</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">comedy</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">drama</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">trailers</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog2.html"
                        alt="blogImg-02"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>February 2, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        Everything You Need to Know About
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">Trailer</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">Comedy</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Movie Trailers</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Trailers</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog3.html"
                        alt="blogImg-03"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>February 2, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        My streaming Black Pearl
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">Movie Trailers</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">Movie trailers</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Mystery</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Thrill</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog4.html"
                        alt="blogImg-04"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>February1, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        Cookies and Web Beacons
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">tc comedies</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">Comedy</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">tc rumors</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">tv series</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog5.html"
                        alt="blogImg-05"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>January 30, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        Birds Of Prey Star Says She’s Definitely Open To A Ghost
                        Return
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">Dramas</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">Comedies</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Drama</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Horror</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog6.html"
                        alt="blogImg-06"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>January 30, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        Saturday Night Live’ Re-Enacts Biden and Harris’ Victory
                        Speeches
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">Historical</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">historical</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Movie</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">mystery</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
              <article>
                <div className="iq-blog-box">
                  <div className="iq-blog-image clearfix">
                    <a href="blog-detail.html">
                      <img
                        src="../assets/images/blog/blog7.html"
                        alt="blogImg-07"
                        className="img-fluid w-100"
                      />
                    </a>
                  </div>
                  <div className="iq-blog-detail">
                    <div className="iq-blog-meta d-flex mb-3">
                      <ul className="list-inline mb-0">
                        <li className="border-gredient-left">
                          <a href="blog-date.html">
                            {" "}
                            <span>January 30, 2019</span>
                          </a>
                        </li>
                      </ul>
                      <ul className="iq-blogtag list-inline">
                        <li className="border-gredient-left">
                          <a href="blog-tag.html">Goldenmace</a>
                        </li>
                      </ul>
                    </div>

                    <a href="blog-detail.html">
                      <h3 className="mb-3 line-count-1 blog-heading">
                        Gillian Anderson Shares the Photos From The Crown
                      </h3>
                    </a>
                    <p className="line-count-2">
                      Praesent iaculis, purus ac vehicula mattis, arcu lorem
                      blandit nisl, non laoreet dui mi eget elit. Donec
                      porttitor ex vel augue maximus luctus. Vivamus finibus
                      nibh eu nunc volutpat suscipit.
                    </p>
                    <div className="iq-button">
                      <a
                        href="blog-detail.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Read More </span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <ul className="iq-blog-meta-cat-tag iq-blogcat mt-4">
                      <li className="iq-tag-title">
                        <i className="fas fa-film" aria-hidden="true"></i>
                        Categories:
                      </li>
                      <li>
                        <a href="blog-category.html">movie</a>
                      </li>
                    </ul>
                    <ul className="iq-blog-meta-cat-tag iq-blogtag">
                      <li className="iq-tag-title">
                        <i className="fas fa-tags" aria-hidden="true"></i>
                        Tags:
                      </li>
                      <li>
                        <a href="blog-tag.html">comedies</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">Movie trailers</a>
                      </li>
                      <li>
                        <a href="blog-tag.html">tv series</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </article>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="widget-area">
                <div className="widget widget_search">
                  <form
                    method="get"
                    className="search-form"
                    action="#"
                    autoComplete="off"
                  >
                    <div className="block-search_inside-wrapper position-relative d-flex">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search"
                        required
                      />
                      <button type="submit" className="block-search_button">
                        <svg
                          className="icon-16"
                          width="16"
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
                  </form>
                </div>
                <div className="widget iq-widget-blog">
                  <h5 className="widget-title position-relative">
                    Recent Post
                  </h5>
                  <ul className="list-inline p-0 m-0">
                    <li className="d-flex align-items-center gap-4">
                      <div className="img-holder">
                        <a href="#">
                          <img
                            src="../assets/images/blog/01.html"
                            alt=""
                            className="img-fluid h-100 w-100 object-cover"
                          />
                        </a>
                      </div>
                      <div className="post-blog">
                        <a className="new-link" href="blog-detail.html">
                          <h6 className="post-title">
                            The Most Anticipated Movies
                          </h6>
                        </a>
                        <ul className="list-inline mb-2">
                          <li className="list-inline-item border-0 mb-0 pb-0">
                            <a href="#" className="blog-data">
                              {" "}
                              <i
                                className="far fa-calendar-alt me-1"
                                aria-hidden="true"
                              ></i>
                              September 23, 2022
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-4">
                      <div className="img-holder">
                        <a href="#">
                          <img
                            src="../assets/images/blog/blog2.html"
                            alt=""
                            className="img-fluid h-100 w-100 object-cover"
                          />
                        </a>
                      </div>
                      <div className="post-blog">
                        <a className="new-link" href="blog-detail.html">
                          <h6 className="post-title">
                            Amy Adams Always Dreamed
                          </h6>
                        </a>
                        <ul className="list-inline mb-2">
                          <li className="list-inline-item border-0 mb-0 pb-0">
                            <a href="#" className="blog-data">
                              {" "}
                              <i
                                className="far fa-calendar-alt me-1"
                                aria-hidden="true"
                              ></i>
                              September 23, 2022{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-flex align-items-center gap-4">
                      <div className="img-holder">
                        <a href="#">
                          <img
                            src="../assets/images/blog/blog3.html"
                            alt=""
                            className="img-fluid h-100 w-100 object-cover"
                          />
                        </a>
                      </div>
                      <div className="post-blog">
                        <a className="new-link" href="blog-detail.html">
                          <h6 className="post-title">
                            WandaVision Will Reveal Scarlet Witch’s Untapped
                            Powers{" "}
                          </h6>
                        </a>
                        <ul className="list-inline mb-2">
                          <li className="list-inline-item  border-0 mb-0 pb-0">
                            <a href="#" className="blog-data">
                              {" "}
                              <i
                                className="far fa-calendar-alt me-1"
                                aria-hidden="true"
                              ></i>
                              September 23, 2022
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_categories">
                  <h5 className="widget-title position-relative">Categories</h5>
                  <ul className="p-0 m-0 list-unstyled">
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        Dramas
                      </a>
                      <span className="post_count"> (4) </span>
                    </li>
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        Historical
                      </a>
                      <span className="post_count"> (7) </span>
                    </li>
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        Movie
                      </a>
                      <span className="post_count"> (2) </span>
                    </li>
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        Movie Trailers
                      </a>
                      <span className="post_count"> (6) </span>
                    </li>
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        Trailers
                      </a>
                      <span className="post_count"> (4) </span>
                    </li>
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        TV Comedies
                      </a>
                      <span className="post_count"> (3) </span>
                    </li>
                    <li>
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        TV Rumors
                      </a>
                      <span className="post_count"> (4) </span>
                    </li>
                    <li className="border-bottom-0">
                      <a
                        href="blog-category.html"
                        className="position-relative"
                      >
                        TV Series
                      </a>
                      <span className="post_count"> (5) </span>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h5 className="widget-title position-relative">Tags</h5>
                  <ul className="p-0 m-0 list-unstyled gap-2 widget_tags">
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Action
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Comedies
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Comedy
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Dramas
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Historical
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Horror
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Movie
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Movie Trailers
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Mystery
                      </a>
                    </li>
                    <li>
                      <a href="blog-tag.html" className="position-relative">
                        Rumors
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h5 className="widget-title position-relative">
                    Follow Us :
                  </h5>
                  <ul className="p-0 m-0 list-unstyled widget_social_media">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="position-relative"
                      >
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="position-relative"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/"
                        className="position-relative"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        className="position-relative"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget text-center">
                  <a href="../shop/shop.html">
                    {" "}
                    <img
                      className="img-fluid"
                      src="../assets/images/blog/01.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCrumb;
