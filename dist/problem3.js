"use strict";
let array = [1, 2, 3, 4, 5];
let array1 = [2, 2, 6, 4, 9];
function addArray(anyarray) {
    let Sum = 0;
    for (var i = 0; i < anyarray.length; i++) {
        Sum += anyarray[i];
    }
    return Sum;
}
console.log(addArray(array));
console.log(addArray(array1));
