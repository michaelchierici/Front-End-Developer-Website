import styled from "styled-components";
import { ReactComponent as BurgerIcon } from "../../assets/logo/navigation.svg";

interface Props {
  isOpen: boolean;
  activeByHeight: number;
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

  width: 55px;
  height: ${({isOpen}) => !isOpen ? '50px' : '156px'};
  border-radius: 16px;
  
  background: linear-gradient(
    103.59deg,
    rgba(255, 255, 255, 0.1) 30.34%,
    rgba(255, 255, 255, 0.1) 79.99%
    );
    
    transition: height 400ms ease-in-out;
    overflow: hidden;

    background: ${({isOpen, activeByHeight}) => activeByHeight >= 50 && !isOpen && 'transparent'}
    
    
`;


export const Content = styled.div`
  width:  100%;
  height: 100%;
  display: flex;
  justify-content: center;

`;


export const Button = styled.button`
  background-color: transparent;
  border: none;

`

export const LogoMenu = styled(BurgerIcon)`
width: 50px;
height: 50px;
`;

