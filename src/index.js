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

// Question for player
const question = (argument) => `Question: ${argument}`;

export {
greeting, getRandomNumber, question, name
};
