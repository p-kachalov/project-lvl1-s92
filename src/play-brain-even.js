import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const playBrainEven = (username, attemptsCount) => {
  if (attemptsCount === 0) {
    console.log(`Congratulations, ${username}!`);
    return;
  }

  const randomNumber = getRandomInt(1, 100);
  const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Questoin: ${randomNumber}\nYour answer: `);

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    playBrainEven(username, attemptsCount - 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${username}!`);
  }
};

export default playBrainEven;
