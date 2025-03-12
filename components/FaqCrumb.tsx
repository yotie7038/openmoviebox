import { FunctionComponent } from "react";

interface FaqCrumbProps {}

const FaqCrumb: FunctionComponent<FaqCrumbProps> = () => {
  return (
    <>
      <div
        className="iq-breadcrumb"
        style={{
          backgroundImage: "url(assets/images/pages/01.html)",
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqCrumb;
