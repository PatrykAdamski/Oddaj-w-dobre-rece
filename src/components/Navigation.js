import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

export default function Navigation() {
  const toggleHamburgerActive = () => {
    const menu = document.querySelector(".hamburger");
    const nav = document.querySelector("#nav__mobile");
    menu.classList.toggle("hamburger--active");
    nav.classList.toggle("nav--active");
  };
  return (
    <>
      <button onClick={toggleHamburgerActive} class="hamburger">
        <span class="hamburger__container">
          <span class="hamburger__bars"></span>
        </span>
      </button>
      <nav id="nav__mobile" className="nav nav__main nav--active">
        <ul className="nav__main--list">
          <li className="nav__main--element">
            <Link onClick={toggleHamburgerActive} className="link" to="/">
              Start
            </Link>
          </li>
          <li className="nav__main--element">
            <LinkScroll
              onClick={toggleHamburgerActive}
              className="link"
              to="HomeSimpleSteps"
              duration={250}
              spy={true}
              smooth={true}
            >
              O co chodzi?
            </LinkScroll>
          </li>
          <li className="nav__main--element">
            <LinkScroll
              onClick={toggleHamburgerActive}
              className="link"
              to="HomeAboutUs"
              duration={250}
              spy={true}
              smooth={true}
            >
              O nas
            </LinkScroll>
          </li>
          <li className="nav__main--element">
            <LinkScroll
              onClick={toggleHamburgerActive}
              className="link"
              to="HomeWhoWeHelp"
              duration={250}
              spy={true}
              smooth={true}
            >
              Fundacja i organizacje
            </LinkScroll>
          </li>
          <li className="nav__main--element">
            <LinkScroll
              onClick={toggleHamburgerActive}
              className="link"
              to="HomeContact"
              duration={250}
              spy={true}
              smooth={true}
            >
              Kontakt
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </>
  );
}
