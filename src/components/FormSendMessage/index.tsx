import { useEffect, useState } from "react";
import useErrors from "../../hooks/useErrors";

import { FormDataProps } from "../../types/FormMessage";
import { Container, Content, Footer, Message } from "./styles";

import { Input } from "../Input";
import Form from "../Form";
import Button from "../Button";

import isEmailValid from "../../utils/isEmailValid";
import delay from "../../utils/delay";

interface Props {
  onClose: () => void;
}

export default function FormSendMessage({ onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { setError, removeError, getErrorMessageByFieldValue, errors } =
    useErrors();

  const isFormValid = name && message && errors.length === 0;

  useEffect(() => {
    setName("");
    setEmail("");
    setMessage("");
  }, []);

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

    const url = `https://api.whatsapp.com/send?text=${encodeURI(
      message
    )}&app_absent=0&phone=+5585987892505`;

    setLoading(true);
    await delay(1500);
    window.open(url);
    setLoading(false);
  }

  return (
    <Container>
      <Content>
        <Form isLoading={false} error={getErrorMessageByFieldValue("name")}>
          <Input
            type="text"
            placeholder="Nome *"
            value={name}
            onChange={(event) => handleNameChange(event)}
            error={getErrorMessageByFieldValue("name")}
            disabled={loading}
          />
        </Form>
        <Form isLoading={false} error={getErrorMessageByFieldValue("email")}>
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handlEmailChange}
            error={getErrorMessageByFieldValue("email")}
            disabled={loading}
          />
        </Form>
        <Message>
          <Form
            isLoading={false}
            error={getErrorMessageByFieldValue("message")}
          >
            <Input
              type="text"
              placeholder="Escreva uma mensagem..."
              value={message}
              onChange={handleMessageChange}
              error={getErrorMessageByFieldValue("message")}
              maxLength={100}
              disabled={!name || loading}
            />
          </Form>
        </Message>
      </Content>

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
          onClick={onClose}
          isLoading={loading}
          disabled={false}
          cancel={true}
          width={8}
          height={3.5}
        />
      </Footer>
    </Container>
  );
}
