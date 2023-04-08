import styled from "styled-components";

interface Props {
  isOpen: boolean;
  index: number;
  boxShadow: string;
}

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
`;

export const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  transform: rotate(428.6deg);
  margin-top: 15px;
`;

export const Icon = styled.div<Props>`
  cursor: pointer;
  position: absolute;

  transform: ${({ index, isOpen }) =>
    isOpen && `rotate(calc(293deg / 15 * ${index}))`};

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform-origin: 320px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  width: 65px;
  height: 65px;

  &:hover {
    background-position: 150% 0;

    box-shadow: ${({ boxShadow }) => `0 0px 10px 1px ${boxShadow}`};
    margin-bottom: 10px;

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
`;
