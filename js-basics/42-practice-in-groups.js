/**
 * Question 2

Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

----
Test data 1:
0, 1

Expected result 1:
false

----
Test data 2:
0, 0

Expected result 2:
true

----
Test data 3:
1, 0

Expected result 3:
false

----
Test data 4:
1, 1

Expected result 4:
true
 */

// let num1 = 34;

// if (num1 < 51) {
//   if (num1 < 26)
//     console.log(`${num1} is in the 1st half
//          ${num1} is in the 1st quarter`);
//   else
//     console.log(`${num1} is in the 1st half
// ${num1} is in the 2nd quarter`);
// } else {
//   if (num1 < 76)
//     console.log(`${num1} is in the 2nd half.
// ${num1} is in the 3rd quarter.`);
//   else
//     console.log(`${num1} is in the 2nd half.
// ${num1} is in the 4th quarter.`);
// }
// let num2 = 1;
// let num3 = 1;
// console.log(num2 === num3);

/**
 * Requirement:
Assume you are given a single character.
Find if the given character is a letter  or digit.

Test data 1:
"v"

Expected result 1:
"v"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit
 */

/**
 * Pseudo code:
 * 1. Store the data
 * 2. find typeOf data
 * 3. print the output data type
 */

let data1 = "5";

if (Number(data1)) console.log(`${data1} is a digit`);
else console.log(`${data1} is a letter`);

console.log(Number(data1) ? `${data1} is a digit` : `${data1} is a letter`);
