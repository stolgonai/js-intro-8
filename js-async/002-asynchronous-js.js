function print1() {
  console.log("1");
}
function print2() {
  settimeout(() => {
    console.log("2");
  }, 5000);
}
function print3() {
  console.log(3);
}
print1();
print2();
print3();
