import React, { useState } from "react";

function FormHandOverStuffStep2() {
  const [quantityBags, setQuantityBags] = useState("— wybierz —");

  const arrowRiverse = () => {
    const arrow = document.querySelector("#customArrow");
    const optionsHide = document.querySelector("#listOptions");
    arrow.classList.toggle("customArrowRiverse");
    optionsHide.classList.toggle("hide");
  };

  return (
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
                  onClick={(e) => setQuantityBags("1")}
                  className="customSelectContainer__option"
                >
                  1
                </div>
                <div
                  onClick={(e) => setQuantityBags("2")}
                  className="customSelectContainer__option"
                >
                  2
                </div>
                <div
                  onClick={(e) => setQuantityBags("3")}
                  className="customSelectContainer__option"
                >
                  3
                </div>
                <div
                  onClick={(e) => setQuantityBags("4")}
                  className="customSelectContainer__option"
                >
                  4
                </div>
                <div
                  onClick={(e) => setQuantityBags("5")}
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
        <button className="btnNextOrBack btnBack">Wstecz</button>
        <button className="btnNextOrBack">Dalej</button>
      </div>
    </div>
  );
}

export default FormHandOverStuffStep2;
