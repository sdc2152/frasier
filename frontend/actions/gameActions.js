export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const START_NEW_GAME = "START_NEW_GAME";

export const RECEIVE_GAME_ANSWER = "RECEIVE_GAME_ANSWER";
export const RECEIVE_RANDOM_QUESTION_ANSWER = "RECEIVE_RANDOM_QUESTION_ANSWER";

export const RESET_GAME = "RESET_GAME";
export const GET_WINNING_PLAYER = "GET_WINNING_PLAYER";
export const TOGGLE_QUESTION_MODAL_DISPLAY = "TOGGLE_QUESTION_MODAL_DISPLAY";


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

export function receiveAnswer(answer, type) {
  return {
    type: type,
    answer: answer
  };
}

export function startNewGame() {
  return {
    type: START_NEW_GAME
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

export function toggleQuestionModalDisplay() {
  return {
    type: TOGGLE_QUESTION_MODAL_DISPLAY,
  };
}
