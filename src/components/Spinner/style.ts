import styled from "styled-components";
import { loading } from "../../styles/animations/loading";

interface Props {
  size: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledSpinner = styled.div<Props>`
  animation: ${loading} 1000ms linear infinite;
  transform: translateZ(0) scale(1);
`;
