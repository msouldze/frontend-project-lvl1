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
