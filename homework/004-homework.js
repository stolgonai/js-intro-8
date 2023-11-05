// Task #1
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7 
14
21
.
.
.
.
91
98
*/

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) console.log(i);
}

/**
 * TASK #2
 * 
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6
12
18 
.
.
36
42
48
 */

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 3 === 0) console.log(i);
}

/**
 * TASK #3
 *Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
85
.
.
.
60
55
50
 */

for (let i = 100; i >= 50; i--) {
  if (i % 5 === 0) console.log(i);
}

/**
 * TASK #4
 *Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
 */

for (let i = 0; i <= 7; i++) {
  console.log(`The square of ${i} is =  ${i * i}`);
}

/**
 * TASK #5
 *Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55
 */
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

/**
 *TASK #6
 Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
 */

//We create a variable, where we store a random num
const random = Math.ceil(Math.random() * 10);
// to find a factorial, we creating a variable, and store there 1,
// so we can able to multiply each time, otherwise 0 * by anything return 0
let factorial = 1;
// create a for loop, by going down, where start point will be our random num.
for (let i = random; i >= 1; i--) {
  factorial *= i;
}
// printout result
console.log(random, factorial);

/**
 * TASK #7
 *Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
 */
// Version #1
let randomNum = 1;
let countAttemp = 0;
for (let i = 1; i <= 100; i++) {
  if (randomNum % 5 !== 0) {
    countAttemp++;
    randomNum = Math.ceil(Math.random() * 100);
    // continue;
  }
}
console.log(`The random number is ${randomNum} and it took 
${countAttemp} attempt/s to generate it.`);

// Version #2
let randomNum1 = 1;
let countAttemp1 = 0;
do {
  randomNum1 = Math.ceil(Math.random() * 100);
  countAttemp1++;
} while (randomNum1 % 5 !== 0);
console.log(`The random number is ${randomNum1} and it took 
${countAttemp1} attempt/s to generate it.`);

// TASK #8
/**
 * -Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
 */
let countries = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(countries);
console.log(countries.sort());

/**
 * -Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
 */

const str = ["Scooby Doo", "Snoopy", "Blue", "Pluto", "Dino", "Sparky"];
console.log(str.includes("Pluto"));

/**
 * TASK 10
 *Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
 *
 */

const cartoons = ["Garfield", "Tom", "Sylvester", "Azrael"];
console.log(cartoons.sort());
console.log(cartoons.includes("Garfield") && cartoons.includes("Felix"));

/**
 * Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
 */
const nums = [10.5, 20.75, 70, 80, 15.75];
for (let i = 0; i <= nums.length - 1; i++) {
  console.log(nums[i]);
}

/**
 * Task 12
 *-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4

 */

const objects = ["Pen", "notebook", "Book", "paper", "bag", "pencil", "Ruler"];
let countBP = 0;
let hasBookOrPen = 0;
for (let i = 0; i < objects.length; i++) {
  if (
    objects[i][0].toUpperCase() === "B" ||
    objects[i][0].toUpperCase() === "P"
  ) {
    countBP++;
  }
  if (
    objects[i].toLowerCase().includes("book") ||
    objects[i].toLowerCase().includes("pen")
  ) {
    hasBookOrPen++;
  }
}
console.log(`Elements starting with 'B' or 'P' = ${countBP}
Elements having 'book' or 'pen' = ${hasBookOrPen}`);

// TASK 13
/**
 * Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
 */

const numbers = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(numbers);
let moreThan10 = 0;
let lessThan10 = 0;
let count10 = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 10) count10++;
  if (numbers[i] < 10) lessThan10++;
  if (numbers[i] > 10) moreThan10++;
}
console.log(`Elements that are more than 10 = ${moreThan10}
Elements that are less than 10 = ${lessThan10}
Elements that are 10 = ${count10}`);

/**
 * Task 14
 *-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
 */

