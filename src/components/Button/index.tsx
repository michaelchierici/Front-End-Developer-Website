import { ButtonProps } from "../../types/Button";
import Spinner from "../Spinner";
import { Content } from "./styles";

export default function Button({
  onClick,
  title,
  type,
  cancel = false,
  isLoading,
  disabled,
  width,
  height,
}: ButtonProps) {
  return (
    <Content
      type={type}
      isLoading={isLoading}
      disabled={disabled}
      cancel={cancel}
      onClick={onClick}
      width={width}
      height={height}
    >
      {isLoading ? <Spinner size={40} color="#091612" /> : <span>{title}</span>}
    </Content>
  );
}
