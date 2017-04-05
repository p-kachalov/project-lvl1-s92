import readlineSync from 'readline-sync';
import { newPuzzle, puzzleQuestion, puzzleAnswer } from './puzzle';

export const showGreeting = (gameConditions) => {
  console.log('Welcome to the Brain Games!');
  if (gameConditions) console.log(gameConditions);
  console.log();
};

export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

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

const makeEvenPuzzle = () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return newPuzzle(question, answer);
};

const makeCalcPuzzle = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const oper = getRandomOperator();
  const question = `${num1} ${oper} ${num2}`;
  const answer = String(calculateAnswer(num1, num2, oper));
  return newPuzzle(question, answer);
};

const getPuzzle = (gameType) => {
  switch (gameType) {
    case 'even':
      return makeEvenPuzzle();
    case 'calc':
      return makeCalcPuzzle();
    default:
      throw new Error(`Unknown type of game '${gameType}'`);
  }
};

export const playGame = (username, gameType, attemptsCount) => {
  if (attemptsCount === 0) {
    console.log(`Congratulations, ${username}!`);
    return;
  }

  const puzzle = getPuzzle(gameType);
  console.log(`Questoin: ${puzzleQuestion(puzzle)}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === puzzleAnswer(puzzle)) {
    console.log('Correct!');
    playGame(username, gameType, attemptsCount - 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${puzzleAnswer(puzzle)}'.`);
    console.log(`Let's try again, ${username}!`);
  }
};
