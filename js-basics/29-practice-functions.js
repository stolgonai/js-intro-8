/**
 * Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                 -> "APPLE"
"Java is not a scripting programming language"  	 -> "JavaScript"
"I don't like books" 			                     -> "I like books"
 */

let string = "I like apples and oranges";
function findTheWord(str) {
  return str.slice(7, 13).toUpperCase();
}
// console.log(findTheWord(string));

let task2 = "Java is not a scripting programming language";
function joinInOne(str) {
  return `${str.slice(0, 4)}${str.slice(14, 20)}`;
}
// console.log(joinInOne(task2));

let task3 = "I don't like books";
function removeWord(str) {
  let split = str.split("don't");

  return `${split[0].trim()}${split[1]}`;
}
// console.log(removeWord(task3));

/**
 * Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false


 */
// let s1 = "JavaScript";
// let s2 = "";

function getInfo(str) {
  //   let vowels = ["a", "e"," i", "u", "o", "A", "E", "I", "U", "O"];
  let isMatch =
    str.includes("a") ||
    str.includes("e") ||
    str.includes("i") ||
    str.includes("u") ||
    str.includes("o") ||
    str.includes("A") ||
    str.includes("E") ||
    str.includes("I") ||
    str.includes("U") ||
    str.includes("O");
  return `The length is = ${str.length}
    The first char is = ${str[0]}
    The last char is = ${str[str.length - 1]}
    ${isMatch}`;
}

// console.log(getInfo(s1));
// console.log(getInfo(s2));
// console.log(getInfo("lkjhg"));

/**
 * Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

8:01
Test Data 1:
let s2 = "x";

Expected Result 1:
"x"
8:01
Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"
8:01
Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"
 */

function findMiddleOne(str) {
  return str[Math.floor(str.length / 2)];
}
// console.log(findMiddleOne("x"));
// console.log(findMiddleOne("abc"));
// console.log(findMiddleOne("civic"));
// console.log(findMiddleOne(""))

/**
 * Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

8:27
Test Data 1:

Expected Result 1:
""
8:27
Test Data 2:

Expected Result 2:
"bc"
8:27
Test Data 3:

Expected Result 3:
"Sc"
* 
* 
*/
let s1 = "";
let s2 = "abcd";
let s3 = "JavaScript";

function findMid2(str) {
  return `${str.slice(str.length / 2 - 1, str.length / 2 - 1 + 1)}${str.slice(
    str.length / 2,
    str.length / 2 + 1
  )}`;
}

// console.log(findMid2(s1));
// console.log(findMid2(s2));
// console.log(findMid2(s3));

// console.log(findMid2(s1));
// console.log(findMid2(s2));
// console.log(findMid2(s3));

/**
 * Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters

Test Data 1:

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 

Test Data 2:

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/
let s4 = "abcd";
let s5 = "JavaScript";

function manipulateStr(str) {
  let first = str.slice(0, 2);
  let last = str.slice(str.length - 2);
  let middle = str.slice(2, str.length - 2) || "";
  console.log(`tsis strring and middle ${str} ${middle}`);
  return `The first 2 characters are = ${first}
  The last 2 characters are = ${last}
  The other characters  are = ${middle}`;
}
console.log(manipulateStr(s5));

/**
 * Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
 */

function isItXx(str) {
  return str.startsWith("xx") && str.endsWith("xx");
}
// console.log(isItXx("xxooxx"));
// console.log(isItXx("xxoo"));
// console.log(isItXx("noo"));
// console.log(isItXx("xxoijoijxx"));

/**
 * Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:

Expected Result 1:
""

Test Data 2:

Expected Result 2:
" "

Test Data 3:

Expected Result 3:
"Apple like I"

Test Data 4:

Expected Result 4:
"learn is nice to JavaScript"
*/
let s8 = "";
let s9 = " ";
let s10 = "I like Apple";
let s11 = "JavaScript is nice to learn";
function swapTheSent(str) {
  // let split = str.split(" ");
  // let first = split[0];
  // split[0] = split[split.length - 1];
  // split[split.length - 1] = first;
  // console.log(split.join(" "));
  let first = str.slice(0, str.indexOf(" "));
  let last = str.slice(str.lastIndexOf(" "));
  let middle = str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" "));
  console.log(last, middle, first);
}

// swapTheSent(s8);
// swapTheSent(s9);
// swapTheSent(s10);
// swapTheSent(s11);

/**
 * Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
*/
function tripleWord(str) {
  return str.repeat(3);
}
// console.log(tripleWord("Tech")); //-> "TechTechTech"
// console.log(tripleWord("Global")); //	-> "GlobalGlobalGlobal"

/**
 * Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns 
the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to 
Fahrenheit. 
    Multiply the Celsius temperature by 9.
    Divide the result by 5.
    Add 32 to the result.
 */
function celciusToFahrenheit(num1) {
  let convert = (num1 * 9) / 5 + 32;
  console.log(convert);
}

// celciusToFahrenheit(20); //-> 68
// celciusToFahrenheit(25); //-> 77
// celciusToFahrenheit(0); //-> 32
// celciusToFahrenheit(-10); //-> 14

/**
 * Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula:
Area: x * y
Perimeter 2 * (x + y)

Examples:
*/

function rectangleArea(x, y) {
  console.log(x * y);
}

function rectanglePerimeter(x, y) {
  console.log(2 * (x + y));
}
// rectangleArea(5, 4); //-> 20
// rectangleArea(3, 7); //-> 21
// rectangleArea(6, 10); //	-> 60

// rectanglePerimeter(5, 4); //	-> 18
// rectanglePerimeter(3, 7); //-> 20
// rectanglePerimeter(6, 10); //  -> 32

function squareArea(num) {
  return num * num;
}

function squarePerimeter(num) {
  return 4 * num;
}
squareArea(5); //-> 25
squareArea(3); //-> 9
squareArea(6); //-> 36

squarePerimeter(5); //	-> 20
squarePerimeter(3); //	-> 12
squarePerimeter(6); //	-> 24
