#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, question, loss, win, isEven,
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answerCount = 0;
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
    answerCount += 1;
  } else if (result === true && answer === 'no') {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(loss());
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
    console.log(loss());
  }
}
if (answerCount === 3) {
  console.log(win());
}
