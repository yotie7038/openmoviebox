import { FunctionComponent } from "react";

interface RomanceCastTabsProps {
    
}
 
const RomanceCastTabs: FunctionComponent<RomanceCastTabsProps> = () => {
    return ( 

        <>
        
<div className="cast-tabs">
  <div className="container-fluid">
    <div className="content-details trending-info g-border iq-rtl-direction">
      <ul className="iq-custom-tab tab-bg-fill d-flex nav nav-pills mb-5 " role="tablist">
        <li className="nav-item">
          <a className="nav-link active show" data-bs-toggle="pill" href="#cast-1" role="tab" aria-selected="true">Cast</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="pill" href="#crew-1" role="tab" aria-selected="false">Crew</a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="cast-1" className="tab-pane animated fadeInUp active show" role="tabpanel">
          <div className="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="3" data-mobile="2"
            data-mobile-sm="1" data-autoplay="false" data-loop="false" data-navigation="true" data-pagination="true">
            <ul className="list-inline swiper-wrapper">
              <li className="swiper-slide">
                <div className="cast-images m-0 row align-items-center position-relative">
                  <div className="col-4 img-box p-0">
                    <img src="assets/images/genre/g1.html" className="img-fluid" alt="image" loading="lazy" />
                  </div>
                  <div className="col-8 block-description">
                    <h6 className="iq-title">
                      <a href="person-detail.html" tabIndex={0}>James Chinlund </a>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <small className="text-white">As James</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="cast-images m-0 row align-items-center position-relative">
                  <div className="col-4 img-box p-0">
                    <img src="assets/images/genre/g2.html" className="img-fluid" alt="image" loading="lazy"/>
                  </div>
                  <div className="col-8 block-description">
                    <h6 className="iq-title">
                      <a href="person-detail.html" tabIndex={0}>James Earl Jones </a>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <small className="text-white">As Jones</small>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="crew-1" className="tab-pane animated fadeInUp" role="tabpanel">
          <div className="position-relative swiper swiper-card" data-slide="5" data-laptop="5" data-tab="3" data-mobile="2"
            data-mobile-sm="2" data-autoplay="false" data-loop="false" data-navigation="true" data-pagination="true">
            <ul className="list-inline swiper-wrapper">
              <li className="swiper-slide">
                <div className="cast-images m-0 row align-items-center position-relative">
                  <div className="col-4 img-box p-0">
                    <img src="assets/images/genre/g3.html" className="img-fluid" alt="image" loading="lazy"/>
                  </div>
                  <div className="col-8 block-description starring-desc ">
                    <h6 className="iq-title">
                      <a href="person-detail.html"  tabIndex={0}> Jeff Nathanson </a>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <small className="text-white">Writing</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="cast-images m-0 row align-items-center position-relative">
                  <div className="col-4 img-box p-0">
                    <img src="assets/images/genre/g5.html" className="person__poster--image img-fluid" alt="image"
                      loading="lazy" />
                  </div>
                  <div className="col-8 block-description starring-desc ">
                    <h6 className="iq-title">
                      <a href="person-detail.html"  tabIndex={0}> Irene Mecchi </a>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <small className="text-white">Writing</small>
                    </div>
                  </div>
                </div>
              </li>
              <li className="swiper-slide">
                <div className="cast-images m-0 row align-items-center position-relative">
                  <div className="col-4 img-box p-0">
                    <img src="assets/images/genre/g4.html" className="person__poster--image img-fluid" alt="image"
                      loading="lazy"/>
                  </div>
                  <div className="col-8 block-description starring-desc ">
                    <h6 className="iq-title">
                      <a href="person-detail.html" tabIndex={0} > Karen Gilchrist </a>
                    </h6>
                    <div className="video-time d-flex align-items-center my-2">
                      <small className="text-white">Production</small>
                    </div>
                  </div>
                </div>
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
}
 
export default RomanceCastTabs;