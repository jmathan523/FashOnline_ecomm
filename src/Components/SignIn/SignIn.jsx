import React from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../Firebase/firebase.util";
import "./SignIn.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <div className="title">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
        </div>
        <form onSubmit={this.onFormSubmit}>
          <FormInput
            id="email"
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.onInputChange}
            label="Email"
            autoComplete="off"
            required
          />
          <FormInput
            id="password"
            name="password"
            value={this.state.password}
            type="password"
            handleChange={this.onInputChange}
            label="Password"
            autoComplete="off"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="submit"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
