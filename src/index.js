import readlineSync from 'readline-sync';

const showGreeting = (game) => {
  console.log('Welcome to the Brain Games!');
  if (game) console.log(game('conditions'));
};

const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};

const playRound = (game, roundsCount, username) => {
  if (roundsCount === 0) {
    console.log(`Congratulations, ${username}!`);
    return;
  }

  const rightAnswer = game('puzzle');
  const userAnswer = readlineSync.question('Your answer: ');
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
    playRound(game, roundsCount - 1, username);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
  }
};

export default (game) => {
  showGreeting(game);
  const username = getUsername();

  if (game) {
    const roundsCount = 3;
    playRound(game, roundsCount, username);
  }
};
