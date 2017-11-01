import { combineReducers } from "redux";
import requestHome from "./requestHome/reducer";
import submitForm from "./submitForm/reducer";
import taskHome from "./taskHome/reducer";
import taskStatus from "./taskStatus/reducer";
import requestStatus from "./requestStatus/reducer";
import commentDetails from "./commentDetails/reducer";
import comments from "./comments/reducer";
import activityLog from "./activityLog/reducer";
import addFriends from "./addFriends/reducer";
import approval from "./approval/reducer";
import cost from "./cost/reducer";
import profile from "./profile/reducer";
import travel from "./travel/reducer";

export default combineReducers({
  requestHome,
  submitForm,
  taskHome,
  taskStatus,
  requestStatus,
  commentDetails,
  comments,
  activityLog,
  addFriends,
  approval,
  cost,
  profile,
  travel
});
