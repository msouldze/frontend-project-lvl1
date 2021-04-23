import generateRandomNumber from '../utilities.js';

const arithmeticProgression = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const progression = [];
  let value = num1;
  progression.push(value);
  for (let j = 0; j < 9; j += 1) {
    value += num2;
    progression.push(value);
  }
  const answer = progression[num2 - 1];
  progression[num2 - 1] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const gameRule = 'What number is missing in the progression?';

export default () => {
  return { gameRule, getRound: arithmeticProgression };
};
