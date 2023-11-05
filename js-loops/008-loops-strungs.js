const school = "TechGlobal";

let countVowel = 0;

for (let i = 0; i < school.length; i++) {
  if ("AEOUIaeoui".includes(school[i]))
    //   if (
    //     lowerCased.includes("a") ||
    //     lowerCased.includes("e") ||
    //     lowerCased.includes("o") ||
    //     lowerCased.includes("u") ||
    //     lowerCased.includes("i")
    //   )
    countVowel++;
}
console.log(countVowel);

let word = "Hello";
let reversed = word.split("").reverse().join("");
console.log(reversed);

let result = "";
for (let i = word.length - 1; i >= 0; i--) {
  result += word[i];
}
console.log(result);

for (const char of word) {
  console.log(char.split("").reverse().join(""));
}
console.log(result, "last");

console.log("\n--------Find is Palindrome------");
let str = "Aziza";
let reversed1 = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed1 += str[i];
}
if (str.toLowerCase() === reversed1.toLowerCase())
  console.log(`The "${str}" is PALINDROME!`);
else console.log(`The "${str}" is NOT PALINDROME!`);
