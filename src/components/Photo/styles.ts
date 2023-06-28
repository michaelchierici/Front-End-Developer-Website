import styled, { css } from "styled-components";
import {
  desktop,
  laptop,
  mobileLg,
  mobileMd,
  mobileSm,
} from "../../styles/globals";

interface Props {
  isOpen: boolean;
  index: number;
  boxShadow: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;
