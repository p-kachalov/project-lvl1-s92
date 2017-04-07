import flow from '../';
import { getRandomInt } from '../utils';
import { cons } from '../../node_modules/hexlet-pairs';

const getPuzzle = () => {
  const question = String(getRandomInt(1, 100));
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const conditions = 'Answer "yes" if number even otherwise answer "no".';
  flow(conditions, getPuzzle);
};
