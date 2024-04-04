/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import style from "./Form.module.css";

const InputField = ({label, name, placeholder, type, value, onChange, errors, className}) => {
  const{div, labelClass, input} = className || {};
  return (
    <>
      <div className={div}>
        <label htmlFor={name} className={labelClass}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={input}
          onChange={onChange}
          value={value}
        />
        {errors && errors[name] && (
                  <span className={`${style["error-message"]}`}>
                    {errors[name]}
                  </span>
                )}
      </div>
    </>
  );
};

InputField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    errors: PropTypes.object,
    className:PropTypes.object
}

export default InputField;