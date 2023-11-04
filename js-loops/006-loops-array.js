const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

console.log("\n------------counting Positive numbers---------------");
let countPositiveNum = 0;
for (const num of numbers) {
  if (num > 0) countPositiveNum++;
}
console.log(countPositiveNum);

console.log("\n------------counting Even numbers---------------");
let countEven = 0;
for (const num of numbers) {
  if (num % 2 === 0) countEven++;
}
console.log(`There are ${countEven} numbers `);

console.log("\n------------counting Divided by 5 numbers---------------");
let countDivisible5 = 0;
for (const num of numbers) {
  if (num % 5 === 0) countDivisible5++;
}
console.log(countDivisible5);
