import { ReactNode } from "react";

export interface ModalProps {
  visible: boolean;
  title: string;
  children: ReactNode;
}
