import { ReactComponent as Loading } from "../../assets/icons/components/loader.svg";

import { SpinnerProps } from "../../types/Spinner";

import { StyledSpinner } from "./style";

export default function Spinner({ size, color }: SpinnerProps) {
  return (
    <StyledSpinner>
      <Loading width={size} height={size} fill={color} />
    </StyledSpinner>
  );
}
