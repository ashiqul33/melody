import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  name: string;
  title: string;
}

const InstructorCard: NextPage<Props> = (props) => {
  return (
    <div className="card our_instructors_section_card p-4 rounded-14">
      <div className="our_instructors_section_card_img_section rounded-circle">
        <Image
          src={props.image}
          className="mb-2 our_instructors_section_card_img"
          alt="..."
        />
        <span className="bi bi-eye see_icon"></span>
      </div>
      <div className="card-body text-center">
        <h4 className="our_instructors_section_card_heading">{props.name}</h4>
        <p className="our_instructors_section_card_subheading">{props.title}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
