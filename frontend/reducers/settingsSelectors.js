export const getCategoryName = ({settings}) => {
  const {categories, categoryIdx} = settings;
  return categories[categoryIdx];
};

export const getDifficultyName = ({settings}) => {
  const {difficulties, difficultyIdx} = settings;
  return difficulties[difficultyIdx];
};
