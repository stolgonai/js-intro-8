const fruits = ["apple", "pear", "kiwi", "orange", "apple"];

//INCLUDES return bolean answer and it is case sencetive, important!

console.log(fruits.includes("apple"));

// check if the array has both "Kiwi" and "watermelon"

// check if array has grapes or strabery

console.log(fruits.indexOf("apple")); // return index of apple
console.log(fruits.lastIndexOf("kiwi")); // return index of kiwi, as a whole word

const num = [10, 20, 30];
// check if this arr contains el 20
// if it contains 20, print 20 is here, otherwise print 20 is not here
console.log(num.includes(20) ? `20 is here` : `20 is not here`);
