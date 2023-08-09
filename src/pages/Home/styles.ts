import styled, { css } from "styled-components";
import { easeIn, easeOut } from "../../styles/animations/easeInAndOut";
import {
  desktop,
  laptop,
  laptopM,
  mobileLg,
  mobileMd,
  mobileSm,
} from "../../styles/globals";
import SVGBackground from "../../assets/images/svg-section.svg";

interface Props {
  type: "name" | "profession" | "role" | "description";
  visible: boolean;
  hasAnimation: boolean;
  boxShadow: string;
}

interface ScrollProps {
  scrollPosition: boolean;
}

interface IconProps {
  visible: boolean;
  index: number;
  boxShadow: string;
}

const titleVariants = {
  name: css`
    font-weight: ${({ theme }) => theme.font.weight.regular};
  `,
  profession: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
  role: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
  description: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
};

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${mobileSm(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 315px;
      padding: 15px;
    }
  `)}
  ${mobileMd(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 315px;
      padding: 15px;
    }
  `)}

  ${mobileLg(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 315px;
      padding: 15px;
    }
  `)}

  ${laptop(css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `)}

  ${desktop(css`
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    .photo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      padding-top: 100px;
      img {
        width: 459px;
        height: 402.13px;
        padding: 0;
      }
    }
  `)}
`;
export const ContentTitle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${mobileSm(css`
    width: 90%;
  `)}
  ${mobileMd(css``)}

  ${mobileLg(css``)}
  ${laptop(css`
    padding-left: 20px;
    justify-content: flex-start;
    width: 60%;
  `)}

  ${desktop(css`
    padding-left: 20px;
    justify-content: flex-start;
    width: 100%;
    padding-top: 100px;
  `)}
`;
export const Title = styled.h1<Partial<Props>>`
  ${({ type }) => titleVariants[type!] || titleVariants.name};
  font-size: ${({ theme }) => theme.font.size.xl}em;

  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.2));
  backdrop-filter: blur(20px);

  background: linear-gradient(109.87deg, #16db65 15.49%, #1462bc 60.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation: ${({ hasAnimation }) =>
      !hasAnimation
        ? css`
            ${easeIn}
          `
        : css`
            ${easeOut}
          `}
    400ms ease-in;

  div {
    height: 100%;
    font-weight: 600;
  }

  ${mobileSm(css<Props>`
    font-size: 2rem;
    text-align: center;
  `)}

  ${mobileMd(css<Props>`
    font-size: 2.2rem;
    text-align: center;
  `)}

  ${laptop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};

    font-size: 4em;
  `)}

  ${desktop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};
    font-size: ${({ theme }) => theme.font.size.xl}em;
    text-align: left;
  `)}
`;

