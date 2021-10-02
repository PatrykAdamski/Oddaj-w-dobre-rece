import React from "react";

function FormHandOverStuffStepSummary() {
  return (
    <div className="formHandOverStuffStep">
      <div className="formHandOverStuffStep__container">
        <h2 className="formHandOverStuffStep__title">
          Podsumowanie Twojej darowizny
        </h2>
        <h3 className="stepsSubtitle">Oddajesz:</h3>
        <div className="handOverContainer">
          <div className="handOverContainer__imageShirt handOverContainer__image"></div>
          <p className="handOverContainer__description">
            4 worki, ubrania w dobrym stanie, dzieciom
          </p>
        </div>
        <div className="handOverContainer">
          <div className="handOverContainer__imageLocation handOverContainer__image"></div>
          <p className="handOverContainer__description">
            dla lokalizacji: Warszawa
          </p>
        </div>
        <div className="adressAndDateContainer">
          <div className="pickupAdressContainer">
            <h3 className="stepsSubtitle">Adres odbioru:</h3>
            <div className="singleValueWrap">
              <p>Ulica</p>
              <p></p>
            </div>
            <div className="singleValueWrap">
              <p>Miasto</p>
              <p></p>
            </div>
            <div className="singleValueWrap">
              <p>Kod pocztowy</p>
              <p></p>
            </div>
            <div className="singleValueWrap">
              <p>Numer telefonu</p>
              <p></p>
            </div>
          </div>
          <div className="dateOfPickupContainer">
            <h3 className="stepsSubtitle">Termin odbioru:</h3>
            <div className="singleValueWrap">
              <p>Data</p>
              <p></p>
            </div>
            <div className="singleValueWrap">
              <p>Godzina</p>
              <p></p>
            </div>
            <div className="singleValueWrap">
              <p>Uwagi dla kuriera</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="containerBtnNextOrBack">
        <button className="btnNextOrBack btnBack">Wstecz</button>
        <button className="btnNextOrBack">Potwierdzam</button>
      </div>
    </div>
  );
}

export default FormHandOverStuffStepSummary;
