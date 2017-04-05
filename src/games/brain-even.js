import { newPuzzle } from '../puzzle';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default () => {
  const question = getRandomInt(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return newPuzzle(question, answer);
};
