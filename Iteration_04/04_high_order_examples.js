// --- for...of loop examples --- (2:24)

// Iterating over an array of numbers
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
console.log(num); // Prints each number: 1, 2, 3, 4, 5
}

// Iterating over a string
const greeting = "Hello world!";

for (const char of greeting) {
console.log(`Each character is: ${char}`); // Prints each character: H, e, l, l, o, (space), w, o, r, l, d, !
}

// Iterating over a Map
// Maps store key-value pairs and maintain insertion order, keys are unique.
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IN', "India"); // This duplicate key will be ignored by Map, as keys must be unique.

// Prints the entire Map object: Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'FR' => 'France' }
console.log(map);

// Iterating over a Map with for...of to get key-value pairs (destructuring)
for (const [key, value] of map) {
console.log(`${key} :- ${value}`); // Prints: IN :- India, USA :- United States of America, FR :- France
}

// --- Attempting for...of on a plain Object (does not work) --- (12:35)
const myObject = {
game1: 'NFS',
game2: 'Spiderman'
};

// for...of loop cannot directly iterate over plain objects
// This block would result in an error: "myObject is not iterable"
/*
for (const game of myObject) {
console.log(game);
}
*/

// --- for...in loop examples --- (15:13)

// Iterating over a plain Object (recommended use case for for...in)
const myObject2 = {
js: 'javascript',
cpp: 'C++',
rb: 'ruby',
swift: 'swift by apple'
};

for (const key in myObject2) {
console.log(key); // Prints only the keys: js, cpp, rb, swift
console.log(myObject2[key]); // Prints only the values: javascript, C++, ruby, swift by apple

// Accessing both key and value in a formatted string
console.log(`${key} shortcut is for ${myObject2[key]}`);
// Prints:
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple
}

// Iterating over an Array with for...in (returns indices) (17:58)
const programming = ["js", "ruby", "python", "java", "cpp"];

for (const index in programming) {
console.log(index); // Prints the indices (as strings): 0, 1, 2, 3, 4

// Accessing the value using the index
console.log(programming[index]); // Prints the values: js, ruby, python, java, cpp
}

// --- Attempting for...in on a Map (does not work) --- (19:00)
const map2 = new Map();
map2.set('IN', "India");

// for...in loop cannot iterate over Maps (no output, no error but doesn't work as expected)
/*
for (const key in map2) {
console.log(key);
}
*/

// --- forEach loop examples (Higher-Order Function) --- (21:13)

const coding = ["js", "ruby", "python", "java", "cpp"];

// Basic forEach with a traditional function (25:08)
coding.forEach(function (item) {
console.log(item); // Prints each item: js, ruby, python, java, cpp
});

// forEach with an arrow function (most common syntax) (26:17)
coding.forEach((item) => {
console.log(item); // Prints each item: js, ruby, python, java, cpp
});

// forEach with a predefined function reference (27:23)
function printMe(item) {
console.log(item);
}
coding.forEach(printMe); // Passes the function reference, not an execution

// forEach callback function can also access index and the full array (28:45)
coding.forEach((item, index, arr) => {
console.log(item, index, arr);
// Prints:
// js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ...and so on for each item
});

// Iterating over an array of objects (very common scenario) (30:05)
const myCoding = [
{
languageName: "javascript",
languageFileName: "js"
},
{
languageName: "java",
languageFileName: "java"
},
{
languageName: "python",
languageFileName: "py"
}
];

// Using forEach to access properties of objects within an array
myCoding.forEach((item) => {
console.log(item.languageName); // Prints: javascript, java, python
console.log(item.languageFileName); // Prints: js, java, py
});


//###### Additional for...of and for...in examples (not in the video) ######

// for...of with an array of strings
const myArray = ["flash", "batman", "superman"];

for (const element of myArray) {
console.log(element); // Prints: flash, batman, superman
}

