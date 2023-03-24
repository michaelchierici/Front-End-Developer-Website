import { ModalProps } from "../../Typings/Modal";
import { Input } from "../Input";
import ReactPortal from "../ReactPortal";
import { Container, Footer, FormGroup, Header, Overlay } from "./style";

export default function Modal({ visible, disabled, isLoading }: ModalProps) {
  if (!visible) {
    return null;
  }

  function handleSendMessage() {
    return;
  }

  function handleCloseModal() {
    return;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container>
          <Header>
            <h3>Deseja entrar em contato? Me envia uma mensagem!</h3>
          </Header>
          <FormGroup>
            <Input />
            <Input />
          </FormGroup>
          <Footer>
            <button
              type="button"
              onClick={handleCloseModal}
              disabled={disabled}
            >
              Confirmar
            </button>

            <button
              type="button"
              onClick={handleSendMessage}
              disabled={disabled}
            >
              Cancelar
            </button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
