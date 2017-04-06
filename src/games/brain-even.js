
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const puzzle = (play) => {
  const question = String(getRandomInt(1, 100));
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return play(question, answer);
};

export default (flow) => {
  const conditions = 'Answer "yes" if number even otherwise answer "no".';
  flow(conditions, puzzle);
};
