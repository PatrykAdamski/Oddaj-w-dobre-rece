import React from "react";

export default function Logup() {
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
            ></input>
            <label className="sectionLogin--label" for="password">
              Hasło
            </label>
            <input
              className="input sectionLogin--input"
              type="password"
              id="password"
            ></input>
            <label className="sectionLogin--label" for="password">
              Powtórz hasło
            </label>
            <input
              className="input sectionLogin--input"
              type="password"
              id="password"
            ></input>
          </div>
          <div className="sectionLogin__container--btn">
            <button className="btn sectionLogin--btn">Załóż konto</button>
            <button className="btn sectionLogin--btn">Zaloguj się</button>
          </div>
        </div>
      </section>
    </>
  );
}
