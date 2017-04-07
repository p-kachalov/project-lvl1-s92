import flow from '../';
import { getRandomInt } from '../utils';
import { cons } from '../../node_modules/hexlet-pairs';

const getRandomOperation = (num1, num2) => {
  const randomNum = getRandomInt(0, 3);
  if (randomNum === 0) return cons(`${num1} + ${num2}`, String(num1 + num2));
  if (randomNum === 1) return cons(`${num1} - ${num2}`, String(num1 - num2));
  return cons(`${num1} * ${num2}`, String(num1 * num2));
};

const getPuzzle = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  return getRandomOperation(num1, num2);
};

export default () => {
  const conditions = 'What is the result of the expression?';
  flow(conditions, getPuzzle);
};
