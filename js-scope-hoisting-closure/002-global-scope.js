//Globally declared arr
const fruits = ["Apple", "Orange", "Kiwi", "Pinapple", "Mango", "Melon"];

//Print Each elements to console
for (const fruit of fruits) {
  console.log(fruit);
}

//count how many elmnts has "apple"
let countApple = 0;

for (const f of fruits) {
  if (f.toLowerCase().includes("apple")) countApple++;
}

console.log(countApple);

function print() {
  console.log(fruits);
}
print();

var x = 10;
let y = 12;
const z = 14;

consoe.log(x);
consoe.log(y);
consoe.log(z);

//Accces them in the block
{
  consoe.log(x);
  consoe.log(y);
  consoe.log(z);
}

//Accces them in the function
function random() {
  consoe.log(x);
  consoe.log(y);
  consoe.log(z);
}
random()(
  //Accces them in the function ===> IIFE
  function () {
    consoe.log(x);
    consoe.log(y);
    consoe.log(z);
  }
)();
