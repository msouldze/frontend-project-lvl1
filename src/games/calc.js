import generateRandomNumber from '../utilities.js';

export const calculateExpression = () => {
  const result = [];
  const a = generateRandomNumber();
  const b = generateRandomNumber();

  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${operator} ${b}`;
  
  if (operator === '+') {
    result.push(String(a + b));
  } else if (operator === '-') {
    result.push(String(a - b));
  } else {
    result.push(String(a * b));
  }
  
  return [...result, question];
};

export const gameRule = 'What is the result of the expression?';
