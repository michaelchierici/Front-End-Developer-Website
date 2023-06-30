import Html from "../assets/icons/skills/html.svg";
import Css from "../assets/icons/skills/css.svg";
import JavaScript from "../assets/icons/skills/javascript.svg";
import TypeScript from "../assets/icons/skills/typescript.svg";
import React from "../assets/icons/skills/react.svg";
import Redux from "../assets/icons/skills/redux.svg";
import Styled from "../assets/icons/skills/styled.svg";
import Next from "../assets/icons/skills/next.svg";
import Tailwind from "../assets/icons/skills/tailwind.svg";
import Sass from "../assets/icons/skills/sass.svg";
import Jest from "../assets/icons/skills/jest.svg";
import Figma from "../assets/icons/skills/figma.svg";
import Git from "../assets/icons/skills/git.svg";
import Docker from "../assets/icons/skills/docker.svg";
import Postgres from "../assets/icons/skills/postgre.svg";
import Node from "../assets/icons/skills/node.svg";

export interface SkillsProps {
  id: number;
  name: string;
  description: string;
  element: string;
  icon: string;
  rotate: string;
  color: string;
}

export const iconsFirstRow: SkillsProps[] = [
  {
    id: 15,
    name: "HTML",
    description:
      "Linguagem de marcação da qual sempre descubro que estou aprendendo mais de acordo com o tempo e a experiência do dia a dia.",
    element: Html,
    icon: Html,
    rotate: "-1.2",
    color: "rgba(229, 66, 10, 0.75);",
  },

  {
    id: 14,
    name: "CSS",
    description:
      "Tenho grande familiriadade com css, animações, responsividade, é uma ferramenta do qual tenho uma ótima relação.",
    element: Css,
    icon: Css,
    rotate: "18",
    color: "rgba(65, 132, 284, 1.75);",
  },
  {
    id: 13,
    name: "Javascript",
    description:
      "Mantenho meu foco em javascript como linguagem primária de programação, busco melhorar e estudar cada vez mais, tenho grande experiência com a linguagem e os frameworks mais usados no mercado.",
    element: JavaScript,
    icon: JavaScript,
    rotate: "37.5",
    color: "rgba(241, 192, 53, 1)",
  },
  {
    id: 12,
    name: "Typescript",
    description:
      "Meu projetos são sempre feitos com tipagem utilizando Typescript, encaro Typescript hoje em dia como uma grande ferramenta para manter um código mais limpo e mais legível.",
    element: TypeScript,
    icon: TypeScript,
    rotate: "57",
    color: "rgba(65, 132, 284, 1.75);",
  },
];
export const iconsSecondRow: SkillsProps[] = [
  {
    id: 11,
    name: "React",
    description:
      "Biblioteca da qual tenho maior experiência, sou muito familirizado com React e React Native, conseguindo construir interfaces do zero com muita agilidade, com auxílio de um grande recurso do react que são os hooks e custom hooks.",
    element: React,
    icon: React,
    rotate: "17",
    color: "rgba(22, 127, 177, 1)",
  },
  {
    id: 10,
    name: "Redux",
    description:
      "Para gerenciamento de estado costumo usar Redux ou Redux/Saga/Tool-kit, tenho grande experiência com gerenciamento de estado utilizando essa ferramenta.",
    element: Redux,
    icon: Redux,
    rotate: "94.5",
    color: "rgba(128, 39, 179, 1)",
  },
  {
    id: 9,
    name: "Styled Components",
    description:
      "Ferramente de estilização da qual costumo usar em meus projetos, como dou preferência para fazer meus próprios componentes o styled component acaba ajudando bastante e deixando todo o procedimento mais ágil com sua capacidade de reutilização e configuração de tema global.",
    element: Styled,
    icon: Styled,
    rotate: "115",
    color: "rgba(231, 123, 159, 1)",
  },
  {
    id: 8,
    name: "Next",
    description:
      "Possuo conhecimento básico em Next onde já tive experiência com pequenos projetos.",
    element: Next,
    icon: Next,
    rotate: "135",
    color: "rgba(146, 146, 146, 1);",
  },
];
export const iconsThirdRow: SkillsProps[] = [
  {
    id: 7,
    name: "Tailwind",
    description:
      "Mais uma ferramente de estilização da qual tenho experiência e ajuda bastante para criar interfaces rapidamente.",
    element: Tailwind,
    icon: Tailwind,
    rotate: "140",
    color: "rgba(0, 186, 217, 1)",
  },
  {
    id: 6,
    name: "Sass",
    description:
      "Possuo grande experiência com esse pré-processador de CSS do qual auxilia muito ao escrever códigos SCSS.",
    element: Sass,
    icon: Sass,
    rotate: "181.5",
    color: "rgba(173, 21, 129, 1)",
  },
  {
    id: 5,
    name: "Figma",
    description:
      "Costumo criar meus design de trabalho ou projetos pessoas sempre no figma, para mim é a ferramente perfeita para estruturar designs e compartilhar com o time ou até mesmo com o cliente.",
    element: Figma,
    icon: Figma,
    rotate: "194",
    color: "rgba(124, 77, 255, 1)",
  },
  {
    id: 4,
    name: "Jest",
    description:
      "Ferramenta de testes unitários da qual possuo experiência e utilizo em meus projetos.",
    element: Jest,
    icon: Jest,
    rotate: "210",
    color: "rgba(183, 72, 14, 1)",
  },
];

export const iconsFourthRow: SkillsProps[] = [
  {
    id: 1,
    name: "Node-JS",
    description:
      "Costumo criar minhas APIS em com Node-JS com express e utilizo no meu trabalho atualmente. No momento estou dando os passos para estudar novas ferramentas como NestJS.",
    element: Node,
    icon: Node,
    rotate: "271.5",
    color: "rgba(33, 163, 102, 1)",
  },
  {
    id: 2,
    name: "PostgreSQL",
    description:
      "Banco de dados relacional do qual tenho boa experiência e utilizo dia a dia no trabalho.",
    element: Postgres,
    icon: Postgres,
    rotate: "255",
    color: "rgba(22, 125, 179, 1)",
  },
  {
    id: 3,
    name: "Docker",
    description:
      "Possuo conhecimento básico com docker onde já tive experiência em criar containers para imagens de banco de dados onde tive a capcidade de integrar a imagem do banco com uma API feita em Node-JS.",
    element: Docker,
    icon: Docker,
    rotate: "255",
    color: "rgba(22, 125, 179, 1)",
  },

  {
    id: 4,
    name: "Git",
    description:
      "Ferramenta para versionamento de código utlizada no dia a dia do trabalho e em meus projetos.",
    element: Git,
    icon: Git,
    rotate: "277.7",
    color: "rgba(176, 24, 9, 1)",
  },
];
