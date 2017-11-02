import { combineReducers } from "redux";

import requestHome from "./requestHome/reducer";
import taskHome from "./taskHome/reducer";
import requestStatus from "./requestStatus/reducer";
import taskStatus from "./taskStatus/reducer";
import comments from "./comments/reducer";
import requestForm from "./requestForm/reducer";
import addFriends from "./addFriends/reducer";
import activityLog from "./activityLog/reducer";
import user from "./user/reducer";

export default combineReducers({
  requestHome,
  taskHome,
  requestStatus,
  taskStatus,
  comments,
  requestForm,
  addFriends,
  activityLog,
  user
});
