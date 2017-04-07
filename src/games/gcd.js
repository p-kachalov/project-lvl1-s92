import flow from '../';
import { getRandomInt } from '../utils';
import { cons } from '../../node_modules/hexlet-pairs';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const getPuzzle = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  return cons(`${num1} ${num2}`, String(gcd(num1, num2)));
};

export default () => {
  const conditions = 'Find the greatest common divisor of given numbers.';
  flow(conditions, getPuzzle);
};
