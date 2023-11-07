const car = {
  color: "red",
  year: 2023,
  make: "BMW",
  model: "X7",
};
console.log(car);

car.color = "black";
//car["color"] = "black"

for (let detail in car) {
  console.log(car[detail]);
}
