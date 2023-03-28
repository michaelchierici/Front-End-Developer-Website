import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  input {
    padding-bottom: 70px;
    height: 110px;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;
