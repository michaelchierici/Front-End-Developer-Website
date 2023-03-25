import { CardProps } from "../../Typings/Card";

import { Container } from "./styles";

export default function Card({ children, visible, width, height }: CardProps) {
  return (
    <Container width={width} height={height} visible={visible}>
      {children}
    </Container>
  );
}
