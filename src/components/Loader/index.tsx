import ReactPortal from "../ReactPortal";

import Spinner from "../Spinner";

import { LoaderProps } from "../../types/Loader";

import { Overlay } from "./styles";
import useAnimatiedUnmount from "../../hooks/useAnimatiedUnmount";

export default function Loader({ isLoading }: LoaderProps) {
  const { shouldRender, animatedElementRef } = useAnimatiedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={120} color="#5be1b3" />
      </Overlay>
    </ReactPortal>
  );
}
