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

export default (conditions) => {
  showGreeting(conditions);
  const username = getUsername();
  if (!conditions) return false;
  let counter = 3;

  const gameRound = (question, answer) => {
    if (counter === 0) {
      console.log(`Congratulations, ${username}!`);
      return false;
    }
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      counter -= 1;
      return true;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${username}!`);
    return false;
  };

  console.log(`Congratulations, ${username}!`);
  return gameRound;
  // return (q, a) => gameRound(q, a, attemptsCount);
};
