import { useState } from "react";
import { Button, Container, Content, OpenMenu, CloseMenu } from "./styles";
import { ReactComponent as BFlag } from "../../assets/icons/components/brasil.svg";
import { ReactComponent as USFlag } from "../../assets/icons/components/usa.svg";

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleOpenMenu() {
    setMenuIsOpen((prevState) => !prevState);
  }
  return (
    <Container visible={menuIsOpen}>
      <Button onClick={handleOpenMenu}>
        <Content>
          {!menuIsOpen ? (
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
