import { ReactNode } from "react";

export interface InputProps {
  children: ReactNode;
  error: boolean;
  isLoading: boolean;
}
