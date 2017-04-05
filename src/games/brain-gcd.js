
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const gcd = (num1, num2) => (num2 === 0 ? num1 : gcd(num2, num1 % num2));

const getPuzzle = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  console.log(`Question: ${question}`);
  const answer = String(gcd(num1, num2));
  return answer;
};

export default (message) => {
  switch (message) {
    case 'conditions':
      return 'Find the greatest common divisor of given numbers.';
    case 'puzzle':
      return getPuzzle();
    default:
      throw new Error(`Unknown message '${message}'`);
  }
};
