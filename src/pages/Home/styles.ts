import styled, { css } from "styled-components";
import { textFlipDown, textFlipUp } from "../../styles/animations/flipText";
import { devices } from "../../styles/globals";

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
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: relative;

  z-index: 20;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100vh;
  width: 50%;
`;

export const Title = styled.h1<Partial<Props>>`
  ${({ type }) => titleVariants[type!] || titleVariants.name};

  font-size: ${({ theme, visible }) =>
    !visible ? theme.font.size.xl : theme.font.size.lg}em;
  font-family: ${({ visible }) => visible && "Libre Franklin"};

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.text_gradient})`};
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
      visible
        ? css`
            ${textFlipDown}
          `
        : css`
            ${textFlipUp}
          `}
    400ms ease-in;

  span {
    font-weight: 400;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 30%;
  width: 90%;
  transition: all 450ms;
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
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  left: 30px;
  .modal {
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    transition: all 450ms;
  }
`;

export const ContentIcon = styled.div<Partial<Props>>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 70px;

  img {
    margin: 0 15px;
    width: 35px;
    &:hover {
      transform: scale(1.1);
    }
    transition: all 450ms;
  }
`;
