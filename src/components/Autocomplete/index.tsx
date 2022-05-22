import { useCallback, useEffect, useRef, useState } from "react";

import { Flex } from "@ui/FlexBox";
import { MenuContainer, MenuItem } from "@ui/Menu";
import { TextInput } from "components/TextInput";
import { useClickAwayListener } from "hooks/useClickAwayListener";

type AutoCompleteProps = {
  id: string;
  label: string;
  items: string[];
  disabled?: boolean;
  isLoading?: boolean;
  onChange?: (value: string) => void;
};

export const AutoComplete = ({ id, label, items, disabled, onChange }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedByKey, setSelectedByKey] = useState(-1);
  const [filteredValues, setFilteredValues] = useState<{ component: JSX.Element; value: string }[]>([]);

  const menuContainerRef = useRef<HTMLDivElement>(null!);

  const closeMenu = useCallback(() => setOpenOptions(false), []);
  useClickAwayListener(menuContainerRef, closeMenu);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedValue = e.target.value;
    setInputValue(typedValue);
    setOpenOptions(!!typedValue);
    setSelectedByKey(-1);

    const temp = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const matchPartOfItem = item.slice(0, typedValue.length);
      const restPartOfItem = item.slice(typedValue.length);
      if (matchPartOfItem.toLowerCase() === typedValue.toLowerCase()) {
        const component = (
          <>
            <strong>{matchPartOfItem}</strong>
            {restPartOfItem}
          </>
        );
        temp.push({ component, value: item });
      }
    }
    setFilteredValues(temp);
  };

  const handleSetValue = useCallback(
    (value: string) => {
      setInputValue(value);
      setSelectedByKey(-1);
      closeMenu();
      onChange && onChange(value);
    },
    [closeMenu, onChange],
  );

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      switch (e.code) {
        case "ArrowDown":
          return setSelectedByKey(state => (state >= filteredValues.length - 1 ? 0 : state + 1));
        case "ArrowUp":
          return setSelectedByKey(state => (state <= 0 ? filteredValues.length - 1 : state - 1));
        case "Enter":
          return handleSetValue(filteredValues[selectedByKey].value);
        default:
          return;
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [filteredValues, filteredValues.length, handleSetValue, selectedByKey]);

  return (
    <Flex position="relative" ref={menuContainerRef}>
      <TextInput id={id} label={label} disabled={disabled} value={inputValue} onChange={handleInputChange} />
      {openOptions && (
        <MenuContainer width="100%" top="110%" padding="0">
          {filteredValues.map((item, index) => (
            <MenuItem key={index} selected={index === selectedByKey} onClick={() => handleSetValue(item.value)}>
              {item.component}
            </MenuItem>
          ))}
          {filteredValues.length === 0 && <MenuItem disabled>No match found</MenuItem>}
        </MenuContainer>
      )}
    </Flex>
  );
};
