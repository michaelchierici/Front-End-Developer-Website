import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../Typings/Theme";

export default createGlobalStyle<{ theme: ThemeType }>`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;

}

html, body {
  background-color: ${({ theme }) => theme.colors.background};

}

button {
  cursor: pointer;

}

`;

export const theme = {
  colors: {
    background: "#1D1E18",
    menu_background: "rgba(255, 255, 255, 0.1)",

    gradient:
      "109.87deg, rgba(71, 115, 167), rgba(22, 219, 101), rgba(149, 239, 185)",

    text_gradient:
      "109.87deg, rgba(22,219, 101) 5.49%, rgba(71, 115, 167) 55.35%, 70%, rgba(149, 239, 185)",

    text_primary: "#000000",
    text_secondary: "#FFFFFF",

    button: "#16DB65",
  },
  font: {
    size: {
      sm: 12,
      md: 22,
      lg: 25,
      xl: 28,
      bg: 48,
      xxl: 52,
    },
    weight: {
      extra_light: 275,
      light: 300,
      regular: 400,
      bold: 600,
    },
  },
};
