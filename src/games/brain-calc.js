
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomOperator = () => {
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

const getPuzzle = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const oper = getRandomOperator();
  const question = `${num1} ${oper} ${num2}`;
  console.log(`Question: ${question}`);
  const answer = String(calculateAnswer(num1, num2, oper));
  return answer;
};

export default (message) => {
  switch (message) {
    case 'conditions':
      return 'What is the result of the expression?';
    case 'puzzle':
      return getPuzzle();
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
