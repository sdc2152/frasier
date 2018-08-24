import {combineReducers} from "redux";
import GameReducer from "./gameReducer";
import QuestionFormReducer from "./questionFormReducer";
import QuestionListReducer from "./questionListReducer";
import QuestionReducer from "./questionReducer";
import SettingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
  game: GameReducer,
  question: QuestionReducer,
  questionForm: QuestionFormReducer,
  questionList: QuestionListReducer,
  settings: SettingsReducer,
});

export default rootReducer;
