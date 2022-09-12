import React from "react";

import courseLogo from "../../assets/images/courses1.svg";
import trainerImage from "../../assets/images/trainer.svg";
import FeaturedCourse from "./FeaturedCourse";

const Upcoming = () => {
  return (
    <div>
      <section className="featured_courses_section">
        <div className="container">
          <div className="text-center">
            <h3 className="featured_courses_section_heading">
              Up Coming Courses
            </h3>
            <p className="featured_courses_section_text">
              Start with any of our 8 in-depth featured courses
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-3">
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
            <div className="col-12 col-sm-6 col-md-4 mb-3">
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
            <div className="col-12 col-sm-6 col-md-4 mb-3">
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
    </div>
  );
};

export default Upcoming;
