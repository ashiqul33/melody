import { NextPage } from "next";
import React from "react";

const Contacts: NextPage = () => {
  return (
    <div>
      <section className="contact_section">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="contact_section_heading mt-3 mb-5">Contact Us.</h3>
          </div>
          <div className="row justify-content-around">
            <div className="col-12 col-md-5 col-lg-4 mb-3">
              <p className="text-white">
                For any queries regarding the Platform, Subscription Process,
                Account Registration
              </p>
              <h5 className="text-white">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:support@yourwebsite.com">
                  support@yourwebsite.com
                </a>
              </h5>
              <h5 className="text-white">
                <i className="bi bi-phone me-2"></i>
                <a href="tel:8801913130113">+8801913130113</a>
              </h5>
            </div>
            <div className="col-12 col-md-5 col-lg-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-white text-white bg-transparent shadow-none"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control border-white text-white bg-transparent shadow-none"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Your Message</label>
                  <textarea
                    className="form-control border-white text-white bg-transparent shadow-none"
                    rows={4}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn w-75 btn_focus contact_section_btn "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
