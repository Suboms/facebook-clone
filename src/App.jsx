import React from "react";
import Form from "./components/Form";
import FaceText from "./components/FaceText";
import "./App.css";
import RegistrationForm from "./components/Signup";
// import { BrowserRouter } from "react-router-dom";

function App() {
  const dateMethod = new Date();
  const date = [];
  const year = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const yearBegin = dateMethod.getFullYear() - 120;
  const yearEnd = dateMethod.getFullYear();
  const genderType = ["select your pronoun", `She: "Wish her a happy birthday!"`, `He: "Wish him a happy birthday!"`, `They: "Wish them a happy birthday!"`,]
  for (let i = 1; i <= 31; i++) {
    date.push(i);
  }
  for (let i = yearBegin; i <= yearEnd; i++) {
    year.push(i);
  }
  const textHeader = "facebook";
  const textPara = `Facebook helps you connect and share with the people in your life.`;
  return (
    <>
      <div className="container">
        <div className="fb-content">
          <div className="content">
            <FaceText textHeader={textHeader} textPara={textPara} />

            <Form
              paraText="Forgotten password?"
              advertEm="Create a Page"
              advertText="for a celebrity, brand or business."
            />
          </div>
        </div>
      </div>
      <RegistrationForm
        dateArray={date}
        yearArray={year.sort(function (a, b) {
          return b - a;
        })}
        monthArray={months}
        genderArray={genderType}
      />
    </>
  );
}

export default App;
