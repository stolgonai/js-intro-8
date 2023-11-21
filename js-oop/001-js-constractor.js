// create an obj

// const student1 = {
//   fName: "John",
//   lName: "Doe",
//   age: 25,
// };
// const student2 = {
//   fName: "Jane",
//   lName: "Doe",
//   age: 23,
// };
// const student3 = {
//   fName: "Alex",
//   lName: "Smith",
//   age: 25,
// };
// const student4 = {
//   fName: "Morgan",
//   lName: "Smith",
//   age: 19,
// study: function (){

// }
// };

//create a template and use it to create many obj

//Constractor is a special function, that allows you to create many similar objects
// constractor - prototype/blueprint
function Student(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
}

// Adding function to your proto
Student.prototype.study = function () {
  console.log(`${this.fName} ${this.lName} studies`);
};
Student.prototype.getFullName = function () {
  return `${this.fName} ${this.lName}`;
};

Student.prototype.getAge = function () {
  console.log(`${this.getFullName()}'s age is ${this.age}`);
};

const student1 = new Student("John", "Doe", 25);
const student2 = new Student("Jane", "Doe", 23);
const student3 = new Student("Alex", "Smith", 30);
const student4 = new Student("Morgan", "Smith", 19);
const student5 = new Student("James", "Smith", 35);
student2.getAge();
student4.getAge();

// console.log(student1);

function Teacher(fName, lName, age, field) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.field = field;
}
const teacher1 = new Teacher("Anna", "Levik", 36, "Math");
const teacher2 = new Teacher("Patric", "Nova", 28, "Social Studies");
const teacher3 = new Teacher("Mary", "Bobbins", 30, "Athletic class");
// console.log(teacher1);
// console.log(teacher2);
// console.log(teacher3);
student1.study();
