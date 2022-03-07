import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function NavigationSignUp(props) {
  const { user, handleLogout } = props;

  return (
    <div className="navSignUp">
      {user ? (
        <>
          <div className="navSignUp__button">
            <Link className="navSignUp__link" to="/FormHandOverStuff">
              Oddaj rzeczy
            </Link>
          </div>
          <div className="navSignUp__button nav__user">
            <div className="helloUser">Cześć {user.email}</div>
          </div>
          <div className="navSignUp__button">
            <Link
              onClick={handleLogout}
              className="navSignUp__link"
              to="/Logout"
            >
              Wyloguj
            </Link>
            <Redirect to="/" />
          </div>
        </>
      ) : (
        <>
          <div className="navSignUp__button">
            <Link className="navSignUp__link" to="/Login">
              Zaloguj
            </Link>
          </div>
          <div className="navSignUp__button">
            <Link className="navSignUp__link" to="/Logup">
              Załóż konto
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
