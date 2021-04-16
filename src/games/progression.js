export default (num1, num2) => {
  const progression = [];
  let value = num1;
  progression.push(value);
  for (let j = 0; j < 9; j += 1) {
    value += num2;
    progression.push(value);
  }
  const randomIndex = progression[num2 - 1];
  return randomIndex;
};

export const expression = (num1, num2) => {
  const progression = [];
  let value = num1;
  progression.push(value);
  for (let j = 0; j < 9; j += 1) {
    value += num2;
    progression.push(value);
  }
  const index = num2 - 1;
  progression[index] = '..';
  const arrString = progression.join(' ');
  return arrString;
};

export const gameRule = 'What number is missing in the progression?';
