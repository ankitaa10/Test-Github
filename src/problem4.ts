// Write a typescript function that takes in an array of objects representing products.
//  Each product object has properties for “name” and “price”. 
// Implement a function that finds the product with the lowest price and returns the same. 


// Creating the type for the object
type product = {
    name: string;
    price: number;
 };
 // creating the array of objects
 let objArray: Array<product> = [
    
    { name: "book", price: 300 },
    { name: "pen", price: 100 },
    { name: "eraser", price: 10 },
    { name: "pencil", price: 50},

 ];

 

 let  lowest=objArray[0].price;
objArray.forEach(function(item) { //for each

if ( lowest>=item.price) {
    lowest=item.price;
}
    
  

});
console.log("This is the lowest price "+lowest);

    

