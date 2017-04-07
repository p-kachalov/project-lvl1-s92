import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const attemptsCount = 3;

const playGame = (username, getPuzzle) => {
  const iter = (counter) => {
    if (counter === 0) return true;
    const puzzle = getPuzzle();
    console.log(`Question: ${car(puzzle)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === cdr(puzzle)) {
      console.log('Correct!');
      return iter(counter - 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(puzzle)}'.`);
    return false;
  };

  return iter(attemptsCount);
};

export default (conditions, getPuzzle) => {
  console.log('Welcome to the Brain Games!');
  console.log(conditions);

  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (playGame(username, getPuzzle)) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};
