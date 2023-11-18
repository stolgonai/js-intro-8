// binding

console.log(this);
// Note: you might get different values
// For example on client sidde code you migh get: Window Object

//Implicit binding
let person = {
  name: "Alex",
  greet: function () {
    console.log(`Hi, ${this.name}`);
  },
};

person.greet();

//Explicite binding
function greet() {
  console.log(this); // Global OBject
  console.log(`Hi, ${this.name}`); /// it doesnot have a name
}
let person2 = {
  name: "Alex",
};
// greet();

//CAL()-----------------------

greet.call(person2);

//Example to .call()
const student = { name: "Alex" };
const teacher = { name: "Hasan" };
const client = { name: "Joe" };
function welcome() {
  console.log(`Welcome, ${this.name}`);
}
welcome.call(student);
welcome.call(teacher);
welcome.call(client);

//Example 2 with .call PAssing arg to .call()
const jane = { age: 20 };
function sayHi(name) {
  console.log(`Hi, ${name}. And your age is ${this.age}`);
}
sayHi.call(jane, "Jane"); // first arg is obj, second just a str

//If you do not want to use obj as an arg:
function sayHi2(name) {
  console.log(`Hi, ${name}. `);
}
sayHi2.call(null, "Jane"); // first arg is obj, second just a str

// .APLLLY() ------------------------
//Without arg .call and.apply works the same

const user = { name: "Alex" };
function welcomeUser() {
  console.log(`Welcome, ${this.name}`);
}
welcome.call(user);
welcome.apply(user);

//with arg .aplly takes an array
function welcomeUser(name, city) {
  console.log(`Welcome, ${name} and your city is ${city}`);
}
welcomeUser.call(null, "Alex", "Chicago");
welcomeUser.apply(null, ["Jane", "LA"]);

//BIND -----------------------------------
//Similar to .call and .apply
//only difference is it returns a function, that you can use or call later

const user2 = {
  name: "Alan",
  age: 20,
  hobbies: ["running", "reading", "hiking"],
  greet() {
    console.log(this);
    console.log(`Hi, ${this.name}`);
    this.hobbies.forEach(() => console.log(this));
  },
};
user2.greet();
/**{
  name: 'Alan', ///user
  age: 20,
  hobbies: [ 'running', 'reading', 'hiking' ],
  greet: [Function: greet]
}
 */
//regular functions has its own "this"
