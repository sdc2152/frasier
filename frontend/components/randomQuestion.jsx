import React from "react";
import QuestionContainer from "./question/questionContainer";
import SettingsContainer from "./settings/settingsContainer";

import {RECEIVE_GAME_ANSWER} from "../actions/gameActions";

const randomQuestion = () => (
  <div className="container">

    <div className="row text-center">
      <div className="col">
        <h1>Questions</h1>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <SettingsContainer/>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <QuestionContainer scope={RECEIVE_GAME_ANSWER} />
      </div>
    </div>


  </div>
);
export default randomQuestion;
