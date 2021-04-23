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
const isPrimeResult = () => {
  const randomNumber = generateRandomNumber();
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};

const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';

export default () => {
  return { gameRule, getRound: isPrimeResult };
};
