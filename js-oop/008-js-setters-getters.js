class Phone {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  calls() {
    console.log("CALL");
  }
}

const phone1 = new Phone("iPhone, 1000");
const phone2 = new Phone("Samsung, 800");
