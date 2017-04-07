import flow from '../';
import getRandomInt from '../random-int';


const puzzle = (play) => {
  const question = String(getRandomInt(1, 100));
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return play(question, answer);
};

export default () => {
  const conditions = 'Answer "yes" if number even otherwise answer "no".';
  flow(conditions, puzzle);
};
