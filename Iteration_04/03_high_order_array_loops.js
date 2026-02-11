// High Order Array Loops

// 1. forEach

// 2. map

// 3. filter

// 4. reduce

// 5. find

// 6. some

// 7. every

// 8. sort

// 9. reverse

// 10. for...of


// forEach

const myArray = ["flash", "batman", "superman"]

myArray.forEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);

});

// map

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter   

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

// reduce

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15

// find

const foundNumber = numbers.find(num => num > 3);

console.log(foundNumber); // Output: 4

// some

const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber); // Output: true

// every

const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // Output: true

// sort

const unsortedNumbers = [5, 2, 9, 1, 5, 6];

const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);

console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]

// reverse

const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// for...of

for (const element of myArray) {
    console.log(element);
}


// This video focuses on higher-order array loops in JavaScript, specifically covering for...of, for...in, and forEach loops (0:30). The presenter explains their syntax and practical applications, emphasizing their utility in common scenarios like iterating over arrays of objects.

// Here's a breakdown of the key topics:

// for...of Loop (0:47)

// This loop is primarily used for iterating directly over values in iterable objects like arrays (2:24) and strings (4:30).
// It's simpler than traditional for or while loops as it automatically handles iteration without requiring explicit index management or length checks (3:45).
// The video demonstrates for...of with both arrays of numbers (2:07) and strings (4:35).
// It also shows how for...of can effectively iterate over Maps (6:25), allowing for easy destructuring of key-value pairs (10:43).
// A crucial point is made that for...of does not work directly with plain JavaScript objects (12:35) because they are not inherently iterable in the same way arrays or Maps are.
// for...in Loop (14:57)

// This loop is designed for iterating over enumerable properties of an object (15:01). It returns the keys (or property names) of an object (15:30).
// The video illustrates how to use for...in to access both keys and their corresponding values within an object (15:47).
// It's highlighted that for...in can also be used with arrays, but it will return the array indices (keys) rather than the values themselves (17:58).
// It further clarifies that for...in does not work with Maps (19:00), reiterating that Maps are not iterable in the same way for this particular loop.
// forEach Loop (21:13)

// This is presented as one of the most commonly used loops for arrays in modern JavaScript (21:05).
// It's a higher-order function (22:50), meaning it takes a callback function as an argument. This callback function is executed for each element in the array (23:19).
// The video demonstrates different ways to define the callback function: using a traditional function keyword (25:08), an arrow function (26:17), or by passing a pre-defined function reference (27:23).
// A key advantage of forEach is that the callback function automatically receives not only the current item/value but also its index and the entire array itself as parameters (28:45), providing flexible access to data.
// The video concludes by showcasing a very common and practical use case: iterating over an array of objects (30:05) to easily access specific properties within each object (32:20), which is highly relevant for handling data fetched from databases.


