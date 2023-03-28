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

    button: "#16db65",
    border: "#0f9947",
  },
  font: {
    size: {
      sm: 1.5,
      md: 2,
      lg: 3,
      xl: 3.5,
    },
    weight: {
      extra_light: 275,
      light: 300,
      regular: 400,
      bold: 600,
    },
  },
};

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
