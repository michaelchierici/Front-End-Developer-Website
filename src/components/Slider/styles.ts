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
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;

  .chevron-left {
    transform: rotate(180deg);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    ${mobileSm(css`
      width: 100px;
    `)}
    ${mobileMd(css`
      width: 80px;
    `)}
  ${laptop(css`
      width: 100%;
    `)}
  ${desktop(css`
      width: 100%;
    `)}
  }

  .chevron-right {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    ${mobileSm(css`
      width: 100px;
    `)}
    ${mobileMd(css`
      width: 80px;
    `)}
  ${laptop(css`
      width: 100%;
    `)}
  ${desktop(css`
      width: 100%;
    `)}
  }
`;

export const Content = styled.section`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  svg {
    &:hover {
      transform: scale(1.1);
    }
    transition: all 450ms;
    cursor: pointer;
  }
`;

export const Board = styled.div<SlideProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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

  ${mobileSm(css`
    width: 100%;
  `)}
  ${mobileMd(css`
    width: 100%;
  `)}
  ${laptop(css`
    width: 600px;
  `)}
  ${desktop(css`
    width: 600px;
  `)}
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  font-size: 30px;
  font-family: "Montserrat";
  padding: 0 10px;
  flex: 1;

  h1 {
    text-align: center;
    font-size: 25px;
    font-family: "Montserrat";
    font-weight: 400;
    margin-top: auto;
  }

  ${mobileSm(css`
    flex-direction: row;

    h1,
    h2 {
      text-align: center;
      font-size: 15px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 90px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  `)}
  box-shadow: none;
  ${mobileMd(css`
    flex-direction: row;
    box-shadow: none;

    h1,
    h2 {
      font-size: 15px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 90px;
    }
    display: flex;

    img {
      width: 80%;
    }
  `)}
  ${laptop(css`
    padding: 10px 0;
    box-shadow: none;

    flex-direction: row;
    h1 {
      font-size: 15px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 60px;
      margin-bottom: 20px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  `)}
  ${desktop(css`
    flex-direction: row;
    h1,
    h2 {
      font-size: 23px;
      font-family: "Montserrat";
      font-weight: 400;
      text-align: left;
    }

    img {
      width: 95%;
      border-radius: 6px;
    }
  `)}
`;

export const ChevronButton = styled.button`
  border: none;
  flex: 1;
  background-color: transparent;

  &[disabled] {
    opacity: 0.5;
  }
`;
