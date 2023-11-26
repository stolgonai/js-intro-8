/**
 Login function:
 1.                   enter UserName and Password
 2.                     Validation will happen 
                true                            false
            Login                           password or login is incorrect
 */

function enterCred() {
  console.log("Credentials are entered!");
}
function validateCred(clFunction) {
  setTimeout(() => {
    console.log("Credentials are validate");
    clFunction();
  }, 7000);
}
function login() {
  console.log("You are loged in");
}
enterCred();
validateCred(() => login());
