import { Usernames } from "store/action-types";
import { FetchUsernamesAction, FetchErrorUsernamesAction, FetchSuccessUsernamesAction } from "store/actions";

export const usernamesFetchRequest = (): FetchUsernamesAction => ({
  type: Usernames.FETCH_REQUEST,
});

export const usernamesFetchSuccess = (payload: string[]): FetchSuccessUsernamesAction => ({
  type: Usernames.FETCH_SUCCESS,
  payload,
});

export const usernamesFetchError = (payload: string): FetchErrorUsernamesAction => ({
  type: Usernames.FETCH_ERROR,
  payload,
});
