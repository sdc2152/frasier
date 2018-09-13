import {
  RECEIVE_FORM_FIELD_CHANGE,
  RECEIVE_ERRORS,
  RESET_FORM_FIELD,
  DEFAULT_CATEGORY_IDX,
  DEFAULT_DIFFICULTY_IDX,
} from "../actions/questionFormActions";

const defaultState = {
  body: "",
  answer: "",
  errors: {},
  category: DEFAULT_CATEGORY_IDX,
  difficulty: DEFAULT_DIFFICULTY_IDX
};

function questionFormReducer(state=defaultState, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FORM_FIELD_CHANGE:
      return Object.assign({}, state, action.change);
    case RECEIVE_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case RESET_FORM_FIELD:
      return defaultState;
    default:
      return state;
  }
}

export default questionFormReducer;
