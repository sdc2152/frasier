import {
  CATEGORIES,
  ALL_CATEGORIES_IDX,
  DIFFICULTIES,
  ALL_DIFFICULTIES_IDX
} from "../actions/settingsActions";

// settings
export const getCategoryName = ({settings}) => {
  const {categories, categoryIdx} = settings;
  return categories[categoryIdx];
};

export const getDifficultyName = ({settings}) => {
  const {difficultyIdx} = settings;
  return difficultyIdx;
};

// question
export const getQuestion = ({question}) => question;

export const getQueryParams = state => {
  const category = getCategoryName(state);
  const difficulty = getDifficultyName(state);
  const exclude_id = getQuestion(state).id;
  const queryParams = {};

  // only include query params if they provide relevant filtering info
  // example: catergory = all; difficulty = all; question.id = undefined
  if (exclude_id !== undefined) {
    queryParams["exclude_id"] = exclude_id;
  }
  if (category !== CATEGORIES[ALL_CATEGORIES_IDX]) {
    queryParams["category"] = category;
  }
  if (difficulty !== DIFFICULTIES[ALL_DIFFICULTIES_IDX]) {
    queryParams["difficulty"] = difficulty;
  }
  return queryParams;
};

// game selectors
export const getGameOver = ({game}) => game.gameOver;

export const getGameStart = ({game}) => game.gameStart;

export const getWinningPoints = ({game}) => game.winningPoints;

export const getQuestionModalDisplay = ({game}) => game.questionModalDisplay;

export const getWinningPlayer = ({game}) => {
  if (game.gameOver && game.players.length > 0) {
    return game.players.find(e => e.points >= game.winningPoints);
  }
};

export const getPlayers = ({game}) => game.players;

export const getCurrentPlayer = ({game}) => game.players[0];

// questionlist selectors
export const getSortByIdx = ({questionList}) => questionList.sortByIdx;
export const getQuestionList = ({questionList}) => questionList.list;
