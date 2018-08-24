const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
const RECEIVE_ANSWER = "RECEIVE_ANSWER";

const CORRECT_ANSWER = "CORRECT_ANSWER";
const FALSE_ANSWER = "FALSE_ANSWER";

export function receiveAnswer(answer) {
  return {
    type: RECEIVE_ANSWER,
    answer: answer
  };
}

export function addNewPlayer(name) {
  return {
    type: ADD_NEW_PLAYER,
    name: name
  };
}
