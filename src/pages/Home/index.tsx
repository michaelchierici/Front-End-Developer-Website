import { useCallback, useEffect, useState } from "react";

import { AboutMe } from "../../constants/aboutMe";
import { contactMeIcons } from "../../constants/contactMe";
import { projects } from "../../constants/projects";

import Menu from "../../components/Menu";
import Card from "../../components/Card";
import Photo from "../../components/Photo";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";
import FormSendMessage from "../../components/FormSendMessage";

import delay from "../../utils/delay";
import useVisibleComponent from "../../hooks/useVisibleComponent";

import {
  Container,
  Content,
  Footer,
  Title,
  ContainerButton,
  Button,
  ContentIcon,
  ContentPhoto,
  ContainerProject,
  ContentCardProject,
  ContentScroll,
  ContentCardResume,
  ContentProject,
  Borders,
  ChevronButton,
  Board,
} from "./styles";
import { ReactComponent as Mouse } from "../../assets/icons/components/mouse.svg";
import { ReactComponent as MouseArrows } from "../../assets/icons/components/mouseArrows.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/components/backArrow.svg";
import { ReactComponent as Chevron } from "../../assets/icons/components/chevron.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/contact/whatsapp.svg";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resumeIsOpen, setResumeIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [sliderDirection, setSliderDirection] = useState<number>(0);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

  let lastKnownScrollPosition = 0;
  let ticking = false;

  const handleChangeScrollDirection = useCallback(
    (scrollPosition: number) => {
      setScrollPosition(scrollPosition);
    },
    [scrollPosition, lastKnownScrollPosition]
  );
  document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;

    if (
      (!ticking && lastKnownScrollPosition >= 570) ||
      lastKnownScrollPosition === 0
    ) {
      window.requestAnimationFrame(() => {
        handleChangeScrollDirection(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });

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
        <ContentCardResume>
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
        </ContentCardResume>
        <ContentPhoto>
          <Photo active={resumeIsOpen} />
        </ContentPhoto>
      </Content>

      <ContentScroll scrollPosition={!!scrollPosition}>
        <Mouse />
        <MouseArrows className="arrows" />
      </ContentScroll>

      <ContainerProject>
        <ContentProject>
          <Borders className="chevron-left">
            <ChevronButton
              type="button"
              onClick={() => setSliderDirection((prevState) => prevState + 300)}
              disabled={sliderDirection === 300}
            >
              <Chevron />
            </ChevronButton>
          </Borders>
          <Board direction={sliderDirection}>
            {projects.map((project) => (
              <>
                <ContentCardProject>{project.photo}</ContentCardProject>
                <ContentCardProject>{project.description}</ContentCardProject>
                <ContentCardProject>{project.tools}</ContentCardProject>
              </>
            ))}
          </Board>
          <Borders className="chevron-right">
            <ChevronButton
              type="button"
              onClick={() => setSliderDirection((prevState) => prevState - 300)}
              disabled={sliderDirection === -300}
            >
              <Chevron />
            </ChevronButton>
          </Borders>
        </ContentProject>
      </ContainerProject>

      <Footer>
        <ContentIcon>
          {contactMeIcons.map((icon, index) => (
            <a key={index} href={icon?.link} target="_blank" rel="noreferrer">
              <img alt={icon.name} src={icon.element} />
            </a>
          ))}
          <WhatsappIcon
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
