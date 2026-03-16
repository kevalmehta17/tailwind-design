import type { InputHTMLAttributes } from "react";

type inputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: inputProps) => {
  return <input {...props} />;
};

export default Input;
