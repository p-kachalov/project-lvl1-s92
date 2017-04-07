import { cons } from 'hexlet-pairs';
import flow from '../';
import { getRandomInt } from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (current) => {
    if (current > num / 2) return true;
    if (num % current === 0) return false;
    return iter(current + 1);
  };
  return iter(2);
};

const getPuzzle = () => {
  const question = String(getRandomInt(1, 100));
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  const manual = 'Answer "yes" if number is prime otherwise answer "no".';
  flow(manual, getPuzzle);
};
