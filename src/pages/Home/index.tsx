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
import { ReactComponent as ModalIcon } from "../../assets/icons/components/modal.svg";

import {
  Container,
  Content,
  Footer,
  Title,
  ContainerButton,
  Button,
  ContentIcon,
  ContentPhoto,
  CardContent,
  ContainerProject,
  ContentProjectInfo,
  ContentCardProject,
} from "./styles";
import useVisibleComponent from "../../hooks/useVisibleComponent";
import FormSendMessage from "../../components/FormSendMessage";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resumeIsOpen, setResumeIsOpen] = useState<boolean>(false);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

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

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Menu />
      <Content>
        <CardContent>
          <Card visible={resumeIsOpen}>
            {AboutMe.map((person, index) => (
              <Title
                key={index}
                type={person.type}
                visible={resumeIsOpen || isLoading}
              >
                {resumeIsOpen ? (
                  <div className="resume">{person.description}</div>
                ) : (
                  person.title
                )}
              </Title>
            ))}
          </Card>
          <ContainerButton>
            <Button visible={resumeIsOpen} onClick={handleOpenResume}>
              {resumeIsOpen ? <BackArrow /> : <span>Sobre mim</span>}
            </Button>
          </ContainerButton>
        </CardContent>
        <ContentPhoto>
          <Photo active={resumeIsOpen} />
        </ContentPhoto>
      </Content>
      <ContainerProject>
        <ContentProjectInfo>
          <ContentCardProject />
          <ContentCardProject />
          <ContentCardProject />
        </ContentProjectInfo>
      </ContainerProject>

      <Footer>
        <ContentIcon>
          {contactMeIcons.map((icon, index) => (
            <a key={index} href={icon?.link} target="_blank" rel="noreferrer">
              <img alt={icon.name} src={icon.element} />
            </a>
          ))}
          <ModalIcon
            className="modal"
            onClick={() => setIsComponentVisible(true)}
            width={65}
            height={35}
          />
        </ContentIcon>
      </Footer>

      <Modal
        ref={ref}
        visible={isComponentVisible}
        title={`Deseja entrar em contato?
        Me envie uma mensagem!
        `}
      >
        <FormSendMessage onToggle={() => setIsComponentVisible(false)} />
      </Modal>
    </Container>
  );
}
