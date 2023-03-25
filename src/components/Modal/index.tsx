import ReactPortal from "../ReactPortal";

import { ModalProps } from "../../Typings/Modal";

import { Container, Footer, Header, Message, Overlay } from "./style";
import { Input } from "../Input";

import Form from "../Form";
import Button from "../Button";

export default function Modal({
  visible,
  disabled,
  isLoading,
  onToggle,
}: ModalProps) {
  if (!visible) {
    return null;
  }

  function handleSendMessage() {
    return;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container>
          <Header>
            <h3>
              Deseja entrar em contato?
              <br />
              Me envia uma mensagem!
            </h3>
          </Header>
          <Form isLoading={isLoading} error={false}>
            <Input error={false} />
            <Input error={false} />
          </Form>
          <Message>
            <Input error={false} />
          </Message>

          <Footer>
            <Button
              title="Enviar"
              cancel={false}
              onClick={handleSendMessage}
              isLoading={isLoading}
              disabled={disabled}
              width={8}
              height={3.5}
            />

            <Button
              title="Cancelar"
              cancel={true}
              onClick={onToggle}
              isLoading={isLoading}
              disabled={disabled}
              width={8}
              height={3.5}
            />
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
