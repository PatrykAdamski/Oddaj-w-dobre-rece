import React from "react";
import { Element } from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export default function Home(props) {
  const { user } = props;
  return (
    <>
      <HomeHeader user={user} />
      <HomeThreeColumns />
      <Element name="HomeSimpleSteps">
        <HomeSimpleSteps user={user} />
      </Element>
      <Element name="HomeAboutUs">
        <HomeAboutUs />
      </Element>
      <Element name="HomeWhoWeHelp">
        <HomeWhoWeHelp />
      </Element>
      <Element name="HomeContact">
        <HomeContact />
      </Element>
    </>
  );
}
