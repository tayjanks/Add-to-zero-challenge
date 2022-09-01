// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let equalZero = false
for (let i=0; i < array.lengh; i++) {
    for (let j=0; j < array.length; j++)
    {if (array [i] + array [j] === 0){equalZero = true}}}

console.log(equalZero)