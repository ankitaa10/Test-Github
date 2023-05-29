export interface Person {
    name: string;
    age: number;
    children: Child2[];
  }
  
 export interface Child2 {
    name: string;
    age: number;
    children: Child[];
  }
  
 export interface Child {
    name: string;
    age: number;
    children: any[];
  }