console.log("\n--------output an object with obj ad arr in it --------------");

const student = {
  firstName: "Alex",
  lastName: "Smith",
  hobbies: ["Soccer", "Watching movies"],
  exam_scores: {
    midterm: 60,
    final: 90,
  },
};
// console.log(student);

const hobbies = student.hobbies;

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);

console.log("\n--------Find an average of score --------------");

const scores = Object.values(student.exam_scores);
let sumOfScore = 0;
for (const score of scores) {
  sumOfScore += score;
}

console.log(`The average of score is ${sumOfScore / scores.length}`);

console.log("\n--------Create a book obj --------------");

const books = [
  {
    nameOfBook: "Amok",
    author: {
      firstName: "Stefan",
      lastName: "Zweig",
    },
    genre: "Novella",
  },
  {
    nameOfBook: "My Name Is Red",
    author: {
      firstName: "Orhan",
      lastName: "Pamuk",
    },
    genre: "Historical Novell",
  },
  {
    nameOfBook: 1984,
    author: {
      firstName: "George",
      lastName: "Orwell",
    },
    genre: "Dystipian Literature",
  },
];
// console.log(book);

console.log("\n--------find is A in first name --------------");
let countAInName = 0;

for (let i = 0; i < books.length; i++) {
  if (books[i].author.firstName.toLowerCase().includes("a")) countAInName++;
}
countAInName = 0;
for (const book of books) {
  if (book.author.firstName.toLowerCase().includes("a")) countAInName++;
}

console.log(countAInName);
