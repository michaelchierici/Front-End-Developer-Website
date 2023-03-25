import { ReactComponent as Loading } from "../../assets/icons/components/loader.svg";

import { SpinnerProps } from "../../Typings/Spinner";

import { StyledSpinner } from "./style";

export default function Spinner({ size }: SpinnerProps) {
  return (
    <StyledSpinner>
      <Loading width={size} height={size} />
    </StyledSpinner>
  );
}
