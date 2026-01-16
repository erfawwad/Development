// Strings in JavaScript

// Strings are sequences of characters used to represent text. In JavaScript, strings are immutable, meaning once they are created, they cannot be changed. However, you can create new strings based on operations performed on existing strings.

// Creating Strings
let singleQuoteString = 'Hello, World!'; // Using single quotes
let doubleQuoteString = "Hello, World!"; // Using double quotes
let backtickString = `Hello, World!`; // Using backticks (template literals)

console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: Hello, World!
console.log(backtickString); // Output: Hello, World!

// String Concatenation
let greeting = "Hello";
let name = "Alice";
let concatenatedString = greeting + ", " + name + "!";
console.log(concatenatedString); // Output: Hello, Alice!


// Template Literals
let age = 30;
let templateLiteralString = `My name is ${name} and I am ${age} years old.`;
console.log(templateLiteralString); // Output: My name is Alice and I am 30 years old.

// String Methods
let sampleString = "  JavaScript is awesome!  ";

console.log(sampleString.length); // Output: 24 (length of the string)
console.log(sampleString.toUpperCase()); // Output: "  JAVASCRIPT IS AWESOME!  "
console.log(sampleString.toLowerCase()); // Output: "  javascript is awesome!  "    
console.log(sampleString.trim()); // Output: "JavaScript is awesome!" (removes whitespace from both ends)
console.log(sampleString.indexOf("is")); // Output: 13 (index of the first occurrence of "is")
console.log(sampleString.slice(2, 12)); // Output: "JavaScript" (extracts a section of the string)  
console.log(sampleString.replace("awesome", "fantastic")); // Output: "  JavaScript is fantastic!  " (replaces a substring)

// Summary: 
// Strings are a fundamental data type in JavaScript used to represent text. They can be created using single quotes, double quotes, or backticks (for template literals). Strings support various operations such as concatenation, and they come with numerous built-in methods for manipulation and analysis.    

// End of Strings in JavaScript