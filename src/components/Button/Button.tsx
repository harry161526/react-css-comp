import React from "react";

export interface ButtonProps {
  label: String
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

export default Button;