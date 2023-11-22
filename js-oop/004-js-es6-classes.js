/**
 *
 *Class also known as a blueprint or template;
 Class is a blueprint from where many obj can be instantiated

 Object is an instance;

 */

class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  makeSound() {
    console.log(`${this.name} make sound "MEOW"`);
  }
  eat() {
    console.log(`${this.name} eat 3 times a day"`);
  }
  sleep() {
    console.log(`${this.name} sleep all day long )`);
  }
}

const cat1 = new Cat("Simba", "Orange", 1);
const cat2 = new Cat("Lucy", "White", 2);
const cat3 = new Cat("Oliver", "brown", 3);

const cats = [cat1, cat2, cat3];
cats.forEach((c) => {
  console.log(c);
  console.log(c.eat());
});
// cat1.makeSound();
// cat2.eat();
// cat3.sleep();

cats.filter((cat) => cat.age > 1).map((cat) => cat.name);
