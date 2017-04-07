import { cons } from 'hexlet-pairs';
import flow from '../';
import { getRandomInt } from '../utils';

const getPuzzle = () => {
  const step = getRandomInt(1, 10);
  const missIndex = getRandomInt(1, 11);

  const makeList = (counter, current, missed, acc) => {
    if (counter === 0) return cons(acc, String(missed));
    const list = (counter === missIndex) ? `${acc} ..` : `${acc} ${current}`;
    const missedMember = (counter === missIndex) ? current : missed;
    return makeList(counter - 1, current + step, missedMember, list);
  };
  return makeList(10, getRandomInt(1, 10), 0, '');
};

export default () => {
  const manual = 'What number is missing in this progression?';
  flow(manual, getPuzzle);
};
