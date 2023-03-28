import ReactPortal from "../ReactPortal";

import { ModalProps } from "../../Typings/Modal";

import { useEffect, useState } from "react";
import useErrors from "../../hooks/useErrors";

import Form from "../Form";
import Button from "../Button";
import { Input } from "../Input";

import isEmailValid from "../../utils/isEmailValid";

import { Container, Footer, Header, Message, Overlay } from "./style";
import delay from "../../utils/delay";

interface FormDataProps {
  target: {
    name: string;
    value: string;
  };
  preventDefault: () => void;
}

export default function Modal({
  visible,
  disabled,
  isLoading,
  onToggle,
}: ModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { setError, removeError, getErrorMessageByFieldValue, errors } =
    useErrors();

  const isFormValid = name && message && errors.length === 0;

  function handleNameChange(event: FormDataProps) {
    setName(event.target.value);
    if (!event.target.value) {
      setError({ field: "name", message: "Nome é obrigatório" });
    } else {
      removeError("name");
    }
  }

  function handlEmailChange(event: FormDataProps) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: "email", message: "E-mail inválido" });
    } else {
      removeError("email");
    }
  }

  function handleMessageChange(event: FormDataProps) {
    setMessage(event.target.value);
    if (message.length < 12) {
      setError({
        field: "message",
        message: `Pelo menos 12 caracteres...`,
      });
    } else {
      removeError("message");
    }
  }

  async function handleSubmit(event?: FormDataProps) {
    event?.preventDefault();

    let url = `https://web.whatsapp.com/send?phone=85987892505`;
    url += `&text=${encodeURI(message)}&app_absent=0`;

    setLoading(true);
    await delay(1000);
    window.open(url);
    setLoading(false);
  }

  useEffect(() => {
    setName("");
    setEmail("");
    setMessage("");
  }, [onToggle]);

  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container>
          <Header>
            <h3>
              Deseja entrar em contato?
              <br />
              Me envie uma mensagem!
            </h3>
          </Header>
          <Form
            isLoading={isLoading}
            error={getErrorMessageByFieldValue("name")}
          >
            <Input
              type="text"
              placeholder="Nome *"
              value={name}
              onChange={(event) => handleNameChange(event)}
              error={getErrorMessageByFieldValue("name")}
            />
          </Form>
          <Form
            isLoading={isLoading}
            error={getErrorMessageByFieldValue("email")}
          >
            <Input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={handlEmailChange}
              error={getErrorMessageByFieldValue("email")}
            />
          </Form>
          <Message>
            <Form
              isLoading={isLoading}
              error={getErrorMessageByFieldValue("message")}
            >
              <Input
                type="text"
                placeholder="Escreva uma mensagem..."
                value={message}
                onChange={handleMessageChange}
                error={getErrorMessageByFieldValue("message")}
                maxLength={100}
                disabled={!name}
              />
            </Form>
          </Message>

          <Footer>
            <Button
              title="Enviar"
              type="button"
              onClick={handleSubmit}
              isLoading={loading}
              disabled={!isFormValid}
              cancel={false}
              height={3.5}
              width={8}
            />

            <Button
              title="Cancelar"
              type="button"
              onClick={onToggle}
              isLoading={loading}
              disabled={disabled}
              cancel={true}
              width={8}
              height={3.5}
            />
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
