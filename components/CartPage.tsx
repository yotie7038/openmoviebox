import { FunctionComponent } from "react";

interface cartPageProps {}

const cartPage: FunctionComponent<cartPageProps> = () => {
  return (
    <>
      <div className="cart-page  section-padding">
        <div className="container">
          <div className="main-cart mb-3 mb-md-5 pb-0 pb-md-5">
            <ul className="cart-page-items d-flex justify-content-center list-inline align-items-center gap-3 gap-md-5 flex-wrap">
              <li className="cart-page-item active">
                <span className="cart-pre-heading badge cart-pre-number bg-primary border-radius rounded-circle me-1">
                  {" "}
                  1
                </span>
                <span className="cart-page-link ">Shopping Cart </span>
              </li>
              <li>
                <svg
                  width="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
              <li>
                <span className=" cart-pre-number border-radius rounded-circle me-1">
                  2{" "}
                </span>
                <span className="cart-page-link ">Checkout </span>
              </li>
              <li>
                <svg
                  width="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
              <li>
                <span className=" cart-pre-number border-radius rounded-circle me-1">
                  {" "}
                  3{" "}
                </span>
                <span className="cart-page-link ">Order Summary </span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="table-responsive">
                <table className="table cart-table">
                  <thead className="border-bottom">
                    <tr>
                      <th scope="col" className="font-size-18 fw-500">
                        Product
                      </th>
                      <th scope="col" className="font-size-18 fw-500">
                        Price
                      </th>
                      <th scope="col" className="font-size-18 fw-500">
                        Quantity
                      </th>
                      <th scope="col" className="font-size-18 fw-500">
                        Subtotal
                      </th>
                      <th scope="col" className="font-size-18 fw-500"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-item="list">
                      <td>
                        <div className="product-thumbnail d-flex align-items-center gap-3">
                          <a className="d-block mb-2" href="#">
                            <img
                              className="avatar-80"
                              src="../assets/images/shop/product/08.html"
                              alt=""
                            />
                          </a>
                          <span className="text-white">Coffee Cup</span>
                        </div>
                      </td>
                      <td>
                        <span className="fw-500">$15.00</span>
                      </td>
                      <td>
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
                      </td>
                      <td>
                        <span className="fw-500">$123.00</span>
                      </td>
                      <td>
                        <button className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                          <span className="btn-inner">
                            <i className="far fa-trash-alt"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr data-item="list">
                      <td>
                        <div className="product-thumbnail d-flex align-items-center gap-3">
                          <a className="d-block mb-2" href="#">
                            <img
                              className="avatar-80"
                              src="../assets/images/shop/product/09.html"
                              alt=""
                            />
                          </a>
                          <span className="text-white">Medical Box</span>
                        </div>
                      </td>
                      <td>
                        <span className="fw-500">$92.00</span>
                      </td>
                      <td>
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
                      </td>
                      <td>
                        <span className="fw-500">$92.00</span>
                      </td>
                      <td>
                        <button className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                          <span className="btn-inner">
                            <i className="far fa-trash-alt"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr data-item="list">
                      <td>
                        <div className="product-thumbnail d-flex align-items-center gap-3">
                          <a className="d-block mb-2" href="#">
                            <img
                              className="avatar-80"
                              src="../assets/images/shop/product/10.html"
                              alt=""
                            />
                          </a>
                          <span className="text-white">
                            Hand Sanitizer Bottle
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className="fw-500">$90.00</span>
                      </td>
                      <td>
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
                      </td>
                      <td>
                        <span className="fw-500">$90.00</span>
                      </td>
                      <td>
                        <button className="btn btn-icon btn-danger delete-btn text-end  bg-transparent text-body border-0">
                          <span className="btn-inner">
                            <i className="far fa-trash-alt"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="coupon-main d-flex justify-content-between  gap-5 flex-wrap align-items-center pt-4 pb-5 border-bottom">
                <div className="wrap-coupon d-flex align-items-center gap-3 flex-wrap">
                  <label>Coupon :</label>
                  <input
                    className="form-control d-inline-block w-auto me-2"
                    name="coupon_code"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <div className=" d-inline-block">
                    <div className="iq-button">
                      <a
                        href="#"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Apply Coupon</span>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="button-primary">
                  <div className="iq-button">
                    <a
                      href="#"
                      className="btn text-uppercase position-relative"
                    >
                      <span className="button-text">Update Cart</span>
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart_totals p-4">
                <h5 className="mb-3 font-size-18 fw-500">Cart Totals</h5>
                <div className="css_prefix-woocommerce-cart-box table-responsive">
                  <table className="table">
                    <tbody>
                      <tr className="cart-subtotal">
                        <th className="border-0">
                          <span className="fw-500">Subtotal</span>
                        </th>
                        <td className="border-0">
                          <span>$305.00</span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th className="border-0">
                          <span className="fw-500"> Total </span>
                        </th>
                        <td className="border-0">
                          <span className="fw-500 text-primary">$305.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="button-primary">
                    <div className="iq-button">
                      <a
                        href="checkout.html"
                        className="btn text-uppercase position-relative"
                      >
                        <span className="button-text">Proceed to checkout</span>
                        <i className="fa-solid fa-play"></i>
                      </a>
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

export default cartPage;
