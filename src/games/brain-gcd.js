import { newPuzzle } from '../puzzle';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

export default () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return newPuzzle(question, answer);
};