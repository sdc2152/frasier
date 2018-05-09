import {
  CATEGORIES,
  ALL_CATEGORIES_IDX,
  DIFFICULTIES,
  ALL_DIFFICULTIES_IDX,
  RECEIVE_SETTINGS,
  RECEIVE_CATEGORY_IDX,
  RECEIVE_DIFFICULTY_IDX,
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
    case RECEIVE_SETTINGS:
      newState = Object.assign({}, state, action.settings);
      console.log(newState);
      return newState;
    case RECEIVE_CATEGORY_IDX:
      return Object.assign({}, state, {categoryIdx: action.categoryIdx});
    case RECEIVE_DIFFICULTY_IDX:
      return Object.assign({}, state, {difficultyIdx: action.difficultyIdx});
    default:
      return state;
  }
}
export default settings;
