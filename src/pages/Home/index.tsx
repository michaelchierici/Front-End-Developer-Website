import { Suspense, useCallback, useEffect, useState } from "react";

import { AboutMe } from "../../constants/aboutMe";
import { contactMeIcons } from "../../constants/contactMe";
import { projects } from "../../constants/projects";
import { SkillsProps, iconSkills } from "../../constants/skills";

import Loader from "../../components/Loader";
import FormSendMessage from "../../components/FormSendMessage";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";

import useVisibleComponent from "../../hooks/useVisibleComponent";

import Me from "../../assets/images/me.png";
import Lines from "../../assets/images/lines.svg";
import BackArrow from "../../assets/icons/components/backArrow.svg";
import { ReactComponent as SmartphoneCard } from "../../assets/icons/components/appCard.svg";
import { ReactComponent as ComputerCard } from "../../assets/icons/components/computerCard.svg";
import { ReactComponent as ZapCard } from "../../assets/icons/components/zapCard.svg";
import { ReactComponent as GhostCard } from "../../assets/icons/components/ghostCard.svg";

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

import delay from "../../utils/delay";
import chuckArray from "../../utils/chuckArray";

export default function Home() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [skillsIInfoisOpen, setSkillsInfoIsOpen] = useState<boolean>(false);
  const [isHoveredOnIcon, setIsHoveredOnIcon] = useState<boolean>(false);
  const [selectedSkillIcon, setSelecteSkillIcon] = useState<
    Partial<SkillsProps>
  >({
    name: "Javascript",
    shadow: "rgba(241, 192, 53, 1)",
    color: "rgba(241, 192, 53, 1)",
  });

  const handleChangeSkillInfoOnHover = useCallback(
    (event: Partial<SkillsProps>) => {
      const { name, shadow, color } = event;
      setSelecteSkillIcon({ name, shadow, color });
      setIsHoveredOnIcon(true);
    },
    [selectedSkillIcon]
  );

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
            <Title
              key={index}
              type={person.type}
              hasAnimation={isLoading}
              translate="no"
            >
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
          <SmartphoneCard />
        </Card>

        <Card>
          <ZapCard />
        </Card>

        <Card>
          <ComputerCard />
        </Card>

        <Card>
          <GhostCard />
        </Card>
      </ContainerInfo>
      <ContainerSkills
        visible={skillsIInfoisOpen}
        boxShadow={selectedSkillIcon.shadow}
      >
        <div className="container-skills">
          <div className="animation-title">
            <h1>{selectedSkillIcon?.name}</h1>
            <LineBorder
              color={selectedSkillIcon.shadow}
              isHovered={isHoveredOnIcon}
            />
          </div>
          <div className="content-skills">
            {chuckArray(iconSkills, 5).map((item, index: number) => (
              <div className="row-skills" key={index}>
                {item.map((element) => (
                  <IconSkillsCard
                    boxShadow={element.shadow}
                    visible={true}
                    index={element.id}
                    key={element.id}
                    onMouseEnter={() => {
                      handleChangeSkillInfoOnHover({
                        name: element.name,
                        shadow: element.shadow,
                        color: element.color,
                      });
                    }}
                    onMouseLeave={() => setIsHoveredOnIcon(false)}
                    onClick={() => setIsHoveredOnIcon(true)}
                  >
                    <Suspense fallback={<Loader isLoading={true} />}>
                      <img
                        alt={element.name}
                        src={element.icon}
                        loading="lazy"
                      />
                    </Suspense>
                  </IconSkillsCard>
                ))}
              </div>
            ))}
          </div>
        </div>
      </ContainerSkills>
      <ContainerButton>
        <Button visible={skillsIInfoisOpen} onClick={handleOpenResume}>
          {skillsIInfoisOpen ? (
            <img src={BackArrow} />
          ) : (
            <span>Habilidades</span>
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
