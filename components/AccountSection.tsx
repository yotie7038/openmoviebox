import { FunctionComponent } from "react";

interface AccountSectionProps {}

const AccountSection: FunctionComponent<AccountSectionProps> = () => {
  return (
    <>
      <div className="section-padding service-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="acc-left-menu p-4 mb-5 mb-lg-0 mb-md-0">
                <div className="product-menu">
                  <ul
                    className="list-inline m-0 nav nav-tabs flex-column bg-transparent border-0"
                    role="tablist"
                  >
                    <li className="pb-3 nav-item">
                      <button
                        className="nav-link active p-0 bg-transparent"
                        data-bs-toggle="tab"
                        data-bs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-tachometer-alt"></i>
                        <span className="ms-2">Dashboard</span>
                      </button>
                    </li>
                    <li className="py-3 nav-item">
                      <button
                        className="nav-link p-0 bg-transparent"
                        data-bs-toggle="tab"
                        data-bs-target="#orders"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-list"></i>
                        <span className="ms-2">Orders</span>
                      </button>
                    </li>
                    <li className="py-3 nav-item">
                      <button
                        className="nav-link p-0 bg-transparent"
                        data-bs-toggle="tab"
                        data-bs-target="#downloads"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-download"></i>
                        <span className="ms-2">Downloads</span>
                      </button>
                    </li>
                    <li className="py-3 nav-item">
                      <button
                        className="nav-link p-0 bg-transparent"
                        data-bs-toggle="tab"
                        data-bs-target="#address"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="ms-2">Address</span>
                      </button>
                    </li>
                    <li className="py-3 nav-item">
                      <button
                        className="nav-link p-0 bg-transparent"
                        data-bs-toggle="tab"
                        data-bs-target="#account-details"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-user"></i>
                        <span className="ms-2">Account details</span>
                      </button>
                    </li>
                    <li className="pt-3 nav-item">
                      <button
                        className="nav-link p-0 bg-transparent"
                        data-bs-toggle="tab"
                        data-bs-target="#logout"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="ms-2">Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="tab-content" id="product-menu-content">
                <div
                  className="tab-pane fade show active"
                  id="dashboard"
                  role="tabpanel"
                >
                  <div className="myaccount-content text-body p-4">
                    <p>
                      Hello Jenny (not Jenny?{" "}
                      <a href="../login.html">Log out</a>)
                    </p>
                    <p>
                      From your account dashboard you can view your{" "}
                      <a href="javascript:void(0)">recent orders</a>, manage
                      your{" "}
                      <a href="javascript:void(0)">
                        shipping and billing addresses
                      </a>
                      , and{" "}
                      <a href="javascript:void(0)">
                        edit your password and account details
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="orders" role="tabpanel">
                  <div className="orders-table text-body p-4">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr className="border-bottom">
                            <th className="fw-bolder p-3">Order</th>
                            <th className="fw-bolder p-3">Date</th>
                            <th className="fw-bolder p-3">Status</th>
                            <th className="fw-bolder p-3">Total</th>
                            <th className="fw-bolder p-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#32604</td>
                            <td>October 28, 2022</td>
                            <td>Cancelled</td>
                            <td>$215.00 For 0 Items</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">pay</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">view</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">cancel</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#32584</td>
                            <td>October 27, 2022</td>
                            <td>On Hold</td>
                            <td>$522.00 For 0 Items</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">pay</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">view</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">cancel</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#31756</td>
                            <td>October 19, 2022</td>
                            <td>Processing</td>
                            <td>$243.00 For 0 Items</td>
                            <td>
                              <div className="d-flex align-items-center gap-2">
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">pay</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">view</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">cancel</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#23663</td>
                            <td>October 7, 2022</td>
                            <td>Completed</td>
                            <td>$123.00 For 0 Items</td>
                            <td className="fs-6">
                              <div className="d-flex align-items-center gap-2">
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">view</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-bottom">
                            <td className="text-primary fs-6">#23612</td>
                            <td>October 7, 2022</td>
                            <td>Completed</td>
                            <td>$64.00 For 0 Items</td>
                            <td className="fs-6">
                              <div className="d-flex align-items-center gap-2">
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">view</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-primary fs-6">#19243</td>
                            <td>April 1, 2022</td>
                            <td>Completed</td>
                            <td>$159.00 For 0 Items</td>
                            <td className="fs-6">
                              <div className="d-flex align-items-center gap-2">
                                <div className="iq-button">
                                  <a
                                    href="javascript:void(0)"
                                    className="btn text-uppercase position-relative"
                                  >
                                    <span className="button-text">view</span>
                                    <i className="fa-solid fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="downloads" role="tabpanel">
                  <div className="orders-table text-body p-4">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr className="border-bottom">
                            <th className="fw-bolder p-3">Product</th>
                            <th className="fw-bolder p-3">
                              Downloads Remaining
                            </th>
                            <th className="fw-bolder p-3">Expires</th>
                            <th className="fw-bolder p-3">Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 fs-6">Electric Toothbrush</td>
                            <td className="p-3">∞</td>
                            <td className="p-3 fs-6">Never</td>
                            <td className="p-3">
                              <a
                                href="#"
                                className="p-2 bg-primary text-white fs-6"
                                download
                              >
                                Product Demo
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="address" role="tabpanel">
                  <div className="text-body p-4">
                    <p className="my-3">
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                      <h4 className="mb-0">Billing Address.</h4>
                      <div className="iq-button">
                        <a
                          href="#"
                          className="btn text-uppercase position-relative"
                          data-bs-toggle="collapse"
                          data-bs-target="#edit-address-1"
                          aria-expanded="false"
                        >
                          <span className="button-text">Edit</span>
                          <i className="fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div>
                    <div id="edit-address-1" className="collapse">
                      <div className="text-body mb-4">
                        <div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              First name&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              value="John"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Last name&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              value="deo"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Company name (optional)
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              value="Iqonic Design"
                              className="div-control"
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Country / Region &nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="mb-5">
                              <select
                                className="select2-basic-single js-states div-control"
                                aria-label="select country"
                                required
                              >
                                <option value="" selected>
                                  Choose a country
                                </option>
                                <option value="1">India</option>
                                <option value="2">United Kingdom</option>
                                <option value="3">United States</option>
                                <option value="4">Australia</option>
                                <option value="5">North Corea</option>
                              </select>
                            </div>
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Street address&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="House number and street name"
                              value="4517 Kentucky"
                              className="div-control mb-3 rounded-0"
                              required
                            />
                            <input
                              type="text"
                              name="address"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              className="div-control"
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Town / City&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value="Navsari"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              State&nbsp; <span className="text-danger">*</span>
                            </label>
                            <div className="mb-5">
                              <select
                                className="select2-basic-single js-states div-control"
                                aria-label="select state"
                              >
                                <option value="" selected>
                                  Choose a State
                                </option>
                                <option value="1">Gujarat</option>
                                <option value="2">Delhi</option>
                                <option value="3">Goa</option>
                                <option value="4">Haryana</option>
                                <option value="5">Ladakh</option>
                              </select>
                            </div>
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              PIN code&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="pin code"
                              value="396321"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Phone&nbsp; <span className="text-danger">*</span>
                            </label>
                            <input
                              type="tel"
                              name="number"
                              value="1234567890"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Email address&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value="johndeo@gmail.com"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <div className="iq-button">
                              <a
                                href="#"
                                className="btn text-uppercase position-relative"
                              >
                                <span className="button-text">
                                  Save Address
                                </span>
                                <i className="fa-solid fa-play"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="edit-address w-100">
                        <tr>
                          <td className="label-name p-2">Name</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">john deo</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Company</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">Iqonic Design</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Country</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">India</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Address</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">
                            4517 Washington Ave, Manchester.
                          </td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">E-mail</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">johndeo@gmail.com</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Phone</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">1234567890</td>
                        </tr>
                      </table>
                    </div>
                    <div className="d-flex align-items-center justify-content-between my-5 gap-2 flex-wrap">
                      <h4 className="mb-0">Shipping Address</h4>
                      <div className="iq-button">
                        <a
                          href="#"
                          className="btn text-uppercase position-relative"
                          data-bs-toggle="collapse"
                          data-bs-target="#edit-address-2"
                          aria-expanded="false"
                        >
                          <span className="button-text">Edit</span>
                          <i className="fa-solid fa-play"></i>
                        </a>
                      </div>
                    </div>
                    <div id="edit-address-2" className="collapse">
                      <div className="text-body mb-4">
                        <div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              First name&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="first-name"
                              value="John"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Last name&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              value="deo"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Company name (optional)
                            </label>
                            <input
                              type="text"
                              name="last-name"
                              value="Iqonic Design"
                              className="div-control"
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Country / Region &nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <div className="mb-5">
                              <select
                                className="select2-basic-single js-states"
                                aria-label="select country"
                                required
                              >
                                <option value="" selected>
                                  Choose a country
                                </option>
                                <option value="1">India</option>
                                <option value="2">United Kingdom</option>
                                <option value="3">United States</option>
                                <option value="4">Australia</option>
                                <option value="5">North Corea</option>
                              </select>
                            </div>
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Street address&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="House number and street name"
                              value="4517 Kentucky"
                              className="div-control mb-3 rounded-0"
                              required
                            />
                            <input
                              type="text"
                              name="address"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                              className="div-control mb-5 rounded-0"
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Town / City&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value="Navsari"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              State&nbsp; <span className="text-danger">*</span>
                            </label>
                            <div className="mb-5">
                              <select
                                className="select2-basic-single js-states"
                                aria-label="select state"
                              >
                                <option value="" selected>
                                  Choose a State
                                </option>
                                <option value="1">Gujarat</option>
                                <option value="2">Delhi</option>
                                <option value="3">Goa</option>
                                <option value="4">Haryana</option>
                                <option value="5">Ladakh</option>
                              </select>
                            </div>
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              PIN code&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="pin code"
                              value="396321"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Phone&nbsp; <span className="text-danger">*</span>
                            </label>
                            <input
                              type="tel"
                              name="number"
                              value="1234567890"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group mb-5">
                            <label className="mb-2">
                              Email address&nbsp;{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value="johndeo@gmail.com"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="div-group">
                            <div className="iq-button">
                              <a
                                href="#"
                                className="btn text-uppercase position-relative"
                              >
                                <span className="button-text">
                                  Save Address
                                </span>
                                <i className="fa-solid fa-play"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="edit-address w-100">
                        <tr>
                          <td className="label-name p-2">Name</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">john deo</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Company</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">Iqonic Design</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Country</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">India</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Address</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">
                            4517 Washington Ave, Manchester.
                          </td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">E-mail</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">johndeo@gmail.com</td>
                        </tr>
                        <tr>
                          <td className="label-name p-2">Phone</td>
                          <td className="seprator p-2">
                            <span>:</span>
                          </td>
                          <td className="p-2">1234567890</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="account-details"
                  role="tabpanel"
                >
                  <div className=" p-4 text-body">
                    <div>
                      <div className="div-group mb-5">
                        <label className="mb-2">
                          First name&nbsp;{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          value="John"
                          className="div-control"
                          required
                        />
                      </div>
                      <div className="div-group mb-5">
                        <label className="mb-2">
                          Last name&nbsp; <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          value="deo"
                          className="div-control"
                          required
                        />
                      </div>
                      <div className="div-group mb-5">
                        <label className="mb-2">
                          Display name&nbsp;{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="display-name"
                          value="John"
                          className="div-control"
                          required
                        />
                      </div>
                      <em className="d-block mb-5">
                        This will be how your name will be displayed in the
                        account section and in reviews
                      </em>
                      <div className="div-group mb-5">
                        <label className="mb-2">
                          Email address&nbsp;{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value="johndeo@gmail.com"
                          className="div-control"
                          required
                        />
                      </div>
                      <h4 className="fw-normal mb-5">Password change</h4>
                      <div className="div-group mb-5">
                        <label className="mb-2">
                          Current password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="div-control"
                        />
                      </div>
                      <div className="div-group mb-5">
                        <label className="mb-2">
                          New password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="div-control"
                        />
                      </div>
                      <div className="div-group mb-5">
                        <label className="mb-2">Confirm new password</label>
                        <input
                          type="password"
                          name="password"
                          className="div-control"
                        />
                      </div>
                      <div className="div-group">
                        <div className="iq-button">
                          <a
                            href="javascript:void(0)"
                            className="btn text-uppercase position-relative"
                          >
                            <span className="button-text">save changes</span>
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="logout" role="tabpanel">
                  <div className="p-4">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="mb-5 text-primary">Login</h4>
                        <div>
                          <div className="mb-4">
                            <input
                              type="text"
                              name="user-name"
                              className="div-control"
                              placeholder="Username or email address *"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              name="pwd"
                              className="div-control"
                              placeholder="Password"
                              required
                            />
                          </div>
                          <label className="custom-div-field mb-5">
                            <input type="checkbox" required className="mr-2" />
                            <span className="checkmark"></span>
                            <span>Remember me</span>
                          </label>
                          <div className="iq-button">
                            <a
                              href="javascript:void(0)"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">Login</span>
                              <i className="fa-solid fa-play"></i>
                            </a>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="iq-button link-button">
                            <a
                              href="javascript:void(0)"
                              className="btn text-capitalize position-relative"
                            >
                              <span className="button-text">
                                Lost your password?
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 className="mb-5 mt-5 mt-lg-0 mt-md-0 text-primary">
                          Register
                        </h4>
                        <div>
                          <div className="mb-4">
                            <input
                              type="text"
                              name="user-name"
                              placeholder="Username *"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="email"
                              name="email-address"
                              placeholder="Email address *"
                              className="div-control"
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              name="password"
                              placeholder="Password *"
                              className="div-control"
                              required
                            />
                          </div>
                          <p className="mb-5">
                            {" "}
                            Your personal data will be used to support your
                            experience throughout this website, to manage access
                            to your account, and for other purposes described in
                            our{" "}
                            <a href="../privacy-policy.html"> privacy policy</a>
                            .
                          </p>
                          <div className="iq-button">
                            <a
                              href="javascript:void(0)"
                              className="btn text-uppercase position-relative"
                            >
                              <span className="button-text">register</span>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSection;
