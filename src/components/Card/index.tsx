import { CardProps } from "../../types/Card";

import { Container } from "./styles";

export default function Card({ children, visible }: CardProps) {
  return (
    <Container
      visible={visible}
      style={{
        alignItems: !visible ? "flex-start" : "center",
        flexDirection: !visible ? "column" : "row",
      }}
    >
      {children}
    </Container>
  );
}
