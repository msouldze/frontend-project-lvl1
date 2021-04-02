#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (yesOrNo) => {
  // Welcoming and a request for player's name
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // Game's rule
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;

  while (correctAnswerCount < 3) {
    const randomNumber = Math.ceil(Math.random() * 100);
    const question = `Question: ${randomNumber}`;
    console.log(question);

    // Answer - Yes or No
    let answer = yesOrNo;
    answer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
    }
  }
  if (correctAnswerCount === 3) {
    return `Congratulations, ${name}!`;
  }
};

console.log(isEven());
