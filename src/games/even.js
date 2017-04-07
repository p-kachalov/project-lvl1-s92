import flow from '../';
import { getRandomInt } from '../utils';

const play = (round) => {
  const question = String(getRandomInt(1, 100));
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return round(question, answer);
};

const iter = (round) => {
  if (play(round)) return iter(round);
  return false;
};

export default () => {
  const conditions = 'Answer "yes" if number even otherwise answer "no".';
  const round = flow(conditions);
  iter(round);
};
