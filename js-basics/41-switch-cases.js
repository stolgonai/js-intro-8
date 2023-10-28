/**
 * print the day based on a random number
 *
 */
// let day = Math.floor(Math.random() * 7);
// console.log(day, "this is Day");

// if (day === 0) console.log("Sunday");
// else if (day === 1) console.log("Monday");
// else if (day === 2) console.log("Tuesday");
// else if (day === 3) console.log("Wednesday");
// else if (day === 4) console.log("Thursday");
// else if (day === 5) console.log("Friday");
// else if (day === 6) console.log("Saturday");
// else throw new Error(`${day} is not appears, check your number`);

// Switch methods
// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//     defaults: throw new Error(`${day} is not appear`);
// }
// Switch vs if-else if -else

// if (randomDay === 0 || randomDay === 6) console.log("Weekend");
// else console.log("Weekday");

let day = Math.floor(Math.random() * 7);
console.log(day);
switch (day) {
  case 0:
    console.log("Weekend");
    break;
  case 6:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}
// Important other way of swithc
switch (true) {
  case day === 0 || day === 6:
    console.log("Weekend");
    break;
  default:
    console.log("weekday");
}

// if (age >= 56) console.log("Senior");
// else if (age <= 20) console.log("Young");
// else console.log("Adult");
let age = Math.floor(Math.random() * 100);
console.log(`The age randomly generated is ${age}`);

switch (true) {
  case age <= 20:
    console.log("Young");
    break;
  case age <= 55:
    console.log("Adult");
    break;
  default:
    console.log("Senior");
}
