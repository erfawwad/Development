// Stack and Heap Memory in JavaScript
// In JavaScript, memory management is handled through two main areas: the stack and the heap.


// 1. Stack Memory:

// The stack is used for static memory allocation and function call management. It stores primitive data types (like numbers, strings, booleans) and references to objects. The stack operates in a last-in, first-out (LIFO) manner, meaning the last item added is the first one to be removed. This makes stack memory allocation very fast and efficient.

function stackExample() {
    let a = 10; // 'a' is stored in stack memory
    let b = 20; // 'b' is stored in stack memory
    let sum = a + b;    // 'sum' is also stored in stack memory
    return sum;
}

console.log("Stack Example Result:", stackExample()); // Output: 30


// 2. Heap Memory:

// The heap is used for dynamic memory allocation. It stores objects, arrays, and functions. Unlike the stack, the heap does not have a strict order for memory allocation and deallocation, which allows for more complex data structures. However, this also means that accessing heap memory is generally slower than stack memory.

function heapExample() {
    let obj = { name: "John", age: 30 }; // 'obj' is stored in heap memory
    let arr = [1, 2, 3, 4, 5]; // 'arr' is stored in heap memory
    return { obj, arr };
}

console.log("Heap Example Result:", heapExample()); // Output: { obj: { name: 'John', age: 30 }, arr: [ 1, 2, 3, 4, 5 ]  }

// Summary:
// - Stack memory is used for primitive data types and function calls, providing fast access and efficient memory management.
// - Heap memory is used for objects, arrays, and functions, allowing for dynamic memory allocation but with slower access times.
// Understanding the difference between stack and heap memory is crucial for optimizing performance and managing resources effectively in JavaScript applications.

