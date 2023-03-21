import styled from "styled-components";

interface Props {
  isOpen: boolean;
  index: number;
  boxShadow: string;
}

export const Container = styled.div`
  width: 35rem;
  height: 35rem;
  border-radius: 20rem;
  position: relative;
  z-index: 1;
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
  position: absolute;
  left: 0;
  transform: ${({ index, isOpen }) =>
    isOpen && `rotate(calc(293deg / 15 * ${index}))`};

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.8s ease-in-out;
  transform-origin: 280px;

  &:hover {
    box-shadow: ${({ boxShadow }) => boxShadow};
    border-radius: 50%;
  }

  img {
    border: none;
    outline: none;
    background-color: transparent;
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
`;
