import { NextPage } from "next";
import React from "react";
import InsightCard from "./InsightCard";

import lessonIcon from "../../assets/images/lesson.svg";
import instructorsIcon from "../../assets/images/instructors2.svg";
import usersIcon from "../../assets/images/users.svg";

const Insights: NextPage = () => {
  return (
    <div>
      <section className="insights_section">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="insights_section_heading mt-3">INSIGHTS</h3>
            <p className="insights_section_text">
              Learn from the best of the Best
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <InsightCard
                number={"284+"}
                icon={lessonIcon}
                title={"Lessons"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <InsightCard
                number={"10+"}
                icon={instructorsIcon}
                title={"Instructors"}
              />
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <InsightCard number={"1000+"} icon={usersIcon} title={"Users"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
