"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsondata = [
    {
        "name": "Ashok",
        "age": 60,
        "children": [
            {
                "name": "Arun",
                "age": 20,
                "children": []
            },
            {
                "name": "Divya",
                "age": 25,
                "children": [
                    {
                        "name": "Ajay",
                        "age": 10,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "name": "Sidhu",
        "age": 35,
        "children": []
    }
];
function countPersons(persons) {
    let count = 0;
    for (const person of persons) {
        count++;
        count += countPersons(person.children);
    }
    return count;
}
console.log(countPersons(jsondata));
