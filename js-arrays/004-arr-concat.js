// Concat() concatinating to arr, and return a NEW arr, and do not change an original arr
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [9, 10, 11];

console.log(arr1.concat(arr2));
console.log(arr1, "this is arr1");

// spread opertor (...) another way to concatinate arr, and do not change an original arr
console.log([...arr1, ...arr2]);

const num = [5, 7, -2, 10];
let min = Math.min(...num);
let max = Math.max(...num);

console.log(num, num.reverse(), num);
