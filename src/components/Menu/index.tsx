import { useState } from "react";
import { Button, Container, Content, OpenMenu, CloseMenu } from "./styles";
import { ReactComponent as BFlag } from "../../assets/icons/components/brasil.svg";
import { ReactComponent as USFlag } from "../../assets/icons/components/usa.svg";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu((prevState) => !prevState);
  }
  return (
    <Container isOpen={showMenu}>
      <Button onClick={handleOpenMenu}>
        <Content>
          {!showMenu ? (
            <OpenMenu />
          ) : (
            <>
              <CloseMenu />
              <BFlag height={50} width={50} />
              <USFlag height={50} width={50} />
            </>
          )}
        </Content>
      </Button>
    </Container>
  );
}
