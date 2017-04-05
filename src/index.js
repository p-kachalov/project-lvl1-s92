import readlineSync from 'readline-sync';
import { puzzleQuestion, puzzleAnswer } from './puzzle';
import EvenPuzzle from './games/brain-even';
import CalcPuzzle from './games/brain-calc';
import GcdPuzzle from './games/brain-gcd';

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

const getPuzzle = (gameType) => {
  switch (gameType) {
    case 'even':
      return EvenPuzzle();
    case 'calc':
      return CalcPuzzle();
    case 'gcd':
      return GcdPuzzle();
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
