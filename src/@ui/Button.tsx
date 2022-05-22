import styled from "styled-components";

export const Button = styled.button.attrs(p => ({
  type: p.type ? p.type : "button",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s;
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  border-radius: ${p => p.theme.borderRadius};
  &:disabled {
    opacity: ${p => p.theme.colors.action.disabledOpacity};
    cursor: default;
  }
  background: ${p => p.theme.colors.primary.main};
  color: ${p => p.theme.colors.primary.contrastText};
  border: 1px solid ${p => p.theme.colors.primary.main};
  &:hover {
    background: ${p => p.theme.colors.primary.dark};
  }
  &:active,
  &:disabled {
    background: ${p => p.theme.colors.primary.main};
  }
`;
