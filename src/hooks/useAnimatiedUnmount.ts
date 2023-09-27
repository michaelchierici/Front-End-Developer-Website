import { useState, useRef, useEffect } from "react";

export default function useAnimatiedUnmount(visible: boolean) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedElementRef: any = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }
    function handleAnimatedEnd() {
      setShouldRender(false);
    }
    const overlayRefElement = animatedElementRef.current;
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

  return { shouldRender, animatedElementRef };
}
