import generateRandomNumber from '../utilities.js';

export const isEven = () => {
  const randomNumber = generateRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const result = randomNumber % 2 === 0 ? 'yes' : 'no';
  return result;
};

export const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
