import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editFormStep3 } from "../reduxActions/actions";
import { useSelector } from "react-redux";

function FormHandOverStuffStep3(props) {
  const { setStep } = props;
  const formSteps = useSelector((state) => state.formSteps);
  const [location, setLocation] = useState(formSteps.location);
  const [whoYouHelp, setWhoYouHelp] = useState(formSteps.whoYouHelp || []);
  const [nameOrganization, setNameOrganization] = useState(
    formSteps.nameOrganization
  );

  let objWhoWeHelp = [
    {
      name: "dzieciom",
      id: "checkbox1",
    },
    {
      name: "samotnym matkom",
      id: "checkbox2",
    },
    {
      name: "bezdomnym",
      id: "checkbox3",
    },
    {
      name: "niepełnosprawnym",
      id: "checkbox4",
    },
    {
      name: "osobom starszym",
      id: "checkbox5",
    },
  ];

  let objLocation = [
    {
      name: "Poznań",
    },
    {
      name: "Warszawa",
    },
    {
      name: "Kraków",
    },
    {
      name: "Wrocław",
    },
    {
      name: "Katowice",
    },
  ];

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

  const handleCheck = () => {
    objWhoWeHelp.forEach((singleElement) => {
      const checkbox = document.querySelector(`#${singleElement.id}`);
      if (whoYouHelp.includes(singleElement.name)) {
        checkbox.checked = true;
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
                    {objLocation.map((singleInfo) => {
                      return (
                        <>
                          <div
                            onClick={(e) => setLocation(singleInfo.name)}
                            className="customSelectContainer__option optionStep3"
                          >
                            {singleInfo.name}
                          </div>
                        </>
                      );
                    })}
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
              {objWhoWeHelp.map((singleInfo) => {
                return (
                  <>
                    <input
                      class="hide"
                      type="checkbox"
                      id={singleInfo.id}
                      name={singleInfo.name}
                      onChange={(e) => {
                        if (whoYouHelp.includes(e.target.name)) {
                          setWhoYouHelp((prev) =>
                            prev.filter((element) => element !== e.target.name)
                          );
                        } else {
                          setWhoYouHelp([...whoYouHelp, e.target.name]);
                        }
                      }}
                    ></input>
                    <label className="customCheckbox" for={singleInfo.id}>
                      {singleInfo.name}
                    </label>
                  </>
                );
              })}
            </div>
            <div className="customInputContainer">
              <h3 className="stepsSubtitle">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </h3>
              <input
                className="customInput customInputStep3"
                type="text"
                value={nameOrganization}
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
