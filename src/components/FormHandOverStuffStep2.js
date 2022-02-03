import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editFormStep2 } from "../reduxActions/actions";
import { useSelector } from "react-redux";

function FormHandOverStuffStep2(props) {
  const { setStep } = props;
  const formSteps = useSelector((state) => state.formSteps);
  const [quantityBags, setQuantityBags] = useState(
    formSteps.quantityBag || "— wybierz —"
  );

  const arrowRiverse = () => {
    const arrow = document.querySelector("#customArrow");
    const optionsHide = document.querySelector("#listOptions");
    arrow.classList.toggle("customArrowRiverse");
    optionsHide.classList.toggle("hide");
  };

  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    dispatch(editFormStep2(quantityBags));
  };

  return (
    <>
      <section className="formHandOverStuffSteps__important">
        <h3 className="formHandOverStuffSteps__important--title">Ważne!</h3>
        <p className="formHandOverStuffSteps__important--description">
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
        </p>
      </section>
      <section className="formHandOverStuffSteps__singleStep">
        <div className="formHandOverStuffStep">
          <div className="formHandOverStuffStep__stepNumber">Krok 2/4</div>
          <div className="formHandOverStuffStep__container">
            <h2 className="formHandOverStuffStep__title">
              Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
            </h2>
            <div className="formHandOverStuffStep2__containerSelect">
              <label for="numberOfBags">Liczba 60l worków: </label>
              <div className="customSelectContainer">
                <div
                  onClick={arrowRiverse}
                  className="customSelectContainer__select"
                >
                  {quantityBags}
                  <div
                    id="listOptions"
                    className="customSelectContainer__options hide"
                  >
                    <div
                      onClick={(e) => setQuantityBags("1 worek")}
                      className="customSelectContainer__option"
                    >
                      1
                    </div>
                    <div
                      onClick={(e) => setQuantityBags("2 worki")}
                      className="customSelectContainer__option"
                    >
                      2
                    </div>
                    <div
                      onClick={(e) => setQuantityBags("3 worki")}
                      className="customSelectContainer__option"
                    >
                      3
                    </div>
                    <div
                      onClick={(e) => setQuantityBags("4 worki")}
                      className="customSelectContainer__option"
                    >
                      4
                    </div>
                    <div
                      onClick={(e) => setQuantityBags("5 worków")}
                      className="customSelectContainer__option"
                    >
                      5
                    </div>
                  </div>
                </div>
                <span
                  id="customArrow"
                  className="customSelectContainer__customArrow"
                ></span>
              </div>
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

export default FormHandOverStuffStep2;
