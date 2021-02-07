import React from "react";
import { ButtonContainer } from "./CustomButton.StyledComponent";
// import "./CustomButton.scss";

const CustomButton = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default CustomButton;
