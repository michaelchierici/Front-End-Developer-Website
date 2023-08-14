import React, { useCallback, useEffect, useState } from "react";

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
} from "./styles";

import { ReactComponent as BackArrow } from "../../assets/icons/components/backArrow.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/contact/whatsapp.svg";
import { ReactComponent as Lines } from "../../assets/images/lines.svg";
import { ReactComponent as SmartphoneIcon } from "../../assets/icons/components/smartphone.svg";
import { ReactComponent as ComputerIcon } from "../../assets/icons/components/computer.svg";
import { ReactComponent as ZapIcon } from "../../assets/icons/components/zap.svg";
import { ReactComponent as GhostIcon } from "../../assets/icons/components/ghost.svg";

import {
  SkillsProps,
  iconsFirstRow,
  iconsFourthRow,
  iconsSecondRow,
  iconsThirdRow,
} from "../../constants/skills";
import Me from "../../assets/images/me.png";

interface ToolProps {
  name: string;
  description: string;
  shadow: string;
}

export default function Home() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useVisibleComponent(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resumeIsOpen, setResumeIsOpen] = useState<boolean>(false);
  const [selectedToolIcon, setSelectedToolIcon] = useState<ToolProps>({
    name: "Javascript",
    description:
      "Mantenho meu foco em javascript como linguagem primária de programação, busco melhorar e estudar cada vez mais, tenho grande experiência com a linguagem e os frameworks mais usados no mercado.",
    shadow: "rgba(241, 192, 53, 1)",
  });

  const handleShowToolInfo = useCallback((event: ToolProps) => {
    const { name, description, shadow } = event;
    setSelectedToolIcon({ name, description, shadow });
  }, []);

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
          <h2>APLICATIVOS</h2>
        </Card>

        <Card>
          <ZapIcon />
          <h2>LANDING PAGES</h2>
        </Card>
        <Card>
          <ComputerIcon />
          <h2>SISTEMAS WEB</h2>
        </Card>
        <Card>
          <GhostIcon />
          <h2>ANIMAÇÕES E DESIGN</h2>
        </Card>
      </ContainerInfo>

      <ContainerButton>
        <Button visible={resumeIsOpen} onClick={handleOpenResume}>
          {resumeIsOpen ? (
            <BackArrow />
          ) : (
            <span>Veja mais e entre em contato!</span>
          )}
        </Button>
      </ContainerButton>
      <ContainerDownloadCV>
        <h3>Baixar CV</h3>
        <Lines />
      </ContainerDownloadCV>

      <ContainerProjects>
        <div className="container-title">
          <h1>PROJETOS</h1>
        </div>
        {/* <Slider items={projects} /> */}
      </ContainerProjects>
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
        <FormSendMessage onClose={() => setIsComponentVisible(false)} />
      </Modal>
    </Container>
  );
}

{
  /* <ContainerAboutMe>
<div className="title-container">
  <h1>Sobre mim</h1>
</div>
<div className="content-section">
  <h2>Formado em análise e desenvolvimento de sistemas</h2>
  <img src={MeSection} />
</div>
</ContainerAboutMe>
<ContainerSkills>
<div className="me-container">
  <h3>Soft skills</h3>
  <p>
    Apaixonado por tecnologia e novos desafios, sou um profissional
    comunicativo, entrego resultados dentro do prazo com eficiência.
    Sempre busco aperfeiçoar meus conhecimentos e me matenho atualizado
    com objetivo de atender as necessidades com maior qualidade.
  </p>
</div>
<div className="experience-container">
  <h3>Experiências</h3>
  <p>
    Trabalho na área de tecnologia há mais 2 anos, atualmente como
    desenvolvedor fullstack, com participação na criação e manuntenção
    de projetos robustos que atendem uma grande variedade de clientes.
  </p>
</div>
<div className="skill-container">
  <h3>Habilidades</h3>
  <p>
    Especilazado no Front-End e atualizado com as tecnologias do
    mercado, trabalho com Javascript e seus frameworks, além de criar
    animações e interfaces do absoluto zero, tenho capacidade para
    construir API's e também aplicativos.
  </p>
</div>
</ContainerSkills> */
}

{
  /* <div className="about-me">
<h1>
  Formado em análise e desenvolvimento de sistemas, trabalho com
  tecnologia há mais de 2 anos, atualmente atuo como desenvolvedor
  fullstack. Possuo grande capacidade em construir interfaces do
  absoluto zero, resolver problemas do dia a dia entregando demandas
  dentro do prazo.
</h1>
</div>
<div className="about-tools">
<header>
  <h1>{selectedToolIcon?.name}</h1>
</header>
<div>
  <h3>{selectedToolIcon?.description}</h3>
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
          description: item?.description,
          shadow: item.color,
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
          description: item?.description,
          shadow: item.color,
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
          description: item?.description,
          shadow: item.color,
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
          description: item?.description,
          shadow: item.color,
        })
      }
    >
      <img alt={item.name} src={item.icon} />
    </Icon>
  ))}
</div>
</div> */
}
