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


//Freezing an object
Object.freeze(person);
person.age = 35; // This will not change the age property
console.log(person.age); // Output: 31

// Function to display person info
function displayPersonInfo(obj) {
    console.log(`Name: ${obj.firstName} ${obj.lastName}`);  
    console.log(`Age: ${obj.age}`);
    console.log(`Hobbies: ${obj.hobbies.join(', ')}`);
    console.log(`Address: ${obj.address.street}, ${obj.address.city}, ${obj.address.country}`);
}

// Calling the function
displayPersonInfo(person);



// Output:
// Name: Jane Doe
// Age: 31
// Hobbies: reading, traveling, swimming
// Address: 123 Main St, Anytown, USA


// using spread operator to clone an object

let clonedPerson = { ...person };
clonedPerson.firstName = 'Alice';
console.log(clonedPerson.firstName); // Output: Alice
console.log(person.firstName); // Output: Jane  

// Using Object.keys() to get all property names
let propertyNames = Object.keys(person);
console.log(propertyNames); 
// Output: [ 'firstName', 'lastName', 'full Name', 'age', 'hobbies', 'address', 'email' ]


// Using Object.values() to get all property values
let propertyValues = Object.values(person);
console.log(propertyValues); 
// Output: [ 'Jane', 'Doe', 'John Doe', 31, [ 'reading', 'traveling', 'swimming' ], { street: '123 Main St', city: 'Anytown', country: 'USA' }, '



