import { useState } from "react";
import Menu from "../../components/Menu";
import Photo from "../../components/Photo";
import { contactMeIcons } from "../../constants/contactMe";
import { ReactComponent as BackArrow } from "../../assets/icons/components/backArrow.svg";
import {
  Card,
  Container,
  Content,
  Footer,
  Icon,
  Title,
  ContainerButton,
  Button,
} from "./styles";

export default function Home() {
  const [isOpenResume, setIsOpenResume] = useState(false);

  function handleShowResume() {
    setIsOpenResume((prevState) => !prevState);
  }
  return (
    <Container>
      <Menu />
      <Content>
        <Card>
          <Title type="name">MICHAEL CHIERICI,</Title>
          <Title type="profession">DESENVOLVEDOR</Title>
          <Title type="role">FRONT-END</Title>
        </Card>
        <ContainerButton>
          <Button isOpenResume={isOpenResume} onClick={handleShowResume}>
            {isOpenResume ? <BackArrow /> : <span>Resumo</span>}
          </Button>
        </ContainerButton>
        <Footer>
          {contactMeIcons.map((item, index) => (
            <Icon key={index} iconSize={65}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img alt={item.name} src={item.icon} />
              </a>
            </Icon>
          ))}
        </Footer>
      </Content>
      <Photo active={isOpenResume} />
    </Container>
  );
}
