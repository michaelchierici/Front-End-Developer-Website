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
  width: 100%;
  flex: 1;
  padding: 10px 0;
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
      width: 50%;
      height: 50%;
    }
  `)}

  ${desktop(css`
    img {
      width: 92%;
      height: 92%;
    }
  `)}
`;
