console.log("Second way of solutions are bellow in the commented area: ");
/**
 * Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
 */
console.log("`--------------TASK 1------------------");
const hasLowerCase = (str) => {
  return str.split("").filter((el) => el >= "a" && el <= "z").length > 0;
};
console.log(hasLowerCase("")); //  -> false
console.log(hasLowerCase("JAVASCRIPT")); //  -> false
console.log(hasLowerCase("hello")); //  -> true
console.log(hasLowerCase("125$")); // -> false
console.log(hasLowerCase("   a   ")); // -> true

/**
 *Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:

 */
console.log("`--------------TASK 2------------------");
const noZero = (arr) => arr.filter((num) => num !== 0);
console.log(noZero([1])); //  -> [1]
console.log(noZero([1, 1, 10])); // -> [1, 1, 10]
console.log(noZero([0, 1, 10])); //  -> [1, 10]
console.log(noZero([0, 0, 0])); // -> []
console.log(noZero([10, 100, 0])); // -> [10, 100])

/**
 * Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
 */
console.log("`--------------TASK 3------------------");
function numberAndSquare(arr) {
  return arr.reduce((result, num) => {
    let innerArr = [num, num ** 2];
    result.push(innerArr);
    return result;
  }, []);

  //   let result = [];
  //   for (const num of arr) {
  //     let innerArr = [num, num * num];

  //     result.push(innerArr);
  //   }
  //   return result;
}

console.log(numberAndSquare([1, 2, 3])); //  -> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); // -> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); // -> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); //  -> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); //  -> [[0, 0], [1, 1], [-10, 100]]) `

/**
 * Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
 */
console.log("`--------------TASK 4------------------");
function containsValue(arr, str) {
  return arr.some((word) => word === str);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello")); // -> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //-> true

/**
 * Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
 */
console.log("`--------------TASK 5------------------");
const reverseSentence = (str) => {
  const converted = str.toLowerCase().split(" ");
  if (converted.length < 2) return "There is not enough words!";
  let reversed = converted.reverse().join(" ");
  let upperCase = reversed.charAt(0).toUpperCase();
  let sliced = reversed.slice(1);
  return upperCase + sliced;
};

console.log(reverseSentence("Hello")); // "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); // "Fun is javascript"
console.log(reverseSentence("This is a sentence")); // "Sentence a is this"

/**
 * Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
 */
console.log("`--------------TASK 6------------------");
const removeStringSpecialsDigits = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] >= "a" && str[i] <= "z") ||
      str[i] === " " ||
      (str[i] >= "A" && str[i] <= "Z")
    )
      result += str[i];
  }
  return result;
};

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); // -> "Javascript is fun"
console.log(removeStringSpecialsDigits("Cypress")); //  -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); //  -> "Automation"

/**
 * Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
 */
console.log("`--------------TASK 7------------------");
const removeArraySpecialsDigits = (arr) => {
  return arr.map((el) => {
    let result = "";
    for (let i = 0; i < el.length; i++) {
      if (
        (el[i] >= "a" && el[i] <= "z") ||
        el[i] === " " ||
        (el[i] >= "A" && el[i] <= "Z")
      )
        result += el[i];
    }
    return result;
  });

  // return el.split("").reduce((result, innerEl) => {
  //   if (
  //     (innerEl >= "a" && innerEl <= "z") ||
  //     innerEl === " " ||
  //     (innerEl >= "A" && innerEl <= "Z")
  //   )
  //     result += innerEl;
  //   return result;
  // }, "");
};
console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); //  -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); //  -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); // -> ["Automation", "tool"]

/**
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
 */
console.log("`--------------TASK 8------------------");
const getCommons = (arr1, arr2) => {
  return arr1.reduce((result, el) => {
    if (arr2.includes(el) && !result.includes(el)) result.push(el);
    return result;
  }, []);
};
console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //[]
console.log(
  getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])
); //["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //["C#"]

/**
 * Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
 */
console.log("`--------------TASK 9------------------");
const noXInVariables = (arr) => {
  return arr
    .map((el) => {
      if (typeof el === "string") {
        let lowered = el.toLowerCase();
        if (lowered.includes("x")) return lowered.replaceAll("x", "");
      }
      return el;
    })
    .filter((el) => el !== "");

  // return arr
  //   .join(" ")
  //   .toLowerCase()
  //   .replaceAll("x", "")
  //   .split(" ")
  //   .filter((el) => el !== "");
};
console.log(noXInVariables(["abc", 123, "#$%"])); //  -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); // -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); // -> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); //  -> ["yyy", "ABC"]
