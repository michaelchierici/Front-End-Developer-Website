import styled from "styled-components";


interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  position: absolute;
  right: 0;
  top: 0;
  
  margin: 15px 15px 0px 0px;

  width: 48px;
  height: ${({isOpen}) => isOpen ? '50px' : '156px'};
  border-radius: 12px;

  transition: height 400ms ease-in-out;

  background-color: ${({ theme }) => theme.colors.menu_background};
  overflow: hidden;
`;


export const Content = styled.div`
  max-width: 100%;
  max-height: 100%;
`;