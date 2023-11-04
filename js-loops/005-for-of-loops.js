const names = ["John", "Jane", "Alex", "Max"];

// output all these names once a time ---> separate lines, use regular console.log
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// for (let i = 0; i <= names.length - 1; i++) {
//   console.log(names[i]);
// }

// for (let name of names) {
//   console.log(name);
// }

for (let name of names) {
  console.log(name.toUpperCase());
}
let counter = 0;
for (let name of names) {
  if (name.startsWith("J")) counter++;
}
console.log(counter);
