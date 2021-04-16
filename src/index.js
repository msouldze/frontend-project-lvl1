import readlineSync from 'readline-sync';
import { getRandomNumber } from '../src/utilities.js';

export const game = (func, gameRule, expression = undefined) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let i = 0; i < 3; i += 1) {
    let result;
    if (expression !== undefined) {
      const randomNum1 = getRandomNumber();
      const randomNum2 = getRandomNumber();
      const question = expression(randomNum1, randomNum2);
      console.log(`Question: ${question}`);
      result = func(randomNum1, randomNum2);
    } else {
      const randomNum = getRandomNumber();
      console.log(`Question: ${randomNum}`);
      result = func(randomNum) ? 'yes' : 'no';
    }
    const answer = readlineSync.question('Your answer: '); 
    if (result == answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
