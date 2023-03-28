import { useState } from "react";

interface ErrorsProps {
  field: string;
  message: string;
}

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }: ErrorsProps) {
    const errorAlreadyExists = errors.find(
      (error: ErrorsProps) => error.field === field
    );

    if (errorAlreadyExists) {
      return;
    }
    setErrors((prevState) => [...prevState, { field, message }] as never);
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error: ErrorsProps) => error.field !== fieldName)
    );
  }

  function getErrorMessageByFieldValue(fieldValue: string) {
    return errors.find((error: ErrorsProps) => error.field === fieldValue);
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldValue,
    errors,
  };
}
