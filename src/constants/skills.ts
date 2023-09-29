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
import Vue from "../assets/icons/skills/vue.svg";
import Nest from "../assets/icons/skills/nest.svg";
import Adonis from "../assets/icons/skills/adonis.svg";
import MySQL from "../assets/icons/skills/mysql.svg";

export interface SkillsProps {
  name: string;
  element: string;
  icon: string;
  rotate: string;
  shadow: string;
  color: string;
}

export const iconSkills: SkillsProps[] = [
  {
    name: "HTML",
    element: Html,
    icon: Html,
    rotate: "-1.2",
    shadow: "rgba(229, 66, 10, 0.75);",
    color: "#ffa500",
  },

  {
    name: "CSS",
    element: Css,
    icon: Css,
    rotate: "18",
    shadow: "rgba(65, 132, 284, 1.75);",
    color: "#0000ff",
  },
  {
    name: "Javascript",
    element: JavaScript,
    icon: JavaScript,
    rotate: "37.5",
    shadow: "rgba(241, 192, 53, 1)",
    color: "#ffff00",
  },
  {
    name: "Typescript",
    element: TypeScript,
    icon: TypeScript,
    rotate: "57",
    shadow: "rgba(65, 132, 284, 1.75);",
    color: "",
  },

  {
    name: "Git",
    element: Git,
    icon: Git,
    rotate: "277.7",
    shadow: "rgba(176, 24, 9, 1)",
    color: "",
  },
  {
    name: "React & React Native",
    element: React,
    icon: React,
    rotate: "17",
    shadow: "rgba(22, 127, 177, 1)",
    color: "",
  },

  {
    name: "Redux",
    element: Redux,
    icon: Redux,
    rotate: "94.5",
    shadow: "rgba(128, 39, 179, 1)",
    color: "",
  },
  {
    name: "Next",
    element: Next,
    icon: Next,
    rotate: "135",
    shadow: "rgba(146, 146, 146, 1);",
    color: "",
  },
  {
    name: "Styled Components",
    element: Styled,
    icon: Styled,
    rotate: "115",
    shadow: "rgba(231, 123, 159, 1)",
    color: "",
  },

  {
    name: "Tailwind",
    element: Tailwind,
    icon: Tailwind,
    rotate: "140",
    shadow: "rgba(0, 186, 217, 1)",
    color: "",
  },

  {
    name: "Vue",
    element: Vue,
    icon: Vue,
    rotate: "255",
    shadow: "rgba(65, 184, 131, 1)",
    color: "",
  },
  {
    name: "Sass",
    element: Sass,
    icon: Sass,
    rotate: "181.5",
    shadow: "rgba(173, 21, 129, 1)",
    color: "",
  },
  {
    name: "Figma",
    element: Figma,
    icon: Figma,
    rotate: "194",
    shadow: "rgba(124, 77, 255, 1)",
    color: "",
  },
  {
    name: "Jest",
    element: Jest,
    icon: Jest,
    rotate: "210",
    shadow: "rgba(183, 72, 14, 1)",
    color: "",
  },
  {
    name: "Docker",
    element: Docker,
    icon: Docker,
    rotate: "255",
    shadow: "rgba(22, 125, 179, 1)",
    color: "",
  },
  {
    name: "Node-JS",
    element: Node,
    icon: Node,
    rotate: "271.5",
    shadow: "rgba(33, 163, 102, 1)",
    color: "",
  },
  {
    name: "Nest",
    element: Nest,
    icon: Nest,
    rotate: "255",
    shadow: "rgba(224, 35, 78, 1)",
    color: "",
  },
  {
    name: "Adonis",
    element: Adonis,
    icon: Adonis,
    rotate: "255",
    shadow: "rgba(90, 69, 254, 1)",
    color: "",
  },

  {
    name: "PostgreSQL",
    element: Postgres,
    icon: Postgres,
    rotate: "255",
    shadow: "rgba(22, 125, 179, 1)",
    color: "",
  },
  {
    name: "MySQL",
    element: MySQL,
    icon: MySQL,
    rotate: "255",
    shadow: "rgba(0, 117, 143, 1)",
    color: "",
  },
];
