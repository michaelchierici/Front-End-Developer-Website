import Button from "../../components/Button";
import Menu from "../../components/Menu";
import Photo from "../../components/Photo";
import { contactMeIcons } from "../../constants/contactMe";
import { Card, Container, Content, Footer, Icon, Title } from "./styles";

export default function Home() {
  return (
    <Container>
      <Menu />
      <Content>
        <Card>
          <Title type="name">MICHAEL CHIERICI,</Title>
          <Title type="profession">DESENVOLVEDOR</Title>
          <Title type="role">FRONT-END</Title>
        </Card>
        <Button title="Resumo" />
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
      <Photo active />
    </Container>
  );
}
