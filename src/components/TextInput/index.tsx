import { ColumnContainer } from "@ui/FlexBox";
import { InputLabel, RawInput } from "@ui/StyledTextInput";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  disabled?: boolean;
}

export const TextInput = ({ id, label, disabled, placeholder, ...rest }: TextInputProps) => {
  return (
    <ColumnContainer position="relative" align="flex-start" justify="flex-start" width="100%">
      <RawInput id={id} disabled={disabled} placeholder={label ? " " : placeholder} {...rest} />
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
    </ColumnContainer>
  );
};
