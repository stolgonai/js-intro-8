/**
 * Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
 */
const hasLowerCase = (str) => {
  return str.split("").filter((el) => el >= "a" && el <= "z").length > 0;
};
// console.log(hasLowerCase("")); //  -> false
// console.log(hasLowerCase("JAVASCRIPT")); //  -> false
// console.log(hasLowerCase("hello")); //  -> true
// console.log(hasLowerCase("125$")); // -> false
// console.log(hasLowerCase("   a   ")); // -> true

/**
 *Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:

 */

// console.log(noZero([1])); //  -> [1]
// console.log(noZero([1, 1, 10])); // -> [1, 1, 10]
// console.log(noZero([0, 1, 10])); //  -> [1, 10]
// console.log(noZero([0, 0, 0])); // -> []
// console.log(noZero([10, 100, 0])); // -> [10, 100])

/**
 * Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
 */
function numberAndSquare(arr) {
  return arr.reduce((result, num) => {
    let innerArr = [num, num * num];
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

// console.log(numberAndSquare([1, 2, 3])); //  -> [[1, 1], [2, 4], [3, 9]]
// console.log(numberAndSquare([0, 3, -6])); // -> [[0, 0], [3, 9], [-6, 36]]
// console.log(numberAndSquare([1, 4])); // -> [[1,1], [4, 16]]
// console.log(numberAndSquare([0, 0, 0])); //  -> [[0, 0], [0, 0], [0, 0]]
// console.log(numberAndSquare([0, 1, -10])); //  -> [[0, 0], [1, 1], [-10, 100]]) `

/**
 * Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
 */
function containsValue(arr, str) {
  return arr.some((word) => word === str);
}
console.log(containsValue(["abc", "foo", "javascript"], "hello")); // -> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //-> true
