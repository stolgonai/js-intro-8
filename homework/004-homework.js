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
