//Statikc properties and functions
//static propertie and functions are accesses with class names
// they do not belong to Object

//All the Math methods that we used were statick info
Math.max();
Math.random();
//Static properrtie
console.log(Math.PI);
console.log(Number.MIN_VALUE);

class Computer {
  //non-static
  brand = "Apple";
  //all methods that wea are created non static, and they are belongs to OBject
  run() {
    console.log("RUN FUNCTION");
  }
  //static belong to class
  static info = "SECRET INFO";
  static open() {
    console.log("OPEN FUNCTION");
  }
}

// whatever belongs to Object you can access them
const c1 = new Computer();
console.log(c1.brand); //"APPLE"
c1.run();
Computer.open();
console.log(c1.info);
console.log(Computer.info);

class Person {
  static hasEyes = true;
  constructor(name, address, gender) {
    // these are info vary from person to person
    this.name = name;
    this.address = address;
    this.gender = gender;
  }
  walk() {
    console.log("Non Static");
  }
  static breath() {
    console.log(" Static information");
  }
}

const ayca = new Person("Ayca", "AL", "Female");
const suzanne = new Person("Suzanne", "IL", "Female");
const dylan = new Person("Dylan", "IA", "Male");
console.log(ayca.name);
console.log(Person.hasEyes);
