import React from "react";
import { Link } from "react-router-dom";

export default function Logup(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    clearErrors,
    clearInputs,
    repeatPassword,
    setRepeatPassword,
    validatorLogup,
  } = props;

  return (
    <>
      <section className="sectionLogin">
        <div className="sectionLogin__container">
          <h2 className="sectionLogin--title">Załóż konto</h2>
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
            <label className="sectionLogin--label" for="password">
              Powtórz hasło
            </label>
            <input
              className="input sectionLogin--input"
              type="password"
              id="repeatPassword"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            ></input>
            <p className="errorMsg--password invalid__value">{passwordError}</p>
          </div>
          <div className="sectionLogin__container--btn">
            <button onClick={validatorLogup} className="btn sectionLogin--btn">
              Załóż konto
            </button>
            <Link
              to="/Login"
              onClick={() => {
                clearErrors();
                clearInputs();
              }}
              className=" link btn sectionLogin--btn"
            >
              Zaloguj się
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
