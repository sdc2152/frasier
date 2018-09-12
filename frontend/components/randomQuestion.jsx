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
      <div className="col-sm-12 col-md-7 order-md-first order-sm-last">
        <QuestionContainer scope={RECEIVE_GAME_ANSWER} />
      </div>

      <div className="col-sm-12 col-md-5 order-md-last order-sm-first">
        <SettingsContainer/>
      </div>
    </div>

  </div>
);
export default randomQuestion;
