import generateRandomNumber from '../utilities.js';

const operators = ['+', '-', '*'];
export const operator = operators[Math.floor(Math.random() * operators.length)];

export default () => {
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  console.log(`Question: ${a} ${operator} ${b}`);
  if (operator === '+') {
    return String(a + b);
  } if (operator === '-') {
    return String(a - b);
  }
  return String(a * b);
};

export const gameRule = 'What is the result of the expression?';
