import { Container } from "./styles";
import Me from "../../assets/images/me.png";

export default function Photo() {
  return (
    <Container>
      <img src={Me} />
    </Container>
  );
}
