/**
 * 
 
 */
((3 == "3" || 2 + 5 === "7") &&
  !(5 < 10 || !false)(
    // false
    //true     t    f           f   f     t    t    t
    !true && !false
  )) ||
  5 * 2 === true * 10; // true
//     f           t        t
"3" * "5" >= 15 && true == 1 && "   " == false && "" === 0;
!(5 ** (10 / 5) === 25 || 5 === "5" || 3 >= 5);
!(2 + 2 === 8 / 2 && !false && 10 % 2 === 0) ||
  25 % 4 == "1"(true && false) ||
  (10 + 5 === "15" && "apple" !== "orange");
(!(10 <= 20 && 3 * 2 === "6") &&
  (5 + 5 !== 11 || false)("Hello" + "World" === "HelloWorld" || 5 > 3) &&
  (true && !false)(4 >= 3 && 5 * 2 === "10")) ||
  !(7 !== "7" && "dog" === "cat")(20 % 6 !== 0 && "apple" === "orange") ||
  (!(2 + 2 === 4 && true)(!true && !false) &&
    ("car" === "vehicle" || 3 ** 2 <= 10)(5 + 3 >= "8" && 2 ** 3 === "8")) ||
  (!(false || true)(10 / 2 === 5 || "hello" + "world" === "helloworld") &&
    (5 === "5" || true)(
      "hello" !== "world" && "apple" + "pie" === "applepie"
    )) ||
  ((5 + 5 !== "10" && 7 % 2 === 0)(5 * 2 === 9 || true) &&
    !(10 - 5 !== 5 && 10 % 3 === 1));

//
/**
 * Write a program that generates a random number between 1 and 10 (both inclusive). 
If the random number is even, print true. 
Otherwise, print false. 
 
Examples: 
1   -> false 
2   -> true 
5   -> false 
10   -> true
 */

let random = Math.floor(Math.random() * 11);
console.log(random % 2 === 0);

let random1 = Math.floor(Math.random() * 11);
console.log(random % 2 !== 0);

let randomWithNeg = Math.floor(Math.random() * 6);

/**
 * Write a function named as middle() which takes a string word as an argument and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples: 
middle("Tech") middle("Global") middle("abcde") middle("1") middle("abc") middle(“1234”)
-> "ec" -> "ob" -> "c" -> "1" -> "b" -> "23"
 */
function middle(str) {
  if (str.length === 0 || str === undefined) return " ";
  if (str.length % 2 !== 0) return str[Math.floor(str.length / 2)];
  else
    return str.slice(
      Math.floor(str.length / 2) - 1,
      Math.floor(str.length / 2) + 1
    );
}
console.log(middle("Tech"));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));
// -> "ec" -> "ob" -> "c" -> "1" -> "b" -> "23"
console.log("AOEUI".includes("E"));
x;
