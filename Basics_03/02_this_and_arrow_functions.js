// This and Arrow Functions in JavaScript

// Regular Function and 'this' keyword

function regularFunction() {
    console.log("'this' in regularFunction:", this);
}

regularFunction(); // In non-strict mode, 'this' refers to the global object (window in browsers)

const obj1 = {
    name: "Object 1",
    showThis: function() {
        console.log("'this' in obj1.showThis:", this);
    }
};

obj1.showThis(); // 'this' refers to obj1

// Arrow Function and 'this' keyword
const arrowFunction = () => {
    console.log("'this' in arrowFunction:", this);
}

arrowFunction(); // 'this' refers to the enclosing lexical context (global in this case)

const obj2 = {
    name: "Object 2",
    showThis: () => {
        console.log("'this' in obj2.showThis (arrow function):", this);
    }
};

obj2.showThis(); // 'this' does NOT refer to obj2, but to the enclosing context

// Using 'this' in methods

const obj3 = {
    name: "Object 3",
    regularMethod: function() {

        console.log("'this' in obj3.regularMethod:", this.name);
    },
    arrowMethod: () => {
        console.log("'this' in obj3.arrowMethod (arrow function):", this.name);
    }
};

obj3.regularMethod(); // 'this' refers to obj3
obj3.arrowMethod(); // 'this' does NOT refer to obj3, but to the enclosing context

// Summary:
// - In regular functions, 'this' refers to the object that called the function.
// - In arrow functions, 'this' is lexically bound and refers to the context in which the arrow function was defined.

// Note: In strict mode, 'this' in regular functions that are called without an object will be undefined.

