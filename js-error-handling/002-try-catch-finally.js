try {
  const pi = 3.14;
  pi = 2;
  console.log(pi);
} catch (err) {
  console.log("===An Error Ocurred");
}

try {
  console.log("Hello World!");
} catch (err) {
  console.log("===Error Ocured");
}

try {
  // this will try to run
} catch (error) {
  // this will run only if there is an Error
} finally {
  // this will run regardless of error occurance
}
