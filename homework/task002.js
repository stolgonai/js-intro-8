// Task #1

let str1 = "5",
  str2 = "2";

function makeTwoNum(num1, num2) {
  let toNum1 = parseInt(num1);
  let toNum2 = parseInt(num2);
  let maxNum = Math.max(toNum1, toNum2);
  let minNum = Math.min(toNum1, toNum2);
  let sum = toNum1 + toNum2;
  let product = toNum1 * toNum2;
  let division = maxNum / minNum;
  let substr = maxNum - minNum;
  let remainder = maxNum % minNum;
  let expon = maxNum ** minNum;
  return `
  The sum of ${num1} and ${num2} is = ${sum}
  The product of ${num1} and ${num2} is = ${product}
  The division of ${num1} and ${num2} is = ${division}
  The subtraction of  ${num1} and ${num2} is = ${substr}
  The remainder of ${num1} and ${num2} is = ${remainder}
  The exponentiation of ${num1} and ${num2} is = ${expon}`;
}
// console.log(makeTwoNum(str1, str2));

// Task #2

let s1 = "200",
  s2 = "-50";

function findNum(num1, num2) {
  let maxNum = Math.max(parseInt(num1), parseInt(num2));
  let minNum = Math.min(parseInt(num1), parseInt(num2));
  let average = (maxNum + minNum) / 2;
  let absolute = maxNum - minNum;
  return `
The greatest value is = ${maxNum}
The smallest value is = ${minNum}
The average is = ${average}
The absolute difference is = ${absolute} `;
}
// console.log(findNum(s1, s2));

// Task #3
let firstArg = 1;
let secArg = 50;

function generateNum(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let random1 = Math.floor(Math.random() * (max - min + 1) + min);
  let random2 = Math.floor(Math.random() * (max - min + 1) + min);
  return Math.abs(random1, random2);
}
// console.log(generateNum(firstArg, secArg));

//Task #4

let num1 = 1;
let num2 = 50;

function generateFiveRandom(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let random1 = Math.floor(Math.random() * (max - min + 1) + min);
  let random2 = Math.floor(Math.random() * (max - min + 1) + min);
  let random3 = Math.floor(Math.random() * (max - min + 1) + min);
  let random4 = Math.floor(Math.random() * (max - min + 1) + min);
  let random5 = Math.floor(Math.random() * (max - min + 1) + min);
  let maxRandom = Math.max(random1, random2, random3, random4, random5);
  let minRandom = Math.min(random1, random2, random3, random4, random5);
  return `
  The max value = ${maxRandom}
  The min value = ${minRandom}`;
}
// console.log(generateFiveRandom(num1, num2));

//Task #5
function randomThreeNums(num1, num2) {
  let random1 = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
  let random2 = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
  let random3 = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
  let sum = random1 + random2 + random3;
  return `
The number 1 = ${random1}
The number 2 = ${random2}
The number 3 = ${random3}
The sum of numbers is = ${sum}`;
}
// console.log(randomThreeNums(50, 100));

// Task #6

function isNumGreater(num1, num2) {
  let random1 = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
  let random2 = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
  let random3 = Math.floor(Math.random() * (num1 - num2 + 1) + num2);
  let isGreater = 25 < random1 && 25 < random2 && 25 < random3;

  return `${isGreater}`;
}
// console.log(isNumGreater(1, 100));

// Task #7
function nameInfo(name) {
  return `The length of the name is = ${name.length}
    The first character in the name is = ${name[0]}
    The last character in the name is = ${name[name.length - 1]}
    The first 3 characters in the name are = ${name.slice(0, 3)}
    The last 3 characters in the name are = ${name.slice(name.length - 3)}`;
}
console.log(nameInfo("David"));
