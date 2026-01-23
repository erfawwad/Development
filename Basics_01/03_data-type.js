"use-strict"; 
// Treat all Javascript code as modern

// Data Types in JavaScript

// alert( 3+3 ); // Number: 6

// alert( 3.5 + 1.5 ); // Number: 5.0

// alert( "Hello, " + "World!" ); // String: "Hello, World!"

// We are using NodeJS environment, so we will use console.log instead of alert

console.log( 3 + 3 ); // Number: 6

let name = "Fawwad Khan"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let height; // Undefined
let address = null; // Null

console.log(typeof name); // String
console.log(typeof age); // Number
console.log(typeof isStudent); // Boolean
console.log(typeof height); // Undefined
console.log(typeof address); // Object (null is considered an object in JavaScript)    

console.log("Name:", name);