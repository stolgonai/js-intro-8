const student = {
  fullName: "John Doe",
  age: 18,
  course: "Software Engeneering",
};

// all results come as a an array
// Object.keys(obj) ---->  [fullName, age, course]
// Object.values(obj) -----> [John Doe, 18, Software Engeneering]
// Object.entries(obj) -------> [[fullName: "John Doe"], [age: 18],[course: "Software Engeneering"]]

const country = {
  name: "Germany",
  capital: "Berlin",
  population: 83000000,
};
console.log(Object.keys(country));
console.log(Object.values(country));
console.log(Object.entries(country));
