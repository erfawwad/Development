// Numbers and Maths in JavaScript

// This module provides practice with various number operations and math methods in JavaScript. 

let practiceNumber = 42.789;

console.log("Original Number:", practiceNumber);

// 1. Round the number to the nearest integer
let roundedNumber = Math.round(practiceNumber);
console.log("Rounded Number:", roundedNumber);  

// 2. Floor the number
let flooredNumber = Math.floor(practiceNumber);
console.log("Floored Number:", flooredNumber);

// 3. Ceil the number
let ceiledNumber = Math.ceil(practiceNumber);
console.log("Ceiled Number:", ceiledNumber);

// 4. Get the absolute value
let absoluteValue = Math.abs(-practiceNumber);
console.log("Absolute Value:", absoluteValue);

// 5. Get the square root
let squareRoot = Math.sqrt(practiceNumber);
console.log("Square Root:", squareRoot);

// 6. Get the power of the number (raised to 2)
let powerOfNumber = Math.pow(practiceNumber, 2);
console.log("Power of Number (squared):", powerOfNumber);

// 7. Generate a random number between 0 and 1
let randomNumber = Math.random();
console.log("Random Number (0 to 1):", randomNumber);

// 8. Generate a random integer between 1 and 100
let randomInteger = Math.floor(Math.random() * 100) + 1;
console.log("Random Integer (1 to 100):", randomInteger);       

// 9. Get the maximum value from a set of numbers
let maxNumber = Math.max(10, 20, 30, practiceNumber);
console.log("Maximum Number:", maxNumber);

// 10. Get the minimum value from a set of numbers
let minNumber = Math.min(10, 20, 30, practiceNumber);
console.log("Minimum Number:", minNumber);

// 11. Format the number to 2 decimal places
let formattedNumber = practiceNumber.toFixed(2);
console.log("Formatted Number (2 decimal places):", formattedNumber);

// 12. Convert the number to a string
let numberAsString = practiceNumber.toString();
console.log("Number as String:", numberAsString);

// 13. Parse a string to a float
let parsedFloat = parseFloat("123.456");
console.log("Parsed Float:", parsedFloat);

// 14. Parse a string to an integer
let parsedInteger = parseInt("789");
console.log("Parsed Integer:", parsedInteger);

// 15. Get the value of Pi
let piValue = Math.PI;
console.log("Value of Pi:", piValue);   

// 16. Generate a random integer between two values (min and max)
let min = 50;
let max = 150;

// Helper function to generate a random integer between min and max (inclusive)
let randomIntBetween = Math.floor(Math.random() * (max - min + 1)) + min;


console.log(`Random Integer (${min} to ${max}):`, randomIntBetween);


// Helper function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`Random Integer (${min} to ${max}):`, getRandomInt(min, max)); Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Integer (${min} to ${max}):`, randomIntBetween);
console.log(`Random Integer (${min} to ${max}):`, getRandomInt(min, max)); Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random Integer (${min} to ${max}):`, randomIntBetween);

// End of Numbers and Maths in JavaScript module