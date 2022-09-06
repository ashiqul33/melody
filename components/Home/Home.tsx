import { NextPage } from "next";
import React from "react";
import Body from "./Body";
import Header from "./Header";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
