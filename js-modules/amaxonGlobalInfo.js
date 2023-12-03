//properties info
module.exports.username = "johndoeX";
module.exports.password = "test1234";
module.exports.appUrl = "www.amazon.com";

// finctions
module.exports.login = (username, password) => {
  console.log(`This will login with ${username} and ${password}`);
};

class ExpectedText {
  static title = "Spend less. Smile more.";
  static searchPlaceHolder = "Search Amazon";
}
module.exports.ExpectedText = ExpectedText;
