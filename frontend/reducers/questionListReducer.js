import {RECEIVE_QUESTION_LIST} from "../actions/questionListActions";

const defaultState = {
  list: [],
};

function questionListReducer(state=defaultState, action) {
  Object.freeze(state);
  console.log(action.type, RECEIVE_QUESTION_LIST);
  switch(action.type) {
    case RECEIVE_QUESTION_LIST:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}

export default questionListReducer;
