// Write a typescript function that takes in an array of objects and performs the follong operation. 

// Filter out all person whose age is less than 18. 

// Map each person’s age to their age multiplied by 2. 

// Find the first person whose age after the multiplication is greater than 30 and return their name. 

type details = {
    name: string;
    age: number;
 };

let people : Array<details> = [
    { name : 'Matt', age: 19},
    { name : 'George', age: 16},
    { name : 'Ross', age: 12},
    { name : 'Gerard', age: 18},
    { name : 'Leo', age: 15},
    { name : 'Brad', age: 21}
   ];

   // Filter out all person whose age is less than 18. 
   console.log(people.filter(e=> e.age<18)) //don't write like function

   // Map each person’s age to their age multiplied by 2. 
   var result: {
    value: string;
    text: number;
}[] = people.map(person => ({value: person.name, text: person.age*2 }));
   console.log(result);

   // Find the first person whose age after the multiplication is greater than 30 and return their name. 
   let final: {
    value: string;
    text: number;
            }[] = result.filter(e=> e.text>30)
 console.log(final[0]);
