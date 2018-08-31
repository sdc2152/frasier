import {
  ADD_NEW_PLAYER,
  REMOVE_PLAYER,
  RECEIVE_ANSWER,
  START_NEW_GAME
} from "../actions/gameActions";

import {CORRECT_ANSWER} from "../actions/actions";

const DEFAULT_WINNING_POINTS = 10;

const defaultState = {
  players: [],
  winningPoints: DEFAULT_WINNING_POINTS,
  gameStart: false,
  gameOver: false
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
    case RECEIVE_ANSWER:
      if (action.answer === CORRECT_ANSWER) {
        return Object.assign({}, state, {points: state.points + 1});
      }
      return state;
    case START_NEW_GAME:
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
    case RECEIVE_ANSWER:
      return [...state.slice(1), player(getCurrentPlayer(state), action)];
    case START_NEW_GAME:
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
    case RECEIVE_ANSWER: {
      if (state.players.length === 0) {
        return state;
      }
      let stateChange = {players: players(state.players, action)};
      if (getLastPlayer(stateChange.players).points === state.winningPoints) {
        stateChange.gameOver = true;
      }
      return Object.assign({}, state, stateChange);
    }
    case START_NEW_GAME:
      if (state.gameOver) {
        return Object.assign({}, state, {
          players: players(state.players, action),
          gameOver: false
        });
      }
      return Object.assign({}, state, {gameStart: true});
    default:
      return state;
  }
}
export default game;
