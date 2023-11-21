/**TASK #1
 * Requirement:
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
 */
console.log("-------TASK 1---------------------------");
function countPos(arr) {
  return arr.filter((el) => el > 0).length;
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); //  -> 4
console.log(countPos([0, -1, -2, -3])); //  -> 0

/**
 * TASK #2
 * Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
 */
console.log("-------TASK 2---------------------------");
function countA(str) {
  let counter = 0;
  for (const letter of str) {
    if (letter.toLowerCase() === "a") counter++;
  }
  return counter;
}
console.log(countA("TechGlobal is a QA bootcamp")); //  -> 4
console.log(countA("QA stands for Quality Assurance")); //  -> 5
console.log(countA("Cypress")); ///  -> 0)

/**
 * Task #3
 *Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")  -> 0
 */
console.log("-------TASK 3---------------------------");
function countVowels(str) {
  let counter = 0;
  const vowels = "aeoui";
  for (const letter of str) {
    if (vowels.indexOf(letter) > -1) counter++;
  }
  return counter;
}

console.log(countVowels("Hello")); // -> 2
console.log(countVowels("Hello World")); // -> 3
console.log(countVowels("JavaScript is fun")); // -> 5
console.log(countVowels("")); //  -> 0

/**
 * TASK #4
 *Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
 */
console.log("-------TASK 4---------------------------");
function countConsonants(str) {
  let count = 0;
  for (const letter of str) {
    if (!"aeyuio".includes(letter.toLowerCase()) || letter === " ") count++;
  }
  return count;
}
console.log(countConsonants("Hello")); //-> 3

console.log(countConsonants("Hello World")); // -> 8
console.log(countConsonants("JavaScript is fun")); //  -> 12
console.log(countConsonants("")); //  -> 0
/*

TASK 5
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 
countWords("1 2 3 4") 				-> 4
*/
console.log("-------TASK 5---------------------------");
function countWords(str) {
  return str.trim().split(" ").length;
}

console.log(countWords("    Javascript is fun    ")); //			-> 3
console.log(countWords("Cypress is an UI automation tool.  ")); //			-> 3
console.log(countWords("1 2 3 4")); //			-> 3

/**
 *TASK 6
 Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
 */
console.log("-------TASK 6---------------------------");
function factorial(num) {
  let factorial = 1;
  if (num === 0) return 0;
  else {
    for (let i = num; i > 0; i--) {
      factorial *= i;
    }
    return factorial;
  }
}
console.log(factorial(5)); // -> 120
console.log(factorial(4)); // -> 24
console.log(factorial(0)); // -> 0
console.log(factorial(1)); // -> 1

/**
 * TASK 7
 * Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
 */
console.log("-------TASK 7---------------------------");
function isPalindrome(str) {
  return (
    str.length <= 1 ||
    str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
  );
}
console.log(isPalindrome("Hello")); //  -> false
console.log(isPalindrome("Kayak")); //  -> true
console.log(isPalindrome("civic")); //  -> true
console.log(isPalindrome("abba")); // -> true
console.log(isPalindrome("ab  a")); // -> false
console.log(isPalindrome("123454321")); //  -> true
console.log(isPalindrome("A")); //  -> true
console.log(isPalindrome("")); // -> true)

/**
 * TASK 8
 */
console.log("-------TASK 8---------------------------");
function countMultipleWords(arr) {
  let counter = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim().split(" ").length > 1) counter++;
  }
  return counter;
}
console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"])); //-> 1
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "])); //-> 0
console.log(
  countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])
); //-> 4
console.log(countMultipleWords([])); //-> 0)

/**
 * TASK 9
 *Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("")  -> 0

 */
console.log("-------TASK 9---------------------------");
function count3OrLess(str) {
  return str.length > 0
    ? str.split(" ").filter((el) => el.length <= 3).length
    : 0;
}
console.log(count3OrLess("Hello")); //  -> 0
console.log(count3OrLess("Hi John")); //  -> 1
console.log(count3OrLess("JavaScript is fun")); //  -> 2
console.log(count3OrLess("My name is John Doe")); //  -> 3
console.log(count3OrLess("")); //  -> 0

