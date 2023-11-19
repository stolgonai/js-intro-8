//Function scope was introduced before ES6;
//It is smiliar to Block scope with one diff. The diff is VAR key word

//function Scope
function anyFunc() {
  var x = 10;
  let y = 12;
  const z = 14;
  console.log(x);
  console.log(y);
  console.log(z);
}
// console.log(x) // ReferenceError: x is not defined
// console.log(y)// ReferenceError: y is not defined
// console.log(z)// ReferenceError: z is not defined

/**
 * Real example
 * Write a function that takes an arr and returns how many nums are even
 */

countEven([1, 2, 3, 4, 5]);
countEven([0, 0, 0, 0, 0]);

function countEven(arr) {
  let counter = 0;
  for (const n of arr) {
    if (n % 2 === 0) counter++;
  }
  return counter;
}
console.log(counter); // reference Error
