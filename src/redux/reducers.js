import { combineReducers } from "redux";
import requestHome from "./requestHome/reducer";
import submitForm from "./submitForm/reducer";
import taskHome from "./taskHome/reducer";
import taskStatus from "./taskStatus/reducer";
import requestStatus from "./requestStatus/reducer";
import commentDetails from "./commentDetails/reducer";
import comments from "./comments/reducer";

export default combineReducers({
  requestHome,
  submitForm,
  taskHome,
  taskStatus,
  requestStatus,
  commentDetails,
  comments
});
