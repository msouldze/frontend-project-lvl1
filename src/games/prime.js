import generateRandomNumber from '../utilities.js';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getRound = () => {
  const question = generateRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

export default () => ({ gameRule, getRound });
