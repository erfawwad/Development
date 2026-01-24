// Difference Between Array Length and Number of Elements

let fruits = ['Apple', 'Blueberry', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

// Length of the array
console.log(fruits.length); // Output: 7    

// Number of elements in the array
let numberOfElements = 0;   
fruits.forEach(function() {
    numberOfElements++;
});
console.log(numberOfElements); // Output: 7 

// Both length and number of elements are the same in this case

// However, if we create a sparse array
let sparseFruits = [];
sparseFruits[0] = 'Apple';
sparseFruits[3] = 'Date';
sparseFruits[6] = 'Grape';

// Length of the sparse array
console.log(sparseFruits.length); // Output: 7

// Number of elements in the sparse array
let sparseNumberOfElements = 0;
sparseFruits.forEach(function() {
    sparseNumberOfElements++;
});
console.log(sparseNumberOfElements); // Output: 3



// Here, length is 7 but the number of elements is 3


// This demonstrates the difference between array length and the actual number of elements present in the array.
// In a sparse array, length reflects the highest index + 1, while the number of elements counts only defined entries.let sparseFruits = [];
sparseFruits[0] = 'Apple';
sparseFruits[3] = 'Date';
sparseFruits[6] = 'Grape';  

// Difference Between Slice and Splice

let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

// Using slice to create a new array
let slicedColors = colors.slice(1, 4);
console.log(slicedColors);

// Output: ['Green', 'Blue', 'Yellow']

// Original array remains unchanged
console.log(colors);
// Output: ['Red', 'Green', 'Blue', 'Yellow', 'Purple']



// Using splice to modify the original array
let splicedColors = colors.splice(1, 2, 'Cyan', 'Magenta');
console.log(splicedColors);
// Output: ['Green', 'Blue']

// Original array is modified
console.log(colors);
// Output: ['Red', 'Cyan', 'Magenta', 'Yellow', 'Purple']


// Here, slice returns a new array without modifying the original array,
// while splice modifies the original array by removing and/or adding elements. 

// This demonstrates the difference between slice and splice methods in arrays.

// In summary:
// - slice(start, end) returns a new array from start index to end index (not inclusive) without modifying the original array.
// - splice(start, deleteCount, item1, item2, ...) modifies the original array by removing deleteCount elements from start index and adding new items in their place.
