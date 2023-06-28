import { useCallback, useEffect, useState } from "react";

import { AboutMe } from "../../constants/aboutMe";
import { contactMeIcons } from "../../constants/contactMe";
import { projects } from "../../constants/projects";

import Menu from "../../components/Menu";
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
  ContentScroll,
  ContentCardResume,
  ContentAboutMe,
  Icon,
} from "./styles";
import { ReactComponent as Mouse } from "../../assets/icons/components/mouse.svg";
import { ReactComponent as MouseArrows } from "../../assets/icons/components/mouseArrows.svg";
import { ReactComponent as BackArrow } from "../../assets/icons/components/backArrow.svg";

import { ReactComponent as WhatsappIcon } from "../../assets/icons/contact/whatsapp.svg";
import Slider from "../../components/Slider";
import Me from "../../assets/images/me.jpg";
import {
  SkillsProps,
  iconsFirstRow,
  iconsFourthRow,
  iconsSecondRow,
  iconsThirdRow,
} from "../../constants/skills";
import Photo from "../../components/Photo";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resumeIsOpen, setResumeIsOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [selectedToolIcon, setSelectedToolIcon] = useState<any>({
    name: "JAVASCRIPT",
    description: "",
  });

  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

  let lastKnownScrollPosition = 0;
  let ticking = false;

  const handleShowToolInfo = useCallback((event: any) => {
    console.log(event);
    const { name, info } = event;
    setSelectedToolIcon({ name, info });
  }, []);
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
          {AboutMe.map((person, index) => (
            <Title key={index} type={person.type} visible={isLoading}>
              {person.title}
            </Title>
          ))}
        </ContentCardResume>
        <Photo />
      </Content>
      <ContentAboutMe visible={resumeIsOpen}>
        <div className="about-me">
          <h1>
            Formado em análise e desenvolvimento de sistemas, trabalho com
            tecnologia há mais de 2 anos, atualmente atuo como desenvolvedor
            front-end e mobile. Possuo grande capacidade em construir interfaces
            do absoluto zero, resolver problemas do dia a dia entregando
            demandas dentro do prazo.
          </h1>
        </div>
        <div className="about-tools">
          <header>
            <h1>{selectedToolIcon?.name}</h1>
          </header>
          <div>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              commodi eos iure impedit
            </h3>
          </div>
        </div>
        <div className="tools">
          <div className="card-tools">
            {iconsFirstRow.map((item: SkillsProps, index: number) => (
              <Icon
                boxShadow={item.color}
                visible={true}
                index={item.id}
                key={index}
                onMouseEnter={() =>
                  handleShowToolInfo({
                    name: item.name,
                    info: item?.description,
                  })
                }
              >
                <img alt={item.name} src={item.icon} />
              </Icon>
            ))}
          </div>
          <div className="card-tools">
            {iconsSecondRow.map((item: SkillsProps, index: number) => (
              <Icon
                boxShadow={item.color}
                visible={true}
                index={item.id}
                key={index}
                onMouseEnter={() =>
                  handleShowToolInfo({
                    name: item.name,
                    info: item?.description,
                  })
                }
              >
                <img alt={item.name} src={item.icon} />
              </Icon>
            ))}
          </div>
          <div className="card-tools">
            {iconsThirdRow.map((item: SkillsProps, index: number) => (
              <Icon
                boxShadow={item.color}
                visible={true}
                index={item.id}
                key={index}
                onMouseEnter={() =>
                  handleShowToolInfo({
                    name: item.name,
                    info: item?.description,
                  })
                }
              >
                <img alt={item.name} src={item.icon} />
              </Icon>
            ))}
          </div>
          <div className="card-tools">
            {iconsFourthRow.map((item: SkillsProps, index: number) => (
              <Icon
                boxShadow={item.color}
                visible={true}
                index={item.id}
                key={index}
                onMouseEnter={() =>
                  handleShowToolInfo({
                    name: item.name,
                    info: item?.description,
                  })
                }
              >
                <img alt={item.name} src={item.icon} />
              </Icon>
            ))}
          </div>
        </div>
      </ContentAboutMe>
      <ContainerButton>
        <Button visible={resumeIsOpen} onClick={handleOpenResume}>
          {resumeIsOpen ? (
            <BackArrow />
          ) : (
            <span>Veja como posso te ajudar!</span>
          )}
        </Button>
      </ContainerButton>
      <ContentScroll scrollPosition={!!scrollPosition}>
        <Mouse />
        <MouseArrows className="arrows" />
      </ContentScroll>
      <Slider items={projects} />
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
