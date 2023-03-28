import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 350px;
  height: 500px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  height: 15%;
  text-align: center;

  margin-top: 15px;
  white-space: pre-line;
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;
