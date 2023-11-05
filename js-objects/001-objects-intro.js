const course = {
  batch: 8,
  numberOfStudents: 7,
  courseName: "Software Engeneer in Test",
};

// keys -> batch, numbersOfStudents, courseName;
//values -> 8, 7, "Software Engeneer in Test"
// key-value pairs = batch: 8, numberOfStudents:7 etc

///HOW TO GET All object info
console.log(course);

//HOW TO Acces properties info
console.log(course.courseName); // dot notation
console.log(course["courseName"]); // bracket notation

//Update a properties:
course.numberOfStudents = 15;
console.log(course["numberOfStudents"]);

course["numberOfStudents"] = 10;
console.log(course["numberOfStudents"]);

// How to add a property
course.address = "Chicago";
course.startDate = "January 2024";

// how to delete a property
delete course.numberOfStudents;
delete course["address"];
