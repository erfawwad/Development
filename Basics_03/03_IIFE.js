// Immediately invoked function expression (IIFE) example
(function() {
    let message = "Hello from IIFE!";
    console.log(message); // Output: Hello from IIFE!
})();


// Trying to access 'message' outside the IIFE will result in an error
// console.log(message); // Uncaught ReferenceError: message is not defined


// IIFE with parameters
(function(name) {
    console.log("Hello, " + name + " from IIFE with parameters!");
})("Alice");


// IIFE returning a value
const result = (function(a, b) {
    return a + b;
})(5, 10);


console.log("Result from IIFE:", result); // Output: Result from IIFE: 15


// IIFE to create a private scope
const counter = (function() {
    let count = 0; // Private variable  
    return {
        increment: function() {
            count++;
            return count;
        }

    };
})();

console.log("Counter:", counter.increment()); // Output: Counter: 1
console.log("Counter:", counter.increment()); // Output: Counter: 2
console.log("Counter:", counter.increment()); // Output: Counter: 3 


// Note: The 'count' variable is not accessible from outside the IIFE
// console.log(count); // Uncaught ReferenceError: count is not defined


// Implicitly invoked function expression
!function() {
    console.log("Hello from implicitly invoked function expression!");
}();

+function() {
    console.log("Hello from another implicitly invoked function expression!");
}

~function() {
    console.log("Hello from yet another implicitly invoked function expression!");
}();

// Explicitly invoked function expression

(function() {
    console.log("Hello from explicitly invoked function expression!");
}()).call(this);

(function() {
    console.log("Hello from another explicitly invoked function expression!");
}()).apply(this);

(function() {
    console.log("Hello from yet another explicitly invoked function expression!");
}.bind(this)());


// IIFE Using Arrow Function Syntax
(() => {
    console.log("Hello from IIFE using arrow function syntax!");
})();

// IIFE using Arrow Function with Parameters
((name) => {
    console.log("Hello, " + name + " from IIFE using arrow function with parameters!");
})("Bob");



// Summary:
// - IIFEs are functions that are executed immediately after they are defined.
// - They create a private scope, preventing variable collisions in the global scope.
// - They can accept parameters and return values.
// - Variations include implicit and explicit invocation methods.