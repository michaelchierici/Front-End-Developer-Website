import styled from "styled-components";

interface Props {
  cancel: boolean;
  isLoading: boolean;
  disabled: boolean;
  width: number;
  height: number;
}

export const Container = styled.div<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.button<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ cancel, theme }) =>
    !cancel ? theme.colors.button : "gray"};

  width: ${({ width }) => width}em;
  height: ${({ height }) => height}em;

  color: ${({ theme }) => theme.colors.text_primary};
  font-weight: ${({ theme }) => theme.font.weight.main};

  overflow: hidden;

  span {
    font-size: 1.25em;
  }

  &:hover {
    background: ${({ theme, cancel }) => !cancel && `#12af51`};
  }
  transition: background 0.2s ease-in;

  &[disabled] {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.menu_background};
  }
`;
