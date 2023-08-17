import { keyframes } from "styled-components";

export const easeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  `;

export const easeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;

  }
  `;

export const modalIn = keyframes`
from {
    opacity: 0;
    transform: translateY(400px);
  }

to {
    opacity: 1;
  }
  `;

export const modalOut = keyframes`

from {
    opacity: 1;
  }

to {
    opacity: 0;
    transform: translateY(400px);

  }
`;

export const easeSlideMoveLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(20px);
  }

to {
    opacity: 1;

  }
  `;

export const easeSlideMoveRight = keyframes`
from {
    opacity: 0;
    transform: translateX(-20px);
  }

to {
    opacity: 1;

  }
  `;

export const expand = keyframes`
  from {
    transform: translateY(0em);
    transition: all 400ms;
  } to {
    transform: translateY(32em);
    transition: all 400ms;
  }
  `;

export const reduce = keyframes`
from {
  transform: translateY(32em);
  transition: all 400ms;
} to {
  transform: translateY(0em);
  transition: all 400ms;
}
`;
