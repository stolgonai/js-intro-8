const users = [
  {
    firstName: "Tech",
    lastName: "Global",
    email: "tech.global@techglobal.com",
    age: 3,
    address: {
      street_line_1: "2800 S River Rd",
      street_line_2: "Suite 310",
      city: "Des Plaines",
      state: "IL",
      zip: "60018",
    },
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    age: 47,
    address: {
      street_line_1: "123 Abc St",
      street_line_2: "",
      city: "Chicago",
      state: "IL",
      zip: "12345",
    },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    age: 30,
    address: {
      street_line_1: "123 Abc St",
      street_line_2: "",
      city: "Chicago",
      state: "IL",
      zip: "12345",
    },
  },
  {
    firstName: "Alex",
    lastName: "Smith",
    email: "alexsmith@outlook.com",
    age: 32,
    address: {
      street_line_1: "456 Xyz St",
      street_line_2: "",
      city: "Miami",
      state: "Florida",
      zip: "67890",
    },
  },
];
console.log("\n----------count age greater then 35-------------");
let countAgeGreater35 = 0;
let usersName = [];
let sumOfAges = 0;

for (const user of users) {
  sumOfAges += user.age;
  //   console.log(user.age);
  if (user.age < 35) {
    countAgeGreater35++;
    usersName.push(user.firstName);
  }
}

console.log(`The average is ${sumOfAges / users.length}`);

console.log(usersName);

console.log(countAgeGreater35);

console.log("\n----------count user's city is Chicago-------------");
let countLivingInChicago = 0;
for (const user of users) {
  if (user.address.city.toLowerCase() === "chicago") countLivingInChicago++;
}
console.log(countLivingInChicago);
