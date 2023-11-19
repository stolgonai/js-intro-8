// Global scope was created before of ES6
//block scope is introduced with ES6
{
  var x = 10;
  let y = 12;
  const z = 14;
  console.log(x);
  console.log(y);
  console.log(z);
}

//Accces them outside the block
//var is not respect a scope, and will be reachable;
//let and const are respect the scope, and they are not reachable
console.log(x); // accessed
console.log(y); // Error - Reference Error
console.log(z); //Error - Reference Error

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
