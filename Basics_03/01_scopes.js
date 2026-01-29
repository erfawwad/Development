// Scopes in JavaScript


// Var is function-scoped, while let and const are block-scoped.
// Variables declared with var are hoisted to the top of their function scope.
// Variables declared with let and const are hoisted to the top of their block scope but are not initialized until their definition is evaluated (temporal dead zone).
// Nested functions have access to variables declared in their outer scopes (lexical scoping).
// Closures allow inner functions to retain access to their outer function's scope even after the outer function has returned.
// var, let, and const have different behaviors in terms of scope and hoisting.
// var: function-scoped, can be redeclared and updated.
// let: block-scoped, cannot be redeclared in the same scope, can be updated.
// const: block-scoped, cannot be redeclared or updated (must be initialized at declaration).

// This code demonstrates different types of scopes in JavaScript.

// Global Scope
var globalVar = "I am a global variable";
function globalScopeExample() {
    console.log(globalVar); // Accessible here
}
globalScopeExample();
console.log(globalVar); // Accessible here too

// Function Scope
function functionScopeExample() {
    var functionVar = "I am a function-scoped variable";
    console.log(functionVar); // Accessible here
}

functionScopeExample();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Block Scope
function blockScopeExample() {
    if (true) {
        let blockVar = "I am a block-scoped variable";
        console.log(blockVar); // Accessible here
    }

    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}

blockScopeExample();

// Lexical Scope
function outerFunction() {
    let outerVar = "I am from the outer function";
    function innerFunction() {
        console.log(outerVar); // Accessible here due to lexical scope
    }
    innerFunction();
}

outerFunction();

// Closures

function closureExample() {
    let count = 0; // Private variable
    return function() {
        count++;
        console.log("Count:", count);
    };
}

const increment = closureExample();
increment(); // Count: 1
increment(); // Count: 2
increment(); // Count: 3    
increment(); // Count: 4
increment(); // Count: 5
increment(); // Count: 6
increment(); // Count: 7


// IIFE (Immediately Invoked Function Expression)
(function() {
    let iifeVar = "I am inside an IIFE";
    console.log(iifeVar); // Accessible here
})();

// console.log(iifeVar); // Uncaught ReferenceError: iifeVar is not defined

// Module Scope (using ES6 modules, this code would be in its own file)

const moduleVar = "I am a module-scoped variable";
export function moduleScopeExample() {
    console.log(moduleVar); // Accessible here
}

// In another file, you would import and use it like this:
// import { moduleScopeExample } from './path_to_module_file.js';
// moduleScopeExample();

// Note: The module scope example requires a module system to run properly.
