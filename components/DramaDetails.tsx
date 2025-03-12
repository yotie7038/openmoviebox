import { FunctionComponent } from "react";

interface DramaDetailsProps {
    
}
 
const DramaDetails: FunctionComponent<DramaDetailsProps> = () => {
    return ( 

        <>
        <div className="details-part">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
       
        <div className="trending-info mt-4 pt-0 pb-4">
          <div className="row">
            <div className="col-md-9 col-12 mb-auto">
              <div className="d-block d-lg-flex align-items-center">
                <h2 className="trending-text fw-bold texture-text text-uppercase my-0 fadeInLeft animated d-inline-block"
                  data-animation-in="fadeInLeft" data-delay-in="0.6" style={{

                    opacity:"1",
                    animationDelay:"0.6s"
                  }}    
                
                >
                  Zombie Island
                </h2>
                <div className="slider-ratting d-flex align-items-center ms-lg-3 ms-0">
                  <ul className="ratting-start p-0 m-0 list-inline text-warning d-flex align-items-center justify-content-left">
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star" aria-hidden="true"></i></li>
                    <li><i className="fa fa-star-half" aria-hidden="true"></i></li>
                  </ul>
                  <span className="text-white ms-2">4.8 (imdb)</span>
                </div>
              </div>
              <ul className="p-0 mt-2 list-inline d-flex flex-wrap movie-tag">
                <li className="trending-list"><a className="text-primary" href="view-all-movie.html">Drama</a></li>
                <li className="trending-list"><a className="text-primary" href="view-all-movie.html">Adventure</a></li>
                <li className="trending-list"><a className="text-primary" href="view-all-movie.html">Drama</a></li>
              </ul>
              <div className="d-flex flex-wrap align-items-center text-white text-detail flex-wrap mb-4">
                <span className="badge bg-secondary">Horror</span>
                <span className="ms-3 font-Weight-500 genres-info me-1">1hr : 48mins</span>
                <span className="trending-year trending-year-list font-Weight-500 genres-info">
                  Feb 2017
                </span>
              </div>
              <div className="d-flex align-items-center gap-4 flex-wrap mb-4">
                <ul className="list-inline p-0 share-icons music-play-lists mb-n2 mx-n2">
                  <li className="share">
                    <span><i className="fa-solid fa-share-nodes"></i></span>
                    <div className="share-box">
                      <svg width="15" height="40" viewBox="0 0 15 40" className="share-shape" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M14.8842 40C6.82983 37.2868 1 29.3582 1 20C1 10.6418 6.82983 2.71323 14.8842 0H0V40H14.8842Z"
                          fill="#191919"></path>
                      </svg>
                      <div className="d-flex align-items-center">
                        <a href="#" className="share-ico"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="share-ico"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="share-ico"><i className="fa-solid fa-link"></i></a>
                      </div>
                    </div>
                  </li>
                  <li><span><i className="fa-solid fa-heart"></i></span></li>
                  <li><span><i className="fa-solid fa-plus"></i></span></li>
                  <li><span><a href="assets/images/video/trailer.mp4" download><i
                          className="fa-solid fa-download"></i></a></span></li>
                </ul>
                <div className="movie-detail-select">
                  <select name="movieselect" className="form-control movie-select select2-basic-single js-states">
                    <option value="1">Playlist</option>
                    <option value="2">Zombie Island</option>
                    <option value="3">Sand Dust</option>
                    <option value="4">Jumbo Queen</option>
                  </select>
                </div>
              </div>
              <ul className="iq-blogtag list-unstyled d-flex flex-wrap align-items-center gap-3 p-0">
                <li className="iq-tag-title text-primary mb-0">
                  <i className="fa fa-tags" aria-hidden="true"></i>
                  Tags:
                </li>
                <li><a className="title" href="view-all-movie.html">Drama</a><span className="text-secondary">,</span></li>
                <li><a className="title" href="view-all-movie.html">Adventure</a><span className="text-secondary">,</span></li>
                <li><a className="title" href="view-all-movie.html">Drama</a><span className="text-secondary">,</span></li>
              </ul>
            </div>
            <div className="trailor-video col-md-3 col-12 mt-lg-0 mt-4 mb-md-0 mb-1 text-lg-right">
              <a data-fslightbox="html5-video" href="https://www.youtube.com/watch?v=QCGq1epI9pQ"
                className="video-open playbtn block-images position-relative playbtn_thumbnail">
                <img src="assets/images/genre/01.html" className="attachment-medium-large size-medium-large wp-post-image"
                  alt="" loading="lazy" />
                <span className="content btn btn-transparant iq-button">
                  <i className="fa fa-play me-2 text-white"></i>
                  <span>Trailer Link</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="content-details trending-info">
          <ul
            className="iq-custom-tab tab-bg-gredient-center d-flex nav nav-pills align-items-center text-center mb-5 justify-content-center list-inline"
            role="tablist">
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="pill"
                href="#description-01" role="tab" aria-selected="true">
                Description
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#review-01" role="tab"
                aria-selected="false">
                Rate &amp; Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="pill" href="#source-01" role="tab"
                aria-selected="false">
                Sources
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="description-01" className="tab-pane animated fadeInUp active show"
              role="tabpanel">
              <div className="description-content">
                <p>
                  Zombie Island is a 1998 direct-to-video animated comedy horror film
                  based on Hanna-Barbera's Scooby-Doo Saturday-morning cartoons. In the
                  film, Shaggy, Scooby, Fred, Velma, and Daphne reunite after a
                  year-long hiatus from Mystery, Inc. to investigate a bayou island said
                  to be haunted by the ghost of the pirate Morgan Moonscar. The film was
                  directed by Jim Stenstrum, from a screenplay by Glenn Leopold.
                </p>
              </div>
            </div>
            <div id="review-01" className="tab-pane animated fadeInUp" role="tabpanel">
              <div className="streamit-reviews">
                <div id="comments" className="comments-area validate-form">
                  <p className="masvideos-noreviews mt-3">
                    There are no reviews yet.
                  </p>
                </div>
                <div className="review_form">
                  <div className="comment-respond">
                    <h3 className="fw-500 my-2">
                      Be the first to review “Zombie Island”
                    </h3>
                    <p className="comment-notes"><span>Your email address will not be
                        published.</span><span> Required fields are marked<span
                          className="required"> * </span></span></p>
                    <div className="d-flex align-items-center mb-4"><label>Your
                        rating</label><div className="star ms-4 text-primary"><span><i
                            className="fa-regular fa-star"></i></span> <span><i
                            className="fa-regular fa-star"></i></span> <span><i
                            className="fa-regular fa-star"></i></span> <span><i
                            className="fa-regular fa-star"></i></span> <span><i
                            className="fa-regular fa-star"></i></span></div></div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="mb-2">
                            Your review
                            <span className="required">
                              *
                            </span>
                          </label>
                          <textarea 
  className="form-control" 
  name="comment" 
  cols={5} 
  rows={8} 
  required
/>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2">
                            Name
                            <span className="required">
                              *
                            </span>
                          </label>
                          <input 
  className="form-control" 
  name="author" 
  type="text" 
  size={30} 
  required 
/>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="mb-2">
                            Email&nbsp;
                            <span className="required">
                              *
                            </span>
                          </label>
                          <input 
  className="form-control" 
  name="email" 
  type="email" 
  size={30} 
  required 
/>

                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mt-3 mt-3 d-flex gap-2 align-items-center">
                        <input 
  className="form-check-input mt-0" 
  type="checkbox" 
  id="check1" 
  defaultChecked 
/>

                          <label className="form-check-label" htmlFor="check1">
                            Save my name, email, and website in this browser for the
                            next time I comment.
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-submit mt-4">
                          <div className="iq-button">
                            <button name="submit" type="submit" id="submit"
                              className="btn text-uppercase position-relative"
                              value="Submit">
                              <span className="button-text">Submit</span>
                              <i className="fa-solid fa-play"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="source-01" className="tab-pane animated fadeInUp" role="tabpanel">
              <div className="source-list-content table-responsive">
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th>
                        Links
                      </th>
                      <th>
                        Quality
                      </th>
                      <th>
                        Language
                      </th>
                      <th>
                        Player
                      </th>
                      <th>
                        Date Added
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="iq-button">
                          <a href="movie-detail.html"
                            className="btn text-uppercase position-relative">
                            <span className="button-text"> Play Now</span>
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </div>
                      </td>
                      <td>
                        1080p
                      </td>
                      <td>
                        english
                      </td>
                      <td>
                        MusicBee
                      </td>
                      <td>
                        2021-11-28
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-button">
                          <a href="movie-detail.html"
                            className="btn text-uppercase position-relative">
                            <span className="button-text"> Play Now</span>
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </div>
                      </td>
                      <td>
                        800p
                      </td>
                      <td>
                        english
                      </td>
                      <td>
                        5KPlayer
                      </td>
                      <td>
                        2021-11-25
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="iq-button">
                          <a href="movie-detail.html"
                            className="btn text-uppercase position-relative">
                            <span className="button-text"> Play Now</span>
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </div>
                      </td>
                      <td>
                        720p
                      </td>
                      <td>
                        English
                      </td>
                      <td>
                        MediaMonkey
                      </td>
                      <td>
                        2021-11-20
                      </td>
                    </tr>
                  </tbody>
                </table>
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
}
 
export default DramaDetails;