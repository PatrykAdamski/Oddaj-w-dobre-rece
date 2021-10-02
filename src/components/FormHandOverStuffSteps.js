import React from "react";
import FormHandOverStuffStep1 from "./FormHandOverStuffStep1";
import FormHandOverStuffStep2 from "./FormHandOverStuffStep2";
import FormHandOverStuffStep3 from "./FormHandOverStuffStep3";
import FormHandOverStuffStepThankYou from "./FormHandOverStuffStepThankYou";

function FormHandOverStuffSteps() {
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
        <FormHandOverStuffStepThankYou />
      </section>
    </>
  );
}

export default FormHandOverStuffSteps;
