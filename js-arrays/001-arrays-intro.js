const cities = ["Chicago", "Miamu", "Toronto"];
console.log(typeof cities);
console.log(cities);

//since it declared with const we can reassign.

console.log(cities.length);
console.log(cities[0]);
console.log(cities[-1]);
cities[1] = "Berlin";

//Create an array from a string using [split] method

let name = "John Doe";
let chars = name.split("");
let firstLastName = name.split(" ");
console.log(chars);
let sentence = "I like JS arrays";
const words = sentence.split(" ");
