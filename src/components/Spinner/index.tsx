import { ReactComponent as Loading } from "../../assets/icons/components/loader.svg";

import { SpinnerProps } from "../../Typings/Spinner";

import { Container, StyledSpinner } from "./style";

export default function Spinner({ size }: SpinnerProps) {
  return (
    <Container>
      <StyledSpinner size={size}>
        <Loading />
      </StyledSpinner>
    </Container>
  );
}