/**
 * TASK 10
 * Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
 */
console.log("-------TASK 10---------------------------");
console.log("This function not working properly if arg === 2...(((...");
function isPrime(num) {
  if (num <= 1) return false;
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
      else return true;
    }
  }
}
console.log(isPrime(5)); //  -> true
console.log(isPrime(2)); //  -> true
console.log(isPrime(29)); //  -> true
console.log(isPrime(-5)); // -> false
console.log(isPrime(0)); // -> false
console.log(isPrime(1)); // -> false

/**TASk 11
 * Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
 */
console.log("-------TASK 11---------------------------");
function add(arr1, arr2) {
  // Creating an emprty output container
  let result = [];
  // using regular loop, to acces each el.
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    //in condition we check, if both elmnts in the arr are same, push 0 into output container
    if (arr1[i] === arr2[i]) result.push(0);
    //checking if elmts undefined, then push into output arr elmnt from second arr, where elmnt is defined without any manipulation
    if (arr1[i] === undefined) result.push(arr2[i]);
    else if (arr2[i] === undefined) result.push(arr1[i]);
    //this condition works only if elements are defined, then we can push result of 2 elmnts into output arr.
    else result.push(arr1[i] + arr2[i]);
  }
  // return the result
  return result;
}
// another option
const add = (arr1, arr2) => {
  if (arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1];
  return arr1.map((value, i) => value + (arr2[i] || 0));
};

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); ///  -> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); /// -> [16, 11, 9,  3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // -> [0, 0, 0, 0])

/**
 * TASK 12
 *Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> "" 
 */
console.log("-------TASK 12---------------------------");
function removeExtraSpaces(str) {
  return str
    .trim()
    .split(" ")
    .reduce((result, el) => {
      if (el !== "") result.push(el);
      return result;
    }, [])
    .join(" ");
}
console.log(removeExtraSpaces("Hello")); //  -> "Hello"
console.log(removeExtraSpaces("      Hello    World     ")); //  -> "Hello World"
console.log(removeExtraSpaces("     JavaScript is          fun")); //  -> "JavaScript is fun”
console.log(removeExtraSpaces("")); //  -> ""

/**
 * TASK 13
 * Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
 */
console.log("-------TASK 13---------------------------");
console.log(
  "I dont think it is better solution, but I was able to solve only this way(((..."
);

function findClosestTo10(arr) {
  // creating an arr, without num 10
  let filtered = arr.filter((n) => n !== 10).sort((a, b) => a - b);
  // with this arr reducing all nums, comparing substruction of each num
  //and if cur num is less then prev num, retuning the curr, otherwise return prev
  return filtered
    .filter((n) => n !== 10)
    .reduce(function (prev, curr) {
      if (Math.abs(curr - 10) < Math.abs(prev - 10)) return curr;
      return prev;
    });
}

// another way
const findClosestTo10 = (arr) => {
  let closestTo10 = Number.MAX_VALUE;
  let closestDiff = Number.MAX_VALUE;

  for (currentNum of arr) {
    if (currentNum === 10) continue;

    let currentDiff = Math.abs(10 - currentNum);

    if (
      currentDiff < closestDiff ||
      (currentDiff === closestDiff && currentNum < closestTo10)
    ) {
      closestTo10 = currentNum;
      closestDiff = currentDiff;
    }
  }
  return closestTo10;
};

console.log(findClosestTo10([10, 13, 7, 5, 70, 15, 57])); //  -> 5
console.log(findClosestTo10([10, -13, 15, 70, 5, 57])); //  -> 5
console.log(findClosestTo10([10, -13, 12, 8, 15, -20])); //  -> 8
console.log(findClosestTo10([0, -1, -2])); //  -> 0

/**
 * TASK 14
 *Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:

 */
