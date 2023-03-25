import ReactPortal from "../ReactPortal";

import { ModalProps } from "../../Typings/Modal";

import { Container, Footer, FormGroup, Header, Overlay } from "./style";
import { Input } from "../Input";

export default function Modal({
  visible,
  disabled,
  isLoading,
  onClose,
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
            <h3>Deseja entrar em contato? Me envia uma mensagem!</h3>
          </Header>
          <FormGroup>
            <Input />
            <Input />
          </FormGroup>
          <Footer>
            <button
              type="button"
              onClick={handleSendMessage}
              disabled={disabled}
            >
              Confirmar
            </button>

            <button type="button" onClick={onClose} disabled={disabled}>
              Cancelar
            </button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
