import { NextPage } from "next";
import React from "react";

interface Props {
  question: string;
  answer: string;
}

const QA: NextPage<Props> = (props) => {
  return (
    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id="flush-headingThree">
        <button
          className="accordion-button collapsed btn_focus"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapseThree"
          aria-expanded="false"
          aria-controls="flush-collapseThree"
        >
          {props.question}
        </button>
      </h2>
      <div
        id="flush-collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{props.answer}</div>
      </div>
    </div>
  );
};

export default QA;
