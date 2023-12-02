const { getRandomNumber, averageOfNums } = require("./mathUtils.js");
const math = require("./mathUtils.js");

// console.log(getRandomNum(1, 10));

const r1 = math.getRandomNumber(1, 10);
const r2 = math.getRandomNumber(1, 10);
const average = math.averageOfNums(r1, r2);
console.log(r1, r2);
console.log(average);
