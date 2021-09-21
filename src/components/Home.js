import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSimpleSteps from "./HomeSimpleSteps";
import HomeAboutUs from "./HomeAboutUs";
import HomeContact from "./HomeContact";
import HomeWhoWeHelp from "./HomeWhoWeHelp";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <Element name="HomeSimpleSteps">
        <HomeSimpleSteps />
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
