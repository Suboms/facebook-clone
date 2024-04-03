import React from "react";
import style from "./Form.module.css";
import PropTypes from "prop-types";

const SelectField = ({ label, name, defaultValue, onChange, options, errors }) => {
  return (
    <>
      <div className={`${style["input-container"]}`}>
        <label htmlFor={name} className={`${style["form-label"]}`}>{label}</label>
        <select
          name={name}
          id={name}
          className={`${style["form-control"]} `}
          onChange={onChange}
          defaultValue={defaultValue}
          >
          {options.map((option, index) => (
            <option key={index} value={option}>
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
};

export default SelectField;
