import generateRandomNumber from '../utilities.js';

const isEven = () => {
  const randomNumber = generateRandomNumber();
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, answer];
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => ({ gameRule, getRound: isEven });
