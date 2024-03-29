import styled, { css } from "styled-components";
import { easeOut } from "../../styles/animations/easeInAndOut";

interface Props {
  isLeaving: boolean;
}

export const Overlay = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 100;
  ${({ isLeaving }) =>
    isLeaving &&
    css`
      animation: ${easeOut} 600ms forwards;
    `}
`;
