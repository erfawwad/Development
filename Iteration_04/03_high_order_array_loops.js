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


