import generateRandomNumber from '../utilities.js';

const findCommonDivisor = (a, b) => {
  if (!b) {
     return a;
   }
 
   return findCommonDivisor(b, a % b);
 };

const getRound = () => {
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  const question = `${a} ${b}`;
  const answer = findCommonDivisor(a, b).toString();

  return [question, answer];
};

const gameRule = 'Find the greatest common divisor of given numbers.';

export default () => ({ gameRule, getRound });
