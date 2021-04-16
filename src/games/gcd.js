export default (a, b) => {
  let result = 0;
  let min = a;
  if (b < a) {
    min = b;
  }
  for (let j = 1; j <= min; j += 1) {
    if (a % j === 0 && b % j === 0) {
      result = j;
    }
  }
  return result;
};

export const expression = (a, b) => `${a} ${b}`;

export const gameRule = 'Find the greatest common divisor of given numbers.';