console.log("-------TASK 14---------------------------");
function isEmailValid(str) {
  let isValid = true;
  let countSpecChar = 0;
  let atSymbolIndex = str.indexOf("@");
  let dotSymbolIndex = str.indexOf(".");
  //checking if str does not have space or empty val
  // if at least characters before @ character
  // if at least 2 characters between @ and .
  // if at least 2 characters after the . character
  if (str.length < 0 && str.includes(" ")) isValid = false;
  if (
    str.slice(0, atSymbolIndex).length < 2 ||
    //here i started from lastIndex, in case if there 2 occurances
    str.slice(str.lastIndexOf("@") + 1, dotSymbolIndex).length < 2 ||
    str.slice(dotSymbolIndex).length < 2
  )
    isValid = false;
  //purpose of loop is to count "@"
  for (let i = 0; i < str.length; i++) {
    const l = str[i];
    if (l === "@") countSpecChar++;
  }
  return countSpecChar === 1 && isValid;
}

//another option
const isEmailValid = (email) => {
  if (email.includes(" ")) return false;
  if (email.split("@").length !== 2) return false;

  const beginning = email.split("@")[0];
  const middle = email.split("@")[1].split(".")[0];
  const end = email.split("@")[1].split(".")[1];

  if (beginning === undefined || middle === undefined || end === undefined)
    return false;

  return beginning.length >= 2 && middle.length >= 2 && end.length >= 2;
};

console.log(isEmailValid("")); // -> false
console.log(isEmailValid("@gmail.com")); //  -> false
console.log(isEmailValid("johndoe@yahoo")); //  -> false
console.log(isEmailValid("johndoe@.com")); // -> false
console.log(isEmailValid("johndoe@@gmail.com")); //  -> false
console.log(isEmailValid("a@outlook.com")); // -> false
console.log(isEmailValid("johndoe@a.com")); // -> false
console.log(isEmailValid("johndoe@gmail.com")); // -> true)

/**
 * TASK 15
 * Write a function named as isPasswordValid() which takes a 
string email as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.

 */
console.log("-------TASK 15---------------------------");
function isPasswordValid(str) {
  //right away checking basic requirements before program work deeper
  if (str.length < 8 || str.length > 16 || str.includes(" ")) return false;
  //creating variables, for ability to check if incklude or not
  let digit = "1234567890";
  let specChar = "~`!@#$%^&*()_-+={[}]|:;\"'<,>.?/\\";
  //creating counter, to check in output is there at least 1 or not
  let countDigit = 0;
  let countUpperCase = 0;
  let countLowerCase = 0;
  let countSpecChar = 0;

  for (const l of str) {
    if (digit.includes(l)) {
      countDigit++;
      continue;
    }
    if (specChar.includes(l)) {
      countSpecChar++;
      continue;
    }
    if (l.includes(l.toUpperCase())) {
      countUpperCase++;
      continue;
    }
    if (l.includes(l.toLowerCase())) {
      countLowerCase++;
      continue;
    }
  }
  return (
    countDigit >= 1 &&
    countLowerCase >= 1 &&
    countSpecChar >= 1 &&
    countLowerCase >= 1
  );
}

// another solution
const isPasswordValid = (pass) => {
  if (pass.includes(" ")) return false;
  if (pass.length < 8 || pass.length > 16) return false;

  let hasUppercase = false;
  let hasLowercase = false;
  let hasDigit = false;
  let hasSpecial = false;

  for (char of pass) {
    if (char >= "A" && char <= "Z") hasUppercase = true;
    else if (char >= "a" && char <= "z") hasLowercase = true;
    else if (char >= "0" && char <= "9") hasDigit = true;
    else hasSpecial = true;
  }

  return hasUppercase && hasLowercase && hasDigit && hasSpecial;
};

console.log(isPasswordValid("")); //  -> false
console.log(isPasswordValid("abcd")); //  -> false
console.log(isPasswordValid("abcd1234")); //  -> false
console.log(isPasswordValid("Abcd1234")); //  -> false
console.log(isPasswordValid("Chicago12345US!#$%")); //  -> false
console.log(isPasswordValid("Abcd1234$")); //  -> true
console.log(isPasswordValid("Chicago123$")); //  -> true
console.log(isPasswordValid("Test1234#")); //  -> true)
