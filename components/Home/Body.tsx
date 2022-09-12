import { NextPage } from "next";
import React from "react";
import Banner from "./Banner";
import Featured from "./Featured";
import Insights from "./Insights";
import InstructorsList from "./InstructorsList";
import Upcoming from "./Upcoming";
import WhatWeTeach from "./WhatWeTeach";

const Body: NextPage = () => {
  return (
    <div className="body_section">
      <Banner />
      <Featured />
      <WhatWeTeach />
      <InstructorsList />
      <Upcoming />
      <Insights />
      {/* <FAQ /> */}
      {/* <Contacts /> */}
    </div>
  );
};

export default Body;
