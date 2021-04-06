#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, getRandomNumber, question, name } from '../src/index.js';

const whatResult = () => {
  // Welcoming and a request for player's name
  console.log(greeting());

  // Introducing game's rule
  console.log('What is the result of the expression?');
  let answerCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${num1} ${operator} ${num2}`;
    console.log(question(expression));

    // Calculating expression
    const expressionResult = (a, b) => {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        default:
      }
    };

    // Checking if the result and the answer are equal or not
    const answer = readlineSync.question('Your answer: ');
    const result = expressionResult(num1, num2);
    if (Number(answer) === Number(result)) {
      console.log('Correct!');
      answerCount += 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`
      );
      return `Let's try again, ${name}!`;
    }
  }
  if (answerCount === 3) {
    return `Congratulations, ${name}!`;
  }
};

console.log(whatResult());
