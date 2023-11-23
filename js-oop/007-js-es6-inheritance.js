// ES6 inheritance
//parent file
class Person {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }
  eat() {
    console.log("EAT");
  }
  walk() {
    console.log("WALK");
  }
  sleep() {
    console.log("SLEEP");
  }
}
//inherit all the person properties and functions to singer
class Singer extends Person {
  constructor(fullName, age, groupName) {
    super(fullName, age);
    this.groupName = groupName;
  }
  sing() {
    console.log("SING");
  }
}
class Programmer extends Person {
  constructor(fullName, age, company) {
    super(fullName, age);
    this.company = company;
  }
  code() {
    console.log("CODE");
  }
}
