import React from "react";
import "./FormInput.scss";

const FormInput = ({ label, id, handleChange, ...otherInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherInputProps}
      />
      {label ? (
        <label
          htmlFor={id}
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
