import React, { useState } from "react";

function FormHandOverStuffStep3() {
  const [location, setLocation] = useState("— wybierz —");
  const arrowRiverse = () => {
    const arrow = document.querySelector("#customArrow");
    const optionsHide = document.querySelector("#listOptions");
    arrow.classList.toggle("customArrowRiverse");
    optionsHide.classList.toggle("hide");
  };
  return (
    <div className="formHandOverStuffStep">
      <div className="formHandOverStuffStep__stepNumber">Krok 3/4</div>
      <div className="formHandOverStuffStep__container">
        <h2 className="formHandOverStuffStep__title formHandOverStuffStep3__title--removeMargin">
          Lokalizacja:
        </h2>
        <div className="formHandOverStuffStep2__containerSelect formHandOverStuffStep3">
          <div className="customSelectContainer formHandOverStuffStep3__selectFixed">
            <div
              onClick={arrowRiverse}
              className="customSelectContainer__select"
            >
              {location}
              <div
                id="listOptions"
                className="customSelectContainer__optionsStep3 hide"
              >
                <div
                  onClick={(e) => setLocation("Poznań")}
                  className="customSelectContainer__option optionStep3"
                >
                  Poznań
                </div>
                <div
                  onClick={(e) => setLocation("Warszawa")}
                  className="customSelectContainer__option optionStep3"
                >
                  Warszawa
                </div>
                <div
                  onClick={(e) => setLocation("Kraków")}
                  className="customSelectContainer__option optionStep3"
                >
                  Kraków
                </div>
                <div
                  onClick={(e) => setLocation("Wrocław")}
                  className="customSelectContainer__option optionStep3"
                >
                  Wrocław
                </div>
                <div
                  onClick={(e) => setLocation("Katowice")}
                  className="customSelectContainer__option optionStep3"
                >
                  Katowice
                </div>
              </div>
            </div>
            <span
              id="customArrow"
              className="customSelectContainer__customArrow"
            ></span>
          </div>
        </div>
        <h3 className="stepsSubtitle">Komu chcesz pomóc?</h3>
        <div className="customCheckboxContainer">
          <input class="hide" id="checkbox1" type="checkbox"></input>
          <label className="customCheckbox" for="checkbox1">
            dzieciom
          </label>
          <input class="hide" id="checkbox2" type="checkbox"></input>
          <label className="customCheckbox" for="checkbox2">
            samotnym matkom
          </label>
          <input class="hide" id="checkbox3" type="checkbox"></input>
          <label className="customCheckbox" for="checkbox3">
            bezdomnym
          </label>
          <input class="hide" id="checkbox4" type="checkbox"></input>
          <label className="customCheckbox" for="checkbox4">
            niepełnosprawnym
          </label>
          <input class="hide" id="checkbox5" type="checkbox"></input>
          <label className="customCheckbox" for="checkbox5">
            osobom starszym
          </label>
        </div>
        <div className="customInputContainer">
          <h3 className="stepsSubtitle">
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
          </h3>
          <input className="customInput customInputStep3" type="text"></input>
        </div>
      </div>
      <div className="containerBtnNextOrBack">
        <button className="btnNextOrBack btnBack">Wstecz</button>
        <button className="btnNextOrBack">Dalej</button>
      </div>
    </div>
  );
}

export default FormHandOverStuffStep3;
