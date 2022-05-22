import { UsernamesActions } from "store/actions";
import { Usernames } from "store/action-types";

type UsernameState = {
  isLoading: boolean;
  error: string | null;
  data: string[];
};

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const usernamesReducer = (state: UsernameState = initialState, action: UsernamesActions): UsernameState => {
  switch (action.type) {
    case Usernames.FETCH_REQUEST:
      return { ...state, isLoading: true, error: null, data: [] };
    case Usernames.FETCH_SUCCESS:
      return { ...state, isLoading: false, error: null, data: action.payload };
    case Usernames.FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload, data: [] };
    default:
      return { ...state };
  }
};
