import generateRandomNumber from '../utilities.js';

const operators = ['+', '-', '*'];
const operator = operators[Math.floor(Math.random() * operators.length)];

const calculateExpression = (a, b) => {
  let result = '';
  if (operator === '+') {
    result = a + b;
  } else if (operator === '-') {
    result = a - b;
  } else {
    result = a * b;
  }
  return result;
};

const getRound = () => {
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  const answer = String(calculateExpression(a, b));
  const question = `${a} ${operator} ${b}`;
  return [question, answer];
};

const gameRule = 'What is the result of the expression?';

export default () => ({ gameRule, getRound });
