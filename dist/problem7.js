"use strict";
let people = [
    { name: 'Matt', age: 19 },
    { name: 'George', age: 16 },
    { name: 'Ross', age: 12 },
    { name: 'Gerard', age: 18 },
    { name: 'Leo', age: 15 },
    { name: 'Brad', age: 21 }
];
console.log(people.filter(e => e.age < 18));
var result = people.map(person => ({ value: person.name, text: person.age * 2 }));
console.log(result);
let final = result.filter(e => e.text > 30);
console.log(final[0]);
