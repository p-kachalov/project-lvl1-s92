import flow from '../';
import getRandomInt from '../random-int';

const getRandomOperation = () => {
  const randomNum = getRandomInt(0, 3);
  switch (randomNum) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      throw new Error(`Impossible number '${randomNum}'`);
  }
};

const calculateAnswer = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator '${oper}'`);
  }
};

const puzzle = (play) => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const oper = getRandomOperation();
  const answer = String(calculateAnswer(num1, num2, oper));
  const question = `${num1} ${oper} ${num2}`;
  return play(question, answer);
};

export default () => {
  const conditions = 'What is the result of the expression?';
  flow(conditions, puzzle);
};
