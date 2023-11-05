const person = {
  firstName: "Alex",
  lastName: "Smith",
  age: 30,
  phone: "312 000-0000",
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.phone);

for (const variable in person) {
  console.log(person[variable]);
}
