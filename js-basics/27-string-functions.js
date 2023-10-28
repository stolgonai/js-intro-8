// str.search(char)  str.search(substr)method and it is case sensetive, and returns the position or index of find one

// if found returns position if not found return -1

// let info = "Tech Global is a Software Training and Tech Global";
// consolelog(info.search("e")); //1
// consolelog(info.search("a")); //9
// consolelog(info.search("Tech")); // first index of Tech
// consolelog(info.search("Tech Global")); // first index of search word

// includes return boolean

//startsWith() and endsWith() => returns boolean

//extracting partial strings, part of the string
let sentence = "I like Javascript";

//slice()
console.log(sentence.slice(7)); // Javascript
console.log(sentence.slice(2, 6)); // like, start is included, last is exluded
console.log(sentence.slice(11)); //  start to the end
console.log(sentence.slice(7, 11)); //  start is included, last is exluded

// substring

console.log(sentence.substring(7)); // Javascript
console.log(sentence.substring(2, 6)); // like, start is included, last is exluded
console.log(sentence.substring(11)); //  start to the end
console.log(sentence.substring(7, 11)); //  start is included, last is exluded

// slice() vs substring()
let name = "Alexander";
console.log(name.substring(-5)); // starts from 0 even negative
console.log(name.slice(-5)); // starts from back
// if start index is greater it will return an empty string

let city = "Chicago";
let first = city.slice(0, 2);
let second = city.slice(5);
// let second = city.slice(-2);
console.log(`${city.slice(0, 2)}${city.slice(5)}`);

// slice
let str = "Apple Banana Pineapple Grapes";
const fruits = str.split(" ");
console.log(fruits);
let sample = "I will do more practices today";
//how many words do you have in this  text
// console.log(sample.split(" ").length); // the answer 6

console.log(sample.split("do"));

//padding
// padStart()
let data1 = "5",
  data2 = "13",
  data3 = "53000";
console.log(data1.padStart(5, "0"));
console.log(data2.padStart(5, "0"));
console.log(data3.padStart(5, "0"));

//concat()

// at() it is like charAt() or acces by[]

let name1 = "Alexander";
console.log(name1[-3]);
console.log(name1.charAt(-3));
console.log(name1.at(-3));
console.log(name1[name.length - 3]);

//repeat()
let cat = "Meow!";
console.log(cat.repeat(5));
