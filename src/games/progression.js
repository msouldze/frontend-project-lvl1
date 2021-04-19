import generateRandomNumber from '../utilities.js';

export default () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const progression = [];
  let value = num1;
  progression.push(value);
  for (let j = 0; j < 9; j += 1) {
    value += num2;
    progression.push(value);
  }
  const randomIndex = progression[num2 - 1];
  progression[num2 - 1] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return String(randomIndex);
};

export const gameRule = 'What number is missing in the progression?';
