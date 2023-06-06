import styled from "styled-components";
import { ReactComponent as OpenIcon } from "../../assets/icons/components/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/components/close.svg";
import { easeIn } from "../../styles/animations/easeInAndOut";

interface Props {
  visible: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  position: absolute;
  right: 0;
  top: 0;

  margin: 15px 0px;
  z-index: 20;

  border-radius: 16px;

  width: 63px;
  height: ${({ visible }) => (!visible ? "50px" : "186px")};
  background-color: ${({ visible, theme }) =>
    visible && `${theme.colors.menu_background}`};

  transition: all 400ms ease;
  transition-property: height, background-color;

  overflow: hidden;

  animation: ${easeIn} 2s ease-in;
`;

export const Content = styled.div`
  width: 50px;
  height: 180px;
  display: flex;
  margin-top: 10px;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const OpenMenu = styled(OpenIcon)`
  width: 50px;
  height: 50px;

  &:active {
    transform: rotate(180deg);
    transition: transform 250ms ease-in-out;
  }
`;

export const CloseMenu = styled(CloseIcon)`
  width: 40px;
  height: 60px;
  margin-bottom: 10px;

  &:active {
    transform: rotate(-180deg);
    transition: transform 250ms ease-in-out;
  }
`;
