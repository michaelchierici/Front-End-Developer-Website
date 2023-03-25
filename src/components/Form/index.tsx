import { InputProps } from "../../Typings/Input";
import Spinner from "../Spinner";
import { Container } from "./styles";

export default function Form({
  children,
  error = false,
  isLoading,
}: InputProps) {
  return (
    <Container error={error}>
      {children}
      {isLoading && (
        <div className="loader">
          <Spinner size={16} />
        </div>
      )}
    </Container>
  );
}
