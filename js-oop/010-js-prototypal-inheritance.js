/*
Create a class called as Animal
Create a constructor which takes 'name', 'age', 'color'
Create 2 functions eat(), run()
*/

function Animal(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

// Adding function to your proto
Animal.prototype.eat = function () {
  console.log(`${this.name}  eats`);
};
Animal.prototype.run = function () {
  return `${this.name} loves run around`;
};
// Cat constructor
function Cat(name, age, color, breed) {
  Animal.call(this, name, age, color); // inheriting properties of the animal prototype, this like as a Super
  this.breed = breed;
}
//Inherit all the properties and functipns from the Animal
Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.breed = function () {
  console.log("BREED");
};
Cat.prototype.play = function () {
  console.log("PLAY");
};
const cat1 = new Cat("Lily", 25, "white", "british");
console.log(cat1.run());
cat1.play();
