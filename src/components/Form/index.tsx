import Spinner from "../Spinner";
import { FormProps } from "../../types/Form";
import { Container } from "./styles";

export default function Form({ children, error, isLoading }: FormProps) {
  return (
    <Container>
      {error &&
        [error]?.map((errors: { message: string }, index: number) => {
          return <h4 key={index}>{errors?.message}</h4>;
        })}
      {children}
      {isLoading && (
        <div className="loader">
          <Spinner size={25} color="white" />
        </div>
      )}
    </Container>
  );
}
