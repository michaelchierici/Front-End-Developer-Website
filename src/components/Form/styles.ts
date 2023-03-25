import styled from "styled-components";

interface Props {
  error: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 80%;
  height: 12em;
  border-radius: 8px;
`;
