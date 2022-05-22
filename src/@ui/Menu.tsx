import styled, { css } from "styled-components";

interface MenuContainerProps {
  width?: string;
  maxWidth?: string;
  minWidth?: string;

  padding?: string;
  margin?: string;

  height?: string;
  maxHeight?: string;
  minHeight?: string;

  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  zIndex?: number;
}

export const MenuContainer = styled.ul<MenuContainerProps>`
  position: absolute;
  overflow-y: auto;
  margin: ${p => p.margin || 0};
  padding: ${p => p.padding || "0.5rem 0"};

  background-color: ${p => p.theme.colors.background.paper};
  border-radius: ${p => p.theme.borderRadius};

  width: ${p => p.width || "auto"};

  ${p => p.maxWidth && `max-width: ${p.maxWidth}`};
  ${p => p.minWidth && `min-width: ${p.minWidth}`};

  ${p => p.height && `height: ${p.height}`};
  ${p => p.maxHeight && `max-height: ${p.maxHeight}`};
  ${p => p.minHeight && `min-height: ${p.minHeight}`};

  top: ${p => p.top || "100%"};
  ${p => p.right && `right: ${p.right}`};
  ${p => p.bottom && `bottom: ${p.bottom}`};
  ${p => p.left && `left: ${p.left}`};

  z-index: 1;
  box-shadow: ${p => p.theme.shadows[10]};
`;
interface MenuItemProps {
  disabled?: boolean;
  selected?: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  display: block;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${p => p.theme.colors.text.primary};
  &:hover {
    ${p =>
      !p.disabled &&
      css`
        background: ${p => p.theme.colors.grey[300]};
      `};
    ${p =>
      !p.disabled &&
      p.selected &&
      css`
        background: ${p => p.theme.colors.primary.main};
        color: ${props => props.theme.colors.primary.contrastText};
      `}
  }
  ${p =>
    !p.disabled &&
    p.selected &&
    css`
      background: ${p => p.theme.colors.primary.main};
      color: ${props => props.theme.colors.primary.contrastText};
    `};

  ${p =>
    p.disabled &&
    css`
      background: ${p.theme.colors.grey[400]};
      color: ${p.theme.colors.grey[700]};
      cursor: default;
    `};

  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.divider};
  }
`;
