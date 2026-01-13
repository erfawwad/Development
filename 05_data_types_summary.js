// Data Types in JavaScript Summary

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
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Height:", height);
console.log("Address:", address);

console.log(`Data Types Summary:
- Name: ${name} (Type: ${typeof name})
- Age: ${age} (Type: ${typeof age})
- Is Student: ${isStudent} (Type: ${typeof isStudent})
- Height: ${height} (Type: ${typeof height})
- Address: ${address} (Type: ${typeof address})`);