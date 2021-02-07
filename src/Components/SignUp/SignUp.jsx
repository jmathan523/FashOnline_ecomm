import React from "react";
// import "./SignUp.scss";
import { SignupContainer, Title } from "./SignUp.StyledComponent";
import { auth, createUserProfile } from "../../Firebase/firebase.util";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onFormSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password and confirm password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName: displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignupContainer>
        <Title>
          <h2>I do not have an account</h2>
          <span>Sign up using your email and password</span>
        </Title>
        <form>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.onInputChange}
            label="Name"
            autoComplete="off"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.onInputChange}
            label="Email"
            autoComplete="off"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.onInputChange}
            label="Password"
            autoComplete="off"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.onInputChange}
            label="Confirm Password"
            autoComplete="off"
            required
          />
          <CustomButton type="submit" onClick={this.onFormSubmit}>
            SIGN UP
          </CustomButton>
        </form>
      </SignupContainer>
    );
  }
}

export default SignUp;
