import React from "react";
import { Link } from "react-router-dom";

export default function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    clearInputs,
    clearErrors,
    validatorLogin,
  } = props;

  return (
    <>
      <section className="sectionLogin">
        <div className="sectionLogin__container">
          <h2 className="sectionLogin--title">Zaloguj się</h2>
          <div className="ornament"></div>
          <div className="sectionLogin__container--evidence">
            <label className="sectionLogin--label" for="email">
              Email
            </label>
            <input
              className="input sectionLogin--input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <p className="errorMsg invalid__value">{emailError}</p>

            <label className="sectionLogin--label" for="password">
              Hasło
            </label>
            <input
              className="input sectionLogin--input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className="errorMsg invalid__value">{passwordError}</p>
          </div>
          <div className="sectionLogin__container--btn">
            <Link
              to="Logup"
              onClick={() => {
                clearErrors();
                clearInputs();
              }}
              className=" link btn sectionLogin--btn"
            >
              Załóż konto
            </Link>
            <button onClick={validatorLogin} className="btn sectionLogin--btn">
              Zaloguj się
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
