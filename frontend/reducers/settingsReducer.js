import {
  CATEGORIES,
  ALL_CATEGORIES_IDX,
  DIFFICULTIES,
  ALL_DIFFICULTIES_IDX,
  RECEIVE_CATEGORY_IDX,
  RECEIVE_DIFFICULTY_IDX,
  SET_DEFAULT_SETTINGS,
} from "../actions/settingsActions.js";

const defaultState = {
  categoryIdx: ALL_CATEGORIES_IDX,
  categories: CATEGORIES,
  difficultyIdx: ALL_DIFFICULTIES_IDX,
  difficulties: DIFFICULTIES,
};

function settings(state=defaultState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY_IDX:
      return Object.assign({}, state, {categoryIdx: action.categoryIdx});
    case RECEIVE_DIFFICULTY_IDX:
      return Object.assign({}, state, {difficultyIdx: action.difficultyIdx});
    case SET_DEFAULT_SETTINGS:
      return Object.assign({}, defaultState);
    default:
      return state;
  }
}
export default settings;
