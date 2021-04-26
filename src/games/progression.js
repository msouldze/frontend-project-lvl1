import generateRandomNumber from '../utilities.js';

const createProgression = (a, b) => {
  const progression = [];
  let value = a;
  progression.push(value);
  for (let j = 0; j < 9; j += 1) {
    value += b;
    progression.push(value);
  }
  return progression;
};

const getRound = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const progression = createProgression(num1, num2);
  const answer = String(progression[num2 - 1]);
  progression[num2 - 1] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const gameRule = 'What number is missing in the progression?';

export default () => ({ gameRule, getRound });
