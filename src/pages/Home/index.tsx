import { useState } from "react";
import Menu from "../../components/Menu";
import Card from "../../components/Card";
import Photo from "../../components/Photo";
import Modal from "../../components/Modal";

import { AboutMe } from "../../constants/aboutMe";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleShowResume() {
    setResumeIsOpen((prevState) => !prevState);
  }

  function handleShowModal() {
    setModalIsOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <Menu />
      <Content>
        <Card visible={resumeIsOpen}>
          {AboutMe.map((person, index) => (
            <Title key={index} type={person.type} visible={resumeIsOpen}>
              {resumeIsOpen ? person.description : person.title}
            </Title>
          ))}
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
      <Modal disabled={false} isLoading={false} visible={modalIsOpen} />
    </Container>
  );
}
