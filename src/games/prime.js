import generateRandomNumber from '../utilities.js';

const isPrime = () => {
  const randomNumber = generateRandomNumber();
  console.log(`Question: ${randomNumber}`);
  if (randomNumber === 1) {
    return false;
  }
  for (let i = 2; i <= randomNumber / 2; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};
export const isPrimeResult = () => isPrime() ? 'yes' : 'no';

export const gameRule = 'Answer "yes" if the number is prime, otherwise answer "no".';
