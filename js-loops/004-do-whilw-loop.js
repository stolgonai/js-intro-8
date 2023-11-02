let i = 1;
while (i <= 3) {
  console.log("While loop | Hello World");
  i++;
}
let j = 1;
do {
  console.log("DO While loop | Hello World");
} while (j <= 3);

///

let attempt = 0;
let randomNum;
do {
  randomNum = Math.floor(Math.random() * 10) + 1;
  attempt++;
} while (randomNum % 2 !== 0);
console.log(attempt, randomNum);

///

let random;
let countAttempt = 0;

do {
  random = Math.floor(Math.random() * 10) + 1;
  countAttempt++;
} while (random !== 7);
console.log(`${countAttempt} was to generate number 7`);

///
