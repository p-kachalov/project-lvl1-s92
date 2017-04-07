import flow from '../';
import getRandomInt from '../random-int';
import { cons, car, cdr } from '../pairs';

const getRandomOperation = (num1, num2) => {
  const randomNum = getRandomInt(0, 3);
  if (randomNum === 0) return cons(`${num1} + ${num2}`, num1 + num2);
  if (randomNum === 1) return cons(`${num1} - ${num2}`, num1 - num2);
  return cons(`${num1} * ${num2}`, num1 * num2);
};

const puzzle = (play) => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const randomOperation = getRandomOperation(num1, num2);
  return play(car(randomOperation), cdr(randomOperation));
};

export default () => {
  const conditions = 'What is the result of the expression?';
  flow(conditions, puzzle);
};
