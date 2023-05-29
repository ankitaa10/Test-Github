"use strict";
class Rectangle {
    calculateArea() {
        return this.length * this.bredth;
    }
    constructor(length, bredth) {
        this.length = length;
        this.bredth = bredth;
    }
}
let obj1 = new Rectangle(4, 25);
console.log(obj1.calculateArea());
class Circle {
    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
    constructor(radius) {
        this.radius = radius;
    }
}
let obj2 = new Circle(25);
console.log(obj2.calculateArea());
