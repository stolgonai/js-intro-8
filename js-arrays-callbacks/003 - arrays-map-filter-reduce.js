// const numbers = [2, 5, 10, 7, 8, 1, 0];
// //*** using map MAP   -- > return an arr
// const numbersMultipliedBy3 = numbers.map((number) => number * 3);
// console.log(numbersMultipliedBy3); //--->  6, 15, 30, 21,  24,  3,  0]

// const numbersEvenOrOdd = numbers.map((num) => num % 2 === 0);
// console.log(numbersEvenOrOdd); //  [ true, false,  true, false, true, false,true]

// //***  FILTER  --- returns an arr

// const evenNums = numbers.filter((num) => num % 2 === 0);
// console.log(evenNums); //----> [ 2, 10, 8, 0 ]

// const oddNums = numbers.filter((num) => num % 2 !== 0);
// console.log(oddNums); //--->[ 5, 7, 1 ]

// const positiveNums = numbers.filter((num) => num > 0);
// console.log(positiveNums); //--->[ 2, 5, 10, 7, 8, 1 ]

// // *** REDUCE
// const sum = numbers.reduce((total, current) => {
//   // or total+=current, 0
//   total += current;
//   return total;
// }, 0);
// console.log(sum);
const numbers = [2, 5, 10, 7, 8, 1, 0];
const countEven = numbers.reduce(
  (counter, current) => (current % 2 === 0 ? counter + 1 : counter),
  0
);
console.log(countEven);
/**
 *
 map        -> you return a new arr as the having the same size with the original arr, but elemnts are replaced
filter      -> you return partial arr and the elemnts within that array matching a specific condition
reduce      -> visits each elmnts in a array and return a single result, takes 20r 3 components


 counting elements:
    // count evens                  -> 4
    // count odds                   ->3    
    //count divisible for nums..    ->1
    //count positive nums           ->6

Finfing specific elemnt:
    //find greater num              -> 10
    //find smallest num              -> 0

Accumulate elements:
    find sum of nums
    finnd product of num
    average of the nums


Filtering nums:
    even nums               =>[2,10,8,0]
    odd nums                =>[5,7,1]
    positive nums           =>[2,5,10,7,8,1]
    
!!! MAP()    
Change all the elements in a new ARr
    multiply each el by 3                          -> [6,15,30,21,24,3,0]
    true for even and false for odd and vs      -> [true,false,true,false,true,false,true]

 */
