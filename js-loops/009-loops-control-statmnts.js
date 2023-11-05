/**
 * break
 * continue
 *
 */

// skip the odd ones

// print the all nums from 3-12 inclusive, but not 5 and 7
for(let i = 3; i <= 12; i++){
if(i === 5 || i === 7) continue //do not take any action
else(console.log(i))
}

// more preferable solution:
for(let i = 3; i<=13; i++){
    if(i !== 5 && i!==7) console.log(i)
}


//Generate a new random num 5-15 untill you get 10 ()
while(true){
    let random = Math.floor(Math.random( )*11)+5
    console.log(random)
    if(random === 10) break
}


// fins the first el that is divisible by 7
const numbers = [2,5,10, 14, 21, 28, 7]
let firstDivisible7;
for(const num of numbers){
    if(num % 7 === 0){
        firstDivisible7 = num;
        break
    }
}
console.log(firstDivisible7)