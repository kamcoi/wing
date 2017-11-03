import { combineReducers } from "redux";

import requestForm from "./requestForm/reducer";
import addFriends from "./addFriends/reducer";
import activityLog from "./activityLog/reducer";

import user from "./user/reducer";
import request from "./request/reducer";
import task from "./task/reducer";

export default combineReducers({
  requestForm,
  addFriends,
  activityLog,
  user,
  request,
  task
});
