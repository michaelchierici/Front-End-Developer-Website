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
  width: 20vw;
  height: 50vh;
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

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 80%;
  position: relative;

  input {
    position: absolute;
    top: 0;
    padding-left: 15px;
    height: 9em;
    padding-bottom: 80px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  button {
    border: none;
    border-radius: 6px;
    margin: 0 15px;
  }
`;
