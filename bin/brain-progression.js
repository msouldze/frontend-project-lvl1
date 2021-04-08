#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  greeting,
  getRandomNumber,
  question,
  name,
  getRandomAcc,
} from '../src/index.js';

const whatIndexofProgression = () => {
  // Welcoming and a request for player's name
  console.log(greeting());

  // Introducing game's rule
  console.log('What number is missing in the progression?');
  let answerCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomAcc();

    // Calculating expression
    const progressionOfArray = [];
    let value = num1;
    progressionOfArray.push(value);
    for (let j = 0; j < 9; j += 1) {
      value += num2;
      progressionOfArray.push(value);
    }
    const indexOfArray = num2 - 1;
    const result = progressionOfArray[indexOfArray];
    progressionOfArray[indexOfArray] = '..';
    const stringArray = progressionOfArray.join(' ');

    console.log(question(stringArray));

    // Checking if the result and the answer are equal or not
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === Number(result)) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`,
      );
      return `Let's try again, ${name}!`;
    }
  }
  if (answerCount === 3) {
    return `Congratulations, ${name}!`;
  }
};

console.log(whatIndexofProgression());
