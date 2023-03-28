import { forwardRef } from "react";
import ReactPortal from "../ReactPortal";

import { ModalProps } from "../../Typings/Modal";

import { Container, Header, Overlay } from "./style";

const Modal = forwardRef(({ visible, children, title }: ModalProps, ref) => {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isModalIn={visible}>
        <Container
          isModalIn={visible}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <Header>
            <h3>{title}</h3>
          </Header>
          {children}
        </Container>
      </Overlay>
    </ReactPortal>
  );
});

Modal.displayName = "Modal";

export default Modal;
