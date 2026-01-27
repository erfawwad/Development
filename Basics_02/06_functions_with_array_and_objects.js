// Functions with Arrays and Objects

// Function to get the names of all people in an array of objects
function getNames(people) {
    return people.map(person => person.name);
}

// Function to find a person by age
function findPersonByAge(people, age) {
    return people.find(person => person.age === age);
}

// Function to filter people by a minimum age
function filterByMinAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

// Function to calculate the average age of people
function calculateAverageAge(people) {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
}

// Sample array of objects
const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 34 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 40 }
];
console.log(getNames(people)); // Output: ['Alice', 'Bob', 'Charlie', 'David']
console.log(findPersonByAge(people, 34)); // Output: { name: 'Bob', age: 34 }
console.log(filterByMinAge(people, 30)); 
// Output: [ { name: 'Bob', age: 34 }, { name: 'David', age: 40 } ]
console.log(calculateAverageAge(people)); // Output: 315 / 4 = 31.255

// Function to add a new person to the array
function addPerson(people, name, age) {
    people.push({ name, age });
}

addPerson(people, 'Eve', 29);
console.log(people); 
// Output: [ { name: 'Alice', age: 28 }, { name: 'Bob', age: 34 }, { name: 'Charlie', age: 22 }, { name: 'David', age: 40 }, { name: 'Eve', age: 29 } ]

// Function to update a person's age by name

function updatePersonAge(people, name, newAge) {
    const person = people.find(person => person.name === name); 

    if (person) {
        person.age = newAge;
    }
}

updatePersonAge(people, 'Alice', 30);
console.log(people); 
// Output: [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 34 }, { name: 'Charlie', age: 22 }, { name: 'David', age: 40 }, { name: 'Eve', age: 29 } ]

// Function to remove a person by name
function removePersonByName(people, name) {
    const index = people.findIndex(person => person.name === name);
    if (index !== -1) {
        people.splice(index, 1);
    }
}

removePersonByName(people, 'Charlie');
console.log(people); 
// Output: [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 34 }, { name: 'David', age: 40 }, { name: 'Eve', age: 29 } ]

// Function to sort people by age
function sortByAge(people) {
    return people.slice().sort((a, b) => a.age - b.age);
}


console.log(sortByAge(people)); 
// Output: [ { name: 'Eve', age: 29 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 34 }, { name: 'David', age: 40 } ]

// Function to group people by age range
function groupByAgeRange(people) {
    return people.reduce((groups, person) => {  
        const range = Math.floor(person.age / 10) * 10;
        if (!groups[range]) {
            groups[range] = [];
        }
        groups[range].push(person);
        return groups;
    }, {});

console.log(groupByAgeRange(people)); 
// Output: { '20': [ { name: 'Eve', age: 29 } ], '30': [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 34 } ], '40': [ { name: 'David', age: 40 } ] }

    return groups;
}   

// Example usage of groupByAgeRange

console.log(groupByAgeRange(people)); 
// Output: { '20': [ { name: 'Eve', age: 29 } ], '30': [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 34 } ], '40': [ { name: 'David', age: 40 } ] }

// Function to merge two arrays of people, avoiding duplicates by name
function mergePeopleArrays(arr1, arr2) {
    const merged = [...arr1];
    arr2.forEach(person2 => {
        if (!merged.some(person1 => person1.name === person2.name)) {
            merged.push(person2);
        }

    });
    return merged;
}

const morePeople = [
    { name: 'Frank', age: 33 },
    { name: 'Eve', age: 29 }
];  
console.log(mergePeopleArrays(people, morePeople)); 
// Output: [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 34 }, { name: 'David', age: 40 }, { name: 'Eve', age: 29 }, { name: 'Frank', age: 33 } ]

// Function to get names of people older than a certain age
function getNamesOlderThan(people, age) {
    return people.filter(person => person.age > age).map(person => person.name);
}

console.log(getNamesOlderThan(people, 30)); 
// Output: [ 'Bob', 'David' ]