// if we assume that both arrays has a same length al the time, my solution is next:
const arr1 = [5, 8, 13, 1, 2];
const arr2 = [9, 3, 67, 1, 0];
const arr3 = [];
for (let i = 0; i < arr1.length; i++) {
  arr3.push(Math.max(arr1[i], arr2[i]));
}
console.log(`1st array is =  ${arr1}
2nd array is = ${arr2}
3rd array is =  ${arr3}`);

//Task 15
/**
 *Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
 */

function firstDuplicate(arr) {
  // let firstCheck = arr.shift();
  // // console.log(firstCheck)
  // if (arr.includes(firstCheck)) return firstCheck;
  // return -1;
  for (let i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
    return -1;
  }
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, "5", 3, 7, 4]));

//TASK 16
/**
 * Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]
 */

function getDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        if (!result.includes(arr[j])) result.push(arr[j]);
      }
    }
  }
  return result;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); //-[ 0, -7 ]
console.log(getDuplicates([1, 2, 5, 0, 7]));
console.log(getDuplicates(["A", "foo", "12", 12, "bar", "a", "a", "foo"]));
console.log(getDuplicates(["foo", "12", 12, "bar", "a"]));

/**
 * Task 17
 * Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")
 */
function reverseStringWords(str) {
  let arr1 = str.split(" ");
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let reversed = arr1[i].split("").reverse().join("");
    result.push(reversed);
  }
  return result.join(" ");
}
console.log(reverseStringWords("Hello World"));

/**TASK 18
 * Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
 */

function getEvens(num1, num2) {
  //create an empty array where we can store an even numbers from the range
  let result = [];

  // compare if two args are same and odd, dont go deep, return an empty arr and execute of the function
  if (num1 === num2 && num1 % 2 !== 0) return result;
  // if (num1 === num2 && num1 % 2 === 0) return [num1];

  //We have to find which arg is max and min, to be able make range of even nums later
  const minArg = Math.min(num1, num2);
  const maxArg = Math.max(num1, num2);

  // we compare odd and even, to find start point
  if (minArg % 2 !== 0) {
    for (let i = minArg + 1; i <= maxArg; i += 2) result.push(i);
  }
  if (minArg % 2 === 0) {
    for (let i = minArg; i <= maxArg; i += 2) result.push(i);
  }
  return result;
}
console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
console.log(getEvens(3, 3));

/**
 * TASK 19
 *Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
 */

function getMultipleOf5(num1, num2) {
  // create an empty array, to store result
  let result = [];
  // check if both args same and divisible by 5
  if (num1 === num2 && num1 % 5 === 0) return [num1];

  // check if both args less then 5
  if (num1 < 5 && num2 < 5) return result;

  // if num1 > num2 then incrementing loop
  // loop over and find divisible by 5 nums in the range between minand max
  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      if (i % 5 === 0) result.push(i);
    }
  }

  //if arg1 > arg2 then decrementing loop
  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      if (i % 5 === 0) result.push(i);
    }
  }
  return result;
}
console.log(getMultipleOf5(3, 17)); // -> [ 5, 10, 15]
console.log(getMultipleOf5(23, 5)); // -> [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)); //-> [ 5 ]
console.log(getMultipleOf5(2, 4)); // -> [ ]

/**
 * Task 20
 * Write a function named as fizzBuzz() which takes 2 number arguments and 
 returns a string composed with below requirements when invoked.
•You need to find all the numbers within the range of given 2 numbers (both inclusive) and 
store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
 */

function fizzBuzz(num1, num2) {
  // create a result container, which is an array for now, it is easy to manipulate later.
  let result = [];

  // find max and min num to know where start range and end
  let startMin = Math.min(num1, num2);
  let endMax = Math.max(num1, num2);

  //loop over with conditions in it: if divisible by 3, 5 and both 3 and 5
  for (let i = startMin; i <= endMax; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result.join(" | ");
}
console.log(fizzBuzz(13, 18)); // -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)); // -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)); // -> "Buzz"
console.log(fizzBuzz(9, 6)); // -> "Fizz | 7 | 8 | Fizz"
