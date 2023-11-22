console.log(`--------------TASK 1-------------------`);
/** 
 * Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
 */
function noSpace(str) {
  return str.split(" ").join("");
}
console.log(noSpace("")); // ->  ""
console.log(noSpace("Javascript")); //  ->  "Javascript"
console.log(noSpace("    Hello   ")); // -> "Hello"
console.log(noSpace(" Hello World   ")); //  -> "HelloWorld”
console.log(noSpace("Tech Global")); //  -> "TechGlobal")

console.log(`--------------TASK 2-------------------`);
/**
 * Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
 */
function replaceFirstLast(str) {
  const strTrimmed = str.trim();
  if (strTrimmed.length < 2) return "";
  let fLetter = strTrimmed[0];
  let midLetter = strTrimmed.slice(1, strTrimmed.length - 1);
  let lastLetter = strTrimmed.slice(-1);
  return `${str.slice(-1)}${midLetter}${fLetter}`;
}
console.log(replaceFirstLast("")); //  ->  ""
console.log(replaceFirstLast("Hello")); //  ->  "oellH"
console.log(replaceFirstLast("Tech Global")); //  -> "lech GlobaT"
console.log(replaceFirstLast("A")); //  -> ""
console.log(replaceFirstLast("    A      ")); //  -> "")

console.log(`--------------TASK 3-------------------`);
/**
 * Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
 */

const hasVowel = (str) => {
  let vowel = "aeoui";
  for (const l of str) {
    if (vowel.includes(l.toLowerCase())) return true;
  }
  return false;
};
console.log(hasVowel("")); //  -> false
console.log(hasVowel("Javascript")); //  -> true
console.log(hasVowel("Tech Global")); //  -> true
console.log(hasVowel("1234")); //  -> false
console.log(hasVowel("ABC")); // -> true)

console.log(`--------------TASK 4-------------------`);
/**
 *Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples
 */
const checkAge = (age) => {
  const currentYear = new Date().getFullYear();
  if (currentYear - age > 120 || currentYear - age < 0)
    return "AGE IS NOT VALID";
  if (currentYear - age < 16) return "AGE IS NOT ALLOWED";
  if (currentYear - age >= 16) return "AGE IS ALLOWED";
};
console.log(checkAge(2015)); // -> "AGE IS NOT ALLOWED"
console.log(checkAge(2007)); //-> "AGE IS ALLOWED"
console.log(checkAge(2050)); //-> "AGE IS NOT VALID"
console.log(checkAge(1920)); // -> "AGE IS ALLOWED"
console.log(checkAge(1800)); //-> "AGE IS NOT VALID")

console.log(`--------------TASK 5-------------------`);
/** Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
 */
const averageOfEdges = (...args) => {
  let min = Math.min(...args);
  let max = Math.max(...args);
  return Math.abs(max + min) / 2;
};
console.log(averageOfEdges(0, 0, 0)); // -> 0
console.log(averageOfEdges(0, 0, 6)); //  -> 3
console.log(averageOfEdges(-2, -2, 10)); //  -> 4
console.log(averageOfEdges(-3, 15, -3)); //  -> 6
console.log(averageOfEdges(10, 13, 20)); //  -> 15)

console.log(`--------------TASK 6-------------------`);
/**
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
 */
const noA = (arr) => {
  return arr.map((el) => {
    if (el.toLowerCase().startsWith("a")) return "###";
    else return el;
  });
};
console.log(noA(["javascript", "hello", "123", "xyz"])); //  ->  ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); //  ->  ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); //  -> ["###", "###", "###", "###", "###"])

console.log(`--------------TASK 7-------------------`);
/**
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
 */
const no3and5 = (arr) => {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 101;
    if (num % 5 === 0) return 99;
    if (num % 3 === 0) return 100;
    else return num;
  });
};
console.log(no3and5([7, 4, 11, 23, 17])); //  -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); //  -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); //  -> [99, 11, 100, 13, 14, 101]

console.log(`--------------TASK 8-------------------`);
/**
 * Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:

 */
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let d = 5;
  while (d < num) {
    if (num % d === 0) return false;
    d += 2;
  }

  return true;
};
function countPrimes(nums) {
  return nums.reduce((counter, num) => {
    if (isPrime(num) === true) return counter + 1;
    return counter;
  }, 0);
}

