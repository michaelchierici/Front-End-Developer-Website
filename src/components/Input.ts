import styled from "styled-components";

interface Props {
  error: void;
}

export const Input = styled.input<Props>`
  width: 100%;
  height: 3em;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.menu_background};
  outline: none;

  padding: 0 16px;

  font-size: 0.85em;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text_secondary};

  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;

  &::placeholder {
    color: #bcbcbc;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border};
  }
  transition: all 0.2s ease-in;
  border: 1px solid #b1b1b1;

  &[disabled] {
    opacity: 0.5;
    border-color: gray;
  }
`;
