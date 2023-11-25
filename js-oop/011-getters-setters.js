class Table {
  constructor(type, material, price) {
    this.type = type;
    this.material = material;
    this.price = price;
  }
}

const table1 = new Table("Office", "Wood", 200);

//accessing and updating table info without getters and setters
console.log(table1.type);
console.log(table1.material);
console.log(table1.price);

table1.price = 300;
console.log(table1.price);

class Chair {
  constructor(type, material, price) {
    this.type = type;
    this.material = material;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  setPrice(price) {
    if (price <= 0) throw new Error("Price cannot be zero or less!!!");
    this.price = price;
  }
}

const chair1 = new Chair("Office", "Wood", 200);
console.log(chair1.type);
console.log(chair1.material);
console.log(chair1.price);
console.log(chair1.getPrice());
chair1.setPrice(300);
chair1.setPrice(1);
console.log(chair1.getPrice());

//Private access

class IPhone {
  #brand = "IPhone";
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  setPrice(price) {
    if (price <= 0) throw new Error("Price cannot be zero or less!!!");
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  setBrand(brand) {
    this.#brand = brand;
  }
}

const iPhone15 = new IPhone("15", 1000);
console.log(iPhone15.getBrand());
// iPhone15.brand = "Samsung";
// console.log(iPhone15.brand);
