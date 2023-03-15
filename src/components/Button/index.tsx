import { Container, Content } from "./styles";

interface Props {
  title: string;
}

export default function Button({ title }: Props) {
  return (
    <Container>
      <Content type="button">{title}</Content>
    </Container>
  );
}
