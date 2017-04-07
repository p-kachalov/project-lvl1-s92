import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const playRound = (puzzle) => {
  const question = car(puzzle);
  const answer = cdr(puzzle);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

const playGame = (username, attemptsCount, getPuzzle) => {
  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    if (!playRound(getPuzzle())) {
      console.log(`Let's try again, ${username}!`);
      return;
    }
    iter(counter - 1);
  };

  iter(attemptsCount);
};

export default (conditions, getPuzzle) => {
  console.log('Welcome to the Brain Games!');
  if (conditions) console.log(conditions);

  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (conditions) {
    const attemptsCount = 3;
    playGame(username, attemptsCount, getPuzzle);
  }
};
