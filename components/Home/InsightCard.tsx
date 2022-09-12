import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  number: string;
  icon: string;
  title: string;
}

const InsightCard: NextPage<Props> = (props) => {
  return (
    <div className="card border-0 bg-transparent insights_section_card p-4 rounded-14">
      <div className="card-body text-center p-0">
        <h3 className="mb-0 insights_section_card_heading">{props.number}</h3>
        <h5 className="mb-0 insights_section_card_subheading">
          <Image
            src={props.icon}
            className="me-1"
            width="15"
            height="15"
            alt="..."
          />
          {props.title}
        </h5>
      </div>
    </div>
  );
};

export default InsightCard;
