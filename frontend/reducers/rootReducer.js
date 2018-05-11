import {combineReducers} from "redux";
import QuestionReducer from "./questionReducer";
import SettingsReducer from "./settingsReducer";
import QuestionFormReducer from "./questionFormReducer";

const rootReducer = combineReducers({
  settings: SettingsReducer,
  question: QuestionReducer,
  questionForm: QuestionFormReducer
});

export default rootReducer;
