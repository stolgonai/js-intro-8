const numbers = [-5, 0, 5, 10, 23, -10];

//check if divisible by 5
console.log(numbers.some((n) => n % 5 === 0));
console.log(numbers.some((n) => n % 2 === 0));
console.log(numbers.some((n) => n % 2 !== 0));
console.log(numbers.every((n) => n > 0));
console.log(numbers.every((n) => n < 0));

const city = ["Rome", "Kyiv", "Paris", "Milan"];
//Check if city has 4 or 5 letters
console.log(city.some((c) => c.length === 4 || c.length === 5));
