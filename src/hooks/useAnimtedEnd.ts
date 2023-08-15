import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useAnimatiedUnmount(visible: boolean) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animtedElementRef: any = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    const overlayRefElement = animtedElementRef.current;

    function handleAnimatedEnd() {
      setShouldRender(false);
    }
    if (!visible && overlayRefElement) {
      overlayRefElement.addEventListener("animationend", handleAnimatedEnd);
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener(
          "animationend",
          handleAnimatedEnd
        );
      }
    };
  }, [visible]);

  return { shouldRender, animtedElementRef };
}
