import { NextPage } from "next";
import Image from "next/image";
import React from "react";

import loginBanner from "../../assets/images/login-banner.png";
import logoDemo from "../../assets/images/logo-demo.svg";

const Login: NextPage = () => {
  return (
    <div className="login_page">
      <div className="login_banner_section">
        <Image
          src={loginBanner}
          className="login_banner_section_img"
          alt="..."
        />
      </div>
      <div className="login_form_section">
        <div className="login_form_section-header d-none d-sm-block">
          <div className="logo_box mb-2">
            <Image src={logoDemo} alt="..." />
          </div>
          <h5>Website Name Here</h5>
          <h4>Get more things done with us</h4>
          <p>
            Search Sourcing the world&apos;s brightest professionals for your
            business.
          </p>
        </div>
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg shadow-none bg-gray"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4 mb-sm-3 position-relative">
            <input
              type="password"
              className="form-control form-control-lg shadow-none bg-gray"
              placeholder="Password"
            />
            <span className="password_show_hide">Show</span>
          </div>
          <div className="mb-5">
            <button type="submit" className="btn signin_btn">
              Login
            </button>
          </div>
        </form>
        <div className="">
          <p className="text-center">Or login with</p>
          <div className="text-center">
            <a className="btn border-0 m-2">Google</a>
            <a className="btn border-0 m-2">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
