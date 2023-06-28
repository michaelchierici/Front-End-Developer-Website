import { createGlobalStyle, css } from "styled-components";
import { ThemeType } from "../types/Theme";

export default createGlobalStyle<{ theme: ThemeType }>`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;

}

html, body {
  
  background-color: ${({ theme }) => theme.colors.background};

  ::-webkit-scrollbar {
    width: 0px;
    transition: all 250ms;
    scroll-behavior: smooth;
    position: relative;
    z-index: 0;

  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0 rgb(247, 255, 255, 8%);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
  }
 
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
      xsm: 1.2,
      sm: 1.5,
      md: 2,
      lg: 3,
      xl: 7,
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
  laptopM: "1280px",
  laptopL: "1440px",
  desktop: "1920px",
};

export const mobileSm = (inner: any) => css`
  @media (min-width: ${sizes.mobileS}) {
    ${inner};
  }
`;
export const mobileMd = (inner: any) => css`
  @media (min-width: ${sizes.mobileM}) {
    ${inner};
  }
`;
export const mobileLg = (inner: any) => css`
  @media (min-width: ${sizes.mobileL}) {
    ${inner};
  }
`;
export const tablet = (inner: any) => css`
  @media (min-width: ${sizes.tablet}) {
    ${inner};
  }
`;
export const laptop = (inner: any) => css`
  @media (min-width: ${sizes.laptop}) {
    ${inner};
  }
`;

export const laptopM = (inner: any) => css`
  @media (min-width: ${sizes.laptopM}) {
    ${inner};
  }
`;

export const desktop = (inner: any) => css`
  @media (min-width: ${sizes.desktop}) {
    ${inner};
  }
`;