export const ContainerAboutMe = styled.section`
  width: 600px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom-width: 1px;
  border-image: linear-gradient(to right, #30d95f 0%, #2976c6 100%) 0 0 100% 0;
  border-bottom-style: solid;

  ${mobileSm(css`
    width: 300px;
    height: 280px;
    justify-content: flex-start;
  `)}
  ${mobileMd(css`
    width: 300px;
    height: 280px;
    justify-content: flex-start;
  `)}

  ${mobileLg(css`
    width: 300px;
    height: 280px;
    justify-content: flex-start;
  `)}
  ${laptop(css`
    width: 600px;
    height: 400px;
    justify-content: center;
  `)}

  ${desktop(css`
    width: 600px;
    height: 400px;
    justify-content: center;
  `)}


  .content-experience {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-right: auto;

    ${mobileSm(css`
      margin: 0;
    `)}
    ${mobileMd(css`
      margin: 0;
    `)}

  ${mobileLg(css`
      margin: 0;
    `)}
  ${laptop(css`
      margin-right: auto;
    `)}

  ${desktop(css`
      margin-right: auto;
    `)}
    h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 60px;

      color: #ffffff;

      text-shadow: 0px 0px 126.945px #476cff, 0px 0px 72.54px #476cff,
        0px 0px 42.315px #476cff, 0px 0px 21.1575px #476cff,
        0px 0px 6.045px #476cff, 0px 0px 3.0225px #476cff;

      ${mobileSm(css`
        font-size: 40px;
      `)}
      ${mobileMd(css`
        font-size: 40px;
      `)}

  ${mobileLg(css`
        font-size: 40px;
      `)}
  ${laptop(css`
        font-size: 60px;
      `)}

  ${desktop(css`
        font-size: 60px;
      `)}
    }
    h3 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 24px;
      margin-left: auto;
      color: #ffffff;

      text-shadow: 2px 10px 10px #000000;

      ${mobileSm(css`
        font-size: 25px;
      `)}
      ${mobileMd(css`
        font-size: 25px;
      `)}

  ${mobileLg(css`
        font-size: 25px;
      `)}
  ${laptop(css`
        font-size: 30px;
      `)}

  ${desktop(css`
        font-size: 30px;
      `)}
    }
  }
  .content-graduation {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-left: auto;

    ${mobileSm(css`
      margin-left: 0;
    `)}
    ${mobileMd(css`
      margin-left: 0;
    `)}

  ${mobileLg(css`
      margin-left: 0;
    `)}
  ${laptop(css`
      margin-left: auto;
    `)}

  ${desktop(css`
      margin-left: auto;
    `)}
    .neon-title {
      font-family: "Lato";
      font-weight: 400;
      font-size: 40px;
      line-height: 28px;
      padding: 5px 0;
      color: #ffffff;

      text-shadow: 0px 0px 153.468px #0081fa, 0px 0px 87.696px #0081fa,
        0px 0px 51.156px #0081fa, 0px 0px 25.578px #0081fa,
        0px 0px 7.308px #0081fa, 0px 0px 3.654px #0081fa;

      font-family: "Lato";
      font-weight: 300;
      font-size: 40px;

      color: #ffffff;

      ${mobileSm(css`
        font-size: 30px;
      `)}
      ${mobileMd(css`
        font-size: 30px;
      `)}

  ${mobileLg(css`
        font-size: 30px;
      `)}
  ${laptop(css`
        font-size: 40px;
      `)}

  ${desktop(css`
        font-size: 40px;
      `)}
    }
    h3 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-size: 40px;

      color: #ffffff;

      ${mobileSm(css`
        font-size: 30px;
        text-align: center;
      `)}
      ${mobileMd(css`
        font-size: 30px;
        text-align: center;
      `)}

  ${mobileLg(css`
        font-size: 30px;
        text-align: center;
      `)}
  ${laptop(css`
        font-size: 40px;
      `)}

  ${desktop(css`
        font-size: 40px;
      `)}
    }
  }
`;

export const ContainerInfo = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  margin: 20px;

  ${mobileSm(css<Props>`
    div {
      margin: 10px 0;
      padding: 0 20px;
    }
  `)}

  ${mobileMd(css<Props>`
    padding: 20px 0;

    div {
      margin-top: 15px;

      padding: 0 20px;
    }
  `)}

  ${laptop(css<Props>`
    div {
      margin: 10px 0;
      padding: 0 20px;
    }
  `)}

  ${laptopM(css<Props>`
    div {
      margin: 20px 0;
      padding: 0 20px;
    }
  `)}

${desktop(css`
    div {
      margin: 20px 0;
      padding: 0 20px;
    }
  `)}
