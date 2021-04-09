#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, question, win, loss,
} from '../src/index.js';
import gcd from '../games/gcd.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Find the greatest common divisor of given numbers.');
let answerCount = 0;
let wrongAnswerCount = 0;

for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const expression = `${num1} ${num2}`;
  console.log(question(expression));

  // Checking if the result and the answer are equal or not
  const answer = readlineSync.question('Your answer: ');
  const result = gcd(num1, num2);
  if (parseFloat(answer) === parseFloat(result)) {
    console.log('Correct!');
    answerCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(loss());
    answerCount += 1;
    wrongAnswerCount += 1;
  }
  if (answerCount === 3) {
    console.log(win());
  } else if (wrongAnswerCount === 1) {
    i = 3;
  }
}
