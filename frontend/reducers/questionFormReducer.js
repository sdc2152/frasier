import {
  RECEIVE_FORM_FIELD_CHANGE,
  RESET_FORM_FIELD,
  DEFAULT_CATEGORY_IDX,
  CATEGORIES,
  DEFAULT_DIFFICULTY_IDX,
  DIFFICULTIES
} from "../actions/questionFormActions";

const defaultState = {
  body: "",
  answer: "",
  category: DEFAULT_CATEGORY_IDX,
  difficulty: DEFAULT_DIFFICULTY_IDX
};

function questionFormReducer(state=defaultState, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FORM_FIELD_CHANGE:
      return Object.assign({}, state, action.change);
    case RESET_FORM_FIELD:
      return defaultState;
    default:
      return state;
  }
}

export default questionFormReducer;
