import { ReactNode } from "react";
import PropTypes from "prop-types";
import "./Input.scss";

interface IChildren {
  children: ReactNode | JSX.Element;
}

interface IExtandableProps extends IChildren {
  props?: React.HTMLAttributes<HTMLDivElement>;
  style?: string;
}

interface IInput extends IChildren {
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const TakeInput = ({ props, style, children }: IExtandableProps) => {
  return (
    <div className={`input ${style}`} {...props}>
      {children}
    </div>
  );
};

const TextInput = ({ props, children }: IInput) => {
  return (
    <div className="input__text-input">
      <input className="input__text-input__input" type="text" {...props} />
      <label className="input__text-input__label">{children}</label>
    </div>
  );
};

const RadioInput = ({ props, children }: IInput) => {
  return (
    <div className="input__radio">
      <input type="radio" className="input__radio" {...props} />
      <label className="input__radio__label">{children}</label>
    </div>
  );
};

TakeInput.TextInput = TextInput;
TakeInput.RadioInput = RadioInput;

// RunTime Typechecking using PropTypes
TakeInput.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TakeInput;
