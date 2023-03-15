import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: auto;
  padding-top: 49px;

  height: 100%;
  width: 80%;

  transition: all 450ms;
`;

export const Content = styled.button`
  width: 9rem;
  height: 2.5rem;

  font-size: ${({ theme }) => theme.font.size.md}px;
  font-weight: ${({ theme }) => theme.font.weight.light};

  border-radius: 14px;
  border: none;

  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text_primary};

  padding: 5px 22.5px;
  cursor: pointer;
  transition: all 450ms;

  &:hover {
    background: ${({ theme }) => `linear-gradient(${theme.colors.gradient})`};
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 0.5rem 1rem rgba(black, 0.15);
    transform: scale(0.95);
  }
`;
