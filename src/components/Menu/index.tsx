import { useCallback, useRef, useState } from "react";
import { Button, Container, Content, LogoMenu } from "./styles";

export default function Menu() {
  const ref = useRef<any>();

  const [showMenu, setShowMenu] = useState(false);
  const [height, setHeight] = useState(50);

  const handleOpenMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
    setHeight(ref.current?.clientHeight);
  }, [showMenu, height]);

  return (
    <Container ref={ref} activeByHeight={height} isOpen={showMenu}>
      <Button onClick={handleOpenMenu}>
        <Content>
          <LogoMenu />
        </Content>
      </Button>
    </Container>
  );
}
