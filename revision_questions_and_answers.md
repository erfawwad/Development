# JavaScript Revision Questions and Answers

This version is written in a simple way.
Each question has the answer directly below it.

---

## 1. Data Types and Conversion

### Question 1: What are the main primitive data types in JavaScript?
Answer: The main primitive data types are `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

### Question 2: What is the difference between `null` and `undefined`?
Answer: `undefined` means no value has been given yet. `null` means the value is empty on purpose.

### Question 3: What does `typeof` do?
Answer: `typeof` tells us the type of a value.

### Question 4: What happens when you use `Number("44")`?
Answer: It changes the string `"44"` into the number `44`.

### Question 5: What happens when you use `Number("44abc")`?
Answer: It gives `NaN`, which means "Not a Number".

### Question 6: What does `Boolean(1)` return?
Answer: It returns `true`.

### Question 7: What does `Boolean(0)` return?
Answer: It returns `false`.

### Question 8: Why can type conversion sometimes create bugs?
Answer: Because JavaScript may change values automatically, and the result may not be what we expect.

---

## 2. Comparisons

### Question 1: What is the difference between `==` and `===`?
Answer: `==` checks value only and may convert types. `===` checks both value and type.

### Question 2: Why is `===` usually preferred?
Answer: Because it is safer and avoids unexpected type conversion.

### Question 3: What happens when a string and a number are compared with loose equality?
Answer: JavaScript may convert one value before comparing them.

### Question 4: Why should JavaScript comparisons be used carefully?
Answer: Because type conversion can give confusing results.

---

## 3. Primitive and Reference Types

### Question 1: What is the difference between primitive and non-primitive data types?
Answer: Primitive types store simple values. Non-primitive types like arrays and objects store references.

### Question 2: Where are primitive values usually stored?
Answer: They are usually stored in stack memory.

### Question 3: Where are objects and arrays usually stored?
Answer: They are usually stored in heap memory.

### Question 4: Why can changing one object variable affect another variable?
Answer: Because both variables may point to the same object in memory.

### Question 5: What is stack memory and heap memory in simple words?
Answer: Stack is used for simple values and quick access. Heap is used for bigger data like objects and arrays.

---

## 4. Strings

### Question 1: What is a string in JavaScript?
Answer: A string is text, like a word or sentence.

### Question 2: Are strings mutable or immutable?
Answer: Strings are immutable. This means the original string does not change.

### Question 3: What is the benefit of template literals?
Answer: They make it easier to add variables inside strings and write multi-line strings.

### Question 4: Name any three string methods you have practiced.
Answer: `trim()`, `slice()`, and `replace()`.

### Question 5: What does `trim()` do?
Answer: It removes extra spaces from the beginning and end of a string.

### Question 6: What does `slice()` do?
Answer: It takes out a part of a string.

### Question 7: What does `replace()` do?
Answer: It changes one part of a string into another value.

---

## 5. Numbers and Math

### Question 1: What kind of values does the `Number` type store?
Answer: It stores integers and decimal numbers.

### Question 2: What is the purpose of the `Math` object?
Answer: It gives us built-in math tools.

### Question 3: Name any three math methods you have seen.
Answer: `Math.round()`, `Math.floor()`, and `Math.ceil()`.

### Question 4: Why is number formatting useful?
Answer: It helps show numbers clearly and neatly.

---

## 6. Dates

### Question 1: How do you create a date object in JavaScript?
Answer: By writing `new Date()`.

### Question 2: How can you get the current year from a `Date` object?
Answer: By using `getFullYear()`.

### Question 3: Why are date methods important in real projects?
Answer: They help with time, schedules, age, deadlines, and showing dates to users.

---

## 7. Arrays

### Question 1: What is an array?
Answer: An array is a list of values.

### Question 2: How do you access the first element of an array?
Answer: By using index `0`, like `arr[0]`.

### Question 3: What does the `length` property tell you?
Answer: It tells you how many items are in the array.

### Question 4: What does `Array.from()` do?
Answer: It creates an array from another value like a string.

### Question 5: What does `Array.isArray()` do?
Answer: It checks if a value is an array.

### Question 6: What is the difference between array length and array index?
Answer: Length is total number of items. Index is the position of one item.

---

## 8. Objects

### Question 1: What is an object in JavaScript?
Answer: An object stores data in key-value pairs.

### Question 2: What is the difference between dot notation and bracket notation?
Answer: Dot notation looks like `obj.name`. Bracket notation looks like `obj["name"]`.

### Question 3: When is bracket notation especially useful?
Answer: When the key has spaces or when the key comes from a variable.

### Question 4: What is an object method?
Answer: It is a function inside an object.

### Question 5: What is object destructuring?
Answer: It means taking values out of an object and storing them in variables.

### Question 6: Why is destructuring useful?
Answer: It makes code shorter and easier to read.

---

## 9. Functions

### Question 1: What is a function?
Answer: A function is a reusable block of code that does a task.

### Question 2: What is the difference between parameters and arguments?
Answer: Parameters are written in the function definition. Arguments are the real values passed to the function.

### Question 3: Why do we use `return` in a function?
Answer: We use `return` to send a value back.

### Question 4: Can functions accept arrays and objects as input?
Answer: Yes, functions can take arrays and objects as arguments.

### Question 5: Why are functions important in programming?
Answer: They help us reuse code and keep code organized.

---

## 10. Scope

### Question 1: What is scope in JavaScript?
Answer: Scope means where a variable can be used.

### Question 2: What is the difference between global scope and block scope?
Answer: Global scope can be used almost everywhere. Block scope works only inside a block like `{}`.

### Question 3: What is the difference between `var`, `let`, and `const`?
Answer: `var` is function-scoped. `let` and `const` are block-scoped. `const` cannot be reassigned.

### Question 4: Why is `let` usually better than `var`?
Answer: Because `let` is safer and works properly inside blocks.

### Question 5: What is lexical scope?
Answer: It means an inner function can use variables from its outer function.

---

## 11. this and Arrow Functions

### Question 1: What does `this` refer to in JavaScript?
Answer: `this` refers to the current context, often the object that is calling the function.

### Question 2: Why can `this` be confusing in regular functions?
Answer: Because its value can change depending on how the function is called.

### Question 3: What is an arrow function?
Answer: It is a shorter way to write a function.

### Question 4: What is one major difference between a regular function and an arrow function?
Answer: Arrow functions do not have their own `this` like regular functions do.

### Question 5: When should you be careful using arrow functions with `this`?
Answer: When you want `this` to point to an object method.

---

## 12. IIFE

### Question 1: What does IIFE stand for?
Answer: Immediately Invoked Function Expression.

### Question 2: Why do we use an IIFE?
Answer: To run code immediately.

### Question 3: How does an IIFE help avoid global scope pollution?
Answer: It keeps variables inside its own private function scope.

---

## 13. Execution Context and Call Stack

### Question 1: What is execution context?
Answer: It is the environment where JavaScript code runs.

### Question 2: What happens in the memory creation phase?
Answer: JavaScript sets up memory for variables and functions.

### Question 3: What happens in the execution phase?
Answer: JavaScript runs the code line by line.

### Question 4: What is the call stack?
Answer: It is the place where JavaScript keeps track of function calls.

### Question 5: Why is understanding the call stack useful?
Answer: It helps us understand which function runs first and how errors happen.

---

## 14. Control Flow

### Question 1: What is control flow?
Answer: Control flow means the order in which code runs.

### Question 2: When do we use `if...else`?
Answer: We use it when we want different code to run for different conditions.

### Question 3: Why are conditions important in programs?
Answer: They help programs make decisions.

### Question 4: What is the difference between a true condition and a false condition?
Answer: If a condition is true, one block runs. If it is false, another block runs or nothing runs.

---

## 15. Loops

### Question 1: What is a loop?
Answer: A loop repeats code again and again.

### Question 2: When would you use a `for` loop?
Answer: When you know how many times you want to repeat something.

### Question 3: When would you use a `while` loop?
Answer: When you want to repeat as long as a condition stays true.

### Question 4: What is the difference between `while` and `do...while`?
Answer: `while` checks first. `do...while` runs once first, then checks.

### Question 5: Why are loops useful?
Answer: They save time and reduce repeated code.

---

## 16. for...of, for...in, and forEach

### Question 1: What does `for...of` loop over?
Answer: It loops over values in arrays, strings, and maps.

### Question 2: What does `for...in` loop over?
Answer: It loops over keys or property names.

### Question 3: Why is `for...of` better for arrays than `for...in` in many cases?
Answer: Because it gives the actual values directly.

### Question 4: What is `forEach()` used for?
Answer: It is used to run a function on every item in an array.

### Question 5: What values can a `forEach()` callback receive?
Answer: It can receive the item, the index, and the full array.

### Question 6: Can `forEach()` directly return a new array result?
Answer: No, it does not return a new transformed array.

---

## 17. map, filter, and reduce

### Question 1: What does `map()` do?
Answer: It creates a new array by changing each item.

### Question 2: What does `filter()` do?
Answer: It creates a new array with only the items that match a condition.

### Question 3: What does `reduce()` do?
Answer: It combines many values into one final value.

### Question 4: What is the main difference between `forEach()` and `map()`?
Answer: `forEach()` is for looping. `map()` gives back a new array.

### Question 5: What is the main difference between `map()` and `filter()`?
Answer: `map()` changes items. `filter()` selects items.

### Question 6: Why is `reduce()` useful for totals like shopping cart price?
Answer: Because it can keep adding values and give one total at the end.

### Question 7: What does chaining methods mean?
Answer: It means using one method after another, like `map().filter()`.

---

## 18. Arrays of Objects

### Question 1: Why are arrays of objects common in JavaScript?
Answer: Because real data is often stored as many objects in one list.

### Question 2: How can `forEach()` help with arrays of objects?
Answer: It helps us loop through each object one by one.

### Question 3: How can `filter()` help with arrays of objects?
Answer: It helps us choose only the objects we want.

### Question 4: How can `map()` help with arrays of objects?
Answer: It helps us create a new array from selected object values.

---

## Quick Revision Method

1. Read one question.
2. Cover the answer with your hand.
3. Try to answer aloud.
4. Check the answer.
5. Repeat weak questions again.
