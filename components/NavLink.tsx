import React from "react";

export type NavLinkProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  text?: string;
  className?: string;
  children?: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  onClick,
  text,
  className,
  children,
}) => {
  return (
    <a className={`a ${className}`} href={href} onClick={onClick}>
      {text}
      {children}
    </a>
  );
};

export default NavLink;
