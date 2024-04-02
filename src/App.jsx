import React from "react";
import Form from "./components/Form";
import FaceText from "./components/FaceText";
import "./App.css";
import RegistrationForm from "./components/Signup";
// import { BrowserRouter } from "react-router-dom";

function App() {
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
      <RegistrationForm/>
    </>
  );
}

export default App;
