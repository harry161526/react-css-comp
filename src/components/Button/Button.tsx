import React from "react";
import 'Button.css';
export interface ButtonProps {
  label: String,
  primary?: boolean
  size?: String
}

const Button = (props: ButtonProps) => {
  const buttonType = props.primary ? 'button-standard-primary' : 'button-standard-secondary'
  return (
    <button
      className={`button-standard ${buttonType} button-standard-${props.size}`}
    >
      {props.label}
    </button>
  );
}

export default Button;