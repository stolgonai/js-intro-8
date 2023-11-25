/*
Create a class called as Animal
Create a constructor which takes 'name', 'age', 'color'
Create 2 functions eat(), run()
*/
class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
  eat() {
    console.log("EAT");
  }
  run() {
    console.log("RUN");
  }
}

/*
Create a class called as Cat and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function play()
*/
class Cat extends Animal {
  constructor(name, age, color, breed) {
    super(name, age, color);
    this.breed = breed;
  }
  play() {
    console.log("Play");
  }
}

/*
Create a class called as Dog and inherit all the Animal class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed'
Create 1 function catch()
*/
class Dog extends Animal {
  constructor(name, age, color, breed) {
    super(name, age, color, breed);
  }
  catch() {
    console.log("CATCH");
  }
}
/*
Create a class called as Husky and inherit all the Dog class properties and methods
Create a constructor which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 function protect()
*/
class Husky extends Dog {
  constructor(name, age, color, breed, shed) {
    super(name, age, color, breed);
    this.shed = shed;
  }
  protect() {
    console.log("PROTECT");
  }
}
const cat = new Cat("Lily", 2, "grey", "british");
const dog = new Dog("Doggy", 5, "white", "mops");
const husky = new Husky("Husky", 1, "whit-grey", "husky", "long");
cat.play();
cat.run();
dog.catch();
husky.protect();
