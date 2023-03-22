import { LoaderProps } from "../../Typings/Loader";
import ReactPortal from "../ReactPortal";
import { Overlay } from "./styles";

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <h1>loading</h1>
      </Overlay>
    </ReactPortal>
  );
}
