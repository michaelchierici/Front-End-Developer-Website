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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resumeIsOpen, setResumeIsOpen] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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

  function handleToggleEvent(...event: string[]) {
    const [value] = event;
    if (value === "modal") {
      setModalIsOpen((prevState) => !prevState);
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Menu />
      <Content>
        <Card visible={resumeIsOpen} width={90} height={15}>
          {AboutMe.map((person, index) => (
            <Title
              key={index}
              type={person.type}
              visible={resumeIsOpen || isLoading}
            >
              {resumeIsOpen ? <span>{person.description}</span> : person.title}
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
                  onClick={() => handleToggleEvent(icon.event!)}
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
        onToggle={() => handleToggleEvent("modal")}
      />
    </Container>
  );
}
