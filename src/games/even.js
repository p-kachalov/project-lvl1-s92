import { cons } from 'hexlet-pairs';
import flow from '../';
import { getRandomInt } from '../utils';


const getPuzzle = () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const manual = 'Answer "yes" if number even otherwise answer "no".';
  flow(manual, getPuzzle);
};
