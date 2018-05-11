import {
  CATEGORIES,
  ALL_CATEGORIES_IDX,
  DIFFICULTIES,
  ALL_DIFFICULTIES_IDX
} from "../actions/settingsActions";

export const getCategoryName = ({settings}) => {
  const {categories, categoryIdx} = settings;
  return categories[categoryIdx];
};

export const getDifficultyName = ({settings}) => {
  const {difficulties, difficultyIdx} = settings;
  return difficulties[difficultyIdx];
};

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

export const getPostDataFromQuestionForm = ({questionForm}) => {
  const difficulty = questionForm.difficulty[0].toUpperCase();
  const category = questionForm.category[0].toUpperCase();
  return Object.assign(
    {},
    questionForm,
    {difficulty: difficulty, category: category}
  );
};
