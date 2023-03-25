import styled from "styled-components";
import { loading } from "../../styles/animations/loading";

export const StyledSpinner = styled.div`
  animation: ${loading} 1000ms linear infinite;
  transform: translateZ(0) scale(1);
`;
