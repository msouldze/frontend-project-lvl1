/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';
import gcd from '../games/gcd.js';

// Greetings
let name;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

// Get a random number
export const getRandomNumber = () => Math.ceil(Math.random() * 100);
export const getRandomAcc = () => Math.ceil(Math.random() * 10);

// Question for player
export const question = (argument) => `Question: ${argument}`;

export const comparisonGcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    let output = '';
    const expression = `${num1} ${num2}`;
    console.log(question(expression));

    // Checking if the result and the answer are equal or not
    const answer = readlineSync.question('Your answer: ');
    const result = gcd(num1, num2);
    if (parseFloat(answer) === parseFloat(result)) {
      output = 'Correct!';
      console.log(output);
    } else {
      output = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`;
      console.log(output);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
