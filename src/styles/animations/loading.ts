import { keyframes } from "styled-components";

export function loading() {
  const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  } 
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

  return rotate;
}
