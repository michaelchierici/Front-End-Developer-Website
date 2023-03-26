import styled from "styled-components";

interface Props {
  error: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  border-radius: 8px;
  flex: 1;
  position: relative;
  input {
  }

  .loader {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 17px;
  }
`;