`;

export const Card = styled.div`
  width: 320px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background: linear-gradient(#1d1e18, #1d1e18) padding-box,
    linear-gradient(to right, #30d95f 0%, #2976c6 100%) 100%;
  border-radius: 50em;
  border: 1.5px solid transparent;

  border-image: linear-gradient(to right, #30d95f 0%, #2976c6 100%) 1%;

  box-shadow: 0px 20px 8px 2px rgba(0, 0, 0, 0.5);
  margin: 15px 0;
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    text-align: center;
    color: #ffffff;
    margin: auto;
    text-shadow: 0px 0px 291.06px #153fe5, 0px 0px 166.32px #153fe5,
      0px 0px 97.02px #153fe5, 0px 0px 48.51px #153fe5, 0px 0px 13.86px #153fe5,
      0px 0px 6.93px #153fe5;
  }

  ${mobileSm(css`
    h2 {
      font-size: 22px;
    }
  `)}

  ${mobileMd(css`
    h2 {
      font-size: 22px;
    }
  `)}

  ${laptop(css`
    h2 {
      font-size: 25px;
    }
  `)}

  ${laptopM(css`
    h2 {
      font-size: 25px;
    }
  `)}

${desktop(css`
    h2 {
    }
  `)}
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 450ms;

  ${mobileSm(css<Props>`
    align-items: center;
    justify-content: center;
    height: 60px;
  `)}

  ${mobileMd(css<Props>`
    align-items: center;
    justify-content: center;
    height: 60px;
  `)}

  ${laptop(css<Props>`
    align-items: center;
    justify-content: center;
  `)}

  ${laptopM(css<Props>`
    align-items: flex-start;
    height: 100px;
  `)}

${desktop(css`
    align-items: flex-start;
    height: 100px;
  `)}
`;
export const Button = styled.button<Partial<Props>>`
  width: ${({ visible }) => (visible ? "3rem" : "15.5rem")};
  height: ${({ visible }) => (visible ? "3rem" : "5rem")};

  font-size: ${({ theme }) => theme.font.size.sm}em;
  font-weight: ${({ theme }) => theme.font.weight.light};

  border-radius: ${({ visible }) => (visible ? "50%" : "16px")};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text_primary};

  border: none;

  text-align: center;
  background-size: 300% 100%;

  -o-transition: all 400ms ease-in-out;
  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;

  transition: all 400ms ease-in-out;

  &:hover {
    background-position: 150% 0;
    -o-transition: all 400ms ease-in-out;
    -webkit-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;
    -moz-transition: all 0.4s ease-in-out;

    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 0px 10px 1px rgba(65, 132, 234, 0.75);
  }
  &:active {
    transform: scale(0.95);
  }

  outline: none;

  ${mobileSm(css<Props>`
    width: ${({ visible }) => (visible ? "2.5rem" : "8.5rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${mobileMd(css<Props>`
    width: ${({ visible }) => (visible ? "2.5rem" : "17rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${laptop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "18.2rem")};
    height: ${({ visible }) => (visible ? "3rem" : "3rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}

  ${desktop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "20rem")};
    height: ${({ visible }) => (visible ? "3rem" : "rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}
`;

export const ContainerDownloadCV = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    padding: 10px 0;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 25px;

    color: #ffffff;

    text-shadow: -61px 61px 122px rgba(173, 173, 173, 0.2),
      61px -61px 122px rgba(173, 173, 173, 0.2),
      -61px -61px 122px rgba(255, 255, 255, 0.9),
      61px 61px 153px rgba(173, 173, 173, 0.9);
    cursor: pointer;
  }
`;

export const Icon = styled.div<IconProps>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-position: 150% 0;

    box-shadow: ${({ boxShadow }) => `0 0px 10px 1px ${boxShadow}`};

    background: linear-gradient(
      103.59deg,
      rgba(255, 255, 255, 0.01) 15.34%,
      rgba(255, 255, 255, 0.04) 19.99%
    );
    backdrop-filter: blur(20px);
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.4));
    transition: all 250ms ease-in-out;
  }

  img {
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
  transition: all 450ms ease-in-out;

  ${mobileSm(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
  `)}
  ${mobileMd(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
  `)}

  ${mobileLg(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
  `)}
  ${laptop(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 35px;
      height: 35px;
      border-radius: 6px;
    }
  `)}

  ${desktop(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 50px;
      height: 50px;
      border-radius: 6px;
    }
  `)}
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

export const ContentIcon = styled.div<Partial<Props>>`
  cursor: pointer;
  height: 50px;

  img,
  svg {
    margin: 0 15px;
    width: 35px;
    &:hover {
      transform: scale(1.1);
    }
    transition: all 450ms;
  }
`;
