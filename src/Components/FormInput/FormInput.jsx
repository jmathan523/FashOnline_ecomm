import React from "react";
import {
  FormInputContainers,
  GroupContainer,
  LabelContainer,
} from "./FormInput.StyledComponent";
// import "./FormInput.scss";

const FormInput = ({ label, id, handleChange, ...otherInputProps }) => {
  return (
    <GroupContainer>
      <FormInputContainers onChange={handleChange} {...otherInputProps} />
      {label ? (
        <LabelContainer
          htmlFor={id}
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </LabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
