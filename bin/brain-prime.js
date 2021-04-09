#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting, getRandomNumber, question, loss, win, isPrime,
} from '../src/index.js';

// Welcoming and a request for player's name
console.log(greeting());

// Introducing game's rule
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let answerCount = 0;
let wrongAnswerCount = 0;

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomNumber();
  console.log(question(randomNumber));

  // Await an answer
  const answer = readlineSync.question('Your answer: ');
  const result = isPrime(randomNumber);
  if (
    (result === true && answer === 'yes')
    || (result === false && answer === 'no')
  ) {
    console.log('Correct!');
    answerCount += 1;
  } else if (result === true && answer === 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
    wrongAnswerCount += 1;
    i = 3;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    wrongAnswerCount += 1;
    i = 3;
  }
}
if (answerCount === 3) {
  console.log(win());
}
if (wrongAnswerCount === 1) {
  console.log(loss());
}
