import styled from "styled-components";

interface Props {
  error: boolean;
}

export const Input = styled.input<Props>`
  width: 90%;
  height: 3em;

  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.menu_background};
  outline: none;

  & + & {
    margin: 15px 0;
  }
`;
