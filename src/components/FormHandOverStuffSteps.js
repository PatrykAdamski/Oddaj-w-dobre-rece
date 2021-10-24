import React, { useState } from "react";
import FormHandOverStuffStep1 from "./FormHandOverStuffStep1";
import FormHandOverStuffStep2 from "./FormHandOverStuffStep2";
import FormHandOverStuffStep3 from "./FormHandOverStuffStep3";
import FormHandOverStuffStep4 from "./FormHandOverStuffStep4";
import FormHandOverStuffStepSummary from "./FormHandOverStuffStepSummary";
import FormHandOverStuffStepThankYou from "./FormHandOverStuffStepThankYou";

function FormHandOverStuffSteps() {
  const [step, setStep] = useState(1);

  const showStep = () => {
    if (step === 1) {
      return <FormHandOverStuffStep1 step={step} setStep={setStep} />;
    }
    if (step === 2) {
      return <FormHandOverStuffStep2 step={step} setStep={setStep} />;
    }
    if (step === 3) {
      return <FormHandOverStuffStep3 step={step} setStep={setStep} />;
    }
    if (step === 4) {
      return <FormHandOverStuffStep4 step={step} setStep={setStep} />;
    }
    if (step === 5) {
      return <FormHandOverStuffStepSummary step={step} setStep={setStep} />;
    }
    if (step === 6) {
      return <FormHandOverStuffStepThankYou step={step} setStep={setStep} />;
    }
  };

  return <>{showStep()}</>;
}

export default FormHandOverStuffSteps;
