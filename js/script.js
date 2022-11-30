'use strict';

const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset() / 60);
console.log(now.getTime());

console.log(now.setHours(18));
console.log(now);
