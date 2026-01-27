// Arrays in JavaScript

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry', 'Date' , 'Elderberry' ,  'Fig' , 'Grape'];

// Accessing elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[3]); // Output: Date 
console.log(fruits[fruits.length - 1]); // Output: Grape

// Modifying elements
fruits[1] = 'Blueberry';
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']


// Adding elements
fruits.push('Honeydew');
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew']


// Removing elements
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: Honeydew
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']

// Iterating over an array
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});


// Output:
// 0: Apple
// 1: Blueberry

// 2: Cherry
// 3: Date
// 4: Elderberry
// 5: Fig
// 6: Grape

// Finding an element
let cherryIndex = fruits.indexOf('Cherry');
console.log(cherryIndex); // Output: 2


// Checking if an element exists
let hasMango = fruits.includes('Mango');
console.log(hasMango); // Output: false


// Length of the array
console.log(fruits.length); // Output: 7            

// Combining arrays
let tropicalFruits = ['Mango', 'Pineapple', 'Papaya'];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); 
// Output: ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Mango', 'Pineapple', 'Papaya']

// Slicing an array
let citrusFruits = allFruits.slice(7, 10);
console.log(citrusFruits); 
// Output: ['Mango', 'Pineapple', 'Papaya']


// Splicing an array    
allFruits.splice(2, 1, 'Cantaloupe');
console.log(allFruits); 
// Output: ['Apple', 'Blueberry', 'Cantaloupe', 'Date', 'Elderberry', 'Fig', 'Grape', 'Mango', 'Pineapple', 'Papaya']


// Reversing an array
allFruits.reverse();
console.log(allFruits); 
// Output: ['Papaya', 'Pineapple', 'Mango', 'Grape', 'Fig', 'Elderberry', 'Date', 'Cantaloupe', 'Blueberry', 'Apple']   


// Sorting an array

allFruits.sort();
console.log(allFruits); 
// Output: ['Apple', 'Blueberry', 'Cantaloupe', 'Date', 'Elderberry', 'Fig', 'Grape', 'Mango',

// 'Papaya', 'Pineapple']

// Converting array to string
let fruitsString = allFruits.join(', ');
console.log(fruitsString); 
// Output: Apple, Blueberry, Cantaloupe, Date, Elderberry, Fig, Grape, Mango, Papaya, Pineapple    


// Converting string to array
let fruitsArray = fruitsString.split(', ');
console.log(fruitsArray); 
// Output: ['Apple', 'Blueberry', 'Cantaloupe', 'Date', 'Elderberry', 'Fig', 'Grape', 'Mango',

// 'Papaya', 'Pineapple']

// Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6
console.log(matrix[0]);    // Output: [1, 2, 3]

// End of arrays in JavaScriptclear