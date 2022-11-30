'use strict';

const bigint = 111111111111111111566666666666666666666666666666666n;

const sameBigint = BigInt(111111111111111111566666666666666666666666666666666);

console.log(typeof bigint);
console.log(sameBigint);

// console.log(5n + 1); // error
// console.log(Math.round(5n)); // error
console.log(1n + 2n);
console.log(5n / 2n);
console.log(2n > 5);
console.log(2n == 2);
console.log(2n === 2);

let otherBigint = 1n;
let number = 2;
console.log(otherBigint + BigInt(number));
console.log(Number(otherBigint) + number);
