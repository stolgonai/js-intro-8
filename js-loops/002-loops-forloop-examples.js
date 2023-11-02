for (let i = 5; i <= 25; i++) {
  //   console.log(i);
}

//

for (let i = 15; i >= 1; i--) {
  //   console.log(i);
}

//

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

//

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) console.log(i);
}

///

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);
//

let sum1 = 0;
for (let i = 10; i <= 15; i++) {
  sum1 += i;
}
console.log(sum1);

//

const random = Math.floor(Math.random() * 11 + 10);

for (let i = 1; i <= random; i++) {
  if (i % 2 !== 0) console.log(i);
}

const r1 = Math.ceil(Math.random() * 10);
const r2 = Math.ceil(Math.random() * 10);

for (let i = Math.min(r1, r2); i <= Math.max(r1, r2); i++) {
  console.log(i);
}
