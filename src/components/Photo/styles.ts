import styled, { css } from "styled-components";
import {
  desktop,
  laptop,
  mobileLg,
  mobileMd,
  mobileSm,
} from "../../styles/globals";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  ${mobileSm(css`
    img {
      width: 70%;
      height: 70%;
    }
  `)}
  ${mobileMd(css`
    img {
      width: 70%;
      height: 70%;
    }
  `)}

  ${mobileLg(css`
    img {
      width: 70%;
      height: 70%;
    }
  `)}

  ${laptop(css`
    img {
      width: 100%;
      height: 100%;
    }
  `)}

  ${desktop(css`
    img {
      width: 100%;
      height: 100%;
    }
  `)}
`;
