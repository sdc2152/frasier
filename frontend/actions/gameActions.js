export const ADD_NEW_PLAYER = "ADD_NEW_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const GO_TO_NEXT_PLAYER = "GO_TO_NEXT_PLAYER";
export const GO_TO_PREV_PLAYER = "GO_TO_PREV_PLAYER";

export const START_NEW_GAME = "START_NEW_GAME";
export const RECEIVE_GAME_ANSWER = "RECEIVE_GAME_ANSWER";
export const RECEIVE_RANDOM_QUESTION_ANSWER = "RECEIVE_RANDOM_QUESTION_ANSWER";

export const RECEIVE_WINNING_POINTS = "RECEIVE_WINNING_POINTS";

export const RESET_GAME = "RESET_GAME";
export const GET_WINNING_PLAYER = "GET_WINNING_PLAYER";
export const TOGGLE_QUESTION_MODAL_DISPLAY = "TOGGLE_QUESTION_MODAL_DISPLAY";

export const DEFAULT_WINNING_POINTS = 10;
export const MAX_POINTS = 20;

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

export function goToNextPlayer() {
  return {
    type: GO_TO_NEXT_PLAYER
  };
}

export function goToPrevPlayer() {
  return {
    type: GO_TO_PREV_PLAYER
  };
}

export function receiveAnswer(answer, type) {
  return {
    type: type,
    answer: answer
  };
}

export function receiveWinningPoints(winningPoints) {
  return {
    type: RECEIVE_WINNING_POINTS,
    winningPoints: winningPoints,
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
