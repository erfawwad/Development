// Functions in JavaScript

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// Function Expression
const add = function(a, b) {
    return a + b;
};


console.log(add(5, 3)); // Output: 8

// Arrow Function
const multiply = (x, y) => x * y;   

console.log(multiply(4, 6)); // Output: 24

// Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

console.log(power(3)); // Output: 9
console.log(power(2, 3)); // Output: 8  

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Higher-Order Function
function applyOperation(a, b, operation) {
    return operation(a, b);
}

console.log(applyOperation(10, 5, add)); // Output: 15
console.log(applyOperation(10, 5, multiply)); // Output: 50

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This function runs immediately upon definition!');
})(); // Output: This function runs immediately upon definition!

// Function Scope
function outerFunction() {
    let outerVar = 'I am outside!'; 

    function innerFunction() {
        let innerVar = 'I am inside!';
        console.log(outerVar); // Accessing outer function variable
        console.log(innerVar); // Accessing inner function variable
    }   
    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined
}   
outerFunction();
// Output: I am outside!
// Output: I am inside!

// Callback Function
function fetchData(callback) {
    setTimeout(() => {  

        const data = 'Sample Data';
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log('Received:', data);
}); // Output (after 1 second): Received: Sample Data

// If Else Function
function checkNumber(num) {
    if (num > 0) {
        return 'Positive Number';
    } else if (num < 0) {
        return 'Negative Number';
    } else {
        return 'Zero';
    }

}

console.log(checkNumber(10)); // Output: Positive Number
console.log(checkNumber(-5)); // Output: Negative Number
console.log(checkNumber(0)); // Output: Zero

// Switch Case Function

function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';    
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';    
        default:
            return 'Invalid Day Number';
    }
}

console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(8)); // Output: Invalid Day Number   



