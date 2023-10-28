// /*

// -- decrement
// ++ increment

// */

// let num = 5;
// num++; // increased by 1
// // result is num = 6

// let num2 = 3;
// num--;
// //result will be  decremented by 1 = 2

// // post increment vs pre-increment

// let a = 5;
// let b = 5;
// let x = a++; // this is post-increment
// let y = ++b; // pre=increment

// console.log(a, b, x, y);

let num1 = 1;
let num2 = 3;

num1 += ++num2; // 5
let num3 = --num1; //4
num3--; // 3
console.log(num1);
console.log(num2);
console.log(num3);

let num12 = 6;
let num23 = 4;

console.log(2 + 3 + "5");
let width = 5;
let height = 8;
// area and perimetr

console.log("perimeter = " + 2 * (width + height));
console.log("area = " + width * height);

let anualSalary = 120000;
let monthly = 12;
let week = 52;
let byWeekly = 26;

console.log("Every 12 monthly is " + anualSalary / monthly);
console.log("Every week is " + anualSalary / week);
console.log("Every by weekly is " + anualSalary / byWeekly);
