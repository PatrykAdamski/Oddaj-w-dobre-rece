import React from "react";
import { useSelector } from "react-redux";

function FormHandOverStuffStepSummary(props) {
  const { setStep } = props;
  const formSteps = useSelector((state) => state.formSteps);

  return (
    <section className="formHandOverStuffSteps__singleStep">
      <div className="formHandOverStuffStep">
        <div className="formHandOverStuffStep__container">
          <h2 className="formHandOverStuffStep__title">
            Podsumowanie Twojej darowizny
          </h2>
          <h3 className="stepsSubtitle">Oddajesz:</h3>
          <div className="handOverContainer">
            <div className="handOverContainer__imageShirt handOverContainer__image"></div>
            <p className="handOverContainer__description">
              {`${formSteps.quantityBag}, ${formSteps.whatStuff}, ${formSteps.whoYouHelp}`}
            </p>
          </div>
          <div className="handOverContainer">
            <div className="handOverContainer__imageLocation handOverContainer__image"></div>
            <p className="handOverContainer__description">
              dla lokalizacji: {formSteps.location}
            </p>
          </div>
          <div className="adressAndDateContainer">
            <div className="pickupAdressContainer">
              <h3 className="stepsSubtitle">Adres odbioru:</h3>
              <div className="singleValueWrap">
                <p>Ulica</p>
                <p>{formSteps.street}</p>
              </div>
              <div className="singleValueWrap">
                <p>Miasto</p>
                <p>{formSteps.city}</p>
              </div>
              <div className="singleValueWrap">
                <p>Kod pocztowy</p>
                <p>{formSteps.postCode}</p>
              </div>
              <div className="singleValueWrap">
                <p>Numer telefonu</p>
                <p>{formSteps.phoneNumber}</p>
              </div>
            </div>
            <div className="dateOfPickupContainer">
              <h3 className="stepsSubtitle">Termin odbioru:</h3>
              <div className="singleValueWrap">
                <p>Data</p>
                <p>{formSteps.dateReceipt}</p>
              </div>
              <div className="singleValueWrap">
                <p>Godzina</p>
                <p>{formSteps.hoursReceipt}</p>
              </div>
              <div className="singleValueWrap">
                <p>Uwagi dla kuriera</p>
                <p>{formSteps.notes}</p>
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
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNextOrBack"
          >
            Potwierdzam
          </button>
        </div>
      </div>
    </section>
  );
}

export default FormHandOverStuffStepSummary;
