import styled from "styled-components";

export type FlexProps = {
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | "inherit";

  flex?: string;
  flexGrow?: number;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  align?: "initial" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "space-between" | "space-around";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  alignSelf?: "flex-start" | "flex-end" | "center";
  padding?: string;
  margin?: string;

  width?: string;
  maxWidth?: string;
  minWidth?: string;

  height?: string;
  maxHeight?: string;
  minHeight?: string;
  background?: string;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${p => p.align || "center"};
  justify-content: ${p => p.justify || "center"};

  ${p => p.position && `position: ${p.position}`};

  ${p => p.flex && `flex: ${p.flex}`};
  ${p => p.wrap && `flex-wrap: ${p.wrap}`};
  ${p => p.direction && `flex-direction: ${p.direction}`};
  ${p => p.alignSelf && `align-self: ${p.alignSelf}`};

  ${p => p.padding && `padding: ${p.padding}`};
  ${p => p.margin && `margin: ${p.margin}`};

  ${p => p.background && `background: ${p.background}`};

  ${p => p.width && `width: ${p.width}`};
  ${p => p.maxWidth && `max-width: ${p.maxWidth}`};
  ${p => p.minWidth && `min-width: ${p.minWidth}`};

  ${p => p.height && `height: ${p.height}`};
  ${p => p.maxHeight && `max-height: ${p.maxHeight}`};
  ${p => p.minHeight && `min-height: ${p.minHeight}`};

  ${p => p.flexGrow && `flex-grow: ${p.flexGrow}`};
  ${p => p.color && `color: ${p.color}`};
`;

export type RowContainerProps = Omit<FlexProps, "direction">;

export const RowContainer = styled(Flex)`
  flex-direction: row;
`;

export type ColumnContainerProps = Omit<FlexProps, "direction">;

export const ColumnContainer = styled(Flex)`
  flex-direction: column;
`;
