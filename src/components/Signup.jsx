import React from "react";
import InputField from "./Input";
import SelectField from "./Select";
import PropTypes from "prop-types";
import design from "./Signup.module.css";
const RegistrationForm = ({
  dateArray,
  monthArray,
  yearArray,
  genderArray,
}) => {
  const d = new Date();

  return (
    <>
      <div className={`${design["form-container"]}`}>
        <div className={`${design["header-container"]}`}></div>
        <div className={`${design["form-content"]}`}>
          <form action="" method="post" className={`${design["signup-form"]}`}>
            <div className={`${design["name-row"]}`}>
              <InputField
                name="fname"
                type="text"
                placeholder="First Name"
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />
              <InputField
                name="lname"
                type="text"
                placeholder="Last Name"
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />
            </div>

            <InputField
              name="reg-email"
              type="text"
              placeholder="Mobile number or email address"
              className={{
                div: `${design["input-container"]}`,
                input: `${design["form-control"]}`,
              }}
            />

            <InputField
              name="password"
              type="password"
              placeholder="New Password"
              className={{
                div: `${design["input-container"]}`,
                input: `${design["form-control"]}`,
              }}
            />

            <div className={`${design["dob-row"]}`}>
              <SelectField
                name="date"
                options={dateArray}
                defaultValue={d.getDate().toString()}
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />
              <SelectField
                name="month"
                options={monthArray}
                defaultValue={monthArray[d.getMonth()]}
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />
              <SelectField
                name="year"
                options={yearArray}
                defaultValue={d.getFullYear().toString()}
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />
            </div>

            <div className={`${design["gender-row"]}`}>
              <InputField
                name="gender"
                type="radio"
                label="Female"
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />

              <InputField
                name="gender"
                type="radio"
                label="Male"
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />

              <InputField
                name="gender"
                type="radio"
                label="Custom"
                className={{
                  div: `${design["input-container"]}`,
                  input: `${design["form-control"]}`,
                }}
              />
            </div>

            <SelectField
              name="gender-type"
              options={genderArray}
              defaultValue="1"
              
              className={{
                div: `${design["input-container"]}`,
                input: `${design["form-control"]}`,
              }}
            />
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
  genderArray: PropTypes.array.isRequired,
};
export default RegistrationForm;
