import React from "react";
import QuestionContainer from "./question/questionContainer";
import SettingsContainer from "./settings/settingsContainer";

const randomQuestion = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <SettingsContainer/>
        </div>
        <div className="col">
          <QuestionContainer/>
        </div>
      </div>
    </div>
  );
};
export default randomQuestion;
