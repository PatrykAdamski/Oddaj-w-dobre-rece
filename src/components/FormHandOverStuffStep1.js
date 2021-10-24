import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editFormStep1 } from "../reduxActions/actions";

function FormHandOverStuffStep1(props) {
  const { setStep } = props;

  const dispatch = useDispatch();

  const [whatStuff, setWhatStuff] = useState("");

  const handleChangeRadio = (event) => {
    setWhatStuff(event.target.value);
  };

  const handleOnSubmit = () => {
    dispatch(editFormStep1(whatStuff));
  };

  // const handleCheckedActive = () => {
  //   const inputsStuff = document.querySelectorAll(".inputTypeRadio");
  //   Array.from(inputsStuff).map((input) => {
  //     if (input.value === whatStuffRadio) {
  //       input.checked = true;
  //     }
  //   });
  // };
  // handleCheckedActive();
  return (
    <>
      <section className="formHandOverStuffSteps__important">
        <h3 className="formHandOverStuffSteps__important--title">Ważne!</h3>
        <p className="formHandOverStuffSteps__important--description">
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </section>
      <section className="formHandOverStuffSteps__singleStep">
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
                value="Dobre ubrania"
                onChange={handleChangeRadio}
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
                onChange={handleChangeRadio}
                id="thing2"
                className="inputTypeRadio"
                type="radio"
                value="Ubrania do wyrzucenia"
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
                onChange={handleChangeRadio}
                id="thing3"
                className="inputTypeRadio"
                type="radio"
                value="Zabawki"
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
                onChange={handleChangeRadio}
                id="thing4"
                className="inputTypeRadio"
                type="radio"
                value="Książki"
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
                onChange={handleChangeRadio}
                id="thing5"
                className="inputTypeRadio"
                type="radio"
                value="Inne"
              ></input>
              <label
                for="thing5"
                className="formHandOverStuffStep__typeThing--thing"
              >
                Inne
              </label>
            </div>
          </div>
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
      </section>
    </>
  );
}

export default FormHandOverStuffStep1;
