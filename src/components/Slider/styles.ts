import styled, { css } from "styled-components";
import {
  easeSlideMoveLeft,
  easeSlideMoveRight,
} from "../../styles/animations/easeInAndOut";
import { desktop, laptop, mobileMd, mobileSm } from "../../styles/globals";

interface SlideProps {
  direction: boolean;
}

export const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.section`
  width: 100%;
  height: 80vh;
  border-radius: 6px;
  background-color: #222121;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: visible;
  position: relative;
  padding: 0 60px;

  svg {
    &:hover {
      transform: scale(1.1);
    }
    transition: all 450ms;
    padding-right: 20px;
    cursor: pointer;
  }

  .chevron-left {
    position: absolute;
    left: 0;

    width: 5%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
  }

  .chevron-right {
    position: absolute;
    right: 0;

    width: 5%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${mobileSm(css`
    padding: 0 30px;
  `)}
  ${mobileMd(css`
    padding: 0 30px;
  `)}
  ${laptop(css`
    padding: 0 50px;
  `)}
  ${desktop(css`
    padding: 0 80px;
  `)}
`;

export const Board = styled.div<SlideProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 200ms ease 2ms;
  div {
    text-align: center;
    transition: transform 400ms ease-in-out;
    animation: ${({ direction }) =>
        direction
          ? css`
              ${easeSlideMoveLeft}
            `
          : css`
              ${easeSlideMoveRight}
            `}
      400ms ease-in-out;
  }
  flex: 1;
  ${mobileSm(css`
    flex-direction: column;
  `)}
  ${mobileMd(css`
    flex-direction: column;
  `)}
  ${laptop(css`
    flex-direction: row;
  `)}
  ${desktop(css`
    flex-direction: row;
  `)}
`;

export const Card = styled.div`
  background-color: royalblue;
  width: 100%;
  height: 90%;
  margin: 10px;
  box-shadow: 0 6px 10px rgb(0, 0, 60);
  border-radius: 4px;

  img {
    width: 50%;
    height: 50%;
  }
`;

export const Borders = styled.div``;

export const ChevronButton = styled.button`
  border: none;
  flex: 1;
  background-color: transparent;

  &[disabled] {
    opacity: 0.5;
  }
`;
