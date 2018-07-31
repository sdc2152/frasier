import {combineReducers} from "redux";
import QuestionReducer from "./questionReducer";
import SettingsReducer from "./settingsReducer";
import QuestionFormReducer from "./questionFormReducer";
import QuestionListReducer from "./questionListReducer";

const rootReducer = combineReducers({
  settings: SettingsReducer,
  question: QuestionReducer,
  questionForm: QuestionFormReducer,
  questionList: QuestionListReducer
});

export default rootReducer;
