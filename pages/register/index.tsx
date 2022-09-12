import React from "react";

const Register = () => {
  return (
    <div>
      <div className="signup_page">
        <div className="signup_form_section">
          <h4 className="fw-bolder">Create a new account.</h4>
          <p>Please enter all the information for your account.</p>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-gray shadow-none"
                placeholder="Your Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control bg-gray shadow-none"
                placeholder="Enter Your Mail"
              />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 mb-3">
              <div className="col">
                <input
                  type="password"
                  className="form-control bg-gray shadow-none"
                  placeholder="Type Password"
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control bg-gray shadow-none"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <p className="fw-bold mb-1">Upload Profile Picture</p>
            <label htmlFor="file" className="w-100 btn shadow-none p-0 mb-3">
              <div className="box-input bg-gray">
                <i className="bi bi-image"></i>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    id="file"
                    className="box-file"
                  />
                  <span className="d-block">
                    Only Image File Allowed to upload here.
                  </span>
                </div>
              </div>
            </label>
            <div className="mb-3">
              <label className="form-label">Enter Your Birthday date</label>
              <input type="date" className="form-control bg-gray shadow-none" />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control bg-gray shadow-none"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="mb-3">
              <textarea
                rows={3}
                className="form-control bg-gray shadow-none"
                placeholder="Address"
              ></textarea>
            </div>
            <div className="form-check mb-5">
              <input
                className="form-check-input shadow-none"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                By Signing up, I agree with all the terms & conditions as well
                as the Privacy Policy.
              </label>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn_submit"
                data-bs-toggle="modal"
                data-bs-target="#congratulationModal"
              >
                Submit
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Already Account
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*<div className="modal fade" id="congratulationModal" tabIndex="-1"*/}
      {/*     aria-labelledby="congratulationModalLabel"*/}
      {/*     aria-hidden="true">*/}
      {/*    <div className="modal-dialog modal-dialog-centered">*/}
      {/*        <div className="modal-content" style="border-radius: 14px;">*/}
      {/*            <div className="text-end p-2">*/}
      {/*                <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal"*/}
      {/*                        aria-label="Close"></button>*/}
      {/*            </div>*/}

      {/*            <div className="modal-body ps-5 pe-5">*/}
      {/*                <div className="text-center">*/}
      {/*                    <img src={congratulatiosGif} width="250" height="200"/>*/}
      {/*                    <h4 className="text-congratulation">Congratulation!</h4>*/}
      {/*                    <p>Your account has been successfully created.<br/>*/}
      {/*                        Please check your mailbox.</p>*/}
      {/*                </div>*/}
      {/*                <div className="mb-3 text-center">*/}
      {/*                    <button className="btn Apply_btn border-0 shadow-none ps-5 pe-5" type="submit">Login*/}
      {/*                    </button>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Register;
