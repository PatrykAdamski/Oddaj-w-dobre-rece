import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import {
  Link as LinkScroll,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Home from "./Home";
import Login from "./Login";
import Logup from "./Logup";
import Logout from "./Logout";

function App() {
  return (
    <Router>
      <div className="nav__container">
        <div className="nav nav__main">
          <div className="nav__main--element nav__main--element--different">
            <Link className="link" to="/Login">
              Zaloguj
            </Link>
          </div>
          <div className="nav__main--element nav__main--element--different">
            <Link className="link" to="/Logup">
              Załóż konto
            </Link>
          </div>
        </div>
        <nav className="nav nav__main">
          <ul className="nav__main--list">
            <li className="nav__main--element">
              <Link className="link" to="/">
                Start
              </Link>
            </li>
            <li className="nav__main--element">
              <LinkScroll className="link" to="HomeSimpleSteps">
                O co chodzi?
              </LinkScroll>
            </li>
            <li className="nav__main--element">
              <LinkScroll className="link" to="HomeAboutUs">
                O nas
              </LinkScroll>
            </li>
            <li className="nav__main--element">
              <LinkScroll className="link" to="HomeWhoWeHelp">
                Fundacja i organizacje
              </LinkScroll>
            </li>
            <li className="nav__main--element">
              <LinkScroll className="link" to="HomeContact">
                Kontakt
              </LinkScroll>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Logup">
          <Logup />
        </Route>
        <Route path="/Logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
