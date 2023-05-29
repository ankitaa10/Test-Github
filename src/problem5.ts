// Create a class called “Library” with methods to add books, remove books, and search books by title. 
// The methods should take types arguments and perform respective operations. 

class Library{
   addBooks(book1:book){
     books.push(book1);
     console.log(books);
   }
  removeBooks(){
    books.pop();
    console.log(books.pop());
  } 
  findBook(book2:string){
    let obj = books.find(o=>o.title === book2);
    console.log(obj);
  }
}

type book={
title:string;
}
let books:Array<book>=[
     { title : 'A Better India'},
    { title : 'A Tale of Two Cities'},
];
let objnew = new Library(); 
objnew.addBooks({title:"Harry Potter and the Philosopher's Stone"});
objnew.removeBooks();
objnew.findBook('A Better India');