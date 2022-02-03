import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFormStep1 } from "../reduxActions/actions";

function FormHandOverStuffStep1(props) {
  const { setStep } = props;
  const formSteps = useSelector((state) => state.formSteps);
  const dispatch = useDispatch();
  const [whatStuff, setWhatStuff] = useState(formSteps.whatStuff);

  let objWhatStuff = [
    {
      value: "Dobre ubrania",
      id: "thing1",
      name: "ubrania, które nadają się do ponownego użycia",
    },
    {
      value: "Ubrania do wyrzucenia",
      id: "thing2",
      name: "ubrania, do wyrzucenia",
    },
    {
      value: "Zabawki",
      id: "thing3",
      name: "zabawki",
    },
    {
      value: "Książki",
      id: "thing4",
      name: "książki",
    },
    {
      value: "Inne",
      id: "thing5",
      name: "Inne",
    },
  ];

  const handleChangeRadio = (event) => {
    setWhatStuff(event.target.value);
  };

  const handleOnSubmit = () => {
    dispatch(editFormStep1(whatStuff));
  };

  const handleCheck = () => {
    objWhatStuff.forEach((singleElement) => {
      const inputTypeRadio = document.querySelector(`#${singleElement.id}`);
      if (singleElement.value === whatStuff) {
        inputTypeRadio.checked = true;
      }
    });
  };

  useEffect(() => {
    handleCheck();
  }, []);

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
            {objWhatStuff.map((singleElement) => {
              return (
                <div className="formHandOverStuffStep__typeThing">
                  <input
                    name="thing"
                    id={singleElement.id}
                    className="inputTypeRadio"
                    type="radio"
                    value={singleElement.value}
                    onChange={handleChangeRadio}
                  ></input>
                  <label
                    for={singleElement.id}
                    className="formHandOverStuffStep__typeThing--thing"
                  >
                    {singleElement.name}
                  </label>
                </div>
              );
            })}
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
