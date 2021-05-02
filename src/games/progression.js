import generateRandomNumber from '../utilities.js';

const createProgression = (firstValue, diff, progressionLength = 10) => {
  let progression = [];
  for (let value = firstValue; progression.length < progressionLength; value += diff) {
    progression = [...progression, value];
  }
  return progression;
};

const hideProgressionValue = (progression, hiddenIndex) => {
  progression[hiddenIndex] = '..';
  const result = progression.join(' ');
  return result;
};

const getRound = () => {
  const firstValue = generateRandomNumber(1, 10);
  const diff = generateRandomNumber(1, 10);
  const hiddenIndex = generateRandomNumber();
  const progression = createProgression(firstValue, diff);
  const answer = (progression[hiddenIndex]).toString();
  const question = hideProgressionValue(progression, hiddenIndex);
  return [question, answer];
};

const gameRule = 'What number is missing in the progression?';

export default () => ({ gameRule, getRound });
