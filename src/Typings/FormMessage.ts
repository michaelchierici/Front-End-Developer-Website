export interface FormDataProps {
  target: {
    name: string;
    value: string;
  };
  preventDefault: () => void;
}
