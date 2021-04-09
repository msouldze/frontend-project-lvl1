#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, question, calculateExpression, loss, win, operator,
} from '../src/index.js';

console.log(greeting()); // Welcoming and a request for player's name

console.log('What is the result of the expression?'); // Introducing game's rule

let answerCount = 0;
for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const expression = `${num1} ${operator} ${num2}`;
  console.log(question(expression));

  const answer = readlineSync.question('Your answer: '); // Checking if the result and the answer are equal or not
  const result = calculateExpression(num1, num2);
  if (parseFloat(answer) === parseFloat(result)) {
    console.log('Correct!');
    answerCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(loss());
  }
}
if (answerCount === 3) {
  console.log(win());
}
