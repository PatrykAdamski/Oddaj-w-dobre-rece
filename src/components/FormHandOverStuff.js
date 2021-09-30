import React from "react";
import HomeContact from "./HomeContact";
import FormHandOverStuffSteps from "./FormHandOverStuffSteps";

function FormHandOverStuff() {
  return (
    <>
      <header className="header">
        <div className="formHandOverStuff__image"></div>
        <div className="header__intro">
          <h1 className="header__intro--title">
            Oddaj rzeczy, których już nie chcesz
          </h1>
          <h2 className="header__intro--title formHandOverStuff__margin">
            POTRZEBUJĄCYM
          </h2>
          <div className="ornament header__intro--ornament"></div>
          <div className="formHandOverStuff">
            <h3 className="formHandOverStuff__steps">
              Wystarczą 4 proste kroki:
            </h3>
            <div className="formHandOverStuff__singleStep--wrap">
              <div className="formHandOverStuff__singleStep">
                <div className="formHandOverStuff__singleStep--rectangle"></div>
                <span className="formHandOverStuff__singleStep--numberStep">
                  1
                </span>
                <p className="formHandOverStuff__singleStep--step">
                  Wybierz rzeczy
                </p>
              </div>
              <div className="formHandOverStuff__singleStep">
                <div className="formHandOverStuff__singleStep--rectangle"></div>
                <span className="formHandOverStuff__singleStep--numberStep">
                  2
                </span>
                <p className="formHandOverStuff__singleStep--step">
                  Spakuj je w worki
                </p>
              </div>
              <div className="formHandOverStuff__singleStep">
                <div className="formHandOverStuff__singleStep--rectangle"></div>
                <span className="formHandOverStuff__singleStep--numberStep">
                  3
                </span>
                <p className="formHandOverStuff__singleStep--step">
                  Wybierz fundację
                </p>
              </div>
              <div className="formHandOverStuff__singleStep">
                <div className="formHandOverStuff__singleStep--rectangle"></div>
                <span className="formHandOverStuff__singleStep--numberStep">
                  4
                </span>
                <p className="formHandOverStuff__singleStep--step">
                  Zamów kuriera
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <FormHandOverStuffSteps />
      <HomeContact />
    </>
  );
}

export default FormHandOverStuff;