/**
 * game club
 *
 */

let name = "ane";
// function isMatchName(name) {
//   if (name[0] === "J") {
//     console.log("You can join to the club");
//   } else {
//     console.log("Sorry! You are out");
//   }
// }
// let result =
// name[0].toUpperCase() === "J"
//   ? console.log("You can join to the club")
//   : console.log("Sorry! You are out");
// isMatchName("Matt");
// isMatchName("John");
// isMatchName("");
// console.log(
//   name[0].toUpperCase() === "J"
//     ? console.log("You can join to the club")
//     : console.log("Sorry! You are out")
// );

/**
 * naming baby
 *
 */
let boyName = "Sam";
let girlName = "Julie";
let gender = "";
let result = gender === "F" ? girlName : boyName;

let randomNum = Math.floor(Math.random() * 11) - 5;
// console.log(randomNum, "random");
// IMPORTANT
let result1 = randomNum > 0 ? "POSITIVE" : randomNum < 0 ? "NEGATIVE" : "ZERO";

// console.log(result1);
function startsE(str) {
  let result = str.toUpperCase().startsWith("E")
    ? true
    : str === ""
    ? " "
    : false;
  return result;
}
// startsE("Emily");
// startsE("emily");
// startsE("Alex");
// startsE("");

function fooBar(num) {
  //   if (num % 5 === 0 && num % 7 === 0) {
  //     return "foobar";
  //   } else if (num % 7 === 0) {
  //     return "bar";
  //   } else if (num % 5 === 0) {
  //     return "foo";
  //   } else {
  //     return num;
  //   }
  let result =
    num % 5 === 0 && num % 7 === 0
      ? "foobar"
      : num % 7 === 0
      ? "bar"
      : num % 5 === 0
      ? "foo"
      : "not a number";
  return result;
}

// console.log(fooBar(35));
// console.log(fooBar(5));
// console.log(fooBar(28));
// console.log(fooBar());

/**
 *  let result =
    num % 5 === 0
      ? "foo"
      : num % 7 === 0
      ? "bar"
      : num % 5 === 0 || num % 7 === 0
      ? "foobar"
      : num;
 */

function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  else return "F";
  //   if (score >= 90) {
  //     return "A";
  //   } else if (score >= 80 && score <= 89) {
  //     return "B";
  //   } else if (score >= 70 && score <= 79) {
  //     return "C";
  //   } else if (score >= 60 && score <= 69) {
  //     return "D";
  //   } else {
  //     return "F";
  //   }
}
console.log(getGrade(90));
console.log(getGrade(89));
console.log(getGrade(80));
console.log(getGrade(79));
console.log(getGrade(70));
console.log(getGrade(69));
console.log(getGrade(60));
console.log(getGrade(59));
