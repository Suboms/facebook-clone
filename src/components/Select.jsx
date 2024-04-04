import React from "react";
import style from "./Form.module.css";
import PropTypes from "prop-types";

const SelectField = ({ label, name, defaultValue, onChange, options, errors, className }) => {
  const{div, labelClass, input} = className || {};
  return (
    <>
      <div className={div}>
        <label htmlFor={name} className={labelClass}>{label}</label>
        <select
          name={name}
          id={name}
          className={input}
          onChange={onChange}
          defaultValue={defaultValue}
          >
          {options.map((option, index) => (
            <option key={index} value={index+1} disabled={option.disabled}>
              {option}
            </option>
          ))}
          
        </select>
        {errors && errors[name] && (
                  <span className={`${style["error-message"]}`}>
                    {errors[name]}
                  </span>
                )}
      </div>
    </>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  errors: PropTypes.object,
  className:PropTypes.object
};

export default SelectField;
