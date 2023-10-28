// Data types
//NOTE to check which type of datat is use a FUNCTION typeof
//Primitive data types: Not advanced data types. they can easy concatinate with each other
// like: console.log(My name is (name). And I am (age) years old)
// 1. STRING anything that store in single or double quote by default will be a string data type ny using spaces between them.
let city = "Chicago"; //string
let cityCode = "312"; //string
console.log(typeof city);

// 2. Number is anything written only in digits WITHOUT quotes
// NOTE numbers can be: ODD, EVEN, decimal. floating

let age = 10;

// console.log();

let fullName = "John Doe";
let favNumber = 7;
let isNum = 1;
// let dailyExpense = 65.75;
// console.log("The full name of the person is = " + fullName);
// console.log(favNumber);
// console.log(dailyExpense);
// console.log("My name is " + fullName);
// console.log("Favourite numbers is " + favNumber);
// console.log("And his daily expenses is " + dailyExpense);
console.log(isNum + "0");

// 3. boolean - or 1 0  or true and False

let isTodaySaturday = false;
let b1 = 5;
let isBigger = 5 > 1;

// 4. Undefined

// data type which is not assign or initialized into variable or it can be stored as an initianal value
// type of Undefined id "Undefined"

//  5. null undefined VS null = is used to state that the var does not point to any data or value
let var3 = null;
console.log(var3);
console.log(typeof var3); //==> object
console.log(typeof null); //==> object

// 6. BigInt bigint (n) => at the end

// let number1 = 987639876543456789; ///1234567898765432  wrong way BigInt("nums")
// console.log(number1);
let number1 = 987639876543456789n; ///1234567898765432
console.log(number1);
console.log(typeof number1);

let number2 = BigInt("98765432345678987");
console.log(number2);

let maxSafeNumber = Number.MAX_SAFE_INTEGER;
let minSafeNumber = Number.MIN_SAFE_INTEGER;
console.log(maxSafeNumber, minSafeNumber);

// NON Primitive or REFERENCE data types

// -dates, arrays, objects, collections etc
/*
Create different variables to store below information

address = 'Chicago, IL'
age = 25
isWeatherNiceToday = true
price = 10.25

Print all the variables above with proper messages
Find and output all the variables types using typeof
*/

let address = "Chicago, IL";
let age1 = 25;
let isWeatherNiceToday = true;
let price = 10.25;
console.log(
  "Today in " +
    address +
    " all adults at age " +
    age1 +
    " baught most of Tesla obligations" +
    " and that news is " +
    isWeatherNiceToday
);

// console.log(typeof isWeatherNiceToday);
// console.log(typeof age1);
// console.log(typeof price);
// console.log(typeof address);

// Array - refference data type
// syntax is value is in  [], inside use string val with coma,
const numbers = [1, 2, 5, 7];
let numAtInd2 = numbers[2];

/* when to create a separate variable?


*/
