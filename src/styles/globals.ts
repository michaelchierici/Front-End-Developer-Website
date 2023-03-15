import { createGlobalStyle } from "styled-components";

export interface ThemeType {
  colors: {
    background: string;
    menu_background: string;

    gradient: string;
    text_gradient: string;

    text_primary: string;
    text_secondary: string;

    button: string;
    font: {
      size: number;
      weight: number;
    };
  };
}

export default createGlobalStyle<{theme: ThemeType}>`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Lato', sans-serif;


}

body {
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
}

`;

export const theme = {
  colors: {
    background: "#1D1E18",
    menu_background: "#D9D9D9",

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


