// Lets Learn JavaScript - While and Do While Loop

// While Loop

// Example 1: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example 2: Print even numbers from 1 to 10
i = 1;

while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }   
    i++;
}

// Example 3: Print the elements of an array
const fruits = ["apple", "banana", "cherry"];
i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

// Example 4: Calculate the sum of numbers from 1 to 5
let sum = 0;
i = 1;
while (i <= 5) {
    sum += i;
    i++;
}
console.log("The sum is: " + sum);

// Example 5: Print a multiplication table for a given number

const number = 5;
i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}


// Example 6: Using While Loop with Arrays - Calculate the average of an array of numbers
const numbers = [10, 20, 30, 40, 50];
let total = 0;
i = 0;

while (i < numbers.length) {
    total += numbers[i];
    i++;
}

const average = total / numbers.length;
console.log("The average is: " + average);

// Do While Loop

// Example 1: Print numbers from 1 to 5

i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// Example 2: Print even numbers from 1 to 10
i = 1;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);

// Example 3: Print the elements of an array
const fruits2 = ["apple", "banana", "cherry"];
i = 0;
do {
    console.log(fruits2[i]);
    i++;
} while (i < fruits2.length);

// Example 4: Calculate the sum of numbers from 1 to 5
let sum2 = 0;
i = 1;
do {
    sum2 += i;
    i++;
} while (i <= 5);
console.log("The sum is: " + sum2);

// Example 5: Print a multiplication table for a given number

const number2 = 5;
i = 1;

do {
    console.log(`${number2} x ${i} = ${number2 * i}`);
    i++;
} while (i <= 10);

// Example 6: Using Do While Loop with Arrays - Calculate the average of an array of numbers
const numbers2 = [10, 20, 30, 40, 50];
let total2 = 0;
i = 0;

do {
    total2 += numbers2[i];
    i++;
} while (i < numbers2.length);

const average2 = total2 / numbers2.length;
console.log("The average is: " + average2);  


// Example 7: Do While Loop - Ensure the loop runs at least once
i = 10;
do {
    console.log("This will run at least once, even if i is greater than 5");
    i++;
} while (i <= 5);


// Example 8: Do While Loop - User Input Validation
let userInput;

do {
    userInput = prompt("Please enter a number between 1 and 10:");
} while (userInput < 1 || userInput > 10);

console.log("You entered: " + userInput);


// Difference between While and Do While Loop 

// The main difference between a while loop and a do while loop is that a while loop checks the condition before executing the block of code, while a do while loop executes the block of code at least once before checking the condition.

// In a while loop, if the condition is false at the beginning, the code block will not execute at all. In contrast, in a do while loop, the code block will execute at least once, even if the condition is false from the start.

// Difference between For Loop and While Loop

// A for loop is typically used when the number of iterations is known beforehand, while a while loop is used when the number of iterations is not known and the loop needs to continue until a certain condition is met.

// A for loop consists of three parts: initialization, condition, and increment/decrement. The initialization is executed once at the beginning, the condition is checked before each iteration, and the increment/decrement is executed after each iteration. In contrast, a while loop only has a condition that is checked before each iteration, and the initialization and increment/decrement need to be handled separately within the loop body.



