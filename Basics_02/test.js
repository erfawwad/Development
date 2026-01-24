let A = 2;
let B = A++;
let C = ++A;
let D = B++;
let E = B;
console.log('A:', A); // Output: A: 3
console.log('B:', B); // Output: B: 2
console.log('C:', C); // Output: C: 4 // Output: C: 4
console.log('D:', D); // Output: D: 2
console.log('E:', E); // Output: E: 2