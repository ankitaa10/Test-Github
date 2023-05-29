//Create an Interface called “Shape” with a method called “calculateArea” that return the area of the shape. 
//Implement this interface in classes for different shapes like “Rectangle” and “Circle” and 
//provide necessary implementation for the “calculateArea” method. 
interface Shape { 
   calculateArea():number;

   
 } 
 
class Rectangle implements Shape {  
    length: number;  
    bredth: number;  
   
    calculateArea() {  
        return this.length*this.bredth;  
    }  
    constructor(length: number , bredth: number) {  
        this.length = length;  
        this.bredth = bredth;  
        
    } 
    }  
    let obj1 = new Rectangle(4, 25); 
    console.log(obj1.calculateArea());

    class Circle implements Shape {  
        radius: number;  
        
       
        calculateArea() {  
            return 3.14*this.radius*this.radius;  
        }  
        constructor(radius: number) {  
            this.radius = radius;  
          
            
        } 
        }  
        let obj2 = new Circle(25); 
        console.log(obj2.calculateArea());