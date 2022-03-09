import React, { useEffect } from "react";
import HomeContact from "./HomeContact";
import FormHandOverStuffSteps from "./FormHandOverStuffSteps";

function FormHandOverStuff(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="header headerHandOverStuff">
        <div className="formHandOverStuff__image"></div>
        <div className="header__intro headerHandOverStuff__intro">
          <h2 className="header__intro--title">
            Oddaj rzeczy, których już nie chcesz
          </h2>
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
      </section>
      <FormHandOverStuffSteps />
      <HomeContact />
    </>
  );
}

export default FormHandOverStuff;
