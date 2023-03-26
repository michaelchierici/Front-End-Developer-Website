import styled from "styled-components";

interface Props {
  visible: boolean;
  width: number;
  height: number;
}

export const Container = styled.div<Props>`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}em;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;

  position: relative;
  z-index: 10;

  background: linear-gradient(
    103.59deg,
    rgba(255, 255, 255, 0.01) 15.34%,
    rgba(255, 255, 255, 0.04) 79.99%
  );
  backdrop-filter: blur(20px);
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.2));

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    background: ${({ theme }) => `linear-gradient(${theme.colors.gradient})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    mask: exclude;
    pointer-events: none;
  }

  perspective: 1000px;
  transform: ${({ visible }) =>
    visible ? "rotateX(180deg)" : "rotateX(0deg)"};
  transition: all 1s ease;
  transform-style: preserve-3d;
  overflow: hidden;
`;