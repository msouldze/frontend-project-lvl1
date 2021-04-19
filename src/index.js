import readlineSync from 'readline-sync';

export default (game, gameRule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);
  const numberOfGames = 3; 
  for (let i = 0; i < numberOfGames; i += 1) {
    const result = game();
    const answer = readlineSync.question('Your answer: ');
    if (result !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
