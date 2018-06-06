import {
  CATEGORIES,
  DIFFICULTIES,
} from "../actions/questionFormActions";

export const getPostDataFromQuestionForm = ({questionForm}) => {
  const difficulty = DIFFICULTIES[questionForm.difficulty][0].toUpperCase();
  const category = CATEGORIES[questionForm.category][0].toUpperCase();
  console.log(difficulty);
  console.log(category);
  return Object.assign(
    {},
    questionForm,
    {difficulty: difficulty, category: category}
  );
};
