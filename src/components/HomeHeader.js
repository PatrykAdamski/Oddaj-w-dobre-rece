import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader(props) {
  const { user } = props;
  return (
    <>
      <header className="header">
        <div className="header__image"></div>
        <div className="header__intro">
          <h1 className="header__intro--title">Zacznij pomagać!</h1>
          <h2 className="header__intro--title">
            Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <div className="ornament header__intro--ornament"></div>
          <div className="header__intro--wrap">
            <Link
              to={user ? "/FormHandOverStuff" : "/Login"}
              className="link btn header__intro--button"
            >
              <p>Oddaj</p> rzeczy
            </Link>
            <button className="btn header__intro--button">
              <p>Zorganizuj</p> zbiórkę
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
