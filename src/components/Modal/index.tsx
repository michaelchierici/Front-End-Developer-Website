import { forwardRef } from "react";
import ReactPortal from "../ReactPortal";

import { ModalProps } from "../../types/Modal";

import { Container, Header, Overlay } from "./style";
import useAnimatiedUnmount from "../../hooks/useAnimtedEnd";

const Modal = forwardRef(({ visible, children, title }: ModalProps, ref) => {
  const { shouldRender, animtedElementRef } = useAnimatiedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible} ref={animtedElementRef}>
        <Container
          isLeaving={!visible}
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
