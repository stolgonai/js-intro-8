const numbers = [3, 4, 7, 3, 2, 2, 7];

console.log("\n-----------Find Sum and Average ------------------");
let sum = 0;

for (const num of numbers) {
  sum += num;
}
const average = sum / numbers.length; // or store average in another var

console.log(`Sum of all numbers is ${sum}`);
console.log(`The average of the numbers is ${sum / numbers.length}`);

console.log(
  "\n-----------Find Sum of numbers that has even index ------------------"
);
let sumOfEvenIndex = 0;
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) sumOfEvenIndex += numbers[i];
}
console.log(sumOfEvenIndex);

// Another solution is used for..of loop, then create index manualy, starts with 0

let index = 0;
for (num of numbers) {
  if (index % 2 === 0) sumOfEvenIndex += num;
  index++;
}

console.log("\n--------Multiply each num ------");
const nums = [3, 4, 7, 3, 2];
let resultOfMult = 1;
for (const number of nums) {
  resultOfMult *= number;
}
console.log(resultOfMult);

console.log("\n--------Multiply each num that has odd indexes ------");
let multOddIndexes = 1;
for (let i = 0; i < nums.length; i++) {
  if (i % 2 !== 0) multOddIndexes *= numbers[i];
}
console.log(multOddIndexes);

console.log("\n--------Multiply each num that has odd indexes ------");

const arr1 = [5, 8, 2, 1, 2];
const arr2 = [9, 3, 5, 1, 0];
let resultOf2Arrays = [];
for (let i = 0; i < arr1.length; i++) {
  resultOf2Arrays.push(arr1[i] * arr2[i]);
}
console.log(resultOf2Arrays);

console.log("\n--------Find first even number ------");
const nums1 = [-1, 1, 3, 0, 2, 6, 8];
let evenNum;
for (const num of nums1) {
  if (num % 2 === 0) {
    evenNum = num;
    break;
  }
}
// for (let i = 0; i < nums1.length; i++) {
//   if (nums[i] % 2 === 0) {
//     evenNum = nums1[i];
//     break;
//   }
// }
console.log(evenNum);

console.log("\n--------Find first odd length of cities------");

const cities = ["Berlin", "Rome", "Chicago", "Kiev", "Istanbul", "Tokyo"];

let firstOddLengthOfCities;

for (const city of cities) {
  if (city.length % 2 !== 0) {
    firstOddLengthOfCities = city;
    break;
  }
}
console.log(firstOddLengthOfCities);

console.log("\n--------Find city which length more than 5------");
let cityLengthMore5 = [];
for (const city of cities) {
  if (city.length > 5) cityLengthMore5.push(city);
}
console.log(cityLengthMore5);
