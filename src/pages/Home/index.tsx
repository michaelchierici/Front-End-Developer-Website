import { useEffect, useState } from "react";

import { AboutMe } from "../../constants/aboutMe";
import { contactMeIcons } from "../../constants/contactMe";

import Menu from "../../components/Menu";
import Card from "../../components/Card";
import Photo from "../../components/Photo";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

import delay from "../../utils/delay";

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
  const [isLoading, setIsLoading] = useState(true);
  const [resumeIsOpen, setResumeIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fakeLoading() {
      await delay(1000);
      setIsLoading(false);
    }
    fakeLoading();
  }, []);

  function handleOpenResume() {
    setResumeIsOpen((prevState) => !prevState);
  }

  function handleToggleModal() {
    setModalIsOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Menu />
      <Content>
        <Card visible={resumeIsOpen} width={75} height={15}>
          {AboutMe.map((person, index) => (
            <Title
              key={index}
              type={person.type}
              visible={resumeIsOpen || isLoading}
            >
              {resumeIsOpen ? person.description : person.title}
            </Title>
          ))}
        </Card>
        <ContainerButton>
          <Button visible={resumeIsOpen} onClick={handleOpenResume}>
            {resumeIsOpen ? <BackArrow /> : <span>Resumo</span>}
          </Button>
        </ContainerButton>
        <Footer>
          {contactMeIcons.map((icon, index) => (
            <Icon key={index}>
              <a href={icon.link} target="_blank" rel="noreferrer">
                <img
                  alt={icon.name}
                  src={icon.element}
                  onClick={() => icon.openModal && handleToggleModal()}
                />
              </a>
            </Icon>
          ))}
        </Footer>
      </Content>
      <Photo active={resumeIsOpen} />
      <Modal
        disabled={false}
        isLoading={false}
        visible={modalIsOpen}
        onToggle={handleToggleModal}
      />
    </Container>
  );
}
