import React, { useState } from "react";
import style from "./Form.module.css";
import InputField from "./Input";
import Buttons from "./Buttons";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const Form = ({ paraText, advertText, advertEm }) => {
  // const symbolExpression = /[!@#$%^&*()_+=[\]{};':"|,.<>/?]/;
  // const numberExpression = /[0-9]/;
  const emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordExpression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[a-zA-Z\d@#$%^&+=]{6,20}$/;

  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    email: "",
    uname: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form Submitted Successfully");
    }
  };
  const handleValidation = () => {
    const errors = {};

    if (userData.email === "") {
      errors.email = "Email is required";
    } else if (!emailExpression.test(userData.email)) {
      errors.email = "Invalid Email";
    }

    if (userData.password === "") {
      errors.password = "Password is required";
    } else if (!passwordExpression.test(userData.password)) {
      errors.password = "Invalid Password";
    }

    return errors;
  };

  return (
    <>
      <div className={`${style["form-container"]}`}>
        <div className={`${style["form-content"]}`}>
          <form action="" method="post" onSubmit={handleSubmit}>
            <InputField
              name="email"
              placeholder="Email Address or Phone Number"
              type="text"
              value={userData.email}
              onChange={handleChange}
              errors={errors}
              className={{
                div: `${style["input-container"]}`,
                input: `${style["form-control"]} `,
              }}
            />

            <InputField
              name="password"
              placeholder="Password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              errors={errors}
              className={{
                div: `${style["input-container"]} `,
                input: `${style["form-control"]} `,
              }}
            />

            <Buttons
              label="Log in"
              containerClassName="login-button-container"
              buttonClassName="login-button"
              name="Login"
              type="submit"
            />

            <p className={`${style["reset-pword"]}`}>{paraText}</p>
            <div className={style.hr}></div>
            <Buttons
              label="Create Account"
              containerClassName="signup-button-container"
              buttonClassName="signup-button"
              name="signup"
              type="button"
            />
          </form>
        </div>
        <div className={`${style["advert-cta"]}`}>
          <p>
            <b>{advertEm}</b> {advertText}
          </p>
        </div>
      </div>
    </>
  );
};
Form.propTypes = {
  paraText: PropTypes.string,
  advertEm: PropTypes.string,
  advertText: PropTypes.string,
};
export default Form;
