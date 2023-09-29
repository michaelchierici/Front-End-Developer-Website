import { keyframes } from "styled-components";

export const moveRight = keyframes`

from {
    width: 0%;
    opacity: 0;
  }

to {
    width: 100%;
    opacity: 1;
  }
`;

export const moveLeft = keyframes`

from {
    width: 100%;
  }

to {
    width: 0%;
    opacity: 0;

  }
`;
