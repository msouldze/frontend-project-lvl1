import generateRandomNumber from '../utilities.js';

const calculateExpression = (a, b, operator) => {
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
  
  const operators = ['+', '-', '*'];
  const length = operators.length;
  const randomOperator = generateRandomNumber(0, length)
  const operator = operators[randomOperator];

  const answer = calculateExpression(a, b, operator).toString();
  const question = `${a} ${operator} ${b}`;
  return [question, answer];
};

const gameRule = 'What is the result of the expression?';

export default () => ({ gameRule, getRound });
