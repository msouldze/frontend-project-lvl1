import generateRandomNumber from '../utilities.js';

const createProgression = (firstValue, diff) => {
  let progression = [];
  const progressionLength = 10;
  for (let value = firstValue; progression.length < progressionLength; value += diff) {
    progression = [...progression, value];
  }
  return progression;
};

const getRound = () => {
  const firstValue = generateRandomNumber(1, 10);
  const diff = generateRandomNumber(1, 10);
  const progression = createProgression(firstValue, diff);
  const hiddenValue = generateRandomNumber();
  const answer = (progression[hiddenValue]).toString();
  progression[hiddenValue] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const gameRule = 'What number is missing in the progression?';

export default () => ({ gameRule, getRound });
