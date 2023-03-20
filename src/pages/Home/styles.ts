import styled, { css } from "styled-components";

interface Props {
  type: "name" | "profession" | "role";
  iconSize: number;
  isOpenResume: boolean;
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

export const Card = styled.div`
  width: 90%;

  position: relative;
  z-index: 10;

  margin-top: 60px;

  background: linear-gradient(
    103.59deg,
    rgba(255, 255, 255, 0.01) 15.34%,
    rgba(255, 255, 255, 0.04) 79.99%
  );
  backdrop-filter: blur(20px);
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.2));

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    background: ${({ theme }) => `linear-gradient(${theme.colors.gradient})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    mask: exclude;
    pointer-events: none;
  }
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
  width: ${({ isOpenResume }) => (isOpenResume ? "3rem" : "9rem")};
  height: ${({ isOpenResume }) => (isOpenResume ? "3rem" : "2.5rem")};

  font-size: ${({ theme }) => theme.font.size.md}px;
  font-weight: ${({ theme }) => theme.font.weight.light};

  border-radius: ${({ isOpenResume }) => (isOpenResume ? "50%" : "14px")};
  border: none;

  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text_primary};

  transition: all 450ms;

  &:hover {
    background: ${({ theme }) => `linear-gradient(${theme.colors.gradient})`};
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 0.5rem 1rem rgba(black, 0.15);
    transform: scale(0.95);
  }
`;
