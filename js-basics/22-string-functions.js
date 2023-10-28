//crating a string that use str data
// let firstName = "John";
// console.log(firstName);

// using backticks rule came with ES6
//`${}`
// let lastName = "Doe";
// console.log(`The full name is ${firstName} ${lastName}.`);

let favBook = "JS Algorithms & Data Structures";
let favColor = "blue";
let favNumber = 7;

// console.log(
//   `My favorite book is ${favBook} in ${favColor} color, and there should be less then ${favNumber} editions.`
// );

//Interpolation

let quanity = 5,
  product = "pen",
  price = "2";
console.log(`I bought a ${quanity} ${product} for $${quanity * price}`);
// charAt function can also be used to get specific charactaer from a string by giving an index as an argument
let city = "Chicago";
console.log(city.charAt(2));
console.log(city[2]);
// the difference
console.log(city[-4]); // undefined
console.log(city.charAt(-5)); // empty string

// charCodeAt => it returrn the ASCII representations of the given character.
let country = "CANADA";
console.log(country.charCodeAt(1));
console.log(country.charCodeAt(0));
console.log(country.charCodeAt(2));
console.log(typeof country[5]);
console.log(typeof country[-5]); // => undefined
console.log(country.charAt(16)); //=> returns an empty string
