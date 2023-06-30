import styled, { css } from "styled-components";
import { easeIn, easeOut } from "../../styles/animations/easeInAndOut";
import {
  desktop,
  laptop,
  laptopM,
  mobileLg,
  mobileMd,
  mobileSm,
} from "../../styles/globals";

interface Props {
  type: "name" | "profession" | "role" | "description";
  visible: boolean;
  boxShadow: string;
}

interface ScrollProps {
  scrollPosition: boolean;
}

interface IconProps {
  visible: boolean;
  index: number;
  boxShadow: string;
}

const titleVariants = {
  name: css`
    font-weight: ${({ theme }) => theme.font.weight.regular};
  `,
  profession: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
  role: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
  description: css`
    font-weight: ${({ theme }) => theme.font.weight.light};
  `,
};

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex: 1;
  ${mobileSm(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)}
  ${mobileMd(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `)}

  ${mobileLg(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `)}

  ${laptop(css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `)}

  ${desktop(css`
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
  `)}
`;
export const Title = styled.h1<Partial<Props>>`
  ${({ type }) => titleVariants[type!] || titleVariants.name};
  font-size: ${({ theme, visible }) =>
    visible ? theme.font.size.lg : theme.font.size.xl}em;
  font-family: ${({ visible }) => visible && "Raleway"};

  background: ${({ theme, visible }) =>
    !visible ? `linear-gradient(${theme.colors.text_gradient})` : "#F1F8F3"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  transform: ${({ visible }) =>
    visible ? "rotateX(-180deg)" : "rotateX(0deg)"};

  transition: transform 200ms;
  transform-style: preserve-3d;
  -webkit-font-smoothing: antialiased;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.04);

  animation: ${({ visible }) =>
      !visible
        ? css`
            ${easeIn}
          `
        : css`
            ${easeOut}
          `}
    400ms ease-in;

  div {
    height: 100%;
    font-weight: 600;
  }

  ${mobileSm(css<Props>`
    font-size: ${({ visible }) => (visible ? "1rem" : "2rem")};
    text-align: center;
  `)}

  ${mobileMd(css<Props>`
    font-size: ${({ visible }) => (visible ? "1rem" : "2.2rem")};
    text-align: center;
  `)}

  ${laptop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};

    font-size: 4em;
  `)}

  ${desktop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};
    font-size: ${({ theme, visible }) =>
      visible ? theme.font.size.lg : theme.font.size.xl}em;
  `)}
`;

export const ContentTitle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 80px;

  ${mobileSm(css`
    width: 90%;
  `)}
  ${mobileMd(css``)}

  ${mobileLg(css``)}
  ${laptop(css`
    padding-left: 20px;
    justify-content: flex-start;
    width: 60%;
  `)}

  ${desktop(css`
    padding-left: 20px;
    justify-content: flex-start;
    width: 60%;
  `)}
`;

export const ContentPhoto = styled.div`
  padding-right: 95px;
  ${mobileSm(css`
    width: 100%;
    height: 100vh;
    padding-right: 75px;
  `)}
  ${mobileMd(css`
    width: 100%;
    height: 100vh;
    padding-right: 80px;
  `)}

  ${mobileLg(css`
    width: 100%;
    height: 100vh;
  `)}
  ${laptop(css`
    width: 40%;
    height: 100vh;
  `)}

  ${desktop(css``)}
`;

export const ContainerButton = styled.div`
  transition: all 450ms;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
  ${mobileSm(css<Props>`
    align-items: center;
    justify-content: center;
    height: 60px;
  `)}

  ${mobileMd(css<Props>`
    align-items: center;
    justify-content: center;
    height: 60px;
  `)}

  ${laptop(css<Props>`
    align-items: center;
    justify-content: center;
  `)}

  ${laptopM(css<Props>`
    align-items: flex-start;
    height: 100px;
  `)}

${desktop(css`
    align-items: flex-start;
    height: 100px;
  `)}
