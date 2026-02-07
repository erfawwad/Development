// For Loop // for (initialization; condition; increment/decrement) {
//     // code to be executed
// }


// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2: Print even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Example 3: Print the elements of an array
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Example 4: Calculate the sum of numbers from 1 to 5
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i; // sum = sum + i
}

console.log("The sum is: " + sum);

// Example 5: Print a multiplication table for a given number
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Example 6: Nested For Loop - Print a pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}


// Example 7: Using For Loop with Arrays - Calculate the average of an array of numbers
const numbers = [10, 20, 30, 40, 50];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

const average = total / numbers.length;
console.log("The average is: " + average);


// Example 8: Using For Loop with Objects - Print the properties of an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


// Example 9: Using For Loop with Strings - Count the number of vowels in a string
const str = "Hello World";
let vowelCount = 0;

for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount++;
    }

}

console.log("Number of vowels: " + vowelCount);

// Example 10: Using For Loop with Break and Continue - Print numbers from 1 to 10, but skip 5 and stop at 8
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the number 5
    }

    if (i === 8) {
        break; // Stop the loop at number 8
    }

    console.log(i);
}


