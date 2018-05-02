import {combineReducers} from "redux";
import QuestionReducer from "./questionReducer.js";
import SettingsReducer from "./settingsReducer.js";

const rootReducer = combineReducers({
  settings: SettingsReducer,
  question: QuestionReducer
});

export default rootReducer;
