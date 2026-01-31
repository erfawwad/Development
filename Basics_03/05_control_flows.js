// Control Flows in JavaScript

// 1. If-Else Statement
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
// Output: You are an adult.

// 2. Else If Statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Output: Grade: B

// 3. Switch Statement  

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}   

// Output: Wednesday

// 4. Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount: " + (discount * 100) + "%");

// Output: Discount: 10%

// 5. Try-Catch Statement
try {
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }
    console.log("Result: " + result);
} catch (error) {
    console.log("Error: " + error.message);
}

// Output: Error: Division by zero is not allowed.


// 6. For Loop with Break and Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip number 5
    }
    if (i === 8) {
        break; // Stop the loop at number 8
    }

    console.log(i);
}
// Output: 1 2 3 4 6 7

// 7. While Loop
let count = 1;

while (count <= 5) {
    console.log("Count: " + count);
    count++;
}

// Output: Count: 1 Count: 2 Count: 3 Count: 4 Count: 5

// 8. Do-While Loop
let num = 1;

do {
    console.log("Number: " + num);
    num++;
}

while (num <= 5);

// Output: Number: 1 Number: 2 Number: 3 Number: 4 Number: 5

// These examples demonstrate various control flow statements in JavaScript, allowing you to manage the execution of code based on conditions and loops.

