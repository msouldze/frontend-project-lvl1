import generateRandomNumber from '../utilities.js';

const calculateExpression = () => {
  const answer = [];
  const a = generateRandomNumber();
  const b = generateRandomNumber();

  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${operator} ${b}`;

  if (operator === '+') {
    answer.push(String(a + b));
  } else if (operator === '-') {
    answer.push(String(a - b));
  } else {
    answer.push(String(a * b));
  }

  return [question, ...answer];
};

const gameRule = 'What is the result of the expression?';

export default () => {
  return { gameRule, getRound: calculateExpression };
};
