//REST Paramenter is ...args or ...nums or ...elmnts it gives you option to work with any number of arguments
// ...args usualy come as an array
function sum(...args) {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
}
console.log(sum());
console.log(sum(5));
console.log(sum(5, 2));
console.log(sum(3, 5, 2));
console.log(sum(7, 3, 5, 2));
console.log(sum(1, 7, 3, 5, 2));
