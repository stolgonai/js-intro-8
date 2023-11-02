let school = "TechGlobal";
for (let i = 0; i < school.length; i++) {
  console.log(school[i]);
}

let counter = 0;
for (let i = 0; i < school.length; i++) {
  if (school[i].toLowerCase() === "l") counter++;
}
console.log(counter);

let str = "Apple Pineapple";
let countP = 0;
for (let i = 0; i <= str.length - 1; i++) {
  if (str[i].toLowerCase() === "p") countP++;
}
console.log(`Counter of "P" is equal = ${countP} `);

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log(i, "FizzBuzz");
  else if (i % 3 === 0) console.log(i, "Fizz");
  else if (i % 5 == 0) console.log(i, "Buzz");
  else console.log(i);
}

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

let i = 1;
let countEven = 0;
while (i <= 10) {
  if (i % 2 === 0) countEven++;
  i++;
}
console.log(countEven);
