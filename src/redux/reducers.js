import { combineReducers } from "redux";

import activityLog from "./activityLog/reducer";
import addFriend from "./addFriend/reducer";
import guideline from "./guideline/reducer";
import user from "./user/reducer";
import request from "./request/reducer";
import task from "./task/reducer";

export default combineReducers({
	activityLog,
	addFriend,
	user,
	request,
	task,
	guideline
});
