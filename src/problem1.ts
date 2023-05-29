//Create a class “Person” with properties name,age.
// Implement a method called “Introduce” that prints out a greeting with the person’s name and age.
class person {  
    name: string;  
    age: number;  
  
    constructor(name: string, age: number) {  
            this.name = name;  
            this.age = age;  
    }  
  
    introduce() : string {  
        return "Hello,I am "+this.name + " My Age is "+this.age ;  
    }  
}  

let obj = new person('Ankitaa', 21);

console.log(obj.introduce()) ;