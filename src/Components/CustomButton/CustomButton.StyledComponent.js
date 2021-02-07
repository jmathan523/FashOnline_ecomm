import styled, { css } from "styled-components";

const ButtonStyles = (props) => {
  if (props.isGoogleSignIn) return GoogleSigninStyle;

  return InvertedButtonStyle;
};

export const ButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  background-color: black;
  color: #ffff;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  min-width: 165px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 100ms;
  display: flex;
  justify-content: center;

  &:hover {
    color: black;
    background-color: #ffff;
    border: 1px solid black;
    box-shadow: 0 2px 12px lightgray;
  }

  ${ButtonStyles}
`;

const InvertedButtonStyle = css`
  color: black;
  background-color: #ffff;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: #ffff;
    border: none;
  }
`;

const GoogleSigninStyle = css`
  background-color: #4285f4;
  color: white;
  margin-right: 0;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
