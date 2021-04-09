export default (num1, num2) => {
  const progression = [];
  let value = num1;
  progression.push(value);
  for (let j = 0; j < 9; j += 1) {
    value += num2;
    progression.push(value);
  }
  return progression;
};
