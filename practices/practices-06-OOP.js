class Student {
  static numberOfStudents = 0;
  constructor(fName, lName, age, gender, className) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.gender = gender;
    this.className = className;
  }
}

class MathStudent extends Student {
  constructor(fName, lName, age, gender, className) {
    super(fName, lName, age, gender, className);
  }
}

class ScienceStudent extends Student {
  constructor(fName, lName, age, gender, className) {
    super(fName, lName, age, gender, className);
  }
}

const student1 = new MathStudent("John", "Doe", 23, "M", "Math");
const student2 = new MathStudent("Alex", "Smith", 30, "M", "Math");
const student3 = new MathStudent("Jane", "Doe", 17, "F", "Math");
const student4 = new ScienceStudent("James", "Morgan", 21, "M", "Science");

const students = [student1, student2, student3, student4];
// students.forEach((student) => console.log(student));
const maleStudents = students.filter((s) => s.gender === "M").length;
const femaleStudents = students.filter((s) => s.gender === "F").length;
const mathStudents = students.filter((s) => s.className === "Math").length;
const scienceStudents = students.filter(
  (s) => s.className === "Science"
).length;
const maleStud2 = students.reduce(
  (sum, s) => (s.gender === "M" ? sum + 1 : sum),
  0
);
// const youngestStudents;
// const averageAge;
let oldest = students[0];
for (const s of students) {
  if (s.age > student1.age) oldest = s;
}

const oldestStudent = students.reduce(
  (oldest, s) => (oldest.age > s.age ? oldest : s),
  students[0]
);
// console.log(oldestStudent);
const youngestStud = students.reduce(
  (youngest, s) => (youngest.age < s.age ? youngest : s),
  students[0]
);
// console.log(
//   `${youngestStud.fName} ${youngestStud.lName} is an youngest with the age ${youngestStud.age}`
// );
