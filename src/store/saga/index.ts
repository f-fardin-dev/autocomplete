import { all, fork } from "redux-saga/effects";
import { usernamesSaga } from "./usernames";

export function* rootSaga() {
  yield all([fork(usernamesSaga)]);
}
