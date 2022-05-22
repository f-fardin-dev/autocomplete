import { Usernames } from "store/action-types";

export type FetchUsernamesAction = {
  type: Usernames.FETCH_REQUEST;
};

export type FetchSuccessUsernamesAction = {
  type: Usernames.FETCH_SUCCESS;
  payload: string[];
};

export type FetchErrorUsernamesAction = {
  type: Usernames.FETCH_ERROR;
  payload: string;
};

export type UsernamesActions = FetchUsernamesAction | FetchSuccessUsernamesAction | FetchErrorUsernamesAction;
