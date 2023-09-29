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
import SVGBackground from "../../assets/images/projects_background.svg";

interface Props {
  type: "name" | "profession" | "role" | "description";
  visible: boolean;
  hasAnimation: boolean;
  boxShadow: string;
  color: string;
  hasHoveredIcon: boolean;
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
  height: 100%;
  ${mobileSm(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 315px;
      padding: 15px;
    }
  `)}
  ${mobileMd(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 315px;
      padding: 15px;
    }
  `)}

  ${mobileLg(css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 315px;
      padding: 15px;
    }
  `)}

  ${laptop(css`
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `)}

  ${desktop(css`
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    .photo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      padding-top: 100px;
      img {
        width: 459px;
        height: 402.13px;
        padding: 0;
      }
    }
  `)}
`;
export const ContainerTitle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

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
    width: 100%;
    padding-top: 100px;
  `)}
`;
export const Title = styled.h1<Partial<Props>>`
  ${({ type }) => titleVariants[type!] || titleVariants.name};
  font-size: ${({ theme }) => theme.font.size.xl}em;

  background: linear-gradient(109.87deg, #16db65 15.49%, #1462bc 60.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation: ${({ hasAnimation }) =>
      !hasAnimation
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
    font-size: 2rem;
    text-align: center;
  `)}

  ${mobileMd(css<Props>`
    font-size: 2.2rem;
    text-align: center;
  `)}

  ${laptop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};

    font-size: 4em;
  `)}

  ${desktop(css<Props>`
    ${({ type }) => titleVariants[type!] || titleVariants.name};
    font-size: ${({ theme }) => theme.font.size.xl}em;
    text-align: left;
  `)}
`;

export const ContainerAboutMe = styled.section`
  width: 600px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom-width: 1px;
  border-image: linear-gradient(to right, #30d95f 0%, #2976c6 100%) 0 0 100% 0;
  border-bottom-style: solid;

  ${mobileSm(css`
    width: 300px;
    height: 280px;
    justify-content: flex-start;
  `)}
  ${mobileMd(css`
    width: 300px;
    height: 280px;
    justify-content: flex-start;
  `)}

  ${mobileLg(css`
    width: 300px;
    height: 280px;
    justify-content: flex-start;
  `)}
  ${laptop(css`
    width: 600px;
    height: 400px;
    justify-content: center;
  `)}

  ${desktop(css`
    width: 600px;
    height: 400px;
    justify-content: center;
  `)}


  .content-experience {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-right: auto;

    ${mobileSm(css`
      margin: 0;
    `)}
    ${mobileMd(css`
      margin: 0;
    `)}

  ${mobileLg(css`
      margin: 0;
    `)}
  ${laptop(css`
      margin-right: auto;
    `)}

  ${desktop(css`
      margin-right: auto;
    `)}
    h1 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 60px;

      color: #ffffff;

      text-shadow: 0px 0px 126.945px #476cff, 0px 0px 72.54px #476cff,
        0px 0px 42.315px #476cff, 0px 0px 21.1575px #476cff,
        0px 0px 6.045px #476cff, 0px 0px 3.0225px #476cff;

      ${mobileSm(css`
        font-size: 40px;
      `)}
      ${mobileMd(css`
        font-size: 40px;
      `)}

  ${mobileLg(css`
        font-size: 40px;
      `)}
  ${laptop(css`
        font-size: 60px;
      `)}

  ${desktop(css`
        font-size: 60px;
      `)}
    }
    h3 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-size: 30px;
      line-height: 24px;
      margin-left: auto;
      color: #ffffff;

      text-shadow: 2px 10px 10px #000000;

      ${mobileSm(css`
        font-size: 25px;
      `)}
      ${mobileMd(css`
        font-size: 25px;
      `)}

  ${mobileLg(css`
        font-size: 25px;
      `)}
  ${laptop(css`
        font-size: 30px;
      `)}

  ${desktop(css`
        font-size: 30px;
      `)}
    }
  }
  .content-graduation {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin-left: auto;

    ${mobileSm(css`
      margin-left: 0;
    `)}
    ${mobileMd(css`
      margin-left: 0;
    `)}

  ${mobileLg(css`
      margin-left: 0;
    `)}
  ${laptop(css`
      margin-left: auto;
    `)}

  ${desktop(css`
      margin-left: auto;
    `)}
    .neon-title {
      font-family: "Lato";
      font-weight: 400;
      font-size: 40px;
      line-height: 28px;
      padding: 5px 0;
      color: #ffffff;

      text-shadow: 0px 0px 153.468px #0081fa, 0px 0px 87.696px #0081fa,
        0px 0px 51.156px #0081fa, 0px 0px 25.578px #0081fa,
        0px 0px 7.308px #0081fa, 0px 0px 3.654px #0081fa;

      font-family: "Lato";
      font-weight: 300;
      font-size: 40px;

      color: #ffffff;

      ${mobileSm(css`
        font-size: 30px;
      `)}
      ${mobileMd(css`
        font-size: 30px;
      `)}

  ${mobileLg(css`
        font-size: 30px;
      `)}
  ${laptop(css`
        font-size: 40px;
      `)}

  ${desktop(css`
        font-size: 40px;
      `)}
    }
    h3 {
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-size: 40px;

      color: #ffffff;

      ${mobileSm(css`
        font-size: 30px;
        text-align: center;
      `)}
      ${mobileMd(css`
        font-size: 30px;
        text-align: center;
      `)}

  ${mobileLg(css`
        font-size: 30px;
        text-align: center;
      `)}
  ${laptop(css`
        font-size: 40px;
      `)}

  ${desktop(css`
        font-size: 40px;
      `)}
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 850px;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  margin: 5px 0;
  ${mobileSm(css`
    svg {
      width: 320px;
    }
  `)}

  ${mobileMd(css`
    svg {
      width: 320px;
    }
  `)}
  ${laptop(css`
    svg {
      width: 350px;
    }
  `)}

  ${desktop(css`
    svg {
      width: 380px;
    }
  `)}
`;

