import React from "react";
import Image from "next/image";
import { NextPage } from "next";

interface Props {
  logo: string;
  title: string;
}

const TeachCard: NextPage<Props> = (props) => {
  return (
    <div>
      <div className="card border-0 what_we_teach_section_card p-4 rounded-14">
        <div className="text-center">
          <Image src={props.logo} className="mb-2" alt="..." />
          <h4>{props.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeachCard;
