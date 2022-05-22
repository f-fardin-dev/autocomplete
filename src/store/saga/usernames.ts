import { AxiosError, AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";

import { usernameApi } from "services/usernames";
import { usernamesFetchError, usernamesFetchSuccess } from "store/action-creators";
import { Usernames } from "store/action-types";
import { UsernamesActions } from "store/actions";
import { User } from "types";

function* getUsernamesAsync() {
  try {
    const { data: users }: AxiosResponse<User[]> = yield usernameApi.get();
    const usernames = users.map(user => user.username);
    yield put<UsernamesActions>(usernamesFetchSuccess(usernames));
  } catch (error) {
    const err = error as AxiosError;
    yield put<UsernamesActions>(usernamesFetchError(err.message));
  }
}

export function* usernamesSaga() {
  yield all([takeLatest(Usernames.FETCH_REQUEST, getUsernamesAsync)]);
}
