import { ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  error: any;
  isLoading: boolean;
}
