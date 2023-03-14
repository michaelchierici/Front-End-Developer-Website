import ReactPortal from "../ReactPortal";
import { Overlay } from "./styles";

interface LoaderProps {
  isLoading: boolean;
}

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
