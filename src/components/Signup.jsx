import React from "react";
import InputField from "./Input";
const RegistrationForm = () => {
  return (
    <>
      <div className="form-container">
        <div className="header-container"></div>
        <div className="form-content">
          <form action="" method="post" className="signup-form">
            <div className="name-row">
              <InputField name="fname" type="text" placeholder="First Name" />
            </div>

            <div className="input-container"></div>
            <div className="input-container"></div>

            <div className="dob-row">
              <div className="input-container"></div>
              <div className="input-container"></div>
            </div>

            <div className="gender-row">
              <div className="input-container"></div>
              <div className="input-container"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegistrationForm