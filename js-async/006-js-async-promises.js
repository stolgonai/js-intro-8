//syntax of Promise
const myPromise = new Promise((resolve, reject) => {
  resolve("Fullfilled! | Successfull");
  reject("Error | Failed");
});
console.log(myPromise);

const promiseAge = new Promise((resolve, reject) => {
  const age = Math.floor(Math.random() * 30);
  console.log("Age is = ", age);
  if (age >= 16) {
    resolve();
  } else reject();
});

promiseAge
  .then(() => {
    //Success body
    console.log("Age is allowed");
  })
  .catch(() => {
    //Failure body
    console.log("Error: The age is not allowed!");
  });

//returniing promises in a function
function testAge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = Math.floor(Math.random() * 30);
      console.log("Age is = ", age);
      if (age >= 16) {
        resolve();
      } else reject();
    }, 5000);
  });
}
testAge()
  .then(() => {
    //success code
    console.log("You can get DL with an exam");
  })
  .catch(() => {
    //Failure message
    console.log("You can not get a DL");
  });
//   example
// login(username, password)
//   .then(() => {
//     //update my profile
//   })
//   .catch(() => {
//     console.log("There is an issue!");
//   });

//A login promise
function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "TechGlobal") {
        if (password === "Test1234") {
          resolve();
        } else reject("invalid-password");
      } else reject("invalid-username");
    }, 3000);
  });
}
login("TechGlobal", "Test1234")
  .then(() => {
    console.log("You are logged in!");
  })
  .catch((err) => {
    if (err === "invalid-username") {
      console.log("Invalid Username");
    } else console.log("invalid Password entered");
  });
