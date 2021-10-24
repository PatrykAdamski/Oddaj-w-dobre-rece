import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editFormStep3 } from "../reduxActions/actions";

function FormHandOverStuffStep3(props) {
  const { setStep } = props;
  const [location, setLocation] = useState("— wybierz —");
  const [whoYouHelp, setWhoYouHelp] = useState([]);
  const [nameOrganization, setNameOrganization] = useState("");
  const arrowRiverse = () => {
    const arrow = document.querySelector("#customArrow");
    const optionsHide = document.querySelector("#listOptions");
    arrow.classList.toggle("customArrowRiverse");
    optionsHide.classList.toggle("hide");
  };

  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    dispatch(editFormStep3(location, whoYouHelp, nameOrganization));
  };

  return (
    <>
      <section className="formHandOverStuffSteps__important">
        <h3 className="formHandOverStuffSteps__important--title">Ważne!</h3>
        <p className="formHandOverStuffSteps__important--description">
          Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
          wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź
          celu ich pomocy.
        </p>
      </section>
      <section className="formHandOverStuffSteps__singleStep">
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
              <input
                class="hide"
                id="checkbox1"
                type="checkbox"
                onChange={() => {
                  setWhoYouHelp([...whoYouHelp, "dzieciom"]);
                }}
              ></input>
              <label className="customCheckbox" for="checkbox1">
                dzieciom
              </label>
              <input
                class="hide"
                id="checkbox2"
                type="checkbox"
                onChange={() => {
                  setWhoYouHelp([...whoYouHelp, "samotnym matkom"]);
                }}
              ></input>
              <label className="customCheckbox" for="checkbox2">
                samotnym matkom
              </label>
              <input
                class="hide"
                id="checkbox3"
                type="checkbox"
                onChange={() => {
                  setWhoYouHelp([...whoYouHelp, "bezdomnym"]);
                }}
              ></input>
              <label className="customCheckbox" for="checkbox3">
                bezdomnym
              </label>
              <input
                class="hide"
                id="checkbox4"
                type="checkbox"
                onChange={() => {
                  setWhoYouHelp([...whoYouHelp, "niepełnosprawnym"]);
                }}
              ></input>
              <label className="customCheckbox" for="checkbox4">
                niepełnosprawnym
              </label>
              <input
                class="hide"
                id="checkbox5"
                type="checkbox"
                onChange={() => {
                  setWhoYouHelp([...whoYouHelp, "osobom starszym"]);
                }}
              ></input>
              <label className="customCheckbox" for="checkbox5">
                osobom starszym
              </label>
            </div>
            <div className="customInputContainer">
              <h3 className="stepsSubtitle">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </h3>
              <input
                className="customInput customInputStep3"
                type="text"
                onChange={(e) => setNameOrganization(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="containerBtnNextOrBack">
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="btnNextOrBack btnBack"
            >
              Wstecz
            </button>
            <button
              onClick={() => {
                setStep((prev) => prev + 1);
                handleOnSubmit();
              }}
              className="btnNextOrBack"
            >
              Dalej
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormHandOverStuffStep3;
