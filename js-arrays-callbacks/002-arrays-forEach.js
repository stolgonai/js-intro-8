const names = ["John", "Jane", "Alex", "Max"];

//Print each name
function printName(name) {
  console.log(name);
}

names.forEach(printName); // passing a function as an arg in the forEach function

// it is modified syntax, instead of create a function separately
names.forEach((name) => console.log(name));

console.log("\n--------------Print first letter of arg --------------");
names.forEach((name) => console.log(name[0]));

console.log("\n--------------Print Each name Uppercased --------------");
names.forEach((name) => console.log(name.toUpperCase()));

console.log('\n--------------Print name started with "J"--------------');
names.forEach((name) => {
  if (name.startsWith("J")) console.log(name);
});

console.log("\n--------------Count names has 4 letters--------------");
let countLength = 0;
names.forEach((name) => {
  // name.length === 4 ? count++ : count
  if (name.length === 4) countLength++;
});
console.log(countLength);

console.log("\n--------Print each num and print each num*5--------------");
const numbers = [5, 10, 3, 0, -2];
numbers.forEach((num) => console.log(num));
numbers.forEach((num) => console.log(num * 5));

console.log("\n--------Print even  numbers  true or false--------------");
numbers.forEach((num) =>
  num % 2 === 0 ? console.log(true) : console.log(false)
);
// NOTE best solution
numbers.forEach((num) => console.log(num % 2 === 0));

console.log("\n--------Create a new arr that stores numbers *3--------------");
let newArr = [];
numbers.forEach((num) => newArr.push(num * 3));
console.log(numbers);
// map.method will fit for this solution

console.log("\n--------Create a new arr that stores even nums--------------");
const evenNums = [];
numbers.forEach((num) => {
  if (num % 2 === 0) evenNums.push(num);
});
console.log(evenNums);
// filter method will fit for this solution
