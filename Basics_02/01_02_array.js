// Array Method .from, .to and .IsArray

// Using Array.from to create an array from a string    

let str = 'Hello';
let charArray = Array.from(str);
console.log(charArray); 
// Output: ['H', 'e', 'l', 'l', 'o']


// Using Array.isArray to check if a variable is an array
let numbers = [1, 2, 3, 4, 5];
let notAnArray = 'Hello World';


console.log(Array.isArray(numbers)); // Output: true
console.log(Array.isArray(notAnArray)); // Output: false    

// Using Array.of to create an array from a set of arguments
let numArray = Array.of(10, 20, 30, 40);
console.log(numArray); 
// Output: [10, 20, 30, 40]



// Length vs Number of Elements in an Array

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

console.log(fruits.length); // Output: 5