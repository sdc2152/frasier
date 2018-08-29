export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const START_NEW_GAME = "START_NEW_GAME";


export function addNewPlayer(name) {
  return {
    type: ADD_NEW_PLAYER,
    name: name
  };
}

export function removePlayer(index) {
  return {
    type: REMOVE_PLAYER,
    index: index
  };
}

export function receiveAnswer(answer) {
  return {
    type: RECEIVE_ANSWER,
    answer: answer
  };
}

export function startNewGame() {
  return {
    type: START_NEW_GAME
  };
}
