import readlineSync from "readline-sync";

const greeting = (userName) => {
  userName = readlineSync.question("May I have your name? ");
  return "Hello, " + userName + "!";
};
export { greeting };
