import { FunctionComponent } from "react";

interface ShopSidebarProps {}

const ShopSidebar: FunctionComponent<ShopSidebarProps> = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end sidebar-cart border-0"
        tabIndex={-1}
        id="offcanvasCart"
      >
        <div className="offcanvas-header py-4">
          <h5 className="offcanvas-title">Shopping Cart (3)</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body py-5">
          <div className="sidebar-cart-content d-flex flex-column justify-content-between">
            <div className="cart-items-container">
              <ul className="cart-items-list m-0 list-inline">
                <li className="cart-item mb-4 pb-4 border-bottom">
                  <div className="cart-item-block d-flex gap-3">
                    <div className="image flex-shrink-0">
                      <img
                        src="../assets/images/shop/product/02.html"
                        width="90"
                        alt="product-image"
                        className="img-fluid object-cover"
                      />
                    </div>
                    <div className="cart-block-content position-relative flex-grow-1 pe-5">
                      <h6 className="mb-36 text-capitalize">Believe Mask</h6>
                      <span className="text-primary small">$13.00</span>
                      <div className="mt-3">
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
                      </div>
                      <div className="position-absolute top-0 end-0">
                        <a
                          href="javascript:void();"
                          className="text-white delete-btn text-capitalize"
                        >
                          delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cart-item mb-4 pb-4 border-bottom">
                  <div className="cart-item-block d-flex gap-3">
                    <div className="image flex-shrink-0">
                      <img
                        src="../assets/images/shop/product/04.html"
                        width="90"
                        alt="product-image"
                        className="img-fluid object-cover"
                      />
                    </div>
                    <div className="cart-block-content position-relative flex-grow-1 pe-5">
                      <h6 className="mb-36 text-capitalize">Black Cap</h6>
                      <span className="text-primary small">$18.00</span>
                      <div className="mt-3">
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
                      </div>
                      <div className="position-absolute top-0 end-0">
                        <a
                          href="javascript:void();"
                          className="text-white delete-btn text-capitalize"
                        >
                          delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="cart-item">
                  <div className="cart-item-block d-flex gap-3">
                    <div className="image flex-shrink-0">
                      <img
                        src="../assets/images/shop/product/05.html"
                        width="90"
                        alt="product-image"
                        className="img-fluid object-cover"
                      />
                    </div>
                    <div className="cart-block-content position-relative flex-grow-1 pe-5">
                      <h6 className="mb-36 text-capitalize">Boxing Gloves</h6>
                      <span className="text-primary small">$18.00</span>
                      <div className="mt-3">
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
                      </div>
                      <div className="position-absolute top-0 end-0">
                        <a
                          href="javascript:void();"
                          className="text-white delete-btn text-capitalize"
                        >
                          delete
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cart-progress-container mt-5 pt-5 border-top">
              <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <h5 className="m-0 fw-bold">Subtotal</h5>
                <h5 className="m-0 fw-bold">$49.00</h5>
              </div>
              <div className="d-grid gap-3 mt-4">
                <a
                  href="checkout.html"
                  className="btn bg-primary text-uppercase fw-medium w-100 text-white"
                >
                  <span className="button-text small">checkout</span>
                </a>

                <a
                  href="cart.html"
                  className="btn bg-light text-uppercase fw-medium w-100 text-dark"
                >
                  <span className="button-text small">view cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;
