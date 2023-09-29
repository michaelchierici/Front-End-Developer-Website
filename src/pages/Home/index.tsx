import { useCallback, useEffect, useState } from "react";

import { AboutMe } from "../../constants/aboutMe";
import { contactMeIcons } from "../../constants/contactMe";
import { projects } from "../../constants/projects";

import Loader from "../../components/Loader";
import FormSendMessage from "../../components/FormSendMessage";

import Modal from "../../components/Modal";
import Slider from "../../components/Slider";

import delay from "../../utils/delay";
import useVisibleComponent from "../../hooks/useVisibleComponent";

import {
  Container,
  Content,
  ContainerTitle,
  Title,
  ContainerAboutMe,
  ContainerInfo,
  ContainerButton,
  Button,
  ContainerDownloadCV,
  ContainerProjects,
  Card,
  Footer,
  ContentIcon,
  ContainerSkills,
  Section,
  IconSkillsCard,
  LineBorder,
} from "./styles";

import BackArrow from "../../assets/icons/components/backArrow.svg";
import Lines from "../../assets/images/lines.svg";
import { ReactComponent as SmartphoneIcon } from "../../assets/icons/components/appCard.svg";
import { ReactComponent as ComputerIcon } from "../../assets/icons/components/computerCard.svg";
import { ReactComponent as ZapIcon } from "../../assets/icons/components/zapCard.svg";
import { ReactComponent as GhostIcon } from "../../assets/icons/components/ghostCard.svg";

import { iconSkills } from "../../constants/skills";
import Me from "../../assets/images/me.png";
import { chuckArray } from "../../utils/chuckArray";
import { moveRight } from "../../styles/animations/moveRightOrLeft";

interface ToolProps {
  name: string;
  shadow: string;
  color: string;
}

export default function Home() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [skillsIInfoisOpen, setSkillsInfoIsOpen] = useState<boolean>(false);
  const [selectedSkillIcon, setSelecteSkillIcon] = useState<ToolProps>({
    name: "Javascript",
    shadow: "rgba(241, 192, 53, 1)",
    color: "rgba(241, 192, 53, 1)",
  });
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const handleShowSkillInfo = useCallback(
    (event: ToolProps) => {
      const { name, shadow, color } = event;
      setSelecteSkillIcon({ name, shadow, color });
    },
    [selectedSkillIcon]
  );

  const icons = chuckArray(iconSkills, 5);

  useEffect(() => {
    async function fakeLoading() {
      await delay(1000);
      setIsLoading(false);
    }
    fakeLoading();
  }, []);

  function handleOpenResume() {
    setSkillsInfoIsOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <Content>
        <ContainerTitle>
          {AboutMe.map((person, index) => (
            <Title key={index} type={person.type} hasAnimation={isLoading}>
              {person.title}
            </Title>
          ))}
        </ContainerTitle>
        <div className="photo-container">
          <img src={Me} />
        </div>
      </Content>
      <ContainerAboutMe>
        <div className="content-experience">
          <h1>+02 ANOS</h1>
          <h3>DE EXPERIÊNCIA</h3>
        </div>
        <div className="content-graduation">
          <h3>ANALISTA E {"\n"}</h3>
          <h3 className="neon-title">DESENVOLVEDOR{"\n"}</h3>
          <h3>DE SISTEMAS</h3>
        </div>
      </ContainerAboutMe>
      <ContainerInfo>
        <Card>
          <SmartphoneIcon />
        </Card>

        <Card>
          <ZapIcon />
        </Card>

        <Card>
          <ComputerIcon />
        </Card>

        <Card>
          <GhostIcon />
        </Card>
      </ContainerInfo>
      <ContainerSkills
        visible={skillsIInfoisOpen}
        boxShadow={selectedSkillIcon.shadow}
      >
        {skillsIInfoisOpen && (
          <div className="container-skills">
            <div className="animation-title">
              <h1>{selectedSkillIcon?.name}</h1>
              <LineBorder
                color={selectedSkillIcon.shadow}
                hasHoveredIcon={isHoveredIcon}
              />
            </div>
            <div className="content-skills">
              {icons.map((item, index: number) => (
                <div className="line-skills" key={index + 1}>
                  {item.map((element) => (
                    <IconSkillsCard
                      boxShadow={element.shadow}
                      visible={true}
                      index={element.id}
                      key={index}
                      onMouseEnter={() => {
                        handleShowSkillInfo({
                          name: element.name,
                          shadow: element.shadow,
                          color: element.color,
                        });
                        setIsHoveredIcon(true);
                      }}
                      onMouseLeave={() => setIsHoveredIcon(false)}
                    >
                      <img alt={element.name} src={element.icon} />
                    </IconSkillsCard>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </ContainerSkills>
      <ContainerButton>
        <Button visible={skillsIInfoisOpen} onClick={handleOpenResume}>
          {skillsIInfoisOpen ? (
            <img src={BackArrow} />
          ) : (
            <span>Veja mais e entre em contato!</span>
          )}
        </Button>
      </ContainerButton>
      <ContainerDownloadCV>
        <a href="/Michael_Chierici_CV.pdf" target="_blank">
          Baixar CV
        </a>
        <img src={Lines} />
      </ContainerDownloadCV>

      <Section>
        <h1>PROJETOS</h1>
        <ContainerProjects>
          <Slider items={projects} />
        </ContainerProjects>
      </Section>
      <Footer>
        <ContentIcon>
          {contactMeIcons.map((icon, index) => (
            <a key={index} href={icon?.link} target="_blank" rel="noreferrer">
              <img
                alt={icon.name}
                src={icon.element}
                onClick={() =>
                  icon.name === "whatsapp" && setIsComponentVisible(true)
                }
              />
            </a>
          ))}
        </ContentIcon>
      </Footer>

      <Modal
        ref={ref}
        visible={isComponentVisible}
        title={`Deseja entrar em contato?
        Me envie uma mensagem!
        `}
      >
        <FormSendMessage onClose={() => setIsComponentVisible(false)} />
      </Modal>
    </Container>
  );
}
