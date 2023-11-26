function takeDlExam() {
  console.log("Joining Exam");
}

function testAge(callBackSucces, callBackFail) {
  setTimeout(() => {
    const age = Math.floor(Math.random() * 30);
    console.log("Age is = ", age);
    if (age >= 16) {
      callBackSucces();
    } else callBackFail();
  }, 2000);
}

testAge(
  () => {
    takeDlExam();
  },
  () => {
    console.log("Error: You can not joinung to the exam!");
  }
);
