import { NextPage } from "next";
import React from "react";
import uuid from "react-uuid";
import QA from "./QA";

const FAQ: NextPage = () => {
  return (
    <div>
      <section className="question_section">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="question_section_heading mt-3 mb-5">
              Here are some common Questions.
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <QA
                  key={uuid()}
                  question={"Lorem Ipsum is simply dummy text ?"}
                  answer={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
                    "                                            Lorem\n" +
                    "                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when\n" +
                    "                                            an\n" +
                    "                                            unknown printer took a galley of type and scrambled it to make a type\n" +
                    "                                            specimen book"
                  }
                />

                <QA
                  key={uuid()}
                  question={"Lorem Ipsum is simply dummy text ?"}
                  answer={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
                    "                                            Lorem\n" +
                    "                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when\n" +
                    "                                            an\n" +
                    "                                            unknown printer took a galley of type and scrambled it to make a type\n" +
                    "                                            specimen book"
                  }
                />

                <QA
                  key={uuid()}
                  question={"Lorem Ipsum is simply dummy text ?"}
                  answer={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n" +
                    "                                            Lorem\n" +
                    "                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when\n" +
                    "                                            an\n" +
                    "                                            unknown printer took a galley of type and scrambled it to make a type\n" +
                    "                                            specimen book"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