export const ContainerSkills = styled.div<Partial<Props>>`
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: ${({ visible }) => (visible ? "35em" : "0em")};

  transition: all 400ms;
  background-color: #222121;
  border-radius: 8px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.4);
  margin: 15px 0;

  .container-skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    h1 {
      color: #fff;
      font-size: 35px;
      margin-top: 20px;
      font-family: "Montserrat";
      font-weight: 500;
    }
  }
  .content-skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .animation-title {
    background-color: transparent;
  }

  .line-skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  ${mobileSm(css`
    width: 350px;

    .tools {
      h1 {
        color: #fff;
        font-size: 25px;
      }
    }
    .line-skills {
      width: 80px;
    }
  `)}
  ${mobileMd(css`
    width: 350px;
    .tools {
      h1 {
        color: #fff;
        font-size: 25px;
        text-align: center;
        width: 100%;
      }
    }
    .line-skills {
      width: 80px;
    }
  `)}

  ${mobileLg(css`
    width: 380px;

    .tools {
      h1 {
        color: #fff;
        font-size: 25px;
      }
    }
    .line-skills {
      width: 80px;
    }
  `)}
  ${laptop(css`
    width: 600px;

    .tools {
      h1 {
        color: #fff;
        font-size: 35px;
      }
    }
    .line-skills {
      flex: 1;
    }
  `)}

  ${desktop(css`
    width: 770px;

    .tools {
      h1 {
        color: #fff;
        font-size: 35px;
        text-align: center;
      }
    }
    .line-skills {
      flex: 1;
    }
  `)}
`;

export const LineBorder = styled.div<Partial<Props>>`
  background-color: ${({ color }) => color};
  padding: 1px;
  ${({ hasHoveredIcon }) =>
    hasHoveredIcon &&
    css`
      animation: ${moveRight} 400ms;
    `};
`;

