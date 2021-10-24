const formReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDITSTEP1":
      const { whatStuff } = action.payload;
      return {
        ...state,
        whatStuff,
      };
    case "EDITSTEP2":
      const { quantityBag } = action.payload;
      return {
        ...state,
        quantityBag,
      };
    case "EDITSTEP3":
      const { location, whoYouHelp, nameOrganization } = action.payload;
      return {
        ...state,
        location,
        whoYouHelp,
        nameOrganization,
      };
    case "EDITSTEP4":
      const {
        street,
        city,
        postCode,
        phoneNumber,
        dateReceipt,
        hoursReceipt,
        notes,
      } = action.payload;
      return {
        ...state,
        street,
        city,
        postCode,
        phoneNumber,
        dateReceipt,
        hoursReceipt,
        notes,
      };

    default:
      console.log(`Nie ma akcji typu: ${action.type}`);
      return state;
  }
};

export default formReducer;

// quantityBag,
// location,
// whoYouHelp,
// nameOrganization,
// street,
// city,
// postCode,
// phoneNumber,
// dateReceipt,
// hoursReceipt,
// notes,
