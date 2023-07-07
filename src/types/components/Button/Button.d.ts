import React from "react";
import "./Button.css";
export interface ButtonProps {
    label: String;
    primary?: boolean;
    size?: String;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
