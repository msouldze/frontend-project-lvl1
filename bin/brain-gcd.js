#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, question, name
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

const whatCommonDivisor = () => {
  // Introducing game's rule
  console.log('Find the greatest common divisor of given numbers.');
  let answerCount = 0;

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const expression = `${num1} ${num2}`;
    console.log(question(expression));

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

    // Checking if the result and the answer are equal or not
    const answer = readlineSync.question('Your answer: ');
    const result = gcd(num1, num2);
    if (Number(answer) === Number(result)) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`;
      );
      return `Let's try again, ${name}!`;
    }
  }
  if (answerCount === 3) {
    return `Congratulations, ${name}!`;
  }
};

console.log(whatCommonDivisor());
