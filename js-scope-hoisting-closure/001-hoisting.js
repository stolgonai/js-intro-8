// Check if you can access before
console.log(x); // will give you undefined, it can reach only variable, but not value

//Globally declared and assigned 3 vars
var x = 10;
let y = 11;
const z = 12;

// Check if you can access after
/** This is Hoisting
 * JS move declaration of the vars created withh var to the top of the file, but not the val
 * var x;
 *
 * x=x10
 *
 * if you try totretrieve a  var before assignment you will get undefined instead of ReferenceError;
 *
 */
console.log(x);

// console.log(yy) ///es error Reference error: cannot access before initialixation
let yy = 11;
let zz = 12;

//Regular function, has option to be hpoisted;
function funcA() {
  console.log("This is function A");
}

//function declaration
const funcB = function () {
  console.log("This is function B");
};

//function arrow
const funcC = () => {
  "This is function C";
};
//Invoking function
funcA();
funcB();
funcC();