`;

export const Button = styled.button<Partial<Props>>`
  width: ${({ visible }) => (visible ? "3rem" : "15rem")};
  height: ${({ visible }) => (visible ? "3rem" : "5rem")};

  font-size: ${({ theme }) => theme.font.size.sm}em;
  font-weight: ${({ theme }) => theme.font.weight.light};

  border-radius: ${({ visible }) => (visible ? "50%" : "16px")};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text_primary};

  border: none;

  text-align: center;
  background-size: 300% 100%;

  -o-transition: all 400ms ease-in-out;
  -webkit-transition: all 400ms ease-in-out;
  -moz-transition: all 400ms ease-in-out;

  transition: all 400ms ease-in-out;

  &:hover {
    background-position: 150% 0;
    -o-transition: all 400ms ease-in-out;
    -webkit-transition: all 400ms ease-in-out;
    transition: all 400ms ease-in-out;
    -moz-transition: all 0.4s ease-in-out;

    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 0px 10px 1px rgba(65, 132, 234, 0.75);
  }
  &:active {
    transform: scale(0.95);
  }

  outline: none;

  ${mobileSm(css<Props>`
    width: ${({ visible }) => (visible ? "2.5rem" : "6.5rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${mobileMd(css<Props>`
    width: ${({ visible }) => (visible ? "2.5rem" : "15rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${laptop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "18.2rem")};
    height: ${({ visible }) => (visible ? "3rem" : "3rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}

  ${desktop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "18.2rem")};
    height: ${({ visible }) => (visible ? "3rem" : "rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}
`;

export const ContentAboutMe = styled.main<Partial<Props>>`
  width: 98%;
  flex: ${({ visible }) => (visible ? "80em" : "0em")};
  transition: flex 400ms ease-in-out;

  overflow: hidden;
  background-color: #222121;
  /* box-shadow: 1px 1px 1px rgb(0, 200, 0, 0.9); */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  div {
    margin: 0 5px;
    padding: 15px 0;
    height: 400px;
  }

  .about-me {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    h1 {
      line-height: 35px;
      font-size: 25px;
      color: gray;
      font-family: "Montserrat";
      font-weight: bold;
      padding: 0 20px;
    }
  }
  .about-tools {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    border: 1px;
    box-shadow: ${({ boxShadow }) => `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 1.5px 10px ${boxShadow},
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 1.8px 33.4px ${boxShadow},
    0 100px 80px rgba(0, 0, 0, 0.12)`};
    border-radius: 6px;
    header {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      h1 {
        color: gray;
      }
    }
    div {
      margin: 2px 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        color: gray;
        width: 400px;
        font-size: 20px;
        font-family: "Montserrat";
      }
    }
  }
  .tools {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;

    div {
      height: 75px;
      border-radius: 50%;
      flex: 1;
    }

    .card-tools {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 350px;
      height: 200px;
    }
  }

  ${mobileSm(css<Partial<Props>>`
    width: 90%;

    .about-me {
      h1 {
        line-height: 35px;
        font-size: 18px;
        text-align: center;
      }
    }
    flex: ${({ visible }) => (visible ? "75em" : "0em")};
  `)}

  ${mobileMd(css<Partial<Props>>`
    flex: ${({ visible }) => (visible ? "75em" : "0em")};

    .about-me {
      h1 {
        line-height: 35px;
        font-size: 15px;
        text-align: center;
      }
    }
  `)}

  ${laptop(css<Partial<Props>>`
    width: 95%;

    flex: ${({ visible }) => (visible ? "30em" : "0em")};
    flex-wrap: nowrap;

    .about-me {
      h1 {
        line-height: 35px;
        font-size: 20px;
        text-align: center;
      }
    }
  `)}

  ${desktop(css<Partial<Props>>`
    flex: ${({ visible }) => (visible ? "28em" : "0em")};
    .about-me {
      h1 {
        width: 500px;
        line-height: 35px;
        font-size: 25px;
        text-align: left;
      }
    }
  `)}
`;

export const Icon = styled.div<IconProps>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-position: 150% 0;

    box-shadow: ${({ boxShadow }) => `0 0px 10px 1px ${boxShadow}`};

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

  ${mobileSm(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
  `)}
  ${mobileMd(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
  `)}

  ${mobileLg(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
  `)}
  ${laptop(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 35px;
      height: 35px;
      border-radius: 6px;
    }
  `)}

  ${desktop(css`
    width: 50px;
    height: 50px;
    img {
      border: none;
      outline: none;
      width: 50px;
      height: 50px;
      border-radius: 6px;
    }
  `)}
`;

export const ContentScroll = styled.div<ScrollProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  place-items: center;
  flex-direction: column;
  height: 100px;

  transition: all 450ms;

  .arrows {
    transform: ${({ scrollPosition }) =>
      scrollPosition ? "rotate(-180deg)" : "rotate(0deg)"};
    transition: all 850ms;
    margin-top: 4px;
    width: 100%;
    margin-right: 1px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`;

export const ContentIcon = styled.div<Partial<Props>>`
  cursor: pointer;
  height: 50px;

  img,
  svg {
    margin: 0 15px;
    width: 35px;
    &:hover {
      transform: scale(1.1);
    }
    transition: all 450ms;
  }
`;
