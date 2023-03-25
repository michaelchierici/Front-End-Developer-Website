import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  visible: boolean;
  width: number;
  height: number;
}
