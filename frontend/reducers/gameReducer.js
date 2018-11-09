import {
  ADD_NEW_PLAYER,
  REMOVE_PLAYER,
  GO_TO_NEXT_PLAYER,
  GO_TO_PREV_PLAYER,
  START_NEW_GAME,
  RECEIVE_GAME_ANSWER,
  RECEIVE_WINNING_POINTS,
  RESET_GAME,
  TOGGLE_QUESTION_MODAL_DISPLAY,
  DEFAULT_WINNING_POINTS,
} from "../actions/gameActions";

import {CORRECT_ANSWER} from "../actions/actions";

const defaultState = {
  players: [],
  winningPoints: DEFAULT_WINNING_POINTS,
  gameStart: false,
  gameOver: false,
  questionModalDisplay: false
};

const getCurrentPlayer = players => players[0];

const getLastPlayer = players => players[players.length-1];

const goToNextPlayer = players => (
  players.length > 0 ? [...players.slice(1), players[0]] : []
);

const goToPrevPlayer = players => (
  players.length > 0 ?
  [players[players.length-1], ...players.slice(0, players.length-1)] :
  []
);

function player(state=defaultPlayerState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME_ANSWER:
      return action.answer === CORRECT_ANSWER ?
        Object.assign({}, state, {points: state.points + 1}) :
        state;
    case RESET_GAME:
      return Object.assign({}, state, {points: 0});
    default:
      return state;
  }
}

function players(state=[], action) {
  Object.freeze(state);
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, {name: action.name, points: 0}];
    case REMOVE_PLAYER:
      return state.filter((e, i) => i !== action.index);
    case GO_TO_NEXT_PLAYER:
      return goToNextPlayer(state);
    case GO_TO_PREV_PLAYER:
      return goToPrevPlayer(state);
    case RECEIVE_GAME_ANSWER:
      return [...state.slice(1), player(getCurrentPlayer(state), action)];
    case START_NEW_GAME:
      return [];
    case RESET_GAME:
      return state.map(p => player(p, action));
    default:
      return state;
  }
}

function game(state=defaultState, action) {
  // the current player is index 0, will be moved to end of players array after
  // the players has taken a turn
  Object.freeze(state);
  switch (action.type) {
    case GO_TO_NEXT_PLAYER:
    case GO_TO_PREV_PLAYER:
    case REMOVE_PLAYER:
    case ADD_NEW_PLAYER:
      return Object.assign({}, state, {
        players: players(state.players, action)
      });
    case RECEIVE_GAME_ANSWER: {
      // TODO: change this to something better
      let stateChange = {questionModalDisplay: false};
      if (state.players.length != 0) {
        stateChange.players = players(state.players, action);
        if (getLastPlayer(stateChange.players).points >= state.winningPoints) {
          stateChange.gameOver = true;
        }
      }
      return Object.assign({}, state, stateChange);
    }
    case RECEIVE_WINNING_POINTS:
      return Object.assign({}, state, {winningPoints: action.winningPoints});
    case START_NEW_GAME:
      if (state.gameOver) {
        return Object.assign({}, state, {
          players: players(state.players, action),
          gameOver: false,
          gameStart: false,
        });
      }
      return Object.assign({}, state, {gameStart: !state.gameStart});
    case RESET_GAME:
      return Object.assign({}, state, {
        players: players(state.players, action),
        gameOver: false,
      });
    case TOGGLE_QUESTION_MODAL_DISPLAY:
      return Object.assign({}, state, {
        questionModalDisplay: !state.questionModalDisplay
      });
    default:
      return state;
  }
}
export default game;
