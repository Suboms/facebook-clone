import React from "react";
import style from "./Form.module.css";
import PropTypes from "prop-types";

const Buttons = ({containerClassName, buttonClassName, label, name, type}) => {
  return (
    <>
      <div className={`${style[containerClassName]}`}>
        <button type={type} className={`${style[buttonClassName]} `} name={name}>
          {label}
        </button>
      </div>
    </>
  );
};
Buttons.propTypes={
    containerClassName:PropTypes.string.isRequired,
    buttonClassName:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired
}
export default Buttons