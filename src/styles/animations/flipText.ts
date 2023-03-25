import { keyframes } from "styled-components";

export function textFlipUp() {
  const up = keyframes`
  0% {
     opacity: 0;
     backface-visibility: hidden
    }

  75% {
    opacity: 0.5;
    backface-visibility: hidden
    }

  100% {
    opacity: 1;
    backface-visibility: none
  }
  `;
  return up;
}
export function textFlipDown() {
  const down = keyframes`
  0% {
     opacity: 0;
     backface-visibility: none
    }

  75% {
    backface-visibility: hidden
    }

  100% {
    opacity: 0;
    backface-visibility: hidden
  }
  `;
  return down;
}
