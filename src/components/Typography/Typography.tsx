import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import "./Typography.scss";

//#region  Interfaces
interface IChildren {
  children: ReactNode | JSX.Element;
}
interface IExtandableProps extends IChildren {
  props?: React.HTMLAttributes<HTMLDivElement>;
  style?: string;
}
interface ITypographyHeading extends IExtandableProps {
  variant?: "h1" | "h2" | "h3" | "h4";
}

//#endregion

const Typography = ({ children, props, style }: IExtandableProps) => {
  return (
    <div className={`typography ${style}`} {...props}>
      {children}
    </div>
  );
};

const Heading = ({ variant, style, children }: ITypographyHeading) => {
  return (
    <div
      className={`typography__heading typography__heading--${variant} ${style}`}
    >
      {children}
    </div>
  );
};

const SubHeading = ({ children, props, style }: IExtandableProps) => {
  return (
    <div className={`typography__subheading ${style}`} {...props}>
      {children}
    </div>
  );
};

const Paragraph = ({ children, props, style }: IExtandableProps) => {
  return (
    <div className={`typography__paragraph ${style}`} {...props}>
      {children}
    </div>
  );
};

// Attach Heading and SubHeading components
// to the Typography object for compound export
Typography.Heading = Heading;
Typography.SubHeading = SubHeading;
Typography.Paragraph = Paragraph;

// RunTime Typechecking using PropTypes
Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
  style: PropTypes.string,
};

export default Typography;
