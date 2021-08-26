import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className = "nav nav__main">
        <div className = "nav__main--element nav__main--element--different">
          <Link className='link' to="/">Zaloguj</Link>
        </div>
        <div className = "nav__main--element nav__main--element--different">
          <Link className='link' to="/">Załóż konto</Link>
        </div>
      </div>
       <nav className = "nav nav__main">
          <ul className = "nav__main--list">
            <li className = "nav__main--element">
              <Link className='link' to="/">Start</Link>
            </li>
            <li className = "nav__main--element">
              <Link className='link' to="/">O co chodzi?</Link>
            </li>
            <li className = "nav__main--element">
              <Link className='link' to="/">O nas</Link>
            </li>
            <li className = "nav__main--element">
              <Link className='link' to="/">Fundacja i organizacje</Link>
            </li>
            <li className = "nav__main--element">
              <Link className='link' to="/">Kontakt</Link>
            </li>
          </ul>
        </nav>
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
