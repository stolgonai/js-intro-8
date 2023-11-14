const arr = [-5, 0, 5, 10, 23, -10];
console.log("\n--------------Filter arr with positve nums only --------------");
const positiveNum = arr.filter((num) => num > 0);
console.log(positiveNum);

console.log("\n----------Find even num --------------");
console.log(
  arr.filter((num) => {
    if (num % 2 === 0) return num;
  })
);
console.log("\n----------Find odd num --------------");
console.log(arr.filter((num) => num % 2 !== 0));

console.log("\n----------Replace negative with 0 --------------");
const replaced = arr.map((num) => (num < 0 ? 0 : num));
console.log(replaced);

//second option
const replaced2 = [];
for (const num of arr) {
  if (num < 0) replaced2.push(0);
  else replaced2.push(num);
}
console.log(replaced2);

console.log("\n----------FRUITS --------------");
const fruits = ["Apple", "Orange", "Kiwi", "Pineapple", "Mango", "Melon"];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]

const startsWithM = fruits.filter((fruit) =>
  fruit.toUpperCase().startsWith("M")
);
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
const hasApple = fruits.filter((f) => f.toLowerCase().includes("apple"));

// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
const hasLength5 = fruits.filter((f) => f.length === 5);

// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
const hasLengthDiffThan5 = fruits.filter((f) => f.length !== 5);

// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
const hasEOrO = fruits.filter(
  (f) => f.toLowerCase().includes("e") || f.toLowerCase().includes("o")
);
console.log(fruits.filter((f) => f.toLowerCase().endsWith("e")).length);
console.log(startsWithM);
console.log(hasApple);
console.log(hasLength5);
console.log(hasLengthDiffThan5);
console.log(hasEOrO);

const firstLastLetter = fruits.map((f) => `${f[0]}${f[f.length - 1]}`);
const firstLastLetter2 = fruits.map((f) =>
  f.length > 1 ? `${f[0]}${f[f.length - 1]}` : f
);
console.log(firstLastLetter);
console.log(firstLastLetter2);
