import { createSelector } from "reselect";

import { RootState } from "store";

export const selectUsernamesLoading = createSelector(
  (state: RootState) => state.usernames.isLoading,
  isLoading => isLoading,
);

export const selectUsernames = createSelector(
  (state: RootState) => state.usernames.data,
  usernames => usernames,
);

export const selectUsernamesError = createSelector(
  (state: RootState) => state.usernames.error,
  usernamesFetchError => usernamesFetchError,
);
