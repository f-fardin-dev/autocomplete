import styled from "styled-components";

interface RawInputProps {
  width?: string | number;
  padding?: string;
  fontSize?: string;
  lineHeight?: string | number;
}

export const RawInput = styled.input.attrs(p => ({
  type: p.type || "text",
}))<RawInputProps>`
  display: block;
  width: ${p => p.width || "100%"};
  padding: ${p => p.padding || "0.5rem 0.75rem"};
  font-size: ${p => p.fontSize || "1rem"};
  line-height: ${p => p.lineHeight || 1.5};
  color: ${p => p.theme.colors.text.primary};
  background-color: ${p => p.theme.colors.background.paper};
  border: 1px solid ${p => p.theme.colors.grey[500]};
  border-radius: ${p => p.theme.borderRadius};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &::placeholder {
    color: ${p => p.theme.colors.grey[600]};
  }
  &:focus {
    border-color: ${p => p.theme.colors.primary.main};
    outline: 0;
    & + label {
      color: ${p => p.theme.colors.primary.main};
    }
  }
  &:disabled {
    color: ${p => p.theme.colors.action.disabled};
    border-color: ${p => p.theme.colors.action.disabled};
    ::placeholder {
      color: ${p => p.theme.colors.action.disabled};
    }
    & + label {
      color: ${p => p.theme.colors.action.disabled};
      cursor: default;
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transform: translateY(-180%);
      font-size: 0.75rem;
      background-color: ${p => p.theme.colors.background.paper};
    }
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  text-transform: capitalize;
  font-size: 1rem;
  color: ${p => p.theme.colors.grey[600]};
  transition: transform 0.2s, font-size 0.2s, color 0.2s;
  padding: 0 0.25rem;
  cursor: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;