export const IconSkillsCard = styled.div<IconProps>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 20px;
  padding: 20px;

  &:hover {
    background-position: 150% 0;

    box-shadow: ${({ boxShadow }) => `0 0px 10px 1px ${boxShadow}`};

    background: linear-gradient(
      103.59deg,
      rgba(255, 255, 255, 0.01) 15.34%,
      rgba(255, 255, 255, 0.04) 19.99%
    );
    filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.4));
    transition: box-shadow 250ms;
    border-radius: 10%;
  }

  img {
    border: none;
    outline: none;
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
  transition: all 450ms;

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
    width: 60px;
    height: 60px;
    img {
      border: none;
      outline: none;
      width: 45px;
      height: 45px;
      border-radius: 8px;
    }
  `)}

  ${desktop(css`
    width: 80px;
    height: 60px;
    img {
      border: none;
      outline: none;
      width: 40px;
      height: 60px;
      border-radius: 6px;
    }
  `)}
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  transition: all 450ms;

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
  width: ${({ visible }) => (visible ? "3rem" : "15.5rem")};
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
    width: ${({ visible }) => (visible ? "2.5rem" : "8.5rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${mobileMd(css<Props>`
    width: ${({ visible }) => (visible ? "2.5rem" : "17rem")};
    height: ${({ visible }) => (visible ? "2.5rem" : "2.5rem")};
    font-size: 1.2em;
    font-weight: 300;
  `)}

  ${laptop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "20rem")};
    height: ${({ visible }) => (visible ? "3rem" : "3rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}

  ${desktop(css<Props>`
    width: ${({ visible }) => (visible ? "3rem" : "20rem")};
    height: ${({ visible }) => (visible ? "3rem" : "rem")};

    font-size: ${({ theme }) => theme.font.size.sm}em;
    font-weight: ${({ theme }) => theme.font.weight.light};
  `)}
`;

export const ContainerDownloadCV = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    text-decoration: none;
    padding: 10px 0;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 25px;

    color: #ffffff;

    text-shadow: -61px 61px 122px rgba(173, 173, 173, 0.2),
      61px -61px 122px rgba(173, 173, 173, 0.2),
      -61px -61px 122px rgba(255, 255, 255, 0.9),
      61px 61px 153px rgba(173, 173, 173, 0.9);
    cursor: pointer;
  }

  ${mobileSm(css`
    padding: 20px 0;
  `)}
  ${mobileMd(css`
    padding: 20px 0;
  `)}
  ${laptop(css`
    padding: 0;
  `)}
  ${desktop(css`
    padding: 0;
  `)}
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-weight: 300;
    color: #ffffff;
    width: 100%;
    height: 100px;
    text-align: center;
    font-size: 3em;
    padding: 20px 0;
    margin-top: 50px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;

    color: #ffffff;

    text-shadow: 0px 0px 126.945px #476cff, 0px 0px 72.54px #476cff,
      0px 0px 42.315px #476cff, 0px 0px 21.1575px #476cff,
      0px 0px 6.045px #476cff, 0px 0px 3.0225px #476cff;
  }
  ${mobileSm(css`
    h1 {
      font-size: 2.3em;
    }
  `)}
  ${mobileMd(css`
    h1 {
      font-size: 2.3em;
    }
  `)}
  ${laptop(css`
    h1 {
      font-size: 3em;
    }
  `)}
  ${desktop(css`
    h1 {
      font-size: 4em;
    }
  `)}
`;

export const ContainerProjects = styled.div`
  width: 100%;
  background-image: url(${SVGBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mobileSm(css`
    height: 300px;
  `)}
  ${mobileMd(css`
    height: 300px;
  `)}
  ${laptop(css`
    height: 800px;
  `)}
  ${desktop(css`
    height: 900px;
  `)}
`;

export const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 180px;
`;

export const ContentIcon = styled.div<Partial<Props>>`
  cursor: pointer;
  height: 70px;
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
