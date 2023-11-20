//spread operators with arrays
const numbers = [1, 2, 3];

//create a new arr, that stores 1,2,3,4,5,6 - merging arrays

const newArr = [...numbers, 4, 5, 6];
console.log(newArr);

// spread numbers to individual args

//SPREAD OPERATOR WITH OBJ
const table1 = {
  use: "dining",
  material: "wood",
};
const table2 = {
  //   use: "dining",
  //   material: "wood", //instead of this way, use spread operator:
  ...table1,
};
const table3 = {
  //   use: "dining",
  //   material: "wood",
  ...table1,
  isExtandable: true,
};
const table4 = {
  //   use: "dining",
  //   material: "wood",
  //   isExtandable: true,
  ...table3,
  shape: "round",
};

console.log(table1);
console.log(table2);
console.log(table3);
console.log(table4);
