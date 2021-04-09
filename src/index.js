/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';

// Greetings
let name;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

// Get a random number
const getRandomNumber = () => Math.ceil(Math.random() * 100);
const getRandomAcc = () => Math.ceil(Math.random() * 10);

// Question for player
const question = (argument) => `Question: ${argument}`;

// Operator for an expression
const operators = ['+', '-', '*'];
const operator = operators[Math.floor(Math.random() * operators.length)];

const loss = () => `Let's try again, ${name}!`;
const win = () => `Congratulations, ${name}!`;

export {
  greeting,
  getRandomNumber,
  question,
  operator,
  getRandomAcc,
  loss,
  win,
};
