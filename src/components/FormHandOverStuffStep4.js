import React from "react";

function FormHandOverStuffStep4() {
  return (
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
              <input id="street" className="customInput" type="text"></input>
            </div>
            <div className="singleValueWrap">
              <label for="city">Miasto</label>
              <input id="city" className="customInput" type="text"></input>
            </div>
            <div className="singleValueWrap">
              <label for="postCode">Kod pocztowy</label>
              <input id="postCode" className="customInput" type="text"></input>
            </div>
            <div className="singleValueWrap">
              <label for="phoneNumber">Numer telefonu</label>
              <input
                id="phoneNumber"
                className="customInput"
                type="text"
              ></input>
            </div>
          </div>
          <div className="dateOfPickupContainer">
            <h3 className="stepsSubtitle">Termin odbioru:</h3>
            <div className="singleValueWrap">
              <label for="date">Data</label>
              <input id="date" className="customInput" type="text"></input>
            </div>
            <div className="singleValueWrap">
              <label for="hour">Godzina</label>
              <input id="hour" className="customInput" type="text"></input>
            </div>
            <div className="singleValueWrap">
              <label for="notes">Uwagi dla kuriera</label>
              <input id="notes" className="customInput" type="text"></input>
            </div>
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

export default FormHandOverStuffStep4;
