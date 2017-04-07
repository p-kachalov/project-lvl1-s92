import flow from '../';
import getRandomInt from '../random-int';
import { cons, car, cdr } from '../../node_modules/hexlet-pairs';

const getRandomOperation = (num1, num2) => {
  const randomNum = getRandomInt(0, 3);
  if (randomNum === 0) return cons(`${num1} + ${num2}`, String(num1 + num2));
  if (randomNum === 1) return cons(`${num1} - ${num2}`, String(num1 - num2));
  return cons(`${num1} * ${num2}`, num1 * num2);
};

const play = (round) => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const randomOperation = getRandomOperation(num1, num2);
  return round(car(randomOperation), cdr(randomOperation));
};

const iter = (round) => {
  if (play(round)) return iter(round);
  return false;
};

export default () => {
  const conditions = 'What is the result of the expression?';
  const round = flow(conditions);
  iter(round);
};
