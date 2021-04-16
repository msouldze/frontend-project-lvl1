const operators = ['+', '-', '*'];
export const operator = operators[Math.floor(Math.random() * operators.length)];

export default (a, b) => {
  if (operator === '+') {
    return a + b;
  } if (operator === '-') {
    return a - b;
  }
  return a * b;
};

export const expression = (a, b) => `${a} ${operator} ${b}`;

export const gameRule = 'What is the result of the expression?';