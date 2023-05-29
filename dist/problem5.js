"use strict";
class Library {
    addBooks(book1) {
        books.push(book1);
        console.log(books);
    }
    removeBooks() {
        books.pop();
        console.log(books.pop());
    }
    findBook(book2) {
        let obj = books.find(o => o.title === book2);
        console.log(obj);
    }
}
let books = [
    { title: 'A Better India' },
    { title: 'A Tale of Two Cities' },
];
let objnew = new Library();
objnew.addBooks({ title: "Harry Potter and the Philosopher's Stone" });
objnew.removeBooks();
objnew.findBook('A Better India');
