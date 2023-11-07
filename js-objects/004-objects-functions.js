const person = {
  fName: "John",
  lName: "Doe",
  dateOfBirth: 1790,
  isAlive: false,
  fullName: function (fName, lName) {
    return this.fName + " " + this.lName;
  },
  info: function () {
    return `${this.fullName()} was born in ${this.dateOfBirth}`;
  },
  //   info: function () {
  //     return `${this.fName} ${this.lName} was born in ${this.dateOfBirth}`;
  //   },
};

console.log(person.info());
