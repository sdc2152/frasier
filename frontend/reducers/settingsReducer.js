import {
  CATEGORIES,
  RECEIVE_SETTINGS,
  RECEIVE_CATEGORY_IDX
} from "../actions/settingsActions.js";

const defaultState = {
  categoryIdx: 0,
  categories: CATEGORIES
};

function settings(state=defaultState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SETTINGS:
      return action.settings;
    case RECEIVE_CATEGORY_IDX:
      return Object.assign({}, state, {categoryIdx: action.categoryIdx});
    default:
      return state;
  }
}
export default settings;
