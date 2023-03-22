import styled, { css } from "styled-components";

interface Props {
  type: "name" | "profession" | "role";
  iconSize: number;
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
};

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;

  width: 50%;
  height: 100%;
`;

export const Title = styled.h1<Partial<Props>>`
  ${({ type }) => titleVariants[type!] || titleVariants.name};

  font-size: ${({ theme }) => theme.font.size.xxl}px;

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.text_gradient})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  margin: 15px 0 0 10px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 400px;
  margin: auto auto 20px 0px;
`;

export const Icon = styled.div<Partial<Props>>`
  transition: all 450ms;
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: auto;
  padding-top: 49px;

  width: 80%;
  transition: all 450ms;
`;

export const Button = styled.button<Partial<Props>>`
  width: ${({ visible }) => (visible ? "3rem" : "9rem")};
  height: ${({ visible }) => (visible ? "3rem" : "2.5rem")};

  font-size: ${({ theme }) => theme.font.size.md}px;
  font-weight: ${({ theme }) => theme.font.weight.light};

  border-radius: ${({ visible }) => (visible ? "50%" : "14px")};

  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text_primary};

  margin: 20px;
  border: none;

  text-align: center;
  background-size: 300% 100%;

  -o-transition: all 400ms ease-in-out;
  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;

  transition: all 400ms ease-in-out;

  span {
    max-width: 100%;
  }

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

  &:focus {
    outline: none;
  }
`;
