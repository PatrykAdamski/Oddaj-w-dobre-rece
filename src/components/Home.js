import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
    </>
  );
}
