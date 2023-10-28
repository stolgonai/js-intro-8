/*
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
 */

// let randomNum = Math.floor(Math.random() * 51);
// let result = randomNum * 5;
// console.log("The random number * 5 = " + result);
// let min = 0;
// let max = 50;
// let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomNum);
// let result = randomNum * 5;
// console.log("The " + randomNum + " *5 = " + result);

/*
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
// */
// let min = 50;
// let max = 100;
// let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
// // console.log(randomNum);
// let remainder = randomNum % 10;
// console.log("remainder", remainder);

/*
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

let randomNum1 = Math.floor(Math.random() * (25 - 1 + 1) + 1);
let randomNum2 = Math.floor(Math.random() * (50 - 26 + 1) + 26);
let randomNum3 = Math.floor(Math.random() * (75 - 51 + 1) + 51);
let randomNum4 = Math.floor(Math.random() * (100 - 76 + 1) + 76);
let maxMinDifference = randomNum4 - randomNum1;
let secondDifference = randomNum3 - randomNum2;

let avarage = (randomNum1 + randomNum2 + randomNum3 + randomNum4) / 4;

// console.log("Difference of max and min", maxMinDifference);
// console.log("Difference of second and third =", secondDifference);
// console.log("Average", avarage);

let random1 = Math.floor(Math.random() * 10 + 1);
let random2 = Math.floor(Math.random() * 10 + 1);
let result = random1 + (random2 % 2) === 0;
// console.log(result);
/**
 * Question 7

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
 */
// let str = "a";
// if (!Number(str) || str.charCodeAt(" ") === 32) {
//   console.log("this is true");
// } else console.log("not true");

/**
 * Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.

Test data 1:
"a"

Expected result 1:
"a"  is a letter


Test data 2:
"5"

Expected result 2:
"5"  is a digit


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is a whitespace
 */

// Pseudo
// 1. create a variable
// 2. check if it is a string
// create a few conditions for each part
//  and print output
let s6 = "$";
if (
  (s6.charCodeAt() >= 33 && s6.charCodeAt() <= 47) ||
  (s6.charCodeAt() >= 58 && s6.charCodeAt() <= 64) ||
  (s6.charCodeAt() >= 91 && s6.charCodeAt() <= 96) ||
  (s6.charCodeAt() >= 123 && s6.charCodeAt() <= 126)
)
  console.log(`${s6} it is a special character`);
else if (Number(s6)) console.log(`${s6} it is a digit`);
else if (s6 === " ") console.log(`${s6} it is a whitespace`);
else console.log(`${s6} it is a letter`);

let randomNum = Math.floor(Math.random() * 101);
if (randomNum <= 50) {
  if (randomNum < 25) {
    console.log(randomNum, "1st quarter");
  } else console.log(randomNum, "2nd quarter");
} else if (randomNum <= 100) {
  if (randomNum < 76) {
    console.log(randomNum, "3rd quarter");
  } else console.log(randomNum, "4th quarter");
}
