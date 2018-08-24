export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";

export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const FALSE_ANSWER = "FALSE_ANSWER";

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
