import Button from "../../components/Button";
import Photo from "../../components/Photo";
import { contactMeIcons } from "../../constants/contactMe";
import { CardTitle, Container, Content, Footer, Icon, Title } from "./styles";

export default function Home() {
  return (
    <Container>
      <Content>
        <CardTitle>
          <Title type="name">MICHAEL CHIERICI,</Title>
          <Title type="dev">DESENVOLVEDOR</Title>
          <Title type="front">FRONT-END</Title>
        </CardTitle>
        <Button title="Resumo" />
        <Footer>
          {contactMeIcons.map((item, index) => (
            <Icon key={index} iconSize={65}>
              <a href={String(item.link)} target="_blank" rel="noreferrer">
                <img alt={item.name} src={item.icon} />
              </a>
            </Icon>
          ))}
        </Footer>
      </Content>
      <Photo active />
    </Container>
  );
}
