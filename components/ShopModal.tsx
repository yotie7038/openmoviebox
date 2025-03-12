import { FunctionComponent } from "react";

interface ShopModalProps {}

const ShopModal: FunctionComponent<ShopModalProps> = () => {
  return (
    <>
      <div
        className="modal fade"
        id="woosq-popup"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered positon-relative">
          <div className="modal-content rounded-0 border-0">
            <div className="modal-body p-0">
              <button
                type="button"
                className="btn-close position-absolute end-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    src="../assets/images/shop/product/01.html"
                    className="object-cover"
                    alt="shop-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="entry-summary p-md-4">
                    <h3>Bag Pack</h3>
                    <div className="review">
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
                    <h4 className="price text-white mt-3">
                      <del className="text-body fw-normal me-1">$48.00</del>
                      $28.00{" "}
                    </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don’t look even slightly believable.
                    </p>
                    <ul className="list-inline m-0 p-0 d-flex align-items-center gap-3 flex-wrap pt-0 pt-md-4 pb-5">
                      <li>
                        <div
                          className="btn-group iq-qty-btn border border-white rounded-0"
                          data-qty="btn"
                          role="group"
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light iq-quantity-minus text-white border-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="6"
                              height="3"
                              viewBox="0 0 6 3"
                              fill="none"
                            >
                              <path
                                d="M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="btn btn-sm btn-outline-light input-display border-0"
                            data-qty="input"
                            pattern="^(0|[1-9][0-9]*)$"
                            minLength={1}
                            maxLength={2}
                            value="2"
                            title="Qty"
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light iq-quantity-plus text-white border-0"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="8"
                              viewBox="0 0 9 8"
                              fill="none"
                            >
                              <path
                                d="M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="iq-button">
                          <a
                            href="#"
                            className="btn btn-sm text-uppercase position-relative cart-btn"
                          >
                            <span className="button-text">add to cart</span>
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold text-white">SKU :</span>
                      <span>Bag Pack</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold text-white">Category :</span>
                      <span className="text-primary">Uptight Birds</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold text-white">Tags :</span>
                      <span className="text-primary">Costume,</span>
                      <span className="text-primary">Lighting</span>
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

export default ShopModal;
