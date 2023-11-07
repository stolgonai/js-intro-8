const car = {
  color: "red",
  year: 2023,
  make: "BMW",
  model: "X7",
};
//   let keysOfCar = Object.keys(car)
//   console.log(keysOfCar)
console.log("\n-------------------For of loop------------");
for (const el of Object.values(car)) {
  console.log(el);
}

console.log("\n-------------------Regular for loop------------");
for (let i = 0; i < Object.values(car); i++) {
  console.log(Object.values(car)[i]);
}

console.log("\n-------------------ForEach() method-----------");
Object.values(car).forEach((el) => console.log(el));

console.log("\n-------------------Key value pairs------------");
for (const pair of Object.entries(car)) {
  console.log(pair);
}

console.log("\n--------------ForEach() method with keyPair entries-----------");
Object.entries(car).forEach((entry) => console.log(entry));

console.log(
  "\n--For of loop with keyPair entries but separatley not in array--"
);
for (const [key, value] of Object.entries(car)) {
  console.log(key, value);
}
