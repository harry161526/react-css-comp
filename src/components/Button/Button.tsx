import React from "react";
import "./Button.css";
export interface ButtonProps {
  label: String,
  primary?: boolean
  size?: String
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`button-standard`}
    >
      {props.label}
    </button>
  );
}

export default Button;