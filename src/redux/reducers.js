import { combineReducers } from "redux";

import activityLog from "./activityLog/reducer";

import user from "./user/reducer";
import request from "./request/reducer";
import task from "./task/reducer";

export default combineReducers({
  activityLog,
  user,
  request,
  task
});
