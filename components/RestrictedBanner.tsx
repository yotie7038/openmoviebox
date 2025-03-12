import { FunctionComponent } from "react";

interface RestrictedBannerProps {
    
}
 
const RestrictedBanner: FunctionComponent<RestrictedBannerProps> = () => {
    return ( 

        <>
        <div className="iq-main-slider site-video">
  <div className="container-fluid">
    <div className="iq-content_restriction">
      <div className="iq-restriction_box">
        <span className="subscribe-text">You must be logged in to view this content.</span>
        <div className="iq-button">
            <a href="#" className="btn text-uppercase position-relative">
                <span className="button-text">Subscribe To Watch</span>
                <i className="fa-solid fa-play"></i>
            </a>
        </div>
        <span> Already a Member?</span>
        <div className="iq-button">
            <a href="#" className="btn text-uppercase position-relative">
                <span className="button-text">Log in</span>
                <i className="fa-solid fa-play"></i>
            </a>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
     );
}
 
export default RestrictedBanner;