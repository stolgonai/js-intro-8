const { appUrl, login, username, password } = require("./amaxonGlobalInfo");

console.log(username);
console.log(password);
console.log(appUrl);

login(username, password);

/*
Test1:
Go to amazon.com
login with username and password
validate you can purchase a product*/
