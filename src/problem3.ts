//Implement a function that takes in an array of numbers and returns the sum of all the numbers. 
let array:number[] = [1,2,3,4,5]  ;
let array1:number[] = [2,2,6,4,9] ;      
function addArray(anyarray:number[]):number{
  
  let Sum:number = 0;
for (var i = 0; i < anyarray.length; i++) {
    Sum += anyarray[i]
}
return Sum;
}
console.log(addArray(array));
console.log(addArray(array1));
