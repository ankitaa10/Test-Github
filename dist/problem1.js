"use strict";
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return "Hello,I am " + this.name + " My Age is " + this.age;
    }
}
let obj = new person('Ankitaa', 21);
console.log(obj.introduce());
