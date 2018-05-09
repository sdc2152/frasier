import React from "react";
import QuestionContainer from "./question/questionContainer";
import SettingsContainer from "./settings/settingsContainer";

const randomQuestion = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-7 order-md-first order-sm-last">
        <QuestionContainer/>
      </div>
      <div className="col-sm-12 col-md-5 order-md-last order-sm-first">
        <SettingsContainer/>
      </div>
    </div>
  </div>
);
export default randomQuestion;
