// Task #1

function isGreater(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let random1 = Math.floor(Math.random() * (max - min + 1) + min);
  let random2 = Math.floor(Math.random() * (max - min + 1) + min);
  let random3 = Math.floor(Math.random() * (max - min + 1) + min);
  let average = Math.floor((random1 + random2 + random3) / 3);
  console.log(`this is average ${average}`);
  return average >= 50 ? true : false;
}
// console.log(isGreater(1, 100));
// console.log(isGreater(1, 100));
// console.log(isGreater(1, 100));

// Task #2
function isMatch(num1, num2) {
  let max = Math.max(num1, num2);
  let min = Math.min(num1, num2);
  let random1 = Math.floor(Math.random() * (max - min + 1) + min);
  let random2 = Math.floor(Math.random() * (max - min + 1) + min);
  let random3 = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`randoms are ${random1} ${random2} ${random3}`);
  if (random1 === random2 && random2 === random3) return "TRIPLLE MATCH";
  if (
    (random1 === random2 && random2 != random3) ||
    (random1 != random2 && random2 === random3) ||
    (random1 != random2 && random1 === random3)
  )
    return "DOUBLE MATCH";
  else return "NO MATCH";
}

// console.log(isMatch(1, 3));
// console.log(isMatch(1, 3));
// console.log(isMatch(1, 3));

// Task 3#
function hasA(str) {
  return str.toUpperCase().includes("A") ? true : false;
}
// console.log(hasA("Tech"));
// console.log(hasA("Global"));
// console.log(hasA(""));
// console.log(hasA("Apple"));

// Task #4
function doubleOrTripple(str) {
  let result = str.length % 2 === 0 ? str.repeat(3) : str.repeat(2);
  return result;
}
// console.log(doubleOrTripple("Tech"));
// console.log(doubleOrTripple("Apple"));
// console.log(doubleOrTripple(""));
// console.log(doubleOrTripple(" "));
// console.log(doubleOrTripple("1"));
// console.log(doubleOrTripple("22"));

// Task #5

function firstWord(str) {
  if (str.length === 0 || str.length === undefined) return "";
  if (!str.includes(" ")) return str;
  return str.slice(0, str.indexOf(" "));
}
// console.log(firstWord("Hello world"));
// console.log(firstWord("I like JavaScript"));
// console.log(firstWord("Hello"));
// console.log(firstWord(""));
// console.log(firstWord(" "));
// console.log(firstWord("Peace"));

// Task #6
function lastWord(str) {
  if (str.length === 0 || str.length === undefined) return "";
  if (!str.includes(" ")) return str;
  return str.slice(str.lastIndexOf(" ") + 1);
}

// console.log(lastWord("Hello world"));
// console.log(lastWord("I like JavaScript"));
// console.log(lastWord("Hello"));
// console.log(lastWord(""));
// console.log(lastWord(" "));

// Task #7
function firstLastWord(str) {
  if (str.length === 0 || str === undefined) return "";
  if (!str.includes(" ")) return str.repeat(2);
  return str.split(" ").join("");
}
// console.log(firstLastWord("Hello world"));
// console.log(firstLastWord("I like JavaScript"));
// console.log(firstLastWord("Hello"));
// console.log(firstLastWord(""));
// console.log(firstLastWord(" "));

// Task #8
function startVowel(str) {
  if (str.length === 0 || str === undefined) return false;
  let isMatch =
    str.toLowerCase()[0].startsWith("a") ||
    str.toLowerCase()[0].startsWith("e") ||
    str.toLowerCase()[0].startsWith("i") ||
    str.toLowerCase()[0].startsWith("u") ||
    str.toLowerCase()[0].startsWith("o");
  return isMatch ? true : false;
}

// console.log(startVowel("Hello"));
// console.log(startVowel("Apple"));
// console.log(startVowel("orange"));
// console.log(startVowel(""));
// console.log(startVowel(" "));
// console.log(startVowel("123"));

// Task #9

function swap4(str) {
  if (str.length <= 8) return "";
  let first = str.slice(0, 4);
  let middle = str.slice(4, str.length - 4);
  let last = str.slice(str.length - 4);
  return `${last}${middle}${first}`;
}
// console.log(swap4("abc"));
// console.log(swap4("JavaScript"));
// console.log(swap4("TechGlobal")); //

// Task #10
function swapFirstLastWord(str) {
  if (str.length === 0 || str.length === undefined) return "";
  if (!str.includes(" ") || str[str.length - 1] === " ") return "";
  let first = str.slice(0, str.indexOf(" "));
  let last = str.slice(str.lastIndexOf(" "));
  let rest = str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" "));
  return `${last} ${rest} ${first}`;
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord(" "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello "));
