import styled from "styled-components";

interface Props {
  type?: "name" | "dev" | "front";
  iconSize?: number
}

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

export const CardTitle = styled.div`
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
    pointer-events: none;
  }
`;

export const Title = styled.h1<Props>`
  font-weight: ${({ theme, type }) =>
    type === "name" ? theme.font.weight.regular : theme.font.weight.light};

  font-size: ${({ theme }) => theme.font.size.xxl}px;

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.text_gradient})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  margin: 15px 0 0 10px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 400px;
  margin: auto auto 20px 0px;
  
  
`;

export const Icon = styled.div<Props>`
  transition: all 450ms;
  width: ${({iconSize}) => iconSize}px;
  height: ${({iconSize}) => iconSize}px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }`;