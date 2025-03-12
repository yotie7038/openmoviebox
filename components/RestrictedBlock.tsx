import { FunctionComponent } from "react";

interface RestrictedBlockProps {
    
}
 
const RestrictedBlock: FunctionComponent<RestrictedBlockProps> = () => {
    return ( 

        <>
        <section className="recommended-block">
  <div className="container-fluid">
    <div className="overflow-hidden">
      <div className="d-flex align-items-center justify-content-between px-3 pt-2 my-4">
        <h5 className="main-title text-capitalize mb-0">Movies Recommended For You</h5>
      </div>
      <div className="card-style-slider">
        <div className="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="2" data-mobile="2"
          data-mobile-sm="2" data-autoplay="false" data-loop="true" data-navigation="true" data-pagination="true">
          <ul className="p-0 swiper-wrapper m-0  list-inline">
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/01.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">Giikre</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">2hr : 12mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/02.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">Arrival</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">1hr : 22mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/03.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">Pricess</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">1hr : 30mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/04.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">Soull Meate</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">2hr : 30mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/05.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">Dangacg</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">1hr : 45mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/06.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">crcikeft</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">2hr : 25mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
            <li className="swiper-slide">
                <div className="iq-card card-hover">
                  <div className="block-images position-relative w-100">
                    <div className="img-box w-100">
                      <a href="movie-detail.html" className="position-absolute top-0 bottom-0 start-0 end-0"></a>
                      <img src="assets/images/movies/recommended/07.html" alt="movie-card" className="img-fluid object-cover w-100 d-block border-0"/>
                    </div>
                    <div className="card-description with-transition">
                      <div className="cart-content">
                        <div className="content-left">
                          <h5 className="iq-title text-capitalize">
                            <a href="movie-detail.html">Avengrs</a>
                          </h5>
                          <div className="movie-time d-flex align-items-center my-2">
                            <span className="movie-time-text font-normal">1hr : 45mins</span>
                          </div>
                        </div>
                        <div className="watchlist">
                          <a className="watch-list-not" href="playlist.html">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-10">
                              <path d="M12 4V20M20 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span className="watchlist-label"> Watchlist </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="block-social-info align-items-center">
                      <ul className="p-0 m-0 d-flex gap-2 music-play-lists">
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fas fa-share-alt"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <a href="#" target="_blank">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                  <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                  <i className="fas fa-link"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="share position-relative d-flex align-items-center text-center mb-0">
                          <span className="w-100 h-100 d-inline-block bg-transparent">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                          <div className="share-wrapper">
                            <div className="share-boxs d-inline-block">
                              <svg width="15" height="40" className="share-shape" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z" fill="#191919"></path>
                              </svg>
                              <div className=" overflow-hidden">
                                <span>+51</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="iq-button">
                        <a href="movie-detail.html" className="btn text-uppercase position-relative rounded-circle">
                          <i className="fa-solid fa-play ms-0"></i>
                        </a>
                    </div>
                    </div>
                  </div>
                </div>
              
              
            </li>
          </ul>
          <div className="swiper-button swiper-button-next"></div>
          <div className="swiper-button swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</section></>
     );
}
 
export default RestrictedBlock;