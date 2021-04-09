/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';

// Greetings
let name;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

// Is number even or odd
const isEven = (num) => num % 2 === 0 ? true : false;

// Get a random number
const getRandomNumber = () => Math.ceil(Math.random() * 100);
const getRandomAcc = () => Math.ceil(Math.random() * 10);

// Question for player
const question = (argument) => `Question: ${argument}`;

// Operator for an expression
const operators = ['+', '-', '*'];
const operator = operators[Math.floor(Math.random() * operators.length)];

// Calculating expression
const calculateExpression = (a, b) => {
  if (operator === '+') {
    return a + b;
  } if (operator === '-') {
    return a - b;
  }
  return a * b;
};

// Calculating greatest common divisor
const gcd = (a, b) => {
  let result = 0;
  let min = a;
  if (b < a) {
    min = b;
  }
  for (let j = 2; j <= min; j += 1) {
    if (a % j === 0 && b % j === 0) {
      result = j;
    }
  }
  return result;
};

// Is it prime
const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const loss = () => `Let's try again, ${name}!`;
const win = () => `Congratulations, ${name}!`;

export {
  greeting,
  getRandomNumber,
  question,
  operator,
  getRandomAcc,
  calculateExpression,
  loss,
  win,
  gcd,
  isPrime,
  isEven,
};
