// const getRandomNumber = (start, end) =>
//   Math.floor(Math.random() * (end - start + 1)) + start;

// const averageOfNums = (num1, num2) => (num1 + num2) / 2;

///Another direct way to export
module.exports.getRandomNumber = (start, end) =>
  Math.floor(Math.random() * (end - start + 1)) + start;

module.exports.averageOfNums = (num1, num2) => (num1 + num2) / 2; /// in this case we need curly braces in the test file

// const math = {
//   averageOfNums,
//   getRandomNumber,
// };

// module.exports.math = math;
////////////

// module.exports.averageOfNums = averageOfNums;
// module.exports.getRandomNumber = getRandomNumber;

///////another way to exporting
module.exports = {
  averageOfNums,
  getRandomNumber,
};

module.exports.math = math;
