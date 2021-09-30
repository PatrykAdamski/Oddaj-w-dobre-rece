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
    <div className="formHandOverStuffStep1">
      <div className="formHandOverStuffStep1__stepNumber">Krok 2/4</div>
      <div className="formHandOverStuffStep1__container">
        <h2 className="formHandOverStuffStep1__title">
          Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
        </h2>
        <div className="formHandOverStuffStep2__containerSelect">
          <label for="numberOfBags">Liczba 60l worków: </label>
          <div className="customSelect">
            <div onClick={arrowRiverse} className="numberOfBags">
              {quantityBags}
              <div id="listOptions" className="numberOfBags__options hide">
                <div
                  onClick={(e) => setQuantityBags("1")}
                  className="numberOfBags__option"
                >
                  1
                </div>
                <div
                  onClick={(e) => setQuantityBags("2")}
                  className="numberOfBags__option"
                >
                  2
                </div>
                <div
                  onClick={(e) => setQuantityBags("3")}
                  className="numberOfBags__option"
                >
                  3
                </div>
                <div
                  onClick={(e) => setQuantityBags("4")}
                  className="numberOfBags__option"
                >
                  4
                </div>
                <div
                  onClick={(e) => setQuantityBags("5")}
                  className="numberOfBags__option"
                >
                  5
                </div>
              </div>
            </div>
            <span id="customArrow" className="customArrow"></span>
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
