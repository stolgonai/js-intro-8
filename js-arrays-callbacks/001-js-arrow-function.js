//regular function
function product1(num1, num2) {
  return num1 * num2;
}

//Function Expression
const product2 = function (num1, num2) {
  return num1 * num2;
};

//Arrow Function =
const product3 = (num1, num2) => num1 * num2;
console.log(product1(3, 4));
console.log(product2(3, 4));
console.log(product3(3, 4));

//regular function
function greeting1() {
  console.log("Hello");
}

//Function Expression = not hoisted, do not call before declaration
const greeting2 = function () {
  console.log("Hello");
};

//Arrow Function = not hoisted, do not call before declaration
const greeting3 = () => console.log("Hello");

/*
Write a function named as fizzBuzz that takes one number argument and
Outputs 'Fizz' if the number is divisible by 3
Outputs 'Buzz' if the number is divisible by 5
Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
Outputs the number itself if it is not divisible by both 3 and 5

fizzBuzz(3)         -> 'Fizz'
fizzBuzz(10)        -> 'Buzz'
fizzBuzz(45)        -> 'FizzBuzz'
fizzBuzz(2)         -> '2'
*/

// Regular function syntax
function fizzBuzz1(number) {
  if (number % 15 === 0) console.log("FizzBuzz");
  else if (number % 3 === 0) console.log("Fizz");
  else if (number % 5 === 0) console.log("Buzz");
  else console.log(number);
}

const fizzBuzz2 = function (number) {
  if (number % 15 === 0) console.log("FizzBuzz");
  else if (number % 3 === 0) console.log("Fizz");
  else if (number % 5 === 0) console.log("Buzz");
  else console.log(number);
};

const fizzBuzz3 = (number) => {
  if (number % 15 === 0) console.log("FizzBuzz");
  else if (number % 3 === 0) console.log("Fizz");
  else if (number % 5 === 0) console.log("Buzz");
  else console.log(number);
};

const fizzBuzz4 = (number) => {
  number % 15 === 0
    ? console.log("FizzBuzz")
    : number % 3 === 0
    ? console.log("Fizz")
    : number % 5 === 0
    ? console.log("Buzz")
    : console.log(number);
};
