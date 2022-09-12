import { NextPage } from "next";
import React from "react";
import TeachCard from "./TeachCard";

import guiterLogo from "../../assets/images/Guitar.svg";
import drumLogo from "../../assets/images/Drums.svg";
import bassGuiterLogo from "../../assets/images/BassGuitar.svg";
import pianoLogo from "../../assets/images/Piano.svg";

const WhatWeTeach: NextPage = () => {
  return (
    <div>
      <section className="what_we_teach_section">
        <div className="container">
          <div className="text-center">
            <h3 className="what_we_teach_section_heading mt-3">
              WHAT WE TEACH
            </h3>
            <p className="what_we_teach_section_text">
              Our courses are primarily divided into five categories.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
              <TeachCard title={"Guiter"} logo={guiterLogo} />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
              <TeachCard title={"Drums"} logo={drumLogo} />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
              <TeachCard title={"Bass Guiter"} logo={bassGuiterLogo} />
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
              <TeachCard title={"Piano and Keyboard"} logo={pianoLogo} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeTeach;
