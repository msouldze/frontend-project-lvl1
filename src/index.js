import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (game) => {
  const { gameRule, getRound } = game();
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getRound();
    console.log(`Question: ${question}`);
    const result = readlineSync.question('Your answer: ');
    if (answer !== result) {
      console.log(`'${result}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
