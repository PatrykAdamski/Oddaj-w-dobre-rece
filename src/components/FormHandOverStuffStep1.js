import React from "react";

function FormHandOverStuffStep1() {
  return (
    <div className="formHandOverStuffStep">
      <div className="formHandOverStuffStep__stepNumber">Krok 1/4</div>
      <div className="formHandOverStuffStep__container">
        <h2 className="formHandOverStuffStep__title">
          Zaznacz co chcesz oddać:
        </h2>
        <div className="formHandOverStuffStep__typeThing">
          <input
            name="thing"
            id="thing1"
            className="inputTypeRadio"
            type="radio"
          ></input>
          <label
            for="thing1"
            className="formHandOverStuffStep__typeThing--thing"
          >
            ubrania, które nadają się do ponownego użycia
          </label>
        </div>
        <div className="formHandOverStuffStep__typeThing">
          <input
            name="thing"
            id="thing2"
            className="inputTypeRadio"
            type="radio"
          ></input>
          <label
            for="thing2"
            className="formHandOverStuffStep__typeThing--thing"
          >
            ubrania, do wyrzucenia
          </label>
        </div>
        <div className="formHandOverStuffStep__typeThing">
          <input
            name="thing"
            id="thing3"
            className="inputTypeRadio"
            type="radio"
          ></input>
          <label
            for="thing3"
            className="formHandOverStuffStep__typeThing--thing"
          >
            zabawki
          </label>
        </div>
        <div className="formHandOverStuffStep__typeThing">
          <input
            name="thing"
            id="thing4"
            className="inputTypeRadio"
            type="radio"
          ></input>
          <label
            for="thing4"
            className="formHandOverStuffStep__typeThing--thing"
          >
            książki
          </label>
        </div>
        <div className="formHandOverStuffStep__typeThing">
          <input
            name="thing"
            id="thing5"
            className="inputTypeRadio"
            type="radio"
          ></input>
          <label
            for="thing5"
            className="formHandOverStuffStep__typeThing--thing"
          >
            Inne
          </label>
        </div>
      </div>
      <button className="btnNextOrBack">Dalej</button>
    </div>
  );
}

export default FormHandOverStuffStep1;
