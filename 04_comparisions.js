// Comparrision Operations Module
// This module handles various data types and their comparisons.
// **********************************************************************


console.log("Comparrision of string and number:");

let stringValue = "100";
let numberValue = 100;  
console.log(`String Value: ${stringValue} (Type: ${typeof stringValue})`);
console.log(`Number Value: ${numberValue} (Type: ${typeof numberValue})`);  

console.log("Using loose equality (==):", stringValue == numberValue); // true
console.log("Using strict equality (===):", stringValue === numberValue); // false


// Comparing boolean and number
console.log("\nComparrision of boolean and number:");   
let booleanValue = true; // true is equivalent to 1
let numValue = 1;
console.log(`Boolean Value: ${booleanValue} (Type: ${typeof booleanValue})`);
console.log(`Number Value: ${numValue} (Type: ${typeof numValue})`);
console.log("Using loose equality (==):", booleanValue == numValue); // true
console.log("Using strict equality (===):", booleanValue === numValue); // false

// Comparing null and undefined
console.log("\nComparrision of null and undefined:");   
let nullValue = null;  
let undefinedValue; // undefined
console.log(`Null Value: ${nullValue} (Type: ${typeof nullValue})`);
console.log(`Undefined Value: ${undefinedValue} (Type: ${typeof undefinedValue})`);
console.log("Using loose equality (==):", nullValue == undefinedValue); // true
console.log("Using strict equality (===):", nullValue === undefinedValue); // false

// Comparing different string cases
console.log("\nComparrision of different string cases:");   
let lowerCaseString = "hello";
let upperCaseString = "HELLO";
console.log(`Lower Case String: ${lowerCaseString}`);
console.log(`Upper Case String: ${upperCaseString}`);
console.log("Using loose equality (==):", lowerCaseString == upperCaseString); // false
console.log("Using strict equality (===):", lowerCaseString === upperCaseString); // false

// Comparing null and integer zero
console.log("\nComparrision of null and integer zero:");   
let zeroValue = 0;
console.log(`Null Value: ${nullValue} (Type: ${typeof nullValue})`);
console.log(`Zero Value: ${zeroValue} (Type: ${typeof zeroValue})`);
console.log("Using loose equality (==):", nullValue == zeroValue); // false
console.log("Using strict equality (===):", nullValue === zeroValue); // false  

// Comparing empty string and boolean false
console.log("\nComparrision of empty string and boolean false:");   
let emptyString = "";   
let falseBoolean = false;
console.log(`Empty String: '${emptyString}' (Type: ${typeof emptyString})`);
console.log(`False Boolean: ${falseBoolean} (Type: ${typeof falseBoolean})`);
console.log("Using loose equality (==):", emptyString == falseBoolean); // true
console.log("Using strict equality (===):", emptyString === falseBoolean); // false

// Note: Always prefer strict equality (===) to avoid unexpected type coercion issues.
// Note: Avoid comparing different data types directly to prevent confusion and bugs in the code.
// End of Comparrision Operations Module