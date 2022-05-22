import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style:none;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI","Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }
 
`;
