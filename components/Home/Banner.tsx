import React from "react";

const Banner = () => {
  return (
    <section className="banner_section">
      <div>
        <h1 className="banner_section_heading">CONTENT GOEST</h1>
        <p className="banner_section_text d-none d-sm-block">
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          presetting industry.
        </p>
        <div className="text-center">
          <a className="btn banner_section_btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
