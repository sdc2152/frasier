import {
  ADD_NEW_PLAYER,
  REMOVE_PLAYER,
  START_NEW_GAME,
  RECEIVE_GAME_ANSWER,
  RESET_GAME,
  TOGGLE_QUESTION_MODAL_DISPLAY,
} from "../actions/gameActions";

import {CORRECT_ANSWER} from "../actions/actions";

const DEFAULT_WINNING_POINTS = 1;

const defaultState = {
  players: [],
  winningPoints: DEFAULT_WINNING_POINTS,
  gameStart: false,
  gameOver: false,
  questionModalDisplay: false
};

const defaultPlayerState = {
  name: "",
  points: 0
};

const getCurrentPlayer = players => players[0];
const getLastPlayer = players => players[players.length-1];

function player(state=defaultPlayerState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GAME_ANSWER:
      if (action.answer === CORRECT_ANSWER) {
        return Object.assign({}, state, {points: state.points + 1});
      }
      return state;
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
    case ADD_NEW_PLAYER:
      return Object.assign({}, state, {
        players: players(state.players, action)
      });
    case REMOVE_PLAYER:
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
    case START_NEW_GAME:
      if (state.gameOver) {
        return Object.assign({}, state, {
          players: players(state.players, action),
          gameOver: false,
          gameStart: false,
        });
      }
      return Object.assign({}, state, {gameStart: true});
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
