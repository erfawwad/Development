// Strings Methods Practice in JavaScript

// This module provides practice with various string methods in JavaScript.


let practiceString = "   JavaScript String Methods Practice   ";

console.log("Original String:", `"${practiceString}"`); 

// 1. Trim whitespace from both ends
let trimmedString = practiceString.trim();
console.log("Trimmed String:", `"${trimmedString}"`);



// 2. Convert to uppercase
let upperCaseString = trimmedString.toUpperCase();
console.log("Uppercase String:", `"${upperCaseString}"`);


// 3. Convert to lowercase
let lowerCaseString = trimmedString.toLowerCase();
console.log("Lowercase String:", `"${lowerCaseString}"`);


// 4. Find the index of the word "Methods"
let indexOfMethods = trimmedString.indexOf("Methods");
console.log("Index of 'Methods':", indexOfMethods);


// 5. Slice the string to get "String Methods"
let slicedString = trimmedString.slice(11, 26);
console.log("Sliced String (String Methods):", `"${slicedString}"`);


// 6. Replace "Practice" with "Tutorial"
let replacedString = trimmedString.replace("Practice", "Tutorial");
console.log("Replaced String:", `"${replacedString}"`);

// 7. Get the length of the original string
let originalLength = practiceString.length;
console.log("Length of Original String:", originalLength);


// 8. Split the string into an array of words
let wordsArray = trimmedString.split(" ");
console.log("Array of Words:", wordsArray);

// 9. Check if the string includes the word "JavaScript"
let includesJavaScript = trimmedString.includes("JavaScript");
console.log("Includes 'JavaScript':", includesJavaScript);

// 10. Repeat the trimmed string twice
let repeatedString = trimmedString.repeat(2);
console.log("Repeated String:", `"${repeatedString}"`);

// 11. Get the character at index 5
let charAtIndex5 = trimmedString.charAt(5);
console.log("Character at Index 5:", `"${charAtIndex5}"`);

// 12. Pad the string to a total length of 40 with asterisks (*) at the start

let paddedStringStart = trimmedString.padStart(40, '*');
console.log("Padded String at Start:", `"${paddedStringStart}"`);

// 13. Pad the string to a total length of 40 with hyphens (-) at the end
let paddedStringEnd = trimmedString.padEnd(40, '-');
console.log("Padded String at End:", `"${paddedStringEnd}"`);

// 14. Get the Unicode value of the character at index 0
let unicodeAtIndex0 = trimmedString.charCodeAt(0);
console.log("Unicode value at Index 0:", unicodeAtIndex0);  

// 15. Check if the string starts with "Java"
let startsWithJava = trimmedString.startsWith("Java");
console.log("Starts with 'Java':", startsWithJava);

// 16. Check if the string ends with "Practice"
let endsWithPractice = trimmedString.endsWith("Practice");
console.log("Ends with 'Practice':", endsWithPractice);

// 17. Get a substring from index 5 to 15
let substringExample = trimmedString.substring(5, 15);
console.log("Substring from Index 5 to 15:", `"${substringExample}"`);

console.log("Substring from Index 5 to 10:", `"${trimmedString.substring(5, 10)}"`);

// 18. Convert the string to an array of characters
let charArray = Array.from(trimmedString);
console.log("Array of Characters:", charArray);



