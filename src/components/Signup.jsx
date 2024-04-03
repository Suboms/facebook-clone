import React from "react";
import InputField from "./Input";
import SelectField from "./Select";
import PropTypes from "prop-types";
const RegistrationForm = ({ dateArray, monthArray, yearArray }) => {
  const d = new Date();

  return (
    <>
      <div className="form-container">
        <div className="header-container"></div>
        <div className="form-content">
          <form action="" method="post" className="signup-form">
            <div className="name-row">
              <InputField name="fname" type="text" placeholder="First Name" />
              <InputField name="lname" type="text" placeholder="Last Name" />
            </div>

            <div className="input-container">
              <InputField
                name="reg-email"
                type="text"
                placeholder="Mobile number or email address"
              />
            </div>
            <div className="input-container">
              <InputField
                name="password"
                type="password"
                placeholder="New Password"
              />
            </div>

            <div className="dob-row">
              <SelectField
                name="date"
                options={dateArray}
                defaultValue={d.getDate().toString()}
              />
              <SelectField
                name="month"
                options={monthArray}
                defaultValue={monthArray[d.getMonth()]}
              />
              <SelectField
                name="year"
                options={yearArray}
                defaultValue={d.getFullYear().toString()}
              />
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
RegistrationForm.propTypes = {
  dateArray: PropTypes.array.isRequired,
  monthArray: PropTypes.array.isRequired,
  yearArray: PropTypes.array.isRequired,
};
export default RegistrationForm;
