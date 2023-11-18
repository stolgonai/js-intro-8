// REDUCE

//reduce()
// reduceRight()\\

const numbers = [5, 10, 100];
// find sum
console.log(numbers.reduce((initialVal, currNum) => initialVal + currNum, 0));
//  count divisible by 10
console.log(
  numbers.reduce(
    (initialVal, currNum) => (currNum % 10 === 0 ? initialVal + 1 : initialVal),
    0
  )
);
//count even nums
console.log(
  numbers.reduce(
    (initialVal, currNum) => (currNum % 2 === 0 ? initialVal + 1 : initialVal),
    0
  )
);

// find maxNum
console.log(
  numbers.reduce((maxNum, currNum) => Math.max(maxNum, currNum), -Infinity)
);
// find minNum
console.log(
  numbers.reduce((minNum, currNum) => Math.min(minNum, currNum), +Infinity)
);

const fruits = ["Apple", "Orange", "Kiwi", "Pineapple", "Mango", "Melon"];
// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3
