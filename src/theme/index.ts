import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "8px",
  colors: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#3296b8",
      light: "rgb(227, 242, 253)",
      dark: "#00678f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#a4d7bf",
      light: "#c1e4d2",
      dark: "#64c29b",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    text: { primary: "rgba(0,0,0,0.87)", secondary: "rgba(0,0,0,0.6)", disabled: "rgba(0,0,0,0.38)" },
    background: { paper: "#fff", default: "#f5f5f5" },
    action: { disabled: "rgba(0, 0, 0, 0.38)", border: "rgba(0, 0, 0, 0.25)", disabledOpacity: 0.4 },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  shadows: {
    5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    15: "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    20: "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
  },
};
