import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Button } from "@ui/Button";
import { ColumnContainer, Flex } from "@ui/FlexBox";
import { AutoComplete } from "components/Autocomplete";
import { usernamesFetchRequest } from "store/action-creators";
import { selectUsernames, selectUsernamesError, selectUsernamesLoading } from "store/selectors";

export const App = () => {
  const dispatch = useDispatch();

  const [selectedUsername, setSelectedUsername] = useState("");

  const isLoading = useSelector(selectUsernamesLoading);
  const usernames = useSelector(selectUsernames);
  const error = useSelector(selectUsernamesError);

  useEffect(() => {
    dispatch(usernamesFetchRequest());
  }, [dispatch]);

  const handleSubmitValue = () => alert(`Username: ${selectedUsername}`);

  const handleOnChangeUsername = (value: string) => setSelectedUsername(value);

  return (
    <ColumnContainer>
      <h1>Auto complete</h1>
      <Flex margin="1rem 0" width="300px">
        <AutoComplete
          id="usernamesAutoComplete"
          items={usernames}
          label={isLoading ? "Loading..." : "Usernames"}
          disabled={isLoading || !!error}
          onChange={handleOnChangeUsername}
        />
        <Button disabled={!selectUsernames} onClick={handleSubmitValue}>
          Submit
        </Button>
      </Flex>
      {error && (
        <ColumnContainer>
          <span>Something went wrong!</span>
          <span>{error}</span>
        </ColumnContainer>
      )}
    </ColumnContainer>
  );
};
