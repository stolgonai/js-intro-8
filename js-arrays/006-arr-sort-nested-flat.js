const arr1 = [1, 2, 5, 100, 21];
const arr2 = ["Max", "Alex", "John", "alice"];

const arr3 = arr2.sort();
// console.log(arr3);

// console.log(arr1.sort());

const numbers = [1, 2, 5, 100, 21];

numbers.sort((x, y) => x - y);
console.log(numbers);

//NESTED ARRAYS

const pair1 = ["Alex", "Alice"];
const pair2 = ["John", "Jane"];
const pair3 = ["Max", "Mark"];

const batch = [pair1, pair2, pair3];
console.log(batch[2][0]);

const arr = [
  [[1], [2]],
  [[4], [5], [3]],
];

//FLATten method

console.log(arr.flat(Infinity));
