import React, { ReactNode } from "react";
import Typography from "../Typography";

interface INavProps {
  children?: ReactNode | JSX.Element | undefined;
  style?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
  title?: string;
}
const NavBar = ({ title, props, children, style }: INavProps) => {
  return (
    <nav
      className={`h-16 px-8 flex justify-start items-center bg-white ${style}`}
      {...props}
    >
      <Typography>
        <Typography.Heading variant="h2" style="opacity-80">
          {title}
        </Typography.Heading>
      </Typography>
      {children}
    </nav>
  );
};

export default NavBar;
