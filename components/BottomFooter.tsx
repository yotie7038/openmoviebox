import { FunctionComponent } from "react";

interface BottomFooterProps {
    
}
 
const BottomFooter: FunctionComponent<BottomFooterProps> = () => {
    return ( 

        <>
         <div className="container-fluid">
        <div className="footer-top">
          <div className="row">
            <div className="col-xl-3 col-lg-6 mb-5 mb-lg-0">
              <div className="footer-logo">
                <div className="logo-default">
                  <a className="navbar-brand text-primary" href="index.html">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
                <div className="logo-hotstar">
                  <a className="navbar-brand text-primary" href="index.html">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo-hotstar.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
                <div className="logo-prime">
                  <a className="navbar-brand text-primary" href="index.html">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo-prime.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
                <div className="logo-hulu">
                  <a className="navbar-brand text-primary" href="index.html">
                    <img
                      className="img-fluid logo"
                      src="assets/images/logo-hulu.html"
                      loading="lazy"
                      alt="streamit"
                    />
                  </a>
                </div>
              </div>
              <p className="mb-4 font-size-14">
                Email us: <span className="text-white">customer@streamit.com</span>
              </p>
              <p className="text-uppercase letter-spacing-1 font-size-14 mb-1">
                customer services
              </p>
              <p className="mb-0 contact text-white">+ (480) 555-0103</p>
            </div>
            <div className="col-xl-2 col-lg-6 mb-5 mb-lg-0">
              <h4 className="footer-link-title">Quick Links</h4>
              <ul className="list-unstyled footer-menu">
                <li className="mb-3">
                  <a href="about-us.html" className="ms-3">about us</a>
                </li>
                <li className="mb-3">
                  <a href="blog/blog-listing.html" className="ms-3">Blog</a>
                </li>
                <li className="mb-3">
                  <a href="pricing-plan.html" className="ms-3">Pricing Plan</a>
                </li>
                <li>
                  <a href="faq.html" className="ms-3">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-6 mb-5 mb-lg-0">
              <h4 className="footer-link-title">Movies to watch</h4>
              <ul className="list-unstyled footer-menu">
                <li className="mb-3">
                  <a href="view-all-movie.html" className="ms-3">Top trending</a>
                </li>
                <li className="mb-3">
                  <a href="view-all-movie.html" className="ms-3">Recommended</a>
                </li>
                <li>
                  <a href="view-all-movie.html" className="ms-3">Popular</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-6 mb-5 mb-lg-0">
              <h4 className="footer-link-title">About company</h4>
              <ul className="list-unstyled footer-menu">
                <li className="mb-3">
                  <a href="contact-us.html" className="ms-3">contact us</a>
                </li>
                <li className="mb-3">
                  <a href="privacy-policy.html" className="ms-3">privacy policy</a>
                </li>
                <li>
                  <a href="terms-of-use.html" className="ms-3">Terms of use</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-6">
              <h4 className="footer-link-title">Subscribe Newsletter</h4>
              <div className="mailchimp mailchimp-dark">
                <div className="input-group mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control mb-0 font-size-14"
                    placeholder="Email*"
                    aria-describedby="button-addon2"
                  />
                  <div className="iq-button">
                    <button type="submit" className="btn btn-sm" id="button-addon2">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center mt-5">
                <span className="font-size-14 me-2">Follow Us:</span>
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
                    <a href="https://twitter.com/" className="position-relative">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" className="position-relative">
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
            </div>
          </div>
        </div>
        <div className="footer-bottom border-top">
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul
                className="menu list-inline p-0 d-flex flex-wrap align-items-center"
              >
                <li className="menu-item">
                  <a href="#"> Terms Of Use </a>
                </li>
                <li id="menu-item-7316" className="menu-item">
                  <a href="privacy-policy.html"> Privacy-Policy </a>
                </li>
                <li className="menu-item">
                  <a href="faq.html"> FAQ </a>
                </li>
                <li className="menu-item">
                  <a href="playlist.html"> Watch List </a>
                </li>
              </ul>
              <p className="font-size-14">
                © <span className="">{new Date().getFullYear()} </span>
                <span className="text-primary">STREAMIT</span>. All Rights Reserved.
                All videos and shows on this platform are trademarks of, and all
                related images and content are the property of, Streamit Inc.
                Duplication and copy of this is strictly prohibited.
              </p>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <h6 className="font-size-14 pb-1">Download Streamit Apps</h6>
              <div className="d-flex align-items-center">
                <a className="app-image" href="#">
                  <img
                    src="assets/images/footer/google-play.html"
                    loading="lazy"
                    alt="play-store"
                  />
                </a>
                <br />
                <a className="ms-3 app-image" href="#">
                  <img
                    src="assets/images/footer/apple.html"
                    loading="lazy"
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div></>
     );
}
 
export default BottomFooter;