// Object Destructuring in JavaScript

// Creating an object

let laptop = {
    brand: 'Dell',
    model: 'XPS 13',
    year: 2021,
    specifications: {
        processor: 'Intel i7',
        ram: '16GB',
        storage: '512GB SSD'
    },
    colors: ['Silver', 'Black', 'White']
};

// Destructuring the object
let { brand, model, year, specifications, colors } = laptop;

console.log(brand); // Output: Dell
console.log(model); // Output: XPS 13
console.log(year); // Output: 2021
console.log(specifications); // Output: { processor: 'Intel i7', ram: '16GB', storage: '512GB SSD' }
console.log(colors); // Output: [ 'Silver', 'Black', 'White' ]

// Destructuring nested object
let { processor, ram, storage } = specifications;

console.log(processor); // Output: Intel i7
console.log(ram); // Output: 16GB
console.log(storage); // Output: 512GB SSD

// Destructuring with new variable names
let { brand: laptopBrand, model: laptopModel } = laptop;

console.log(laptopBrand); // Output: Dell
console.log(laptopModel); // Output: XPS 13

// Destructuring with default values
let { weight = '1.2kg', batteryLife = '10 hours' } = laptop;
console.log(weight); // Output: 1.2kg
console.log(batteryLife); // Output: 10 hours

// Function parameter destructuring
function displayLaptopInfo({ brand, model, year, specifications: { processor, ram, storage }, colors }) {
    console.log(`Laptop Info: ${brand} ${model} (${year})`);
    console.log(`Specifications: Processor - ${processor}, RAM - ${ram}, Storage - ${storage}`);
    console.log(`Available Colors: ${colors.join(', ')}`);
}

// Calling the function with destructured object
displayLaptopInfo(laptop);

// Output:
// Laptop Info: Dell XPS 13 (2021)
// Specifications: Processor - Intel i7, RAM - 16GB, Storage - 512GB SSD
// Available Colors: Silver, Black, White

// Destructuring in loops
let laptops = [
    {
        brand: 'Apple',
        model: 'MacBook Air',
        year: 2020
    },
    {
        brand: 'HP',
        model: 'Spectre x360',
        year: 2021
    },
    {
        brand: 'Lenovo',
        model: 'ThinkPad X1 Carbon',
        year: 2019
    }
];

for (let { brand, model, year } of laptops) {
    console.log(`${brand} ${model} (${year})`);
}

// Output:
// Apple MacBook Air (2020)
// HP Spectre x360 (2021)
// Lenovo ThinkPad X1 Carbon (2019)


// JSON Destructuring

let jsonString = `{
    "brand": "Asus",
    "model": "ZenBook 14",
    "year": 2022,
    "specifications": {
        "processor": "AMD Ryzen 7",
        "ram": "16GB",
        "storage": "1TB SSD"
    },
    "colors": ["Blue", "Gray"]
}`; 

let jsonObject = JSON.parse(jsonString);

let { brand: jsonBrand, model: jsonModel, year: jsonYear, specifications: { processor: jsonProcessor, ram: jsonRam, storage: jsonStorage }, colors: jsonColors } = jsonObject;

console.log(jsonBrand); // Output: Asus
console.log(jsonModel); // Output: ZenBook 14
console.log(jsonYear); // Output: 2022
console.log(jsonProcessor); // Output: AMD Ryzen 7
console.log(jsonRam); // Output: 16GB
console.log(jsonStorage); // Output: 1TB SSD
console.log(jsonColors); // Output: [ 'Blue', 'Gray' ]


// This demonstrates how to destructure objects in JavaScript, including nested objects, renaming variables, setting default values, using destructuring in function parameters and loops, and handling JSON data.  

// JSON API Response Destructuring

let apiResponse = `{

    "status": "success",
    "data": {
        "user": {
            "id": 101,
            "name": "John Doe",
            "email": "test@gmail.com",
            "roles": ["admin", "editor"]
        },
        "token": "abcdef123456"
    },
    "message": "User authenticated successfully"
}`;

let responseObject = JSON.parse(apiResponse);

let { status, data: { user: { id: userId, name: userName, email: userEmail, roles: userRoles }, token }, message } = responseObject;


console.log(status); // Output: success
console.log(userId); // Output: 101
console.log(userName); // Output: John Doe
console.log(userEmail); // Output:
console.log(userRoles); // Output: [ 'admin', 'editor' ]
console.log(token); // Output: abcdef123456
console.log(message); // Output: User authenticated successfully

// This example shows how to destructure a complex JSON API response to extract relevant information easily.

