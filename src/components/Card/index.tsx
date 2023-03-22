import { ReactNode } from "react";
import { CardProps } from "../../Typings/Card";
import { Container } from "./styles";

export default function Card({ children, visible }: CardProps) {
  return <Container visible={visible}>{children}</Container>;
}
