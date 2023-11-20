const greet = (str = "guest") => console.log(`Hello, ${str}`);
greet("John");
greet();

const multiply = (num1, num2 = 1) => console.log(num1 * num2);
multiply(3, 5);
multiply(3, 1);

function sum(num1, num2 = 0, num3 = 0) {
  console.log(num1 + num2 + num3);
}
sum(1, 2, 3);
sum(3, 5);
sum(3);

const addOrSubstract = (num1 = 0, num2 = 0, boolean = true) =>
  console.log(boolean ? num1 + num2 : num1 - num2);

addOrSubstract(2, 3, true);
addOrSubstract(10, 4, false);
addOrSubstract(7, 8);
