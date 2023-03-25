import { ButtonProps } from "../../Typings/Button";
import Spinner from "../Spinner";
import { Content } from "./styles";

export default function Button({
  onClick,
  title,
  cancel = false,
  isLoading,
  disabled,
  width,
  height,
}: ButtonProps) {
  return (
    <Content
      isLoading={isLoading}
      disabled={disabled}
      cancel={cancel}
      onClick={onClick}
      width={width}
      height={height}
    >
      {isLoading ? <Spinner size={40} /> : <span>{title}</span>}
    </Content>
  );
}
