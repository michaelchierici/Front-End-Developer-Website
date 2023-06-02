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

interface Props {
  type: "name" | "profession" | "role" | "description";
  visible: boolean;
}

const titleVariants = {
  name: css`
    font-weight: ${({ theme }) => theme.font.weight.main};
  `,
  profession: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
  role: css`
    font-weight: ${({ theme }) => theme.font.weight.regular};
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
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  ${laptop(css`
    justify-content: flex-start;
  `)}

  ${desktop(css`
    justify-content: flex-start;
  `)}
`;
export const Title = styled.h1<Partial<Props>>`
  ${({ type }) => titleVariants[type!] || titleVariants.name};

  font-size: ${({ theme, visible }) =>
    !visible ? theme.font.size.xl : theme.font.size.lg}em;
  font-family: ${({ visible }) => visible && "Raleway"};

  background: ${({ theme, visible }) =>
    !visible ? `linear-gradient(${theme.colors.text_gradient})` : "#F1F8F3"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  margin: 15px 0 0 10px;
  transform: ${({ visible }) =>
    visible ? "rotateX(-180deg)" : "rotateX(0deg)"};

  transition: transform 200ms;
  transform-style: preserve-3d;
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.04);

  animation: ${({ visible }) =>
      !visible
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
  text-align: start;

  ${mobileSm(css<Props>`
    font-size: ${({ visible }) => (visible ? "1.2rem" : "2rem")};
    font-weight: 600;
  `)}

  ${mobileMd(css<Props>`
    font-size: ${({ visible }) => (visible ? "1.2rem" : "2rem")};
    font-weight: 600;
  `)}

  ${laptop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};

    font-size: ${({ theme, visible }) =>
      !visible ? theme.font.size.xl : theme.font.size.md}em;
  `)}

  ${desktop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};
    font-size: ${({ theme, visible }) =>
      !visible ? theme.font.size.xl : theme.font.size.lg}em;
  `)}
`;

export const CardContent = styled.div`
  position: relative;
  width: 60%;

  overflow: hidden;
  padding-top: 80px;
  padding-left: 20px;

  ${mobileSm(css`
    padding-left: 0px;
    justify-content: center;
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
    width: 60%;
  `)}
`;

export const ContentPhoto = styled.div`
  ${mobileSm(css`
    display: none;
  `)}
  ${mobileMd(css`
    display: none;
  `)}

  ${mobileLg(css`
    display: none;
  `)}
  ${laptop(css`
    width: 1%;
    height: 70vh;
    display: flex;
  `)}

  ${desktop(css`
    width: 40%;
    height: 100vh;
    display: flex;
  `)}
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100px;
  transition: all 450ms;
  ${mobileSm(css<Props>`
    align-items: center;
    justify-content: center;
  `)}

  ${mobileMd(css<Props>`
    align-items: center;
    justify-content: center;
  `)}

  ${laptop(css<Props>`
    align-items: center;
    justify-content: center;
  `)}

  ${laptopM(css<Props>`
    align-items: flex-start;
  `)}

${desktop(css`
    align-items: flex-start;
  `)}
`;

export const Button = styled.button<Partial<Props>>`
  width: ${({ visible }) => (visible ? "3rem" : "10rem")};
  height: ${({ visible }) => (visible ? "3rem" : "3rem")};

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
    width: ${({ visible }) => (visible ? "2.5rem" : "6rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${mobileMd(css<Props>`
    width: ${({ visible }) => (visible ? "2.5rem" : "8rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${laptop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "10rem")};
    height: ${({ visible }) => (visible ? "3rem" : "3rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}

  ${desktop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "10rem")};
    height: ${({ visible }) => (visible ? "3rem" : "3rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}
`;

export const ContainerProject = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const ContentProjectInfo = styled.section`
  width: 90%;
  height: 80vh;
  border-radius: 6px;
  background-color: #222121;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: visible;

  ::-webkit-scrollbar {
    width: 5px;
    transition: all 250ms;
    scroll-behavior: smooth;
    position: relative;
    z-index: 0;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 20px rgb(247, 255, 255, 8%);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(217, 217, 217, 60%);
    border-radius: 8px;
  }
`;

export const ContentCardProject = styled.div`
  background-color: #ddd;
  width: 250px;
  height: 90%;
  margin: 10px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .modal {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    transition: all 450ms;
  }
`;

export const ContentIcon = styled.div<Partial<Props>>`
  cursor: pointer;
  height: 50px;

  img {
    margin: 0 15px;
    width: 35px;
    &:hover {
      transform: scale(1.1);
    }
    transition: all 450ms;
  }
`;
