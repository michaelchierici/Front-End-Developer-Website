import { useState } from "react";
import { Container, Content } from "./styles";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu((prevState) => !prevState);
  }

  return (
    <Container isOpen={showMenu}>
      <Content />
    </Container>
  );
}
