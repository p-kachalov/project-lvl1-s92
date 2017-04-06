import readlineSync from 'readline-sync';

const showGreeting = (conditions) => {
  console.log('Welcome to the Brain Games!');
  if (conditions) console.log(conditions);
};

const getUsername = () => {
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
  return username;
};


export default (conditions, puzzle) => {
  showGreeting(conditions);
  const username = getUsername();
  const attemptsCount = 3;

  const gameRound = (question, answer) => {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${username}!`);
    return false;
  };

  const iter = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${username}!`);
      return;
    }
    const userResult = puzzle(gameRound);
    if (!userResult) return;
    iter(counter - 1);
  };

  iter(attemptsCount);
};
