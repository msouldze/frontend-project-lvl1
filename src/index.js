/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';
import gcd from '../games/gcd.js';
import isEven from '../games/even.js';
import calculateExpression, { operator } from '../games/calc.js';

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

export const comparisonEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(question(randomNumber));

    // Await an answer
    const answer = readlineSync.question('Your answer: ');
    const result = isEven(randomNumber);
    if (
      (result === true && answer === 'yes')
    || (result === false && answer === 'no')
    ) {
      console.log('Correct!');
    } else if (result === true && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      return `Let's try again, ${name}!`;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export const comparisonCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    let output = '';
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const expression = `${num1} ${operator} ${num2}`;
    console.log(question(expression));
    const answer = readlineSync.question('Your answer: '); // Checking if the result and the answer are equal or not
    const result = calculateExpression(num1, num2);
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

// Great common devisor
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
      console.log(`Let's try again, ${name}!`);
    }
  }
  return `Congratulations, ${name}!`;
};
