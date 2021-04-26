import generateRandomNumber from '../utilities.js';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const question = generateRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => ({ gameRule, getRound});
