import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
};
