//Write a function that takes in an array of numbers and a callback function. 
//The function should apply the callback function to each element in the array and 
//return a new array with the modified values 
let numbers:number[] = [1, 4, 9, 16];

// Pass a function to map
let map1:number[] = numbers.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
