import type { AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  path: string;
  children: React.ReactNode;
};
const Link = ({ path, children, ...props }: LinkProps) => {
  return (
    <a href={path} {...props}>
      {children}
    </a>
  );
};

export default Link;
