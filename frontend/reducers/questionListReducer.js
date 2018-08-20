import {
  DEFAULT_SORT_IDX,
  RECEIVE_QUESTION_LIST,
  RECEIVE_SORT_IDX,
} from "../actions/questionListActions";

const defaultState = {
  list: [],
  sortByIdx: DEFAULT_SORT_IDX,
};

function questionListReducer(state=defaultState, action) {
  Object.freeze(state);
  console.log(action.type, RECEIVE_QUESTION_LIST);
  switch(action.type) {
    case RECEIVE_QUESTION_LIST:
      return Object.assign({}, state, {list: action.questionList});
    case RECEIVE_SORT_IDX: 
      return Object.assign({}, state, {sortByIdx: action.sortByIdx});
    default:
      return state;
  }
}

export default questionListReducer;
