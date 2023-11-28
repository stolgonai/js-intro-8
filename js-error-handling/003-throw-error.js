function getName(name) {
  if (name && typeof name === "string") console.log("Thanks! ", name);
  else throw new Error("That's not a name");
}

getName("Anna");
try {
  getName();
  getName(null);
  getName(123);
} catch (err) {
  console.log("Please provide a valid name");
} finally {
  console.log("This is finally: good night guys, topic is done!");
}
