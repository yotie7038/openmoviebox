import { FunctionComponent } from "react";

interface ShopCrumbProps {}

const ShopCrumb: FunctionComponent<ShopCrumbProps> = () => {
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
            <div className="col-sm-12">
              <nav aria-label="breadcrumb" className="text-center">
                <h2 className="title">Shop</h2>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCrumb;
