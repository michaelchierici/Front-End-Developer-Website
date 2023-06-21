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
      box-shadow: inset 0 0 20px rgb(247, 255, 255, 8%);
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(217, 217, 217, 60%);
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
      box-shadow: inset 0 0 20px rgb(247, 255, 255, 8%);
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(217, 217, 217, 60%);
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
      box-shadow: inset 0 0 20px rgb(247, 255, 255, 8%);
      border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(217, 217, 217, 60%);
      border-radius: 8px;
    }
    img {
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
  flex-direction: row;
  .card-tools {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 250px;
      flex: 1;
    }
    h1 {
      margin-top: 20px;
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
    justify-content: flex-start;
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

  img {
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

    h2 {
      text-align: center;
      font-size: 12px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 60px;
    }
  `)}
  ${mobileMd(css`
    flex-direction: row;

    h1,
    h2 {
      font-size: 15px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 60px;
    }
    display: flex;

    img {
      width: 200px;
    }
  `)}
  ${laptop(css`
    flex-direction: row;
    h1 {
      font-size: 15px;
      font-family: "Montserrat";
      font-weight: 400;
      padding: 0 60px;
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
      font-size: 25px;
      font-family: "Montserrat";
      font-weight: 400;
    }

    img {
      width: 100%;
      height: 100%;
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
