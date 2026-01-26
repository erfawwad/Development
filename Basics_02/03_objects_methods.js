// Objects Methods in JavaScript

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
};
// Method to display car info
car.displayInfo = function() {
    console.log(`Car Info: ${this.year} ${this.make} ${this.model} in ${this.color}`);
};  

// Method to update car color
car.updateColor = function(newColor) {
    this.color = newColor;
    console.log(`Car color updated to: ${this.color}`);
};

// Calling the methods
car.displayInfo();

car.updateColor('red');
car.displayInfo();  

// Method to check if the car is vintage (older than 25 years)
car.isVintage = function(currentYear) {
    return (currentYear - this.year) > 25;
};

// Checking if the car is vintage
let currentYear = 2024;
console.log(`Is the car vintage? ${car.isVintage(currentYear)}`); // Output: false


// Method to get a summary of the car
car.getSummary = function() {
    return `${this.make} ${this.model} (${this.year}) - Color: ${this.color}`;
};

console.log(car.getSummary()); // Output: Toyota Camry (2020) - Color: red


// Method to check property existence
car.hasProperty = function(prop) {
    return this.hasOwnProperty(prop);
};

console.log(`Does the car have 'model' property? ${car.hasProperty('model')}`); // Output: true
console.log(`Does the car have 'owner' property? ${car.hasProperty('owner')}`); // Output: false   

// Method to list all properties of the car
car.listProperties = function() {
    return Object.keys(this);
};

console.log('Car Properties:', car.listProperties());

// Output: Car Properties: [ 'make', 'model', 'year', 'color', 'displayInfo', 'updateColor', 'isVintage', 'getSummary', 'hasProperty', 'listProperties' ]

// End of Objects Methods in JavaScript