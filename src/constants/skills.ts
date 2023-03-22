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

export const skillsIcons: SkillsProps[] = [
  {
    id: 15,
    name: "ícone html",
    description: "",
    element: Html,
    icon: Html,
    rotate: "-1.2",
    color: "rgba(229, 66, 10, 0.75);",
  },

  {
    id: 14,
    name: "ícone css",
    description: "",
    element: Css,
    icon: Css,
    rotate: "18",
    color: "rgba(65, 132, 284, 1.75);",
  },
  {
    id: 13,
    name: "ícone javascript",
    description: "",
    element: JavaScript,
    icon: JavaScript,
    rotate: "37.5",
    color: "rgba(241, 192, 53, 1)",
  },
  {
    id: 12,
    name: "ícone typescript",
    description: "",
    element: TypeScript,
    icon: TypeScript,
    rotate: "57",
    color: "rgba(65, 132, 284, 1.75);",
  },
  {
    id: 11,
    name: "ícone react",
    description: "",
    element: React,
    icon: React,
    rotate: "17",
    color: "rgba(22, 127, 177, 1)",
  },
  {
    id: 10,
    name: "ícone redux",
    description: "",
    element: Redux,
    icon: Redux,
    rotate: "94.5",
    color: "rgba(128, 39, 179, 1)",
  },
  {
    id: 9,
    name: "ícone styled",
    description: "",
    element: Styled,
    icon: Styled,
    rotate: "115",
    color: "rgba(231, 123, 159, 1)",
  },
  {
    id: 8,
    name: "ícone next",
    description: "",
    element: Next,
    icon: Next,
    rotate: "135",
    color: "rgba(146, 146, 146, 1);",
  },
  {
    id: 7,
    name: "ícone tailwind",
    description: "",
    element: Tailwind,
    icon: Tailwind,
    rotate: "140",
    color: "rgba(0, 186, 217, 1)",
  },
  {
    id: 6,
    name: "ícone sass",
    description: "",
    element: Sass,
    icon: Sass,
    rotate: "181.5",
    color: "rgba(173, 21, 129, 1)",
  },
  {
    id: 5,
    name: "ícone figma",
    description: "",
    element: Figma,
    icon: Figma,
    rotate: "194",
    color: "rgba(124, 77, 255, 1)",
  },
  {
    id: 4,
    name: "ícone jest",
    description: "",
    element: Jest,
    icon: Jest,
    rotate: "210",
    color: "rgba(183, 72, 14, 1)",
  },
  {
    id: 3,
    name: "ícone git",
    description: "",
    element: Git,
    icon: Git,
    rotate: "277.7",
    color: "rgba(176, 24, 9, 1)",
  },
  {
    id: 2,
    name: "ícone postgres",
    description: "",
    element: Postgres,
    icon: Postgres,
    rotate: "255",
    color: "rgba(22, 125, 179, 1)",
  },
  {
    id: 1,
    name: "ícone node",
    description: "",
    element: Node,
    icon: Node,
    rotate: "271.5",
    color: "rgba(33, 163, 102, 1)",
  },
];
