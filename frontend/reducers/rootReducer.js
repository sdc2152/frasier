import {combineReducers} from "redux";
import QuestionReducer from "./questionReducer.js";

const rootReducer = combineReducers({
  question: QuestionReducer
});

export default rootReducer;
