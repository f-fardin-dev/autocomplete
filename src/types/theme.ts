import "styled-components";

interface ColorPalette {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      common: { black: string; white: string };
      primary: ColorPalette;
      secondary: ColorPalette;
      error: ColorPalette;
      warning: ColorPalette;
      info: ColorPalette;
      success: ColorPalette;
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      text: { primary: string; secondary: string; disabled: string };
      background: { paper: string; default: string };
      action: { disabled: string; border: string; disabledOpacity: number };
      divider: string;
    };
    shadows: Record<5 | 10 | 15 | 20, string>;
  }
}
