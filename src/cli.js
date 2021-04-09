import readlineSync from 'readline-sync';

const greeting = (userName) => {
  let name = userName;
  name = readlineSync.question('May I have your name? ');
  const greet = `Hello, ${name}!`;
  return greet;
};
export default greeting;
