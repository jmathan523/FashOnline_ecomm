import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import { SigninSignupContainer } from "./Signin_Signup.StyledComponent";
// import "./Signin_Signup.scss";

const Signin_Signup = () => {
  return (
    <SigninSignupContainer>
      <SignIn />
      <SignUp />
    </SigninSignupContainer>
  );
};

export default Signin_Signup;
