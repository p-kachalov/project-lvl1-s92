import flow from '../';
import getRandomInt from '../random-int';

const sortString = str => str.split('').sort().join('');

const isBalanced = (str) => {
  const first = Number(str[0]);
  const last = Number(str[str.length - 1]);
  return (last - first) <= 1;
};

const balanceNumbers = (str) => {
  const first = Number(str[0]) + 1;
  const last = Number(str[str.length - 1]) - 1;
  const midle = str.substring(1, str.length - 1);
  return `${first}${midle}${last}`;
};

const balanceStr = (str) => {
  const sortedStr = sortString(str);
  if (isBalanced(sortedStr)) return sortedStr;
  return (balanceStr(balanceNumbers(sortedStr)));
};

const play = (round) => {
  const question = String(getRandomInt(111, 9999));
  const answer = balanceStr(question);
  return round(question, answer);
};

const iter = (round) => {
  if (play(round)) return iter(round);
  return false;
};

export default () => {
  const conditions = 'Balance the given number.';
  const round = flow(conditions);
  iter(round);
};
