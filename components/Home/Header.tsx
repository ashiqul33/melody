import { NextPage } from "next";
import React, { useEffect } from "react";

const Header: NextPage = () => {
  useEffect(() => {
    const toggle = document.getElementById("toggle");
    const mobileNav = document.getElementById("side-drawer");

    // toggle.onclick = function () {
    //   toggle?.classList.toggle("toggle_active");
    //   mobileNav?.classList.toggle("sidebar_active");
    // };

    function closeSideDrawer() {
      const toggle = document.getElementById("toggle");
      const mobileNav = document.getElementById("side-drawer");
      toggle?.classList.remove("toggle_active");
      mobileNav?.classList.remove("sidebar_active");
    }
  }, []);

  return (
    <div>
      <header className="navbar navbar-expand-md bd-navbar top_nav fixed-top">
        <nav
          className="container flex-wrap flex-md-nowrap"
          aria-label="Main navigation"
        >
          <a
            className="navbar-brand p-0 me-2 text-white"
            href="#"
            aria-label="Bootstrap"
          >
            LOGO
          </a>

          <button
            className="navbar-toggler shadow-none text-white"
            type="button"
            id="toggle"
            data-bs-toggle="collapse"
            data-bs-target=""
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            // onClick="myFunction()"
          >
            <span className="bi bi-list"></span>
            <span className="bi bi-x-lg"></span>
          </button>

          <div className="collapse navbar-collapse" id="bdNavbar">
            <ul className="navbar-nav flex-row pt-2 py-md-0 ms-md-auto">
              <li className="nav-item col-6 col-md-auto">
                <a className="nav-link text-white p-2" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <a className="nav-link p-2 text-white" href="#">
                  Instructors
                </a>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <a className="nav-link p-2 text-white" href="#">
                  Freebies
                </a>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <a className="nav-link p-2 text-white" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <a
                  className="nav-link p-2 ps-4 pe-4 text-white login_btn"
                  href="#"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="sidebar" id="side-drawer">
        <ul className="list-unstyled">
          <li className="nav-item mb-1">
            <a className="sidebar_link" href="#">
              Courses
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="sidebar_link" href="#">
              Instructors
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="sidebar_link" href="#">
              Freebies
            </a>
          </li>
          <li className="nav-item mb-1">
            <a className="sidebar_link" href="#">
              Signup
            </a>
          </li>
          <li className="nav-item">
            <a className="sidebar_link bg-pink justify-content-center" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
      <div
        id="side-drawer-void"
        className="position-fixed"
        // onClick="closeSideDrawer()"
      ></div>
    </div>
  );
};

export default Header;
