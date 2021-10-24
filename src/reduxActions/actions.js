export const editFormStep1 = (whatStuff) => {
  return {
    type: "EDITSTEP1",
    payload: {
      whatStuff,
    },
  };
};

export const editFormStep2 = (quantityBag) => {
  return {
    type: "EDITSTEP2",
    payload: {
      quantityBag,
    },
  };
};

export const editFormStep3 = (location, whoYouHelp, nameOrganization) => {
  return {
    type: "EDITSTEP3",
    payload: {
      location,
      whoYouHelp,
      nameOrganization,
    },
  };
};

export const editFormStep4 = (
  street,
  city,
  postCode,
  phoneNumber,
  dateReceipt,
  hoursReceipt,
  notes
) => {
  return {
    type: "EDITSTEP4",
    payload: {
      street,
      city,
      postCode,
      phoneNumber,
      dateReceipt,
      hoursReceipt,
      notes,
    },
  };
};
