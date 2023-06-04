import ReactPortal from "../ReactPortal";

import Spinner from "../Spinner";

import { LoaderProps } from "../../types/Loader";

import { Overlay } from "./styles";

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={120} color="#5be1b3" />
      </Overlay>
    </ReactPortal>
  );
}
