import readlineSync from 'readline-sync';

// Greetings
let name;
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
};

// Get a random number
const getRandomNumber = () => Math.ceil(Math.random() * 10);

// Question for player
const question = (argument) => `Question: ${argument}`;

// Await an answer and check if the result and the answer are equal
export const comparison = (func) => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(question(randomNumber));

    const answer = readlineSync.question('Your answer: ');
    const result = func(randomNumber);
    if (
      (result === true && answer === 'yes')
    || (result === false && answer === 'no')
    ) {
      console.log('Correct!');
    } else if (result === true && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      return `Let's try again, ${name}!`;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export const comparison2 = (func, expression) => {
  for (let i = 0; i < 3; i += 1) {
    let output = '';
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    console.log(question(expression(num1, num2)));

    const answer = readlineSync.question('Your answer: ');
    const result = func(num1, num2);
    if (parseFloat(answer) === parseFloat(result)) {
      output = 'Correct!';
      console.log(output);
    } else {
      output = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.`;
      console.log(output);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
