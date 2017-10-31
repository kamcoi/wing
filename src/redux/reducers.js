import { combineReducers } from "redux";
import requestHome from "./requestHome/reducer";
import submitForm from "./submitForm/reducer";

export default combineReducers({
  requestHome,
  submitForm
});
