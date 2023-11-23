// Create a Person constructor
function Person() {}
Person.prototype.eat = function () {
  console.log("EAT");
};
Person.prototype.sleep = function () {
  console.log("SLEEP");
};
Person.prototype.walk = function () {
  console.log("WALK");
};
// Programmer constructor
function Programmer() {}
//Inherit all the properties and functipns from the Person
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.code = function () {
  console.log("CODE");
};
const programmer1 = new Programmer("John Doe", 45);
programmer1.code();
programmer1.eat();
programmer1.walk();
programmer1.sleep();

// Message general
