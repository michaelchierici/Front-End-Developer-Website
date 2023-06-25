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
  width: 95%;
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

    width: 8%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
  }

  .chevron-right {
    position: absolute;
    right: 0;

    width: 8%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${mobileSm(css`
    padding: 0 30px;
    .chevron-left {
      width: 8%;
    }

    .chevron-right {
      width: 8%;
    }
  `)}
  ${mobileMd(css`
    padding: 0 30px;

    .chevron-left {
      width: 8%;
    }

    .chevron-right {
      width: 8%;
    }
  `)}
  ${laptop(css`
    padding: 0 50px;

    .chevron-left {
      width: 8%;
    }

    .chevron-right {
      width: 8%;
    }
  `)}
  ${desktop(css`
    padding: 0 80px;

    .chevron-left {
      width: 5%;
    }

    .chevron-right {
      width: 5%;
    }
  `)}
`;

export const Board = styled.div<SlideProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

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
    overflow-y: visible;
    transition: all 200ms ease 2ms;
    ::-webkit-scrollbar {
      width: 5px;
      transition: all 250ms;
      scroll-behavior: smooth;
      position: relative;
      z-index: 0;
    }
    ::-webkit-scrollbar-track {
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
    }
  `)}
  ${mobileMd(css`
    flex-direction: column;
    overflow-y: visible;
    transition: all 200ms ease 2ms;
    display: flex;
    justify-content: flex-start;

    ::-webkit-scrollbar {
      width: 5px;
      transition: all 250ms;
      scroll-behavior: smooth;
      position: relative;
      z-index: 0;
    }
    ::-webkit-scrollbar-track {
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
    }
  `)}
  ${laptop(css`
    flex-direction: column;
    overflow-y: visible;
    transition: all 200ms ease 2ms;
    display: flex;
    justify-content: flex-start;

    ::-webkit-scrollbar {
      width: 5px;
      transition: all 250ms;
      scroll-behavior: smooth;
      position: relative;
      z-index: 0;
    }
    ::-webkit-scrollbar-track {
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `)}
  ${desktop(css`
    flex-direction: row;
  `)}
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex: 1;

  .card-tools {
    width: 100%;
    height: 100%;
    flex-direction: column;

    h1 {
      font-size: 32px;
    }
  }

  ${mobileSm(css`
    flex-direction: column;
  `)}
  ${mobileMd(css`
    flex-direction: column;
  `)}
  ${laptop(css`
    flex-direction: column;
    overflow-y: visible;
    transition: all 200ms ease 2ms;
    display: flex;
    justify-content: center;
  `)}
  ${desktop(css`
    flex-direction: row;
  `)}
`;

export const Card = styled.div`
  width: 100%;
  height: 90%;
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
  svg {
  }

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
      width: 50%;
      height: 100%;
    }
  `)}
  ${mobileMd(css`
    flex-direction: row;

    h1,
    h2 {
      font-size: 15px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 90px;
    }
    display: flex;

    img {
      width: 55%;
    }
  `)}
  ${laptop(css`
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
      width: 50%;
      height: 100%;
      margin-bottom: 20px;
    }
  `)}
  ${desktop(css`
    flex-direction: row;
    h1,
    h2 {
      font-size: 25px;
      font-family: "Montserrat";
      font-weight: 400;
    }

    img {
      width: 100%;
    }
  `)}
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
