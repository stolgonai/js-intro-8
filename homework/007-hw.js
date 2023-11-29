/**
 * Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
 */
console.log(`----------Task #1 ---------------`);
const hasUpperCase = (str) => {
  if (str) {
    return (
      str[0] === str[0].toUpperCase() &&
      str.charCodeAt(0) > 63 &&
      str.charCodeAt(0) <= 90
    );
  }
  return false;
};
console.log(hasUpperCase("javascript")); //  -> false
console.log(hasUpperCase("John")); //  -> true
console.log(hasUpperCase("$125.0")); //  -> false
console.log(hasUpperCase("")); //  -> false

/**
 * Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
*/
console.log(`----------Task #2 ---------------`);
function noDigit(str) {
  let result = "";
  let digits = "1234567890";
  for (let i = 0; i < str.length; i++) {
    if (!digits.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log(noDigit("")); //  -> ""
console.log(noDigit("Javascript")); //  -> "Javascript"
console.log(noDigit("123Hello")); //  -> "Hello"
console.log(noDigit("123Hello World149")); //  -> "Hello World”
console.log(noDigit("123Tech456Global149")); //  -> "TechGlobal"

/**
 * Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
*/
console.log(`----------Task #3 ---------------`);
const noVowel = (str) => {
  const vowels = "aeuio";
  let result = "";
  for (const l of str) {
    if (!vowels.includes(l.toLowerCase())) result += l;
  }
  return result;
};
console.log(noVowel("TechGlobal")); //  -> "TchGlbl"
console.log(noVowel("AEOxyz")); // -> "xyz"
console.log(noVowel("Javascript")); //  -> "Jvscrpt"
console.log(noVowel("")); //  -> ""
console.log(noVowel("125$")); //  -> "125$"

/**
 * Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:

*/
console.log(`----------Task #4 ---------------`);
const no13 = (arr) => {
  return arr.map((el) => (el === 13 ? 0 : el));
};
console.log(no13([1, 2, 3, 4])); //  -> [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // -> [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13])); //  -> [0, 0, 0, 0, 0]
console.log(no13([])); //  -> []

console.log(`----------Task #5 ---------------`);
console.log(
  "Bilal, in this solution, I assumed, the input will be always accept 3 nums."
);
/**
 * Write a function named middleInt() which takes three number arguments and 
return the middle number.  
*/
const middleInt = (num1, num2, num3) => {
  return [num1, num2, num3].sort((a, b) => a - b)[1];
};
console.log(middleInt(1, 2, 2)); //  -> 2
console.log(middleInt(5, 5, 8)); // -> 5
console.log(middleInt(5, 3, 5)); // -> 5
console.log(middleInt(1, 1, 1)); // -> 1
console.log(middleInt(-1, 25, 10)); //  -> 10
/**
 * Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
*/
console.log(`----------Task #6 ---------------`);
/**
 * Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
 */
const sumOfDigits = (str) => {
  let nums = [];
  if (str) {
    let digits = "1234567890";
    for (let i = 0; i < str.length; i++) {
      if (digits.includes(str[i])) {
        nums.push(Number(str[i]));
      }
    }
    return nums.reduce((sum, num) => sum + num, 0);
  }
  return 0;
};
console.log(sumOfDigits("Javascript")); //  -> 0
console.log(sumOfDigits("John’s age is 29")); //  -> 11
console.log(sumOfDigits("$125.0")); //  -> 8
console.log(sumOfDigits("")); // -> 0)

console.log(`----------Task #7 ---------------`);
const arrFactorial = (arr) => {
  return arr.map((num) => {
    let result = num;
    if (num === 0 || num === 1) return 1;
    while (num > 1) {
      num = num - 1;
      result = result * num;
    }
    return result;
  });
};

console.log(arrFactorial([1, 2, 3, 4])); //  ->  [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); //  -> [1,120]
console.log(arrFactorial([5, 0, 6])); //  -> [120, 1, 720]
console.log(arrFactorial([])); //  -> [])

console.log(`----------Task #8 ---------------`);
/**
 * Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:

*/
const categorizeCharacters = (str) => {
  let chars = "";
  let digits = "";
  let specChar = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) < 123) {
      chars += str[i];
    } else if (str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58) {
      digits += str[i];
    } else if (str.charCodeAt(i) > 32 && str.charCodeAt(i) < 48) {
      specChar += str[i];
    }
  }
  console.log(chars);
  return [chars, digits, specChar];
};
console.log(categorizeCharacters("1234")); //  -> [ '' , '1234', '' ]
console.log(categorizeCharacters("abc123$#%")); //  -> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // -> [ 'abc', '123', '$%%' ])
