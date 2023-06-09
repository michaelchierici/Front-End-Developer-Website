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
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

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
    flex: 1;
    align-items: center;
    flex-direction: column;

    .title-tools {
      h1 {
        font-size: 32px;
      }
    }
    .image-tools {
      height: 450px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 400px;
      height: 250px;
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
  height: 600px;
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
      width: 50%;
      height: 100%;
    }
  `)}
  box-shadow: none;
  ${mobileMd(css`
    padding: 15px 0;
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
      width: 55%;
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
      width: 50%;
      height: 100%;
      margin-bottom: 20px;
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
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
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
