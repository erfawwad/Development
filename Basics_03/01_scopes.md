Here are 5 interview questions and answers based on the video:

Question: Explain the concept of scope in JavaScript, particularly block-level scope and global scope, and why understanding them is important.
Answer: In JavaScript, curly braces {} define a scope, whether it's for if/else statements, functions, or loops (1:13).

A block-level scope creates a separate entity that doesn't have a direct relationship with the global scope. Variables declared within these blocks (using let or const) are confined to that block and cannot be accessed from outside (1:22).
The global scope refers to variables accessible throughout the entire script. While elements in the global scope can be accessed inside functions or other blocks, variables declared within a new scope should not "leak" outside, as this can cause problems (1:29). Understanding scope is crucial to prevent unintended variable access and to manage data flow effectively in your code (1:33).
Question: Describe nested scope in JavaScript and how child functions access variables from their parent functions.
Answer: Nested scope occurs when a function is defined inside another function, or an if statement is inside another if statement (1:44, 6:51). The video uses an analogy of a child asking for ice cream from an elder: a child (inner function/scope) can access variables from its parent (outer function/scope), but a parent cannot access variables declared within its child's scope once the child's scope ends (3:37). This means variables declared in an outer function are accessible to inner functions, but variables declared only in the inner function are not accessible outside it (3:54).

Question: What is the difference between declaring a function using the traditional function keyword and assigning a function to a variable (function expression)? Provide an example of each.
Answer:

Traditional Function Declaration: Functions declared with the function keyword, like function addOne() {}, can be called before their declaration in the code (12:36).
Example:
javascript
console.log(addOne(5)); // No error, outputs 6
function addOne(name) {
return name + 1;
}

Function Expression: Functions assigned to a variable, like const addTwo = function() {}, cannot be called before they are defined in the code (13:12). Attempting to do so will result in an error (13:16).
Example:
javascript
// console.log(addTwo(5)); // This would throw an error: Cannot access 'addTwo' before initialization
const addTwo = function(name) {
return name + 2;
}
console.log(addTwo(5)); // No error, outputs 7

Question: Explain the concept of hoisting in JavaScript, particularly in the context of function declarations versus function expressions.
Answer: Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase (13:38).

For traditional function declarations, the entire function definition is hoisted, meaning you can call the function even before it appears in the code (12:36, 13:39).
For function expressions (functions assigned to variables), only the variable declaration is hoisted, not its assignment. This means the variable addTwo is known, but its value (the function) is not yet assigned at the top of the scope, leading to an error if you try to use it before the assignment (13:12, 13:41).
Question: The video mentions that closures are an important interview topic. Based on the video's basic overview, what is a fundamental aspect of closures?
Answer: The video provides a basic understanding of closures, stating that a fundamental aspect is when an inner function (child function) can access variables from its outer function (parent function), even after the outer function has finished executing (6:19). While the video clarifies there's more to closures than just this, it highlights this as the common initial understanding (6:24).