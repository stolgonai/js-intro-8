/*
Create a constructor called Car
and define 4 properties as below
year
make
model
price
Create and add 2 prototype function the Car prototype
drive -> {year make model} drives.
stop  -> {year make model} stops.
Create 3 car objects with belwo info
car1 -> 2023 Tesla X 80000
car2 -> 2022 BMW X7 60000
car3 -> 2020 Tesla Y 27000
1. Log each car info to the console
2. Execute drive and stop functions for each car
3. Get each cars price information in the format -> {year make model} is ${price}.
Example: 2023 Tesla X is $80000.
*/
// solution before es6
function Car(year, make, model, price) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.price = price;
}

Car.prototype.drive = function () {
  console.log(`${this.year}, ${this.make}, ${this.model} drives.`);
};

Car.prototype.stop = function () {
  console.log(`${this.year}, ${this.make}, ${this.model} stops.`);
};
Car.prototype.price = function () {
  console.log(`${this.year}, ${this.make}, ${this.model} is ${this.price}.`);
};

const car1 = new Car(2023, "Tesla", "X", 80000);
const car2 = new Car(2022, "BMW", "X7", 60000);
const car3 = new Car(2020, "Tesla", "Y", 27000);

const allcars = [car1, car2, car3];

allcars.forEach((car) => console.log(car));

for (const car of allcars) {
  console.log(car);
}
allcars.forEach((c) => {
  console.log(c);
  c.drive();
  c.stop();
  console.log(`${c.year} ${c.make} ${c.model} is ${c.price}`);
});
allcars.forEach((c) => c.stop());

//OLD VERSION
function Car(year, make, model, color, price) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.price = price;
}
Car.prototype.drive = function () {
  // it's code block
};

//ES6
class Car {
  constructor(year, make, model, color, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  drive() {
    console.log(`${this.year}, ${this.make}, ${this.model} drives.`);
  }
  stop() {
    console.log(`${this.year}, ${this.make}, ${this.model} stop.`);
  }
}
//function programming

// creating obj from Car class using its constructor
const car4 = new Car(2023, "Tesla", "X", 80000);
const car5 = new Car(2022, "BMW", "X7", 60000);
const car6 = new Car(2020, "Tesla", "Y", 27000);
