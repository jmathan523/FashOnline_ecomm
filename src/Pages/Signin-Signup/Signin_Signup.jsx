import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import "./Signin_Signup.scss";

const Signin_Signup = () => {
  return (
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Signin_Signup;
