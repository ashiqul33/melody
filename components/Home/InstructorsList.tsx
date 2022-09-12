import { NextPage } from "next";
import React from "react";
import InstructorCard from "./InstructorCard";

import instructorImage from "../../assets/images/instructors.svg";

const InstructorsList: NextPage = () => {
  return (
    <div>
      <section className="our_instructors_section">
        <div className="container">
          <div className="text-center">
            <h3 className="our_instructors_section_heading mt-3">
              Our Instructors
            </h3>
            <p className="our_instructors_section_text">
              Learn from the best of the Best.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <InstructorCard
                image={instructorImage}
                name={"Ishtiaqe Ahmed"}
                title={"Coach Teacher"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <InstructorCard
                image={instructorImage}
                name={"Ishtiaqe Ahmed"}
                title={"Coach Teacher"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <InstructorCard
                image={instructorImage}
                name={"Ishtiaqe Ahmed"}
                title={"Coach Teacher"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <InstructorCard
                image={instructorImage}
                name={"Ishtiaqe Ahmed"}
                title={"Coach Teacher"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorsList;
