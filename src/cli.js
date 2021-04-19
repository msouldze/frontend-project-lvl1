import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  let name = readlineSync.question('May I have your name? ');
  const greet = `Hello, ${name}!`;
  return greet;
};
export default greeting;
