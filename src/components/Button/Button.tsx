import React, { MouseEventHandler, ReactNode } from "react";
import PropTypes from "prop-types";
import "./Button.scss";

//#region  Interfaces
interface IButtonChildren {
  children: ReactNode | JSX.Element;
}

interface IButtonProps extends IButtonChildren {
  variant?: "primary" | "secondary" | "disabled";
  clickAction?: MouseEventHandler<HTMLButtonElement>;
  style?: string;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
//#endregion

const Button = ({
  variant = "primary",
  clickAction,
  style,
  children,
}: IButtonProps) => {
  return (
    <button
      onClick={clickAction}
      className={`button button--${variant} ${style}}`}
      tabIndex={0}
      role="button"
      aria-label="Button"
    >
      {children}
    </button>
  );
};

const Text = ({ children }: IButtonChildren): ReactNode => {
  return <p className="button__text">{children}</p>;
};

Button.Text = Text; // Exporting as compound object

// RunTime Typechecking using PropTypes
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "disabled"]),
  clickAction: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
