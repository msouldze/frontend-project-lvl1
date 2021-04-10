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
let output = '';

for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
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
    console.log(loss());
  }
  if (i === 2 && output === 'Correct!') {
    console.log(win());
  }
  if (i === 0 && output === `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`) {
    i = 3;
  }
}
