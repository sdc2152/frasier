import {
  RECEIVE_QUESTION,
  REQUEST_QUESTION
} from "../actions/actions.js";

function question(state={}, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_QUESTION:
      return action.question;
    default:
      return state;
  }
}

export default question;
