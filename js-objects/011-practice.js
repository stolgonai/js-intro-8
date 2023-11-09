/*
Requirement:
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8]) 		-> 3
firstPos([-2, 0, -7, 10, -5]) 	    -> 10
firstPos([1, 2, 3, -2])             -> 1
*/

function firstPos(arr) {
  //   for (const el of arr) {
  //     if (el > 0) {
  //       return el;
  //     }
  //   }
  let positive;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > 0) {
      positive = arr[i];
      return positive;
    }
    i++;
  }
}
console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));

/*
Requirement:
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8]) 		    -> -9
lastNeg([-2, 0, -7, 10, -5]) 	    -> -5
lastNeg([1, 2, 3, -2])              -> -2
*/

function lastNeg(arr) {
  let lastNeg;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) return arr[i];
  }
}

// console.log(lastNeg([0, 3, -9, 5, 8]));
// console.log(lastNeg([-2, 0, -7, 10, -5]));
// console.log(lastNeg([1, 2, 3, -2]));

/*
Requirement:
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	    -> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])          -> 3
max([-5, -2])               -> -2
*/

function max(arr) {
  //   arr.sort((a, b) => a-b);
  //   return arr.pop();
  return Math.max(...arr);
}
console.log(max([0, 3, -9, 5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([0, 3, -9, 5, 8]));
console.log(max([-5, -2]));

/*Requirement:
Write a function named as firstLongest() which takes an array as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 or more elements having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) 	    -> "Banana"
firstLongest(["purple", "yellow", "orange"]) 	    -> "purple"
*/

function firstLongest(arr) {
  //   let longest;
  //   arr.sort((a, b) => a.length - b.length);
  //   if (arr[arr.length - 1] === arr[arr.length - 2]) {
  //     longest = arr[arr.length - 2];
  //   }
  //   longest = arr.pop();
  //   return longest;
}

console.log(firstLongest(["purple", "yellow", "orange"]));

/**
 * Requirement:
Write a function named as commonElements() which takes 2 arrays as arguments and 
returns all the matching elements from the both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]) 	    -> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ]) 		    -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ]) 	-> ["abc" ] 
 */

function commonElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) result.push(arr1[i]);
  }
  return result;
}
console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
