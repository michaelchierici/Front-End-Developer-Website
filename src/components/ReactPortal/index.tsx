import ReactDOM from "react-dom";
import { ReactPortalProps } from "../../Typings/ReactPortals";

export default function ReactPortal({
  containerId,
  children,
}: ReactPortalProps) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.setAttribute("id", containerId);
    document.body.appendChild(container);
  }
  return ReactDOM.createPortal(children, container);
}
