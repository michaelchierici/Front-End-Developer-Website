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
  margin-top: 40px;

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text_secondary};
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    margin: 5px 0;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 10px;
    width: 90px;
    height: 35px;
    border: none;
    border-radius: 6px;
  }
`;
