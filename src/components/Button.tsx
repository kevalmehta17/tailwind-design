import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
const Button = ({ type = "submit", children, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
