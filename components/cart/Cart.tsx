import { NextPage } from "next";
import React from "react";
import AuthHeader from "./AuthHeader";
import CartItem from "./CartItem";

import profuctImage from "../../assets/images/product-img.svg";

const Cart: NextPage = () => {
  return (
    <div>
      <AuthHeader />
      <div className="body_section">
        <div className="container pt-3 pb-3">
          <div className="row gy-3">
            <div className="col-12 col-md-6 col-lg-5">
              <CartItem
                image={profuctImage}
                title={"Absolute Beginner Level 1"}
                subtitle={
                  "Subtitle: Become a proficient Guitarist with coordination\n" +
                  "                                            exercises & echniques you can do at home"
                }
              />
              <CartItem
                image={profuctImage}
                title={"Absolute Beginner Level 1"}
                subtitle={
                  "Subtitle: Become a proficient Guitarist with coordination\n" +
                  "                                            exercises & echniques you can do at home"
                }
              />
              <CartItem
                image={profuctImage}
                title={"Absolute Beginner Level 1"}
                subtitle={
                  "Subtitle: Become a proficient Guitarist with coordination\n" +
                  "                                            exercises & echniques you can do at home"
                }
              />
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <div className="card checkout_card p-3 p-lg-5">
                <h4 className="checkout_card_heading">Checkout</h4>
                <div className="mb-5">
                  <div className="d-flex gap-2">
                    <div className="w_65 fs-6 fw-bold">Product</div>
                    <div className="w_35 fs-6 fw-bold">Price ( BDT )</div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="w_65">1.Absolute Beginner Level 1</div>
                    <div className="w_35">980</div>
                  </div>
                  <div className="d-flex gap-2">
                    <div className="w_65">2.Absolute Beginner Level 1</div>
                    <div className="w_35">980</div>
                  </div>
                  <hr />
                  <div className="d-flex gap-2">
                    <div className="w_65 fs-6 fw-bold">Subtotal</div>
                    <div className="w_35 fs-6 fw-bold">1960</div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label d-block">
                    Do you Have Promo Code ?
                  </label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Options"
                      id="inlineRadio1"
                      value="yes"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Yes
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Options"
                      id="inlineRadio2"
                      value="no"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-gray"
                      placeholder="Enter your Promo Code"
                    />
                  </div>
                  <button type="button" className="btn primary_btn ps-5 pe-5">
                    Apply
                  </button>
                </div>
                <div className="mb-4">
                  <div className="d-flex gap-2">
                    <div className="w_65 fs-5 fw-bold">Total</div>
                    <div className="w_35 fs-5 fw-bold">1960</div>
                  </div>
                </div>
                <div className="mb-4">
                  <button type="button" className="btn checkout_btn">
                    Proceed to checkout
                  </button>
                </div>
                <div>
                  By checking-out, I agree with all the terms & conditions as
                  well as the Privacy Policy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
