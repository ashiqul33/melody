import { FeaturedCourse, Header } from "components";
import React from "react";

import courseLogo from "../../assets/images/courses1.svg";
import trainerImage from "../../assets/images/trainer.svg";

const Courses = () => {
  return (
    <div>
      <Header />
      <div className="body_section">
        <section className="featured_courses_section">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h3 className="featured_courses_section_heading">
                  All Courses
                </h3>
                <p className="featured_courses_section_text">
                  We have 15 courses for you.
                </p>
              </div>
              <button
                className="btn FilterCourse_btn border-0 shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="bi bi-filter-square me-2"></i>
                Filter Course
              </button>
            </div>
            <div className="row gy-3">
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
              <div className="col-12 col-sm-6 col-md-4 ">
                <FeaturedCourse
                  logo={courseLogo}
                  title={"FINGERSTYLE"}
                  subtitle={"ACOUSTIC"}
                  description={"Absolute Beginner Level 1"}
                  instructor_image={trainerImage}
                  instructor_name={"Mahaan Fahim"}
                  price={"Tk. 980"}
                  x_price={"Tk. 1400"}
                />
              </div>
            </div>
          </div>
        </section>

        {/*    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"*/}
        {/*         aria-hidden="true">*/}
        {/*        <div className="modal-dialog ">*/}
        {/*            <div className="modal-content" style="border-radius: 14px;">*/}
        {/*                <div className="text-end p-2">*/}
        {/*                    <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal"*/}
        {/*                            aria-label="Close"></button>*/}
        {/*                </div>*/}

        {/*                <div className="modal-body ps-5 pe-5">*/}
        {/*                    <form>*/}
        {/*                        <div className="mb-3">*/}
        {/*                            <label className="form-label">Instrument</label>*/}
        {/*                            <select className="form-select">*/}
        {/*                                <option>Guitar</option>*/}
        {/*                                <option>Drums</option>*/}
        {/*                                <option>Bass Guitar</option>*/}
        {/*                                <option>Piano and Keyboard</option>*/}
        {/*                            </select>*/}
        {/*                        </div>*/}
        {/*                        <div className="mb-3">*/}
        {/*                            <label className="form-label">Artist</label>*/}
        {/*                            <select className="form-select">*/}
        {/*                                <option>demo name</option>*/}
        {/*                                <option>demo name</option>*/}
        {/*                                <option>demo name</option>*/}
        {/*                            </select>*/}
        {/*                        </div>*/}
        {/*                        <div className="mb-3">*/}
        {/*                            <label className="form-label">Level</label>*/}
        {/*                            <select className="form-select">*/}
        {/*                                <option>Level 1</option>*/}
        {/*                                <option>Level 2</option>*/}
        {/*                                <option>Level 3</option>*/}
        {/*                                <option>Level 4</option>*/}
        {/*                            </select>*/}
        {/*                        </div>*/}
        {/*                        <div className="mb-3 text-center">*/}
        {/*                            <button className="btn Apply_btn border-0 shadow-none ps-5 pe-5"*/}
        {/*                                    type="submit">Apply*/}
        {/*                            </button>*/}
        {/*                        </div>*/}

        {/*                    </form>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div> */}
      </div>
    </div>
  );
};

export default Courses;
