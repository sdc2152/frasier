import {CATEGORIES} from "../actions/questionFormActions";

export const getPostDataFromQuestionForm = ({questionForm}) => {
  const difficulty = (questionForm.difficulty + 1);
  const category = CATEGORIES[questionForm.category][0].toUpperCase();
  return Object.assign(
    {},
    questionForm,
    {difficulty: difficulty, category: category}
  );
};
