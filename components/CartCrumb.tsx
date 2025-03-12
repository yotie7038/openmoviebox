import { FunctionComponent } from "react";

interface CartCrumbProps {}

const CartCrumb: FunctionComponent<CartCrumbProps> = () => {
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
                <h2 className="title">Cart</h2>
              </nav>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default CartCrumb;
