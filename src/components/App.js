import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Logup from "./Logup";

function App() {
  return (
    <Router>
      <div className="nav__container">
        <div className="nav nav__main">
          <div className="nav__main--element nav__main--element--different">
            <Link className="link" to="/login">
              Zaloguj
            </Link>
          </div>
          <div className="nav__main--element nav__main--element--different">
            <Link className="link" to="/logup">
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
              <Link className="link" to="/">
                O co chodzi?
              </Link>
            </li>
            <li className="nav__main--element">
              <Link className="link" to="/">
                O nas
              </Link>
            </li>
            <li className="nav__main--element">
              <Link className="link" to="/">
                Fundacja i organizacje
              </Link>
            </li>
            <li className="nav__main--element">
              <Link className="link" to="/">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logup">
          <Logup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
