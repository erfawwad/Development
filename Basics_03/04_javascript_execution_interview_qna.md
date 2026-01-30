Here are 10 interview questions with detailed answers based on the video lecture:

Question: What are the two main phases in which JavaScript executes code? Explain each phase.

Answer: JavaScript executes code in two main phases:
Memory Creation Phase (or Creation Phase/Memory Phase) (5:44-6:08): In this initial phase, JavaScript scans the entire code. It identifies all variable declarations (e.g., var, let, const) and function declarations. Memory is allocated for these, and variables are typically initialized with undefined, while full function definitions are stored in memory. No actual code execution or calculation occurs here.
Execution Phase (6:23-6:39): After the memory phase, JavaScript re-scans the code line by line. During this phase, actual values are assigned to variables, mathematical operations are performed, and function calls are executed.
Question: What is an "Execution Context" in JavaScript?

Answer: An "Execution Context" is an abstract concept that describes the environment in which JavaScript code is evaluated and executed (2:28-2:35). It's essentially the current scope where the code is running. The video details that the entire code execution process is divided into two main parts: the Execution Context itself and the Call Stack (1:20-1:37).
Question: Name the different types of Execution Contexts discussed in the video. Which one is always present?

Answer: The video discusses three types of Execution Contexts (4:11-5:26):
Global Execution Context (GEC): This is the default and always present execution context. It forms the base for all JavaScript code execution (2:52-3:05, 4:20-4:31).
Function Execution Context (FEC): A new FEC is created every time a function is called (4:39-4:49, 11:51-12:10).
Eval Execution Context: This context is created when code is executed via the eval() function (5:00-5:18). The video mentions it as less common and not strictly necessary for most basic understandings.
Question: How does the this keyword relate to the Global Execution Context in a browser environment?

Answer: In the Global Execution Context, the this keyword refers to the global object (3:07-3:14). In a browser environment, the global object is the window object. So, in a browser, this inside the Global Execution Context will point to window (3:32-3:36). This is an important distinction, as the value of this can differ in other JavaScript environments like Node.js.
Question: Explain what happens when a function is called in JavaScript, in terms of Execution Contexts.

Answer: When a function is called, a brand new Function Execution Context (FEC) is created (11:51-12:10). This new FEC has its own "New Variable Environment" and an "Execution Thread" (12:24-12:44), essentially creating a sandboxed environment for that function. This new FEC then goes through its own two phases: first the Memory Creation Phase for its local variables and parameters, and then the Execution Phase where its code is run and values are assigned/calculated (12:55-13:16). Once the function completes execution and returns a value, its Function Execution Context is popped off the Call Stack and deleted (16:16-16:31).
Question: What is the Call Stack, and what principle does it follow?

Answer: The Call Stack is a data structure that keeps track of all the functions currently being executed or waiting to be executed by the JavaScript engine (18:36-18:45). It operates on a Last-In, First-Out (LIFO) principle (20:39-20:47). This means the last function that was pushed onto the stack is the first one to be executed and popped off.
Question: Describe how functions are added to and removed from the Call Stack, especially in nested calls.

Answer:
When JavaScript code starts running, the Global Execution Context is pushed onto the bottom of the Call Stack (18:47-18:57).
Whenever a function is called, its Function Execution Context is pushed onto the top of the Call Stack (19:03-19:11).
If a function calls another function (nested calls), the new function's context is pushed on top of the current one (20:12-20:29).
Once a function completes its execution (i.e., it returns a value or finishes all its statements), its context is popped off the top of the Call Stack (19:12-19:14, 24:56-25:05). The execution then resumes with the context that was immediately below it on the stack. This LIFO behavior means the innermost function in a nested call is executed and removed first.
Question: How does the Memory Creation Phase handle variables versus functions during the initial scan?

Answer: During the Memory Creation Phase, for variables declared using var, let, or const, JavaScript allocates memory and initializes them with the value undefined (8:59-9:27, 10:25-10:46). For functions, instead of undefined, the entire function definition (the code block) is stored in memory (9:33-9:56). This distinction is why you can call a function before its declaration (due to hoisting), but variables declared with let or const will throw a temporal dead zone error if accessed before their declaration due to how undefined is handled differently.
Question: What happens to a Function Execution Context after the function has finished executing?

Answer: Once a function has finished executing all its code and potentially returned a value, its Function Execution Context is deleted from the Call Stack (16:16-16:31). This cleanup is crucial for memory management, as all variables and resources local to that function are then removed from memory.
Question: How can you visually inspect the Call Stack and Execution Contexts in a browser?

Answer: You can visually inspect the Call Stack and Execution Contexts using the browser's developer tools, specifically in Google Chrome (21:05-21:16).
Right-click on a webpage and select "Inspect" or "Inspect Element."
Navigate to the "Sources" tab (21:12-21:17).
You can create "Snippets" (21:19-21:21) to write and run JavaScript code directly.
By setting breakpoints (22:53-22:59) on lines of code, you can pause execution.
When execution is paused, the "Call Stack" panel (21:34-21:37, 23:03-23:06) will display the active Execution Contexts, showing which functions are currently on the stack and in what order, demonstrating the LIFO principle as you step through the code.