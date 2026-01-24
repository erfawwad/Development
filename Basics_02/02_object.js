// Objects in JavaScript

// Creating an object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    "full Name" : 'John Doe', 
    age: 30,
    hobbies: ['reading', 'traveling', 'swimming'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};


// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe

// Modifying object properties
person.age = 31;
console.log(person.age); // Output: 31

// Adding new properties
person.email = 'example@google.cp,';
console.log(person.email); // Output:


// Defining Symbol properties
let id = Symbol('id');
person[id] = 12345;
console.log(person[id]); // Output: 12345

// Object Reference Methods

let anotherPerson = person; // Reference assignment
anotherPerson.firstName = 'Jane';
console.log(person.firstName); // Output: Jane

// Referencing a a key of the object with space in between
console.log([person['full Name']]); // Output: John Doe 

