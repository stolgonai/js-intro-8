// regular function
function product(x, y) {
  return x * y;
}
// console.log(product(3, 5));
// console.log(product(3, 2));

// currying way

function multiply(x) {
  function inner(y) {
    return x * y;
  }
  return inner;
}
const myVar = multiply(2);
myVar(10);
console.log(myVar(2));
