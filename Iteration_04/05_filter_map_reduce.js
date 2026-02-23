//The video provides various JavaScript code snippets to demonstrate forEach, filter, map, and reduce methods.

//Here are the code snippets from the lecture:

//forEach loop example (0:40-2:32):
//javascript
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((item) => {
console.log(item);
});

// Attempting to store return value from forEach
const values = coding.forEach((item) => {
// console.log(item);
return item; // This return does not store value in 'values'
});
console.log(values); // Output: undefined

//filter method for numbers (3:43-5:24):javascript

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 5);
console.log(newNums); // Output: [6, 7, 8, 9, 10]

//filter with explicit return (6:12-7:48):javascript
const myNums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums5 = myNums5.filter((num) => {
return num > 5;
});
console.log(newNums5); // Output: [6, 7, 8, 9, 10]

// Implementing filter logic with forEach (8:21-9:40):javascript


const myNums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];

myNums4.forEach((num) => {
if (num > 4) {
newArr.push(num);
}
});
console.log(newArr); // Output: [5, 6, 7, 8, 9, 10]

//filter on an array of objects (books) (11:15-13:06):javascript


const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');
console.log(userBooks);
/*
Output:
[
{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
]
*/

// Chaining filter methods (14:00-17:15): javascript

const books2 = [
// ... (books array as above)
];

userBooks = books2.filter((bk) => {
return bk.publish >= 2000 && bk.genre === 'Science';
});
console.log(userBooks);
/*
Output:
[
{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }
]
*/

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History');
console.log(userBooks);
/*
Output:
[
{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
]
*/

//map method basic usage (18:00-19:19):javascript
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums4 = myNumbers.map((num) => num + 10);
console.log(newNums4);
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// map with explicit return (19:40-20:07):javascript

const myNumbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum3s = myNumbers3.map((num) => {
return num + 10;
});
console.log(newNums3);
// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//Chaining map and filter (21:00-24:16):javascript
const myNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums2 = myNumbers2
.map((num) => num * 10) // First map: multiply by 10
.map((num) => num + 1) // Second map: add 1
.filter((num) => num >= 40); // Filter: keep numbers greater than or equal to 40

console.log(newNums2);
// Output: [41, 51, 61, 71, 81, 91, 101]

//reduce method for sum of numbers (function syntax) (28:30-31:50):javascript
const myNums6 = [1, 2, 3];

const myTotal = myNums6.reduce(function (acc, currval) {
console.log(`acc: ${acc} and currval: ${currval}`);
return acc + currval;
}, 0); // Initial value for accumulator is 0

console.log(myTotal);
/*
Output:
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

//reduce method for sum of numbers (arrow function syntax) (32:50-34:10):javascript
const myNums1 = [1, 2, 3];

const myTotal1 = myNums1.reduce((acc, currval) => acc + currval, 0); // Initial value for accumulator is 0

console.log(myTotal1); // Output: 6

//reduce method for shopping cart total (34:30-37:40):javascript
const shoppingCart = [
{
itemName: "js course",
price: 2999,
},
{
itemName: "py course",
price: 999,
},
{
itemName: "mobile dev course",
price: 5999,
},
{
itemName: "data science course",
price: 12999,
},
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22996