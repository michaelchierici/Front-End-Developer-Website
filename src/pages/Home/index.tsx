import { useState } from "react";
import Card from "../../components/Card";
import Menu from "../../components/Menu";
import Photo from "../../components/Photo";
import { contactMeIcons } from "../../constants/contactMe";
import { ReactComponent as BackArrow } from "../../assets/icons/components/backArrow.svg";
import {
  Container,
  Content,
  Footer,
  Icon,
  Title,
  ContainerButton,
  Button,
} from "./styles";

export default function Home() {
  const [resumeIsOpen, setResumeIsOpen] = useState(false);

  function handleShowResume() {
    setResumeIsOpen((prevState) => !prevState);
  }
  return (
    <Container>
      <Menu />

      <Content>
        <Card visible={resumeIsOpen}>
          <Title type="name">MICHAEL CHIERICI,</Title>
          <Title type="profession">DESENVOLVEDOR</Title>
          <Title type="role">FRONT-END</Title>
        </Card>
        <ContainerButton>
          <Button visible={resumeIsOpen} onClick={handleShowResume}>
            {resumeIsOpen ? <BackArrow /> : <span>Resumo</span>}
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
      <Photo active={resumeIsOpen} />
    </Container>
  );
}
