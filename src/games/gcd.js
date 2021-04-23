import generateRandomNumber from '../utilities.js';

const findCommonDivisor = () => {
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  const question = `${a} ${b}`;
  let answer = 0;
  let min = a;
  if (b < a) {
    min = b;
  }
  for (let j = 1; j <= min; j += 1) {
    if (a % j === 0 && b % j === 0) {
      answer = j;
    }
  }
  return [question, String(answer)];
};

const gameRule = 'Find the greatest common divisor of given numbers.';

export default () => ({ gameRule, getRound: findCommonDivisor });
