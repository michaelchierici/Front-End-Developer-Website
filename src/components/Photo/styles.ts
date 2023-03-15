import styled from "styled-components";

interface Props {
  ammount: number;
}

export const Container = styled.div`
  width: 35rem;
  height: 35rem;
  border-radius: 20rem;
  position: relative;
  z-index: 0;
  right: 9.5%;

  margin-right: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(428.5deg);

  padding: 8px;
`;

export const Circle = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background-color: royalblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div<Props>`
  cursor: pointer;
  transition: all 0.8s;
  transform-origin: 280px;
  position: absolute;
  left: 0;
  transform: ${({ ammount }) => `rotate(calc(293deg / 15 * ${ammount}))`};

  &:hover {
    transform: scale(0.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;
