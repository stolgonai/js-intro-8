/*
Find how many students are male                             -> 3
Find how many students are female                           -> 1
Find how many students are taking the Math                  -> 3
Find how many students are taking the Science               -> 1
Find the oldest student                                     -> Alex Smith is oldest with the age of 30.
Find the youngest student                                   -> Jane Doe is youngest with the age of 17. REDUCE
Find the average age of the students                        -> 91/4 REDUCE
Find and return the fullname of students who take Math      -> ['John Doe', 'Alex Smith', 'Jane Doe'] FILTER and MAP
Find and return the fname of students who are male          -> ['John', 'Alex', 'James'] FILTER and MAP
Find and return the lname of students who are older than 20 -> ['Doe', 'Smith' 'Morgan'] FILTER and MAP
*/
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

const average =
  students.reduce((sumOfAge, age) => {
    return sumOfAge + age.age;
  }, 0) / students.length;
console.log(average, "average of students");

const allMathStudents = students.reduce((result, stud) => {
  if (stud.className === "Math") result.push(`${stud.fName} ${stud.lName}`);
  return result;
}, []);
console.log("These are all Math students", allMathStudents);
const allMaleStudents = students.reduce((result, stud) => {
  if (stud.gender === "M") result.push(`${stud.fName} ${stud.lName}`);
  return result;
}, []);
console.log("These are all male students", allMaleStudents);
const studOlder20 = students.reduce((result, stud) => {
  if (stud.age > 20) result.push(`${stud.lName}`);
  return result;
}, []);
console.log("These are all students older 20", studOlder20);
