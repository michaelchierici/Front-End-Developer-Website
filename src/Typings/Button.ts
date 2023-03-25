export interface ButtonProps {
  title: string;
  cancel: boolean;
  onClick: () => void;
  isLoading: boolean;
  disabled: boolean;
  width: number;
  height: number;
}
