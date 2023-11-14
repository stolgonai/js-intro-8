const name = ["John", "Jane", "Alex"];

console.log("\n----Create a new arr, with the length of each name ---");

const nameLength = name.map((name) => name.length);
console.log(nameLength);

// first solution
console.log("\n----Create a new arr, with each name stored with it index ---");
const indexedNameObj = name.map((name, index) => {
  const obj = {};
  obj.index = index;
  obj.value = name;
  return obj;
});
console.log(indexedNameObj);

//second solution
const result = name.reduce((arr, name, index) => {
  arr.push({ index: index, name: name });
  return arr;
}, []);
console.log(result);
