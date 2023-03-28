import { Container, Button, Content, OpenMenu, CloseMenu } from "./styles";

import { ReactComponent as BFlag } from "../../assets/icons/components/brasil.svg";
import { ReactComponent as USFlag } from "../../assets/icons/components/usa.svg";
import useVisibleComponent from "../../hooks/useVisibleComponent";

export default function Menu() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

  function handleOpenMenu() {
    setIsComponentVisible((prevState) => !prevState);
  }
  return (
    <Container visible={isComponentVisible}>
      <Button onClick={handleOpenMenu}>
        <Content ref={ref}>
          {!isComponentVisible ? (
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
