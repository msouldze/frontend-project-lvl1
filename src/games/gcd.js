import generateRandomNumber from '../utilities.js';

export default () => {
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  console.log(`Question: ${a} ${b}`);
  let result = 0;
  let min = a;
  if (b < a) {
    min = b;
  }
  for (let j = 1; j <= min; j += 1) {
    if (a % j === 0 && b % j === 0) {
      result = j;
    }
  }
  return String(result);
};

export const gameRule = 'Find the greatest common divisor of given numbers.';
