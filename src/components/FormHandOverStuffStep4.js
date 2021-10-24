import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editFormStep4 } from "../reduxActions/actions";
import { useSelector } from "react-redux";

function FormHandOverStuffStep4(props) {
  const { setStep } = props;
  const formSteps = useSelector((state) => state.formSteps);

  const [street, setStreet] = useState(formSteps.street);
  const [city, setCity] = useState(formSteps.city);
  const [postCode, setPostCode] = useState(formSteps.postCode);
  const [phoneNumber, setPhoneNumber] = useState(formSteps.phoneNumber);
  const [dateReceipt, setDateReceipt] = useState(formSteps.dateReceipt);
  const [hoursReceipt, setHoursReceipt] = useState(formSteps.hoursReceipt);
  const [notes, setNotes] = useState(formSteps.notes);

  const dispatch = useDispatch();

  const handleOnSubmit = () => {
    dispatch(
      editFormStep4(
        street,
        city,
        postCode,
        phoneNumber,
        dateReceipt,
        hoursReceipt,
        notes
      )
    );
  };

  return (
    <>
      <section className="formHandOverStuffSteps__important">
        <h3 className="formHandOverStuffSteps__important--title">Ważne!</h3>
        <p className="formHandOverStuffSteps__important--description">
          Podaj adres oraz termin odbioru rzeczy.
        </p>
      </section>
      <section className="formHandOverStuffSteps__singleStep">
        <div className="formHandOverStuffStep">
          <div className="formHandOverStuffStep__stepNumber">Krok 4/4</div>
          <div className="formHandOverStuffStep__container">
            <h2 className="formHandOverStuffStep__title">
              Podaj adres oraz termin odbioru rzecz przez kuriera
            </h2>
            <div className="adressAndDateContainer">
              <div className="pickupAdressContainer">
                <h3 className="stepsSubtitle">Adres odbioru:</h3>
                <div className="singleValueWrap">
                  <label for="street">Ulica</label>
                  <input
                    id="street"
                    className="customInput"
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                  ></input>
                </div>
                <div className="singleValueWrap">
                  <label for="city">Miasto</label>
                  <input
                    id="city"
                    className="customInput"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </div>
                <div className="singleValueWrap">
                  <label for="postCode">Kod pocztowy</label>
                  <input
                    id="postCode"
                    className="customInput"
                    type="text"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                  ></input>
                </div>
                <div className="singleValueWrap">
                  <label for="phoneNumber">Numer telefonu</label>
                  <input
                    id="phoneNumber"
                    className="customInput"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="dateOfPickupContainer">
                <h3 className="stepsSubtitle">Termin odbioru:</h3>
                <div className="singleValueWrap">
                  <label for="date">Data</label>
                  <input
                    id="date"
                    className="customInput"
                    type="text"
                    value={dateReceipt}
                    onChange={(e) => setDateReceipt(e.target.value)}
                  ></input>
                </div>
                <div className="singleValueWrap">
                  <label for="hour">Godzina</label>
                  <input
                    id="hour"
                    className="customInput"
                    type="text"
                    value={hoursReceipt}
                    onChange={(e) => setHoursReceipt(e.target.value)}
                  ></input>
                </div>
                <div className="singleValueWrap">
                  <label for="notes">Uwagi dla kuriera</label>
                  <input
                    id="notes"
                    className="customInput"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></input>
                </div>
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

export default FormHandOverStuffStep4;
