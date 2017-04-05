
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getPuzzle = () => {
  const question = getRandomInt(1, 100);
  console.log(`Question: ${question}`);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return answer;
};

export default (message) => {
  switch (message) {
    case 'conditions':
      return 'Answer "yes" if number even otherwise answer "no".';
    case 'puzzle':
      return getPuzzle();
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
