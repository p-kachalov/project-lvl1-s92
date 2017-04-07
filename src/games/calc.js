import { cons } from 'hexlet-pairs';
import flow from '../';
import { getRandomInt } from '../utils';


const getPuzzle = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const randomNum = getRandomInt(0, 3);
  if (randomNum === 0) return cons(`${num1} + ${num2}`, String(num1 + num2));
  if (randomNum === 1) return cons(`${num1} - ${num2}`, String(num1 - num2));
  return cons(`${num1} * ${num2}`, String(num1 * num2));
};

export default () => {
  const manual = 'What is the result of the expression?';
  flow(manual, getPuzzle);
};
