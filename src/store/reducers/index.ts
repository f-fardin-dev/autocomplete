import { combineReducers } from "redux";
import { usernamesReducer } from "./usernames";

export const rootReducer = combineReducers({
  usernames: usernamesReducer,
});
