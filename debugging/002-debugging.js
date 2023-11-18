//run this code in debugging mode

function findLargestNum(nums) {
  let largest = 0;
  for (let i = 0; i <= nums.length; i++) {
    const num = nums[i];
    debugger;
    if (num > largest) largest = num;
  }
  return largest;
}

const numbers = [8, 9, 1, 0, 42, 4];
console.log(findLargestNum(numbers));
