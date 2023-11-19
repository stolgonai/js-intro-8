//Lexical scope is introduced es6
//we can discuss lexical scoope in case of having nested functions only

function a() {
  let name = "John";
  function b() {
    let age = 45;
  }
}

a();
