import {
  ADD_NEW_PLAYER,
  RECEIVE_ANSWER,
  CORRECT_ANSWER
} from "../actions/gameActions";

const defaultState = {
  players: [],
  winningPoints: 20,
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
    default:
      return state;
  }
}

function players(state=[], action) {
  Object.freeze(state);
  switch (action.type) {
    case ADD_NEW_PLAYER:
      return [...state, {name: action.name, points: 0}];
    case RECEIVE_ANSWER:
      return [...state.slice(1), player(getCurrentPlayer(state), action)];
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
    case RECEIVE_ANSWER: {
      const newState = Object.assign(
        {}, state, players(state.players, action)
      );
      // check if the player that just went (player at end of array)
      // has a winning number of points. if so set gameOver to true
      // TODO: check if i need to convert to Number here
      if (getLastPlayer(state.players).points === newState.winningPoints) {
        return Object.assign({}, newState, {gameOver: true});
      }
      return newState;
    }
    default:
      return state;
  }
}
export default game;
