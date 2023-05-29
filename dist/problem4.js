"use strict";
let objArray = [
    { name: "book", price: 300 },
    { name: "pen", price: 100 },
    { name: "eraser", price: 10 },
    { name: "pencil", price: 50 },
];
let lowest = objArray[0].price;
objArray.forEach(function (item) {
    if (lowest >= item.price) {
        lowest = item.price;
    }
});
console.log("This is the lowest price " + lowest);
