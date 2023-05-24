import { CardProps } from "../../Typings/Card";

import { Container } from "./styles";

export default function Card({ children, visible, width }: CardProps) {
  return (
    <Container
      width={width}
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
