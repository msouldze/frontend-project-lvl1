#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting,
  getRandomNumber,
  question,
  getRandomAcc,
  win,
  loss,
  arithmeticProgression,
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('What number is missing in the progression?');
let answerCount = 0;
let wrongAnswerCount = 0;

for (let i = 0; i < 3; i += 1) {
  const num1 = getRandomNumber();
  const num2 = getRandomAcc();

  // Progression
  const progression = arithmeticProgression(num1, num2);
  const indexOfArray = num2 - 1;
  const result = progression[indexOfArray];
  progression[indexOfArray] = '..';
  const stringArray = progression.join(' ');

  console.log(question(stringArray));

  // Checking if the result and the answer are equal or not
  const answer = readlineSync.question('Your answer: ');
  if (parseFloat(answer) === parseFloat(result)) {
    console.log('Correct!');
    answerCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    wrongAnswerCount += 1;
    i = 3;
  }
  if (answerCount === 3) {
    console.log(win());
  }
  if (wrongAnswerCount === 1) {
    console.log(loss());
  }
}
