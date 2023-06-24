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

interface ScrollProps {
  scrollPosition: boolean;
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
  position: relative;
  ${mobileSm(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)}
  ${mobileMd(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)}

  ${mobileLg(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `)}

  ${laptop(css`
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  `)}

  ${desktop(css`
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
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

export const ContentCardResume = styled.div`
  position: relative;
  width: 60%;
  height: 100%;
  overflow: hidden;
  padding-top: 80px;
  padding-left: 20px;

  ${mobileSm(css`
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
  padding-right: 80px;
  ${mobileSm(css`
    width: 100%;
    height: 100vh;
  `)}
  ${mobileMd(css`
    width: 100%;
    height: 100vh;
  `)}

  ${mobileLg(css`
    width: 100%;
    height: 100vh;
  `)}
  ${laptop(css`
    width: 40%;
    height: 100vh;
  `)}

  ${desktop(css`
    width: 40%;
    height: 100vh;
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

export const ContentScroll = styled.div<ScrollProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  place-items: center;
  flex-direction: column;
  height: 100px;

  transition: all 450ms;

  .arrows {
    transform: ${({ scrollPosition }) =>
      scrollPosition ? "rotate(-180deg)" : "rotate(0deg)"};
    transition: all 850ms;
    margin-top: 4px;
    width: 100%;
    margin-right: 1px;
  }
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
