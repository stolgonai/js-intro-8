//ES6
class Car {
  constructor(year, make, model, price) {
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

car4.drive();
console.log(car5.model);
console.log(car6.price);
