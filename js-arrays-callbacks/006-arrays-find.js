//find first positive it is good to find whatever is FIRST occurance
const numbers = [0, 10, -4, 5, 2, -3];
/**
 * first positive num
 * first negative num
 * first even num
 * first odd num
 */
// first positive num
console.log(numbers.find((n) => n > 0));

//find the index of first positive
console.log(numbers.findIndex((n) => n > 0));
// Find first negative number -> -4
console.log(numbers.find((n) => n < 0));
// Find the index first negative number -> 2
console.log(numbers.findIndex((n) => n < 0));
// Find first even number -> 0
console.log(numbers.find((n) => n % 2 === 0));
// Find the index first even number -> 0
console.log(numbers.findIndex((n) => n % 2 === 0));
// Find first odd number -> 5
console.log(numbers.find((n) => n % 2 !== 0));
// Find the index first odd number -> 3
console.log(numbers.findIndex((n) => n % 2 !== 0));
