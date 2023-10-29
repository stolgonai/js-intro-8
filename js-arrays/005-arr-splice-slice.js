// Slice method
const arr1 = [100, 200, 500, 300, 400];

console.log(arr1.slice(0, 2));
console.log(arr1.slice(1, 4));
console.log(arr1.slice(2));
console.log(arr1);

// splice adding and removing, syntax of args: 1-define position to remove or add, how many args removed, and 3  what to add

// / splice() method
const fruits = ["Kiwi", "Apple"];
fruits.splice(1, 0, "Orange");
console.log(fruits); // [ 'Kiwi', 'Orange', 'Apple' ]
// Add 'Cherry', 'Banana' and 'Pineapple' between 'Orange' and 'Apple'
fruits.splice(2, 0, "Cherry", "Banana", "Pineapple");
console.log(fruits); // [ 'Kiwi', 'Orange', 'Cherry', 'Banana', 'Pineapple', 'Apple' ]
// Remove 'Banana' and 'Pineapple'
fruits.splice(3, 2);
console.log(fruits); // [ 'Kiwi', 'Orange', 'Cherry', 'Apple' ]
// Replace 'Cherry' with 'Watermelon' and 'Grapes'
fruits.splice(2, 1, "Watermelon", "Grapes");
console.log(fruits); // [ 'Kiwi', 'Orange', 'Watermelon', 'Grapes', 'Apple' ]
// Remove 'Orange' and 'Grapes'

console.log(fruits.splice(1, 1));
console.log(fruits.splice(2, 1));
console.log(fruits);
