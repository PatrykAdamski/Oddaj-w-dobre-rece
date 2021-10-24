import { combineReducers } from "redux";

import formReducer from "./reduxReducer";

export const rootReducer = combineReducers({
  formSteps: formReducer,
});
