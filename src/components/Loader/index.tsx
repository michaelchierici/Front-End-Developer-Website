import ReactPortal from "../ReactPortal";

import Spinner from "../Spinner";

import { LoaderProps } from "../../Typings/Loader";

import { Overlay } from "./styles";

export default function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={70} />
      </Overlay>
    </ReactPortal>
  );
}
