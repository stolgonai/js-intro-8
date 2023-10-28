/**
 * Functions
 * String methods at() toLowerCase()
 * functios is reusable commands
 * functions has name and invoking.
 */

// kick off
function kickOf() {
  console.log("Start meeting");
  console.log("Create file");
  console.log("Start coding");
}
// kickOf();

//create a functions, that prints our outputs "Good Morning"
function greet() {
  console.log("Good morning!");
}
// greet();

//create a function that takes an argument and name and says hello, name
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
// sayHello("Hanna");

function sum(a, b) {
  return a + b;
}
let result = sum(2, 2);
// console.log(result);

function product(arg1, arg2, arg3) {
  return arg1 * arg2 * arg3;
}
// console.log(product(1, 2, 3));
function isEven(num) {
  return num % 2 === 0;
}
function isOdd(num) {
  return num % 2 !== 0;
}
// console.log(isOdd(5));
// console.log(isOdd(6));
// console.log(isOdd(0));
// console.log(isOdd(-1));

//Falsy values: empty string, undefined, null, false, 0, NaN
// Falsy values evaluate to 0 when converting to Numbers.
// all others is evaluate to true: true, number > 0, string, not empty strings
// console.log(isEven("Hello"));

// function isPositive(num) {
//   return num > 0;
// }

function isPositive(num) {
  if (num <= 0) {
    return false;
  }
  return true;
}
// console.log(isPositive(5));
// console.log(isPositive(0));
// console.log(isPositive(-7));
// console.log(isPositive(15));
// console.log(isPositive(123));

//IIFE functions

// function a() {
//   console.log("This is simple sample text");
// }
// a()(function () {
//   console.log("This is IIFE function");
// })();

// ÷gunction random generate function

function getRandomNumber(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  //   let isMaxNum = Math.max(num1);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomNumber(5, 10));

// let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
