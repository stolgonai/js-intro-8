export class MathHelper {
  static getRandomNumber = (start, end) =>
    Math.floor(Math.random() * (end - start + 1)) + start;
  static sum = (...args) => {
    let sum = 0;
    for (const num of args) {
      sum += num;
    }
    return sum;
  };
  static product = (...args) => {
    let result = 1;
    for (const num of args) {
      result *= num;
    }
    return result;
  };
}
console.log(MathHelper.sum(1, 2, 3, 4));
console.log(MathHelper.product(3, 5, 10));
