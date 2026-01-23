// There are two main data types in JavaScript:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types (Objects)


// Primitive Data Types:
// These are the most basic data types in JavaScript. They include: 
// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Example of Number

// 2. String: Represents a sequence of characters enclosed in single or double quotes.
let str = "Hello, World!"; // Example of String 

// 3. Boolean: Represents a logical entity that can have two values: true or false.
let isJavaScriptFun = true; // Example of Boolean

// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undef; // Example of Undefined

// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null; // Example of Null

// 6. Symbol: Represents a unique and immutable primitive value, often used as object property identifiers.
let sym = Symbol("uniqueIdentifier"); // Example of Symbol  

// 7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.
let bigIntNum = BigInt(9007199254741991); // Example of BigInt


// Non-Primitive Data Types (Objects):

// Objects are complex data types that can store collections of data and more complex entities. They include:
// 1. Object: A collection of key-value pairs.
let person = {
    name: "Alice",
    age: 30
}; // Example of Object


// 2. Array: An ordered collection of values, which can be of different data types.
let numbers = [1, 2, 3, 4, 5]; // Example of Array

// 3. Function: A block of code designed to perform a particular task.
function greet() {
    console.log("Hello!");
} // Example of Function

// 4. Date: Represents a single moment in time.
let currentDate = new Date(); // Example of Date

// 5. RegExp: Represents regular expressions, used for pattern matching within strings.
let regex = /ab+c/; // Example of RegExp

// 6. Map: A collection of keyed data items, similar to an object but with keys of any type.
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2"); // Example of Map

// 7. Set: A collection of unique values.
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate values are ignored in a Set // Example of Set  


// Type Checking:


console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof isJavaScriptFun); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof sym); // "symbol"
console.log(typeof bigIntNum); // "bigint"



// Checking Non-Primitive Data Types:
console.log(typeof person); // "object"
console.log(typeof numbers); // "object"
console.log(typeof greet); // "function"
console.log(typeof currentDate); // "object"
console.log(typeof regex); // "object"
console.log(typeof map); // "object"
console.log(typeof set); // "object"


// Summary:
// JavaScript has a variety of data types, broadly categorized into Primitive and Non-Primitive types. 
// Understanding these data types is crucial for effective programming in JavaScript.