console.log(countPrimes([-10, -3, 0, 1])); //  -> 0
console.log(countPrimes([7, 4, 11, 23, 17])); //  -> 4
console.log(countPrimes([41, 53, 19, 47, 67])); //  -> 5)

console.log(`--------------TASK 9-------------------`);
/**
 * Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
 */
const removeDuplicates = (arr) => {
  let result = [];
  arr.filter((n, i) => {
    if (!result.includes(n)) result.push(n);
  });

  return result;
};
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); //  -> [10, 20, 35, 60,  70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); //-> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // -> ["1", "2", "3"]

console.log(`--------------TASK 10-------------------`);
/**
 Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
 */
const isDateFormatValid = (date) => {
  if (date.includes(" ") || date.includes(".") || date.includes("-"))
    return false;

  const month = date.split("/")[0] || -1;
  const day = date.split("/")[1] || -1;
  const year = date.split("/")[2] || -1;
  //   console.log(typeof month, "mon", day, "da", year, "ye");

  if (month === undefined || month > "12" || month < 0) return false;
  //   if (month === "02") {
  //     if (day < 0 || day > 28) return false;
  //   }
  if (day === undefined || day > 31 || day < 1 || year === undefined)
    return false;

  return month.length === 2 && day.length === 2 && year.length === 4;
};
console.log(isDateFormatValid("")); // -> false
console.log(isDateFormatValid("15/30/2020")); // -> false
console.log(isDateFormatValid("10-30-2020 ")); // -> false
console.log(isDateFormatValid("10.30.2020")); //  -> false
console.log(isDateFormatValid("5/30/2020")); //-> false
console.log(isDateFormatValid("05/30/2020 ")); //-> true
console.log(isDateFormatValid("10/2/2020")); //  -> false
console.log(isDateFormatValid("10/02/2020 ")); // -> true)

console.log(`--------------TASK 11-------------------`);
/**
 * Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
 */
const getRidOfDublicatedNums = (arr) => {
  return arr.reduce((result, n) => {
    if (!result.includes(n)) result.push(n);
    return result;
  }, []);
};
const secondMax = (arr) => {
  //   let nums = [];
  //   arr.filter((n) => {
  //     if (!nums.includes(n)) nums.push(n);
  //   });

  //   let sorted = nums.sort((a, b) => a - b);
  let sorted = getRidOfDublicatedNums(arr).sort((a, b) => a - b);
  if (arr.length === 1) return arr[0];
  return sorted[sorted.length - 2];
};
console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); //  -> 7
console.log(secondMax([3, 4, 5, 6])); //  -> 5
console.log(secondMax([10])); //  -> 10

console.log(`--------------TASK 12-------------------`);
/**
 Write a method named secondMin() takes an array argument 
and returns the second min number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min 
number.
NOTE: Be careful when there is multiple min numbers.
 */
const secondMin = (arr) => {
  if (arr.length === 1) return arr[0];
  let sorted = getRidOfDublicatedNums(arr).sort((a, b) => a - b);
  return sorted[1];
};
console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); //  -> 7
console.log(secondMin([3, 4, 5, 6])); //  -> 4
console.log(secondMin([10])); // -> 10

console.log(`--------------TASK 13-------------------`);
/**
 * Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
 */
const mostRepeated = (arr) => {
  if (arr.length === 1) return arr[0];
  let tempObj = {};
  let mostOccurEl = arr[0];
  let countOccur = 1;
  for (const num of arr) {
    if (tempObj[num] === undefined) tempObj[num] = 0;
    tempObj[num]++;
    if (tempObj[num] > countOccur) {
      countOccur = tempObj[num];
      mostOccurEl = num;
    }
  }
  return mostOccurEl;

  // const key = Object.keys(tempObj);
  // const val = Object.values(tempObj);
  // let max = val[0];
  // let result = key[0];
  // for (let i = 0; i < val.length; i++) {
  //   if (val[i] > max) {
  //     max = val[i];
  //     result = key[i];
  //   }
  // }
  // return result;
};
console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); //  -> 4
console.log(
  mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])
); //  -> "pen"
console.log(mostRepeated([10])); //  -> 10
console.log(mostRepeated(["TechGlobal"])); //  ->"TechGlobal"
