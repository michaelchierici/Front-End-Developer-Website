import { keyframes } from "styled-components";

export function easeIn() {
  const on = keyframes`
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
  return on;
}
export function easeOut() {
  const off = keyframes`
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
  return off;
}

export function easeModalIn() {
  const modalIn = keyframes`
from {
    opacity: 0;
    transform: translateY(400px);
  }

to {
    opacity: 1;
    transform: translateY(0px);

  }
  `;
  return modalIn;
}

export function easeModalOut() {
  const modalOut = keyframes`

from {
    opacity: 0;
    transform: translateY(-400px);
  }

to {
    opacity: 1;
    transform: translateY(0px);

  }
`;
  return modalOut;
}

export function easeSlideMoveLeft() {
  const slideLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(200%);
  }

to {
    opacity: 1;
    transform: translateX(0%);

  }
  `;
  return slideLeft;
}

export function easeSlideMoveRight() {
  const slideRight = keyframes`
from {
    opacity: 0;
    transform: translateX(-200px);
  }

to {
    opacity: 1;
    transform: translateY(-0px);

  }
  `;
  return slideRight;
}
