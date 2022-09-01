// Starting array
let array = [12, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let zero = false;

for (let i=0; i < array.length; i++) {
    for (let j=0; j < array.length; j++)
    {if (array[i] + array[j] === 0){zero = true;}}}

console.log(zero)