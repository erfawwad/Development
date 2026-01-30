Here are 5 interview questions based on the video, along with detailed answers:

What is an Immediately Invoked Function Expression (IIFE) in JavaScript, and what are its primary purposes?

An IIFE is a JavaScript function that runs as soon as it is defined (0:05-0:16).
Primary purposes include:
Establishing immediate execution: This is useful for tasks like database connections that need to start as soon as an application launches (0:26-0:34).
Preventing global scope pollution: IIFEs create their own scope, isolating variables and declarations within them, preventing them from interfering with or being polluted by variables in the global scope (0:36-1:01, 1:40-1:46, 3:15-3:25).
Explain the basic syntax of an IIFE and how it differs from a regular function definition and call.

Basic syntax: An IIFE is created by wrapping a function definition in parentheses () and then immediately calling it with another set of parentheses () (2:25-2:33, 2:47-3:04).
Difference from regular function: Unlike a regular function, which requires a separate call after its definition (e.g., functionName();), an IIFE combines the definition and execution into a single, immediate step (1:08-1:37, 2:56-3:04). The surrounding parentheses () make the function an expression, allowing it to be immediately invoked.
The video mentions a common error when writing multiple IIFEs in a file. What is this error and how is it resolved?

The error: When writing multiple IIFEs consecutively in a file, a common problem is that the second IIFE might not execute, or an error occurs (3:57-4:00, 4:27-4:29, 6:55-7:02). This happens because JavaScript's automatic semicolon insertion (ASI) doesn't always apply as expected in this specific scenario, leading to the interpreter not knowing where the first IIFE ends.
Resolution: The error is resolved by explicitly placing a semicolon ; at the end of the first IIFE (4:43-5:00, 5:24-5:32). This explicitly tells JavaScript to terminate the first IIFE before the next one is processed.
Can IIFEs accept parameters? If so, demonstrate how.

Yes, IIFEs can accept parameters (5:40-5:45).

Demonstration: You can pass arguments to an IIFE by placing them within the second set of parentheses () that immediately invokes the function. The IIFE's function definition should also include parameters to receive these arguments (5:51-6:15).

Example from video:
javascript
( (name) => { // 'name' is the parameter
console.log(DB Connect ${name});
} )("Hitesh"); // "Hitesh" is the argument passed

This would output "DB Connect Hitesh" (6:20-6:23).

What is the difference between a "named IIFE" and a "simple IIFE" (or unnamed IIFE)?

Simple IIFE (Unnamed IIFE): This is the most common form, where the function inside the IIFE does not have a name (6:38-6:40). It's primarily used for its immediate execution and scope isolation.

Example from video: javascript ( () => { console.log("DB Connect 2"); } )();
Named IIFE: This is an IIFE where the function itself is given a name (6:26-6:36). While the function is named, its primary purpose is still immediate invocation and scope isolation, not to be called by its name later. The name can be useful for debugging purposes (e.g., in stack traces).

Example from video: javascript ( function chai() { // 'chai' is the name of the function console.log("DB Connect"); } )();


