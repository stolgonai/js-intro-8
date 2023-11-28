/*
Go to https://www.techglobalschool.com/
Validate the main heading is "Looking to pursue a new career?"
*/

function goToURL() {
  setTimeout(() => {
    console.log("You are on TechGlobal Website");
  }, 5000);
}

function validateMainHeading() {
  const actualText = "Looking to pursue a new career?"; // You will learn how to get this later
  const expectedText = "Looking to pursue a new career?"; // Given in the requirements
  if (expectedText === actualText) console.log("Validation is SUCCESSFUL!");
  else console.log("Validation is FAILED!");
}

function test1() {
  goToURL();
  validateMainHeading();
}

test1();

/*
You are on TechGlobal Website
Validation is FAILED!
*/

// Fixing the issue with callback
function goToURL(callback) {
  setTimeout(() => {
    console.log("You are on TechGlobal Website");
    callback();
  }, 5000);
}

function validateMainHeading() {
  const actualText = ""; // You will learn how to get this later
  const expectedText = "Looking to pursue a new career?"; // Given in the requirements
  if (expectedText === actualText) console.log("Validation is SUCCESSFUL!");
  else console.log("Validation is FAILED!");
}

function test1() {
  goToURL(() => {
    validateMainHeading();
  });
}

test1();

// Fixing the issue with promises
function goToURL() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2)) resolve("URL is loaded!");
      else reject("Website is broken!");
    }, 2000);
  });
}

function validateMainHeading() {
  const actualText = "Looking to pursue a new career?"; // You will learn how to get this later
  const expectedText = "Looking to pursue a new career?"; // Given in the requirements
  if (expectedText === actualText) console.log("Validation is SUCCESSFUL!");
  else console.log("Validation is FAILED!");
}

function test1() {
  goToURL()
    .then((res) => {
      console.log(res);
      validateMainHeading();
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
}

test1();

// fixing the issue with asynch-await
function goToURL() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 2)) resolve("URL is loaded!");
      else reject("Website is broken!");
    }, 2000);
  });
}

function validateMainHeading() {
  const actualText = "Looking to pursue a new career?"; // You will learn how to get this later
  const expectedText = "Looking to pursue a new career?"; // Given in the requirements
  if (expectedText === actualText) console.log("Validation is SUCCESSFUL!");
  else console.log("Validation is FAILED!");
}

async function test1() {
  try {
    await goToURL();
    validateMainHeading();
  } catch (err) {
    console.log * ("Error: ", err);
  }
}

test1();

function goToCostco() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject();
    }, 2000);
  });
}

function getMeat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject("Could not get the meat, Costco was closed!");
    }, 1500);
  });
}

function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject("Cooking did not go well!");
    }, 3000);
  });
}

function serve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve();
      else reject();
    }, 1000);
  });
}

function eat() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) resolve("");
      else reject();
    }, 500);
  });
}

//
async function test() {
  try {
    await goToCostco();
    await getMeat();
    await cook();
    await serve();
    await eat();
    console.log("YAYYY - PARTY WAS GOOD!");
  } catch (err) {
    console.log(err);
  }
}

test();
