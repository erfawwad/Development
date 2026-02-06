Here are 15 interview questions based on the "Control flow in javascript in 1 shot" lecture, along with their answers and relevant timestamps:

Question: What is the primary purpose of control flow in JavaScript, and when would you typically use it? (2:30)
Answer: Control flow allows you to control the execution of your program, determining which parts of the code run and under what conditions. It's typically used for scenarios like user authentication (e.g., if a user is logged in, show different content) or handling different states in an application.

Question: Explain the difference between == (loose equality) and === (strict equality) in JavaScript. (6:56)
Answer:

== (loose equality) checks only for value equality, attempting type coercion if the operands are of different types.
=== (strict equality) checks for both value and type equality, meaning no type coercion is performed. If the types are different, it will always return false.
Question: In an if statement, if the condition evaluates to false, what happens to the code inside its curly braces? (3:31)
Answer: If the condition in an if statement evaluates to false, the code inside its curly braces (its scope) will not execute.

Question: Describe the concept of scope in JavaScript, specifically how var, let, and const keywords behave within if-else blocks. (12:50)
Answer: Scope refers to the accessibility of variables.

var is function-scoped (or globally scoped if declared outside a function), meaning a var variable declared within an if-else block can be accessed outside that block, which is generally undesirable.
let and const are block-scoped, meaning they are only accessible within the curly braces ({}) where they are defined. This prevents unintended side effects and is the recommended practice.
Question: What is an "implicit scope" or "short-hand notation" in if statements, and why is it generally discouraged? (15:31)
Answer: An implicit scope in if statements allows a single line of code to be executed without using curly braces. It's generally discouraged because it makes the code less readable and can lead to errors if multiple lines are added without converting to an explicit block, as only the first line will be executed conditionally.

Question: When would you prefer to use an else if statement over separate if statements? (10:22)
Answer: You prefer else if when you have multiple, mutually exclusive conditions that depend on each other. If one condition is true, the subsequent else if blocks are not checked, ensuring only one path is executed. Separate if statements would check all conditions independently, which might lead to multiple blocks executing when only one is desired.

Question: Explain the purpose of the logical AND operator (&&) in control flow. Provide a real-world example. (20:59)
Answer: The logical AND operator (&&) requires all conditions connected by it to be true for the entire expression to evaluate to true and the code block to execute.

Example: if (isLoggedIn && hasPermission && hasActiveSubscription) – all three must be true for the user to access a premium feature.
Question: Explain the purpose of the logical OR operator (||) in control flow. Provide a real-world example. (22:18)
Answer: The logical OR operator (||) requires at least one of the conditions connected by it to be true for the entire expression to evaluate to true and the code block to execute.

Example: if (loggedInFromGoogle || loggedInFromEmail) – the user can log in if they used either Google or email.
Question: What is the primary advantage of using a switch statement compared to a series of if-else if statements? (24:34)
Answer: The primary advantage of a switch statement is improved readability and organization when you need to compare a single expression against multiple possible fixed values (cases). It often results in cleaner code than long if-else if chains for such scenarios.

Question: What is the role of the break keyword within a switch statement, and what happens if it's omitted? (27:46)
Answer: The break keyword terminates the switch statement after a matching case is executed. If break is omitted, the control flow will "fall through" to the next case (and any subsequent cases) and execute their code blocks, regardless of whether their conditions match, until a break is encountered or the switch block ends.

Question: Can a switch statement compare string values, or is it limited to numbers? (28:36)
Answer: Yes, a switch statement can compare string values just like it compares numbers. You simply place the string literal within the case statement.

Question: Define what a "falsy" value is in JavaScript. List at least five common falsy values. (33:09)
Answer: A falsy value is a value that is considered false when evaluated in a boolean context, even if it's not explicitly the boolean false.

Common falsy values include: false, 0, "" (empty string), null, undefined, NaN.
Question: Define what a "truthy" value is in JavaScript. List at least five common truthy values that might surprise some developers. (35:28)
Answer: A truthy value is any value that is considered true when evaluated in a boolean context, even if it's not explicitly the boolean true.

Common surprising truthy values include: "0" (string containing zero), "false" (string containing "false"), " " (string with a space), [] (empty array), {} (empty object), function(){} (empty function).
Question: How do you correctly check if an array is empty in JavaScript, without relying on its truthiness? (37:07)
Answer: To correctly check if an array is empty, you should check its length property and compare it to 0.

Example: if (myArray.length === 0)
Question: How do you correctly check if an object is empty in JavaScript, without relying on its truthiness? (38:04)
Answer: To correctly check if an object is empty, you can use Object.keys() to get an array of its own enumerable property names, and then check the length of that array.

Example: if (Object.keys(myObject).length === 0)


##################################################