import {
  RECEIVE_FORM_FIELD_CHANGE,
  DEFAULT_CATEGORY_IDX,
  CATEGORIES,
  DEFAULT_DIFFICULTY_IDX,
  DIFFICULTIES
} from "../actions/questionFormActions";

const defaultState = {
  body: "",
  answer: "",
  category: CATEGORIES[DEFAULT_CATEGORY_IDX],
  difficulty: DIFFICULTIES[DEFAULT_DIFFICULTY_IDX]
};

function questionFormReducer(state=defaultState, action) {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FORM_FIELD_CHANGE:
      return Object.assign({}, state, action.change);
    default:
      return state;
  }
}

export default questionFormReducer;
