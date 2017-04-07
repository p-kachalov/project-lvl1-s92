import flow from '../';
import { getRandomInt } from '../utils';
import { cons } from '../../node_modules/hexlet-pairs';

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

const getPuzzle = () => {
  const question = String(getRandomInt(111, 9999));
  return cons(question, balanceStr(question));
};

export default () => {
  const conditions = 'Balance the given number.';
  flow(conditions, getPuzzle);
};
