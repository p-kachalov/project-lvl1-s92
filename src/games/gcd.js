import flow from '../';
import { getRandomInt } from '../utils';

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const play = (round) => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return round(question, answer);
};

const iter = (round) => {
  if (play(round)) return iter(round);
  return false;
};

export default () => {
  const conditions = 'Find the greatest common divisor of given numbers.';
  const round = flow(conditions);
  iter(round);